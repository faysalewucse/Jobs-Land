import React from "react";

export default function FeaturedJob({ job }) {
  const { jobTitle } = job;
  return <div>{jobTitle}</div>;
}
