import React from "react";

const Forums = () => {
  const latestAd = {
    image:
      "https://images.unsplash.com/photo-1641509984707-72e636d042fb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Indian College Fest Poster",
    title: "Campus Cultural Fest 2025",
    date: "April 20, 2025",
    time: "6:00 PM",
    location: "Main College Ground",
  };

  const events = [
    {
      title: "Annual Dance Fiesta 2025",
      description:
        "Get ready for an electrifying evening of performances by the best dancers across all departments.",
      date: "April 25, 2025",
      location: "Auditorium Hall A",
    },
    {
      title: "Inter-College Art Competition",
      description:
        "Showcase your creativity with brush and canvas. Exciting prizes await!",
      date: "April 28, 2025",
      location: "Creative Studio Block",
    },
    {
      title: "Debate Championship",
      description:
        "Join the heated discussions and battle it out with logic and wit in the debate hall!",
      date: "May 2, 2025",
      location: "Seminar Hall B",
    },
    {
      title: "Campus Talent Show",
      description:
        "From singing and mimicry to stand-up comedy—let your talent shine on stage.",
      date: "May 5, 2025",
      location: "Open Air Theatre",
    },
    {
      title: "Tech & Innovation Expo",
      description:
        "Students from all disciplines present tech projects, innovations, and futuristic ideas.",
      date: "May 10, 2025",
      location: "Innovation Lab Complex",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] text-[#444040] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Campus Events & Functions
        </h2>

        {/* 🖼️ Latest Ad Poster with Overlay */}
        <div className="relative mb-12 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src={latestAd.image}
            alt={latestAd.alt}
            className="w-full h-[600px] object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 bg-[#000000a6] text-white p-4 rounded-lg text-right shadow-md backdrop-blur-md">
            <h3 className="text-lg font-semibold">{latestAd.title}</h3>
            <p className="text-sm">📅 {latestAd.date}</p>
            <p className="text-sm">🕒 {latestAd.time}</p>
            <p className="text-sm">📍 {latestAd.location}</p>
          </div>
        </div>

        {/* 📅 Upcoming Events */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-3xl font-semibold text-[#5f2509ca] mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p className="text-md text-gray-500 mb-4">
                📅 {event.date} | 📍 {event.location}
              </p>
              <button className="bg-[#5f2509ca] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forums;
