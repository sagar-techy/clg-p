import React from 'react';

const Forums = () => {
 return (
 <section className="forums bg-[#735557d1] text-white py-16">
   <div className="container mx-auto px-4">
     <h2 className="text-4xl font-bold text-center mb-12">Forums</h2>
     <div className="forum-posts bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
       <h3 className="text-3xl font-semibold text-[#5f2509ca] mb-8">Latest Discussions</h3>
       <div className="space-y-6">
         <article className="border-b border-gray-200 pb-6">
           <h4 className="text-2xl font-medium text-gray-800 mb-2">How to Improve Your Dance Skills?</h4>
           <p className="text-gray-600 mb-4">Join the discussion on techniques and tips for improving your dance performance.</p>
           <button className="bg-[#5f2509ca] text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-xl transition duration-300">View Discussion</button>
         </article>
         <article className="pt-4">
           <h4 className="text-2xl font-medium text-gray-800 mb-2">Best Practices for Creative Writing</h4>
           <p className="text-gray-600 mb-4">Share your tips and tricks for writing poetry and stories with fellow students.</p>
           <button className="bg-[#5f2509ca] text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-xl transition duration-300">View Discussion</button>
         </article>
       </div>
     </div>
   </div>
 </section>
 );
};

export default Forums;