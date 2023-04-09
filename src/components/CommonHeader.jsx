import React from "react";

export default function CommonHeader({ title, description }) {
  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
