import React from "react";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

export default function Home() {
  const jobs = useLoaderData();
  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <JobCategories />
      <FeaturedJobs jobs={jobs} />
    </div>
  );
}
