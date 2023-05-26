import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import userIcon from "../../../assets/images/avatar-icon.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    Swal.fire({
      title: "You Want to log Out?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Logged Out Successfully.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <div className="navbar text-white lg:px-10 lg:pt-8 lg:pb-4">
      <Tooltip id="my-tooltip" />
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all_toys"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/add_a_toy"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Add A Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my_toy"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <h3 className="bg-[#F0141E] px-3 py-2 uppercase text-white font-bold lg:text-3xl rounded-md">
          Superfinity
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:bg-[#F0141E] hover:text-white transition duration-300"
                  : "hover:bg-[#F0141E] hover:text-white transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all_toys"
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:bg-[#F0141E] hover:text-white transition duration-300"
                  : "hover:bg-[#F0141E] hover:text-white transition duration-300"
              }
            >
              All Toys
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add_a_toy"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link hover:bg-[#F0141E] hover:text-white transition duration-300"
                      : "hover:bg-[#F0141E] hover:text-white transition duration-300"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my_toy"
                  className={({ isActive }) =>
                    isActive
                      ? "active-link hover:bg-[#F0141E] hover:text-white transition duration-300"
                      : "hover:bg-[#F0141E] hover:text-white transition duration-300"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "active-link hover:bg-[#F0141E] hover:text-white transition duration-300"
                  : "hover:bg-[#F0141E] hover:text-white transition duration-300"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex space-x-3">
            {user?.photoURL ? (
              <div className="avatar placeholder">
                <div className="bg-[#ff4a22] text-neutral-content rounded-full w-12">
                  <img
                    src={user.photoURL}
                    alt="user photo"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      user.displayName ? user.displayName : "No Name Added"
                    }
                  />
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-[#ff4a22] text-neutral-content rounded-full w-12">
                  <img
                    src={userIcon}
                    alt=""
                    className="p-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      user.displayName ? user.displayName : "No Name Added"
                    }
                  />
                </div>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="bg-[#F0141E] lg:px-7 px-4 py-2 lg:py-3 rounded-md font-semibold hover:scale-105 hover:ease-in hover:duration-200 hover:transition"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-[#F0141E] lg:px-7 px-4 py-2 lg:py-3 rounded-md font-semibold hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
