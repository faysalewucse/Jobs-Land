import React from "react";

export default function JobCategory({ icon, title, available_jobs }) {
  return (
    <div className="bg-indigo-50 lg:px-5 px-2 py-5 lg:py-10 rounded text-center lg:text-left mb-2 md:mb-0">
      <img
        className="bg-indigo-100 p-2 rounded mb-2 lg:w-fit lg:mx-0 w-16 mx-auto"
        src={icon}
        alt="job-card-icon"
      />
      <h1 className="font-bold lg:text-lg">{title}</h1>
      <p className="text-gray-400">{available_jobs} Jobs Available</p>
    </div>
  );
}
