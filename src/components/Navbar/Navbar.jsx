import { getAuth } from "firebase/auth";
import { Link, NavLink } from "react-router";

import "../../App.css";
import app from "../../firebase/firebase.config";
import useAuth from "../../hooks/useAuth";
import Logo from "../Logo/Logo";

const auth = getAuth(app);

const Navbar = () => {
  const { user, logOut } = useAuth();

  {
    user && (
      <>
        <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
      </>
    );
  }

  // Logout handler
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed max-w-7xl mx-auto top-0 left-0 right-0 z-50 bg-white shadow-md rounded-xl my-4">
      <div className=" px-4 md:px-8 lg:px-20">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start flex items-center">
            {/* Dropdown for mobile */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content bg-white rounded-box text-black z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                {!user ? (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <NavLink to="/be-a-rider">Be A Rider</NavLink>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/myprofile">My Profile</NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-center flex justify-center p-2 btn-ghost bg-black font-semibold mt-6 text-white hover:bg-red-700"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 my-2">
              <Logo />
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="space-x-6">
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/coverage">Coverage</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/send-parcel">Send Parcel</NavLink>
              <NavLink to="/be-a-rider">Be A Rider</NavLink>

              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end hidden lg:flex items-center space-x-4">
            <ul className=" flex px-1 space-x-4">
              <li>{/* <NavLink className='' to="/">Home</NavLink> */}</li>
              {!user ? (
                <>
                  {/* <li><NavLink className="" to="/register">Register</NavLink></li> */}
                  <li>
                    <NavLink className="primary-btn1" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className="primary-btn" to="/be-a-rider">
                      Be A Rider
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/myprofile"
                      className="flex items-center text-center"
                    >
                      <div
                        className="tooltip tooltip-bottom"
                        data-tip={user.displayName || "User"}
                      >
                        <img
                          src={user.photoURL || "/default-avatar.png"}
                          referrerPolicy="no-referrer"
                          alt="User Avatar"
                          className="w-8 h-8 border-2 rounded-full object-cover cursor-pointer"
                        />
                      </div>
                      <span className="ml-2">My Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-ghost ml-8 bg-white font-semibold text-black hover:text-violet-600"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
