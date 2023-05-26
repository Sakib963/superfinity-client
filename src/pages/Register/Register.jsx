import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // Setting Title
  useTitle('Register | Superfinity');
  
  const { createUser, updateUserInfo } = useContext(AuthContext);

  // Event Handler for Registration
  const handleRegistrationForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photo.value;


    // Handling Field to show Error
    if (email && password) {
      if (password.length > 5) {
        createUser(email, password)
        .then(res => {
          const createdUser = res.user;
          // If user is created, then we checking whether user inputted any name or photo!!
          // if yes, then update user info
          if(name || photoURL){
            updateUserInfo(name, photoURL)
            .then(() => console.log('Profile Updated'))
            .catch(error => console.log(error))
          }
          console.log(createdUser)
          Swal.fire({
            title: "Success!",
            text: "Account Created Successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
          form.reset();
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error:", errorCode, "Error Message:", errorMessage);
            if (errorCode === "auth/email-already-in-use"){
              Swal.fire({
                title: "Error!",
                text: "This Email Already In Use.",
                icon: "error",
                confirmButtonText: "Got It",
              });
            }
        })
      } else {
        Swal.fire({
          title: "Error!",
          text: "Password Must be Greater or Equal Than 6 Characters.",
          icon: "error",
          confirmButtonText: "Got It",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "You Must Provide Email And Password.",
        icon: "error",
        confirmButtonText: "Got It",
      });
    }
  };

  return (
    <div className="register py-20 px-10 text-white">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div className="space-y-4">
            <h2 className="lg:text-5xl text-3xl font-bold lg:w-3/4">
              <span className="text-[#F0141E]">Explore</span> With Superfinity.
            </h2>
            <p className="lg:w-3/4">
              Buy, Sell, and Discover Action Figure Toys, Collect Rare Comics,
              and Join a Thriving Community of Superfans.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="lg:text-3xl text-2xl font-bold text-center">
            Please <span className="text-[#F0141E]">Register</span>
          </h3>
          <form
            onSubmit={handleRegistrationForm}
            className="border-2 border-[#F0141E] p-5 rounded-md lg:w-3/4 mx-auto space-y-4"
          >
            <div className="space-y-1">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>
                Your Email <span className="text-[#F0141E]">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>
                Your Password <span className="text-[#F0141E]">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <div className="space-y-1">
              <label>Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="block p-3 w-full rounded-md text-black"
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 cursor-pointer hover:scale-105 hover:ease-in hover:duration-200 hover:transition rounded-md font-semibold w-full"
            />
            <div className="line h-1"></div>
            <div>
              Already Have an Acoount? Please{" "}
              <Link to="/login" className="text-[#F0141E] underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
