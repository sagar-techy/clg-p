import React from 'react';

const Home = () => {
  return (
    <>
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Connect, Showcase, and Excel in Your Passions!</h1>
          <button
            id="getStarted"
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
            onClick={() => alert('Welcome to Campus Connect! Let\'s get started on showcasing your talents!')}
          >
            Get Started
          </button>
        </div>
        <section className="features mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Activity Showcasing</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Performance Evaluation</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Individual Performance Chart</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Comparative Analysis</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Career Guidance</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Gamification and Rewards</li>
            <li className="bg-white text-blue-500 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">Community Engagement</li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Home;