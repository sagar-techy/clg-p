import React from "react";

const Comm = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
    <h1 className="text-4xl font-bold text-center text-pink-900 mb-8">
      Campus Community
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">
          🎙️ Forums
        </h2>
        <p className="text-gray-700">
          Discuss hobbies, tips, and activities with other students.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-fuchsia-800 mb-2">
          📅 Event Calendar
        </h2>
        <ul className="text-gray-700 space-y-1">
          <li>📍 Storytelling Contest – Apr 28</li>
          <li>📍 Dance Workshop – May 5</li>
          <li>📍 Poster Art Jam – May 20</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Comm;
