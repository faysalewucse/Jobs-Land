import React from "react";
import HeroSection from "./HeroSection";
import JobCategories from "./JobCategories";

export default function Home() {
  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <JobCategories />
    </div>
  );
}
