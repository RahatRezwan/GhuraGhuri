import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import logo from "../../../logo1.png";

const Navbar = () => {
   const { user, logoutAUser } = useContext(AuthContext);

   /* logout */
   const handleLogout = () => {
      logoutAUser()
         .then(() => {})
         .catch((e) => console.log(e));
   };

   return (
      <div className="sticky top-0 z-20">
         <div className="navbar  absolute">
            <div className="w-[95vw] md:w-[90vw] lg:w-[85vw] bg-[rgba(17,17,17,0.53)] mx-auto p-4 rounded-xl">
               <div className="flex-1">
                  <Link className="text-xl">
                     <img src={logo} alt="" className="w-[100px]" />
                  </Link>
               </div>
               <div className="flex items-center">
                  <ul className="menu menu-horizontal p-0">
                     <li>
                        <Link className="hover:text-black text-warning" to="/">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link className="hover:text-black text-warning" to="/spots">
                           Travel Spots
                        </Link>
                     </li>
                     {user?.uid ? (
                        <>
                           <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                 <div className="w-10 rounded-full">
                                    <img
                                       src="https://placeimg.comhttps://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg/80/80/people"
                                       alt=""
                                    />
                                 </div>
                              </label>
                              <ul
                                 tabIndex={0}
                                 className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                              >
                                 <li>
                                    <Link className="justify-between hover:text-primary">
                                       Profile
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="hover:text-primary">Settings</Link>
                                 </li>
                                 <li>
                                    <Link onClick={handleLogout} className="hover:text-primary">
                                       Logout
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </>
                     ) : (
                        <>
                           <li>
                              <Link
                                 className="hover:text-warning btn btn-outline btn-warning mx-3"
                                 to="/login"
                              >
                                 Login
                              </Link>
                           </li>
                           <li>
                              <Link className="text-black btn  btn-warning mr-3" to="/register">
                                 Register
                              </Link>
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
