import React from "react";

const dummyUploads = [
  {
    category: "Music",
    type: "video",
    title: "Piano Recital",
    url: "https://www.youtube.com/embed/f5YcI0QJGgA",
  },
  {
    category: "Dance",
    type: "video",
    title: "Contemporary Dance",
    url: "https://www.youtube.com/embed/Z9AYPxH5NTM",
  },
  {
    category: "Creative Writing",
    type: "document",
    title: "Short Story - The Wanderer",
    url: "#",
  },
  {
    category: "Painting",
    type: "image",
    title: "Sunset Canvas",
    url: "https://via.placeholder.com/300x200",
  },
  {
    category: "Debating",
    type: "video",
    title: "Debate Finals Highlight",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    category: "Acting",
    type: "image",
    title: "Stage Play Snapshot",
    url: "https://via.placeholder.com/300x200",
  },
];

const UploadCard = ({ upload }) => (
  <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm transition hover:scale-[1.02]">
    <h3 className="text-xl font-semibold text-purple-800 mb-1">
      {upload.title}
    </h3>
    <p className="text-sm text-gray-600 mb-2">{upload.category}</p>
    {upload.type === "video" ? (
      <iframe
        className="w-full aspect-video rounded-lg"
        src={upload.url}
        allowFullScreen
        title={upload.title}
      />
    ) : upload.type === "image" ? (
      <img src={upload.url} alt={upload.title} className="w-full rounded-lg" />
    ) : (
      <a
        href={upload.url}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Document
      </a>
    )}
  </div>
);

const Activity = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
    <h1 className="text-4xl font-bold mb-8 text-center text-purple-900">
      Student Activity Showcase
    </h1>
    <div className="flex flex-wrap justify-center gap-8">
      {dummyUploads.map((upload, idx) => (
        <UploadCard key={idx} upload={upload} />
      ))}
    </div>
  </div>
);

export default Activity;
