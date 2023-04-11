import BottomNavbar from "../components/BottomNavbar";
import vector1 from "../assets/Vector-1.png";
import { useState } from "react";
import FeaturedJob from "../components/cards/FeaturedJob";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState(
    JSON.parse(localStorage.getItem("appliedJobs")) || []
  );

  return (
    <div>
      <BottomNavbar text={"Applied Jobs"} />
      <img className="top-0 right-0 absolute" src={vector1} alt="vector1" />
      <div className="max-w-7xl mx-auto p-20">
        <div>
          <select
            name="jobtype"
            id="jobtype"
            className="block w-1/8 border border-indigo-200 rounded py-2 px-5 float-right outline-none"
          >
            <option value="remote">Remote</option>
            <option value="onsite">On Site</option>
          </select>
        </div>
        <div className="">
          {appliedJobs?.map((job) => (
            <FeaturedJob key={job.id} job={job} horizontal={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
