import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vector1 from "../assets/Vector-1.png";
import {
  faCalendarWeek,
  faCircleDollarToSlot,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../components/PrimaryButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNavbar from "../components/BottomNavbar";

export default function JobDetails() {
  // small component for right side container information
  const details = (icon, text, value) => {
    return (
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon icon={icon} className="text-indigo-400" />
        <p>
          <b>{text}:</b> <span className="text-gray-400">{value}</span>
        </p>
      </div>
    );
  };

  // initialize variables
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await fetch("/jobs.json");
      const data = await response.json();
      const matchingJob = data.find((job) => job.id === jobId);
      setJobDetails(matchingJob);
    };

    fetchJobDetails();
  }, [jobId]);

  const notifySuccess = () =>
    toast.success("Successfully Applied to the Job.", { autoClose: 1000 });
  const notifyError = () =>
    toast.error("You Already Applied to this Job.", { autoClose: 1000 });

  const applyNowHandler = (jobDetails) => {
    //first get previous applied jobs
    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs"));
    // then check if jobId is already there
    if (appliedJobs) {
      if (appliedJobs.some((job) => job.id === jobDetails.id)) {
        notifyError();
        return;
      }
      appliedJobs.push(jobDetails);
    }
    //else assign an array with value
    else {
      appliedJobs = [jobDetails];
    }

    //then set the new array to the local storage if the id is not already there
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    notifySuccess();
  };
  return (
    <div>
      <BottomNavbar text={"Job Details"} />
      <img className="top-0 right-0 absolute" src={vector1} alt="" />
      <div className="max-w-7xl mx-auto p-10 md:flex justify-between">
        <div className="md:w-3/4">
          <p className="mb-10 text-justify pr-10">
            <b>Company: </b>
            {jobDetails?.companyName}
          </p>
          <p className="mb-10 text-justify pr-10">
            <b>Job Description: </b>
            {jobDetails?.jobDescription}
          </p>
          <p className="mb-10 text-justify pr-10">
            <b className="mb-5">Job Responsibility: </b>

            {jobDetails?.jobResponsibilities.map((responsibility, index) => (
              <li key={index} className="p-2">
                {responsibility}
              </li>
            ))}
          </p>
          <p className="mb-10 text-justify pr-10">
            <b>
              Educational Requirements: <br />
            </b>
            {jobDetails?.educationalRequirements}
          </p>
          <p className="mb-10 text-justify pr-10">
            <b>
              Experiences: <br />
            </b>
            {jobDetails?.experience}
          </p>
        </div>
        <div className="flex-grow">
          <div className="bg-indigo-50 p-5">
            <h1 className="font-bold text-lg">Job Details</h1>
            <hr className="my-3 border border-indigo-100" />
            {details(faCircleDollarToSlot, "Salary", jobDetails?.salary)}
            {details(faCalendarWeek, "Job Title", jobDetails?.jobTitle)}

            <h1 className="font-bold mt-7 text-lg">Contact Information</h1>
            <hr className="my-3 border border-indigo-100" />
            {details(faPhone, "Phone", jobDetails?.contactInformation.phone)}
            {details(
              faEnvelope,
              "E-mail",
              jobDetails?.contactInformation.email
            )}
            {details(faLocationDot, "Address", jobDetails?.address)}
          </div>
          <PrimaryButton
            onClickHandler={() => applyNowHandler(jobDetails)}
            text={"Apply Now"}
            style={"mt-5 hover:shadow-lg hover:shadow-indigo-300"}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
