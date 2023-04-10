import React from "react";
import FeaturedJob from "../../components/cards/FeaturedJob";
import CommonHeader from "../../components/CommonHeader";
import PrimaryButton from "../../components/PrimaryButton";

export default function FeaturedJobs({ jobs }) {
  return (
    <div className="bg-white p-10">
      <div className="max-w-7xl mx-auto">
        <CommonHeader
          title={"Featured Jobs"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="grid grid-cols-2 gap-5">
          {jobs?.map((job, index) => (
            <FeaturedJob key={index} job={job} />
          ))}
        </div>
        <PrimaryButton text={"See All"} style={"w-1/4 mx-auto mt-5"} />
      </div>
    </div>
  );
}
