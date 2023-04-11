import React from "react";
import PrimaryButton from "../PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function FeaturedJob({ job, horizontal }) {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    jobType,
    address,
    salary,
    time,
  } = job;
  const navigate = useNavigate();
  return (
    <div
      className={`border border-indigo-100 p-5 rounded-md flex ${
        !horizontal ? "flex-col" : "justify-between"
      } gap-2`}
    >
      <div
        className={`flex ${!horizontal ? "flex-col" : "justify-between"} gap-4`}
      >
        <img
          className={`${
            horizontal
              ? "my-auto bg-gray-100 p-5 w-40 h-40 rounded"
              : "w-20 h-20"
          } object-contain`}
          src={companyLogo}
          alt="company-logo"
        />
        <div
          className={`flex flex-col gap-2 ${horizontal && "justify-center"}`}
        >
          <h1 className="font-bold text-xl">{jobTitle}</h1>
          <h1>{companyName}</h1>
          <div className="flex gap-3">
            <h1 className="w-fit border border-indigo-500 rounded p-2 text-center text-indigo-500">
              {jobType}
            </h1>
            <h1 className="w-fit border border-indigo-500 rounded p-2 text-center text-indigo-500">
              {time}
            </h1>
          </div>
          <div className="flex gap-5">
            <h1 className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              {address}
            </h1>
            <h1 className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
              {salary}
            </h1>
          </div>
        </div>
      </div>
      <PrimaryButton
        onClickHandler={() => navigate(`/jobdetails/${id}`)}
        text={"View Details"}
        style={`${!horizontal ? "w-1/4" : "h-fit my-auto"}`}
      />
    </div>
  );
}
