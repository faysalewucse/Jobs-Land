import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const jobs = useLoaderData();

  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <JobCategories />
      <FeaturedJobs JOBS={jobs} />
      <Footer />
    </div>
  );
}
