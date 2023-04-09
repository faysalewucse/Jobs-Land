import React from "react";
import CommonHeader from "../../components/CommonHeader";
import JobCategory from "../../components/cards/JobCategory";
import icon1 from "../../assets/icons/accounts 1.png";
import icon2 from "../../assets/icons/business 1.png";
import icon3 from "../../assets/icons/social-media 1.png";
import icon4 from "../../assets/icons/chip 1.png";

export default function JobCategories() {
  const job_categories = [
    {
      icon: icon1,
      title: "Account and Finance",
      available_jobs: 310,
    },
    {
      icon: icon2,
      title: "Creative Design",
      available_jobs: 120,
    },
    {
      icon: icon3,
      title: "Marketing and Sales",
      available_jobs: 150,
    },
    {
      icon: icon4,
      title: "Engineering Job",
      available_jobs: 225,
    },
  ];
  return (
    <div className="bg-white p-10">
      <div className="max-w-7xl mx-auto">
        <CommonHeader
          title={"Job Category List"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="flex justify-center gap-5">
          {job_categories.map(({ icon, title, available_jobs }, index) => (
            <JobCategory
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
