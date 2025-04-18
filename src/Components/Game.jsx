import React from "react";

const badges = [
  { name: "Top Writer", icon: "✍️" },
  { name: "Art Champion", icon: "🎨" },
  { name: "Debate Pro", icon: "🗣️" },
];

const Game = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-8">
    <h1 className="text-4xl font-bold text-center text-yellow-900 mb-8">
      Badges & Rewards
    </h1>
    <div className="flex flex-wrap justify-center gap-6">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-lg w-64 text-center"
        >
          <div className="text-5xl mb-2">{badge.icon}</div>
          <h3 className="text-xl font-semibold text-yellow-800">
            {badge.name}
          </h3>
          <p className="text-sm text-gray-600">Awarded for excellence</p>
        </div>
      ))}
    </div>
    <h2 className="text-2xl font-bold mt-12 mb-4 text-center text-orange-700">
      Leaderboard
    </h2>
    <ul className="max-w-md mx-auto bg-white rounded-lg shadow p-4 space-y-2 text-gray-800">
      <li>🥇 Aarav Mehta - 450 pts</li>
      <li>🥈 Anya Rao - 420 pts</li>
      <li>🥉 Rohan Das - 390 pts</li>
    </ul>
  </div>
);

export default Game;
