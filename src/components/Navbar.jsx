import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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

  return (
    <nav className="bg-indigo-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 text-lg">
        <h1 className="font-bold text-4xl text-purple-600">JobsLand</h1>
        <div className="flex gap-5">
          {routes.map((route, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              key={index}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
        <button className="text-white bg-gradient-to-tr from-indigo-600 to-purple-400 px-5 py-2 rounded">
          Start Applying
        </button>
      </div>
    </nav>
  );
}
