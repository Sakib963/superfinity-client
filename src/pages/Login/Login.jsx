import { Link, useLocation, useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useTitle('Login | Superfinity');

  // Event Handler for Login
  const handleLoginForm = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // Error Handling
    /* 
      if email & password is empty or not
      if password length is less than 6 or not
      check errors
    */
    if(email && password){
      if(password.length > 5){
        signIn(email, password)
        .then(res => {
          const user = res.user;
          console.log(user);
          Swal.fire({
            title: "Success!",
            text: "User Logged In Successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          // Navigating to Old State
          navigate(from, { replace: true });
          form.reset();
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, "Error Message:", errorMessage);
            if (errorCode === "auth/wrong-password") {
              Swal.fire({
                title: "Error!",
                text: "Wrong Password. Please Try with correct password.",
                icon: "error",
                confirmButtonText: "Got It",
              });
            }
            if (errorCode === "auth/user-not-found") {
              Swal.fire({
                title: "Error!",
                text: "User not found. Please try with valid Credential.",
                icon: "error",
                confirmButtonText: "Got It",
              });
            }
        })
      }
      else{
        Swal.fire({
          title: "Error!",
          text: "Password Must be Greater or Equal Than 6 Characters.",
          icon: "error",
          confirmButtonText: "Got It",
        });
      }
    }
    else{
      Swal.fire({
        title: "Error!",
        text: "You Must Provide Email And Password.",
        icon: "error",
        confirmButtonText: "Got It",
      });
    }
  }

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(res => {
      const user = console.log(res.user);
      console.log(user)
      Swal.fire({
        title: "Success!",
        text: "User Logged In Successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    })
    .catch(err => {
      Swal.fire({
        title: "Error!",
        text: "Something Went Wrong.",
        icon: "error",
        confirmButtonText: "Got It",
      });
      console.log(err)
    })
  }


  return (
    <div className="login py-20 px-10 text-white">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div className="space-y-4">
            <h2 className="lg:text-5xl text-3xl font-bold lg:w-3/4">
              Start Your <span className="text-[#F0141E]">Journey</span> With
              Superfinity.
            </h2>
            <p className="lg:w-3/4">
              Discover a World of Marvelous Adventures, Collect Iconic Action
              Figures, and Dive into the Ultimate Superhero Experience.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="lg:text-3xl text-2xl font-bold text-center">
            Please <span className="text-[#F0141E]">Login</span>
          </h3>
          <form onSubmit={handleLoginForm} className="border-2 border-[#F0141E] p-5 rounded-md lg:w-3/4 mx-auto space-y-4">
            <div className="space-y-1">
              <label>Your Email <span className="text-[#F0141E]">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>Your Password <span className="text-[#F0141E]">*</span></label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 hover:scale-105 hover:ease-in hover:duration-200 hover:transition cursor-pointer rounded-md font-semibold w-full"
            />
            <div>
              New to Superfinity? Please{" "}
              <Link to="/register" className="text-[#F0141E] underline">Register</Link>
            </div>
            <div className="line h-1"></div>
            <FcGoogle onClick={handleGoogleSignIn} className="border border-[#F0141E] text-5xl p-2 rounded-xl mx-auto hover:bg-white"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
