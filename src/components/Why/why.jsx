import React from 'react';
import './why.module.css';

const Why = () => {
  return (
    <section className="flex mt-24"> {}
      <div className="container mx-auto flex"> {/* Use flex to position elements */}
        <div className="w-1/2 text-left"> {/* Left half for text alignment */}
          <div className="text-[40px] text-[#000000] font-bold mb-4">Why join the Product Cohort?</div> {/* Changed from h2 to div */}
          <p className="text-[20px] text-[#184065] mb-6">Because we turn your skills into tangible results!</p>
          <article className="mb-8">
            <p className="text-[20px] text-[#555555]">
              Do you want to take your development/design skills to the next level?
              Are you ready to collaborate with a startup and create a product that
              makes an impact? The UC Davis Google Developer Student Club's 
              Product Cohort is the opportunity you've been waiting for.
            </p>
          </article>
          <article className="mb-8">
            <p className="text-[20px] text-[#555555]">
              In this hands-on cohort, you won't just learn—you'll do. You will join a 
              small, dynamic team tasked with building a functional website for an
              innovative startup. Together, you'll experience the thrill and challenges
              of working in a fast-paced, real-world environment.
            </p>
          </article>
          <button className="border-2 border-[#3182ce] text-[#3182ce] bg-white font-bold py-2 px-4 rounded mt-4">
            Visit Our Projects
          </button>
        </div>
        {/* Placeholder for images or future content on the right (optional) */}
        <div className="w-1/2 image-placeholder"></div>
      </div>
    </section>
  );
};

export default Why;
