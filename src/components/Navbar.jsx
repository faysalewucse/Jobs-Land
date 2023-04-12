import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GradientText from "../utils/GradientText";
import PrimaryButton from "./PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/statistics",
      name: "Statistics",
    },
    {
      path: "/applied-jobs",
      name: "Applied Jobs",
    },
    {
      path: "/blog",
      name: "Blog",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    // <nav className="bg-indigo-50">
    //   <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-center py-5 text-lg px-6 lg:px-12">
    //     <GradientText
    //       onClickHandler={() => navigate("/")}
    //       style="font-bold text-4xl bg-gradient-to-tr from-indigo-600 to-purple-400 cursor-pointer"
    //       text={"JobsLand"}
    //     />

    //     <div
    //       className={`md:${
    //         !isOpen && "hidden"
    //       } lg:flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0`}
    //     >
    //       {routes.map((route, index) => (
    //         <NavLink
    //           className={({ isActive }) =>
    //             isActive ? "text-indigo-500" : "hover:text-indigo-500"
    //           }
    //           key={index}
    //           to={route.path}
    //         >
    //           {route.name}
    //         </NavLink>
    //       ))}
    //     </div>
    //     <PrimaryButton
    //       text={"Start Applying"}
    //       style={`md:${!isOpen && "hidden"} w-1/4 mx-auto lg:w-fit lg:mx-0`}
    //     />

    //     {!isOpen ? (
    //       <FontAwesomeIcon
    //         className="absolute right-10 top-7 md:right-20 lg:hidden"
    //         onClick={() => setIsOpen(!isOpen)}
    //         icon={faBars}
    //         size="xl"
    //         color="indigo"
    //       />
    //     ) : (
    //       <FontAwesomeIcon
    //         className="absolute right-10 top-7 md:right-20 lg:hidden"
    //         onClick={() => setIsOpen(!isOpen)}
    //         icon={faXmark}
    //         size="xl"
    //         color="indigo"
    //       />
    //     )}
    //   </div>
    // </nav>
    <div className="bg-indigo-50 sticky top-0 left-0 w-full p-5">
      <div className="max-w-7xl mx-auto md:flex items-center justify-between bg-indigo-50 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <GradientText
            onClickHandler={() => navigate("/")}
            style="font-bold text-4xl bg-gradient-to-tr from-indigo-600 to-purple-400 cursor-pointer"
            text={"JobsLand"}
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
        >
          {!open ? (
            <FontAwesomeIcon
              onClick={() => setOpen(!open)}
              icon={faBars}
              color="indigo"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setOpen(!open)}
              icon={faXmark}
              color="indigo"
            />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto bg-indigo-50 md:bg-transparent z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {routes.map((route, index) => (
            <li key={index} className="md:ml-8 text-lg md:my-0 my-7">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : "hover:text-indigo-500"
                }
                key={index}
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <PrimaryButton text={"Start Applying"} style={`ml-0 md:ml-5 mr-10`} />
        </ul>
      </div>
    </div>
  );
}
