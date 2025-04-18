import React, { useState } from "react";

const dummyEvaluations = [
  {
    student: "Aarav Mehta",
    activity: "Dance Performance",
    type: "video",
    url: "https://www.youtube.com/embed/Z9AYPxH5NTM",
    likes: 12,
    rating: 4,
    feedback: "Great energy and expressions! Try improving transitions.",
  },
  {
    student: "Sara Kapoor",
    activity: "Painting - Nature Scene",
    type: "image",
    url: "https://via.placeholder.com/300x200",
    likes: 8,
    rating: 5,
    feedback: "Beautiful use of color and perspective!",
  },
  {
    student: "Rohan Das",
    activity: "Creative Writing - The Journey",
    type: "document",
    url: "#",
    likes: 6,
    rating: 3,
    feedback: "Strong narrative. Watch out for grammar consistency.",
  },
];

const RatingStars = ({ rating }) => (
  <div className="flex text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? "fill-current" : "text-gray-300"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.285 3.947c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.356 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.67 9.374c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.286-3.947z" />
      </svg>
    ))}
  </div>
);

const PerformanceCard = ({ item }) => {
  const [likes, setLikes] = useState(item.likes);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md transition hover:scale-[1.01]">
      <h3 className="text-xl font-bold text-purple-800">{item.activity}</h3>
      <p className="text-sm text-gray-600 mb-3">By {item.student}</p>
      {item.type === "video" && (
        <iframe
          src={item.url}
          title={item.activity}
          className="w-full rounded-lg aspect-video mb-3"
          allowFullScreen
        />
      )}
      {item.type === "image" && (
        <img
          src={item.url}
          alt={item.activity}
          className="rounded-lg mb-3 w-full"
        />
      )}
      {item.type === "document" && (
        <a
          href={item.url}
          className="text-blue-600 underline mb-3 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Document
        </a>
      )}
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={() => setLikes((l) => l + 1)}
          className="text-purple-700 font-medium hover:underline"
        >
          👍 Like ({likes})
        </button>
        <button className="text-blue-600 font-medium hover:underline">
          📤 Share
        </button>
      </div>
      <RatingStars rating={item.rating} />
      <p className="text-sm text-gray-700 italic">
        Faculty Feedback: <br />
        <span className="text-gray-900 font-medium">"{item.feedback}"</span>
      </p>
    </div>
  );
};

const Performance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">
        Performance Evaluation
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {dummyEvaluations.map((item, idx) => (
          <PerformanceCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Performance;
