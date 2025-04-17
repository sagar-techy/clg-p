import React from 'react';

const Home = () => {
  return (
    <>
      <section className="hero bg-[#735557] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Connect, Showcase, and Excel in Your Passions!</h1>
          <button
            id="getStarted"
            className="text-[#735557] bg-[#e8e2c4] font-semibold py-3 px-8 rounded-full shadow-lg"
            onClick={() => alert('Welcome to Campus Connect! Let\'s get started on showcasing your talents!')}
          >
            Get Started
          </button>
        </div>
        <section className="features mt-16">
          <h2 className="text-3xl font-semibold text-center mb-16">Key Features</h2>
          <ul className="grid grid-cols-2 gap-9 text-lg font-semibold px-52 text-center">
           <li className="bg-white text-[#AF8F6F] p-4 border-2 rounded-lg hover:shadow-xl transition duration-300">Activity Showcasing</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Performance Evaluation</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Individual Performance Chart</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Comparative Analysis</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Career Guidance</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Gamification and Rewards</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Community Engagement</li>
           <li className="bg-white text-[#AF8F6F] p-4 rounded-lg hover:shadow-xl transition duration-300">Something Else</li>
</ul>

        </section>
      </section>
    </>
  );
};

export default Home;