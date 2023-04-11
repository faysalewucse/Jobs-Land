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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-center py-5 text-lg px-6 lg:px-12">
        <GradientText
          onClickHandler={() => navigate("/")}
          style="font-bold text-4xl bg-gradient-to-tr from-indigo-600 to-purple-400 cursor-pointer"
          text={"JobsLand"}
        />

        <div
          className={`${
            !isOpen && "hidden"
          } flex flex-col lg:flex-row items-center gap-5 mt-5 lg:mt-0`}
        >
          {routes.map((route, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-indigo-500" : "hover:text-indigo-500"
              }
              key={index}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
        <PrimaryButton
          text={"Start Applying"}
          style={"w-1/4 mx-auto lg:w-fit lg:mx-0"}
        />

        {!isOpen ? (
          <FontAwesomeIcon
            className="absolute right-10 top-7 md:right-20 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            icon={faBars}
            size="xl"
            color="indigo"
          />
        ) : (
          <FontAwesomeIcon
            className="absolute right-10 top-7 md:right-20 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            icon={faXmark}
            size="xl"
            color="indigo"
          />
        )}
      </div>
    </nav>
  );
}
