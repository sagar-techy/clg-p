import React from "react";

const resources = [
  { title: "Creative Writing Workshop", type: "Event", date: "May 12" },
  { title: "How to Build a Career in Dance", type: "Article", link: "#" },
  {
    title: "Mentorship: Visual Arts",
    type: "Mentorship",
    contact: "arts@campusconnect.com",
  },
];

const Career = () => (
  <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-8">
    <h1 className="text-4xl font-bold text-center text-cyan-900 mb-8">
      Career Guidance
    </h1>
    <div className="max-w-3xl mx-auto space-y-6">
      {resources.map((res, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-cyan-800">{res.title}</h3>
          <p className="text-gray-700">{res.type}</p>
          {res.date && <p className="text-sm text-gray-500">📅 {res.date}</p>}
          {res.link && (
            <a href={res.link} className="text-blue-600 underline">
              Read more
            </a>
          )}
          {res.contact && (
            <p className="text-sm mt-1">Contact: {res.contact}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Career;
