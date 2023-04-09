import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import GradientText from "../../utils/GradientText";
import heroImage from "../../assets/job.svg";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between p-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-7xl">
          One Step Closer To Your{" "}
          <GradientText
            text={"Dream Job"}
            style={"bg-gradient-to-tr from-indigo-600 to-purple-400"}
          />
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <PrimaryButton text={"Get Started"} style={"w-1/4"} />
      </div>
      <img className="w-1/2" src={heroImage} alt="hero" />
    </div>
  );
}
