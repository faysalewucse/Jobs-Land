import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <JobCategories />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}
