import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png"
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleSignOut=() =>{
    logOut()
    .then(result =>{
      console.log('user sign out',result);
    })
    .catch(error=>console.error(error))
    
  }

 
  return (
    <div className="border-b   ">
      <div className="navbar bg-base-100 justify-between my-3">
        <div className="navbar-start ">
          <div className="dropdown ">
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div>
                <div className="flex flex-col gap-6">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl  underline"
                            : "text-xl"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl"
                        }
                      >
                         Pricing Plans
                      </NavLink>
                    </li>
                    <li>
                    {
                     user ? <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>:''
                     }
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <div className=" w-20">
            <img src="https://i.ibb.co/2YNVVsP/edu-logo.jpg" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            <div>
              <div className=" gap-6">
                <ul className="flex gap-8">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : "text-xl "
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      Pricing Plans
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div>
            
          </div>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <NavLink className="btn btn-sm" to="/login">
            Login
          </NavLink> */}
          
        
          {
            user?.email ?<div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          
          <div className="w-10 rounded-full">
  
            {
              user.photoURL ? <img src={user.photoURL} /> : <img src={userDefaultPic}/>
            }

          </div>
          
          </label>

          
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button className="btn btn-sm btn-ghost">{user.displayName}</button>
            </li>
            <li>
            <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
            </li>
          </ul>
            </div>
            :<Link to="/login">
            <button className="btn btn-sm">Login</button>
            </Link>
          }

          
        </div>
        <div className="hidden lg:flex">
          {
              user ? <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>:''
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

