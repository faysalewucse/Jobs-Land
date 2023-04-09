import React from "react";

export default function JobCategory({ icon, title, available_jobs }) {
  return (
    <div className="w-1/5 bg-indigo-50 px-5 py-10 rounded">
      <img
        className="bg-indigo-100 p-2 rounded mb-2"
        src={icon}
        alt="job-card-icon"
      />
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-gray-400">{available_jobs} Jobs Available</p>
    </div>
  );
}
