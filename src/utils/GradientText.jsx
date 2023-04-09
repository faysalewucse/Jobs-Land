import React from "react";

export default function GradientText({ text, style }) {
  return <div className={`bg-clip-text text-transparent ${style}`}>{text}</div>;
}
