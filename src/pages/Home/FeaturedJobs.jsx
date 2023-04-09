import React from "react";

export default function FeaturedJobs() {
  return (
    <div className="bg-white p-10">
      <div className="max-w-7xl mx-auto">
        <CommonHeader
          title={"Featured Jobs"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="flex justify-center gap-5">
          {job_categories.map(({ icon, title, available_jobs }, index) => (
            <JobCategoryCard
              key={index}
              icon={icon}
              title={title}
              available_jobs={available_jobs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
