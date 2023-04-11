import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import vector1 from "../assets/Vector-1.png";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Statistics() {
  const data = [
    {
      name: "Assignment - 1",
      marks: 60,
    },
    {
      name: "Assignment - 2",
      marks: 50,
    },
    {
      name: "Assignment - 3",
      marks: 60,
    },
    {
      name: "Assignment - 4",
      marks: 60,
    },
    {
      name: "Assignment - 5",
      marks: 60,
    },
    {
      name: "Assignment - 6",
      marks: 60,
    },
    {
      name: "Assignment - 7",
      marks: 60,
    },
    {
      name: "Assignment - 8",
      marks: 60,
    },
    {
      name: "Assignment - 9",
      marks: 60,
    },
  ];

  return (
    <div>
      <BottomNavbar text={"Statistics"} />
      <img className="top-0 right-0 absolute" src={vector1} alt="" />
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="font-bold text-xl mb-5">
          My Assignment Marks on Programming Hero Course
        </h1>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <Area dataKey="marks" stroke="#400a78" fill="url(#colormarks)" />
            <XAxis
              dataKey="name"
              tickFormatter={(str) => str[0] + str.split("-")[1]}
            />
            <YAxis dataKey="marks" />
            <CartesianGrid />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="colormarks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bg-indigo-100 shadow-lg shadow-black p-5 border border-indigo-400">
        <h4>{label}</h4>
        <h4>Marks: {payload[0].value}</h4>
      </div>
    );
  }
}
