import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { activity: "Dance", score: 85 },
  { activity: "Writing", score: 70 },
  { activity: "Debate", score: 90 },
  { activity: "Music", score: 65 },
  { activity: "Painting", score: 95 },
];

const Indi = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 p-8">
    <h1 className="text-4xl font-bold text-center text-green-900 mb-6">
      Your Performance Overview
    </h1>
    <p className="text-center text-gray-700 mb-8">
      Identify your strengths and focus areas 🎯
    </p>
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activity" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#4ade80" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Indi;
