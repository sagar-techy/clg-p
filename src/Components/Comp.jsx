import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const compareData = [
  { activity: "Storytelling", Aarav: 80, Anya: 90 },
  { activity: "Poster Making", Aarav: 75, Anya: 85 },
  { activity: "Debate", Aarav: 95, Anya: 80 },
  { activity: "Music", Aarav: 70, Anya: 60 },
];

const Comp = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-fuchsia-100 p-8">
    <h1 className="text-4xl font-bold text-center text-fuchsia-900 mb-6">
      Comparative Performance
    </h1>
    <p className="text-center text-gray-700 mb-8">
      See how you stack up with others 💪
    </p>
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={compareData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="activity" />
          <Tooltip />
          <Radar
            name="Aarav"
            dataKey="Aarav"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.6}
          />
          <Radar
            name="Anya"
            dataKey="Anya"
            stroke="#ec4899"
            fill="#ec4899"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Comp;
