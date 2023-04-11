import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";

export default function Home() {
  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <JobCategories />
      <FeaturedJobs />
    </div>
  );
}
