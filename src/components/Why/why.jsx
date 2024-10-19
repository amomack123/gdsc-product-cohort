import React from 'react';
import './why.module.css';
import Image1 from '../../../images/Image1.png'; // Adjusted path to the image

const Why = () => {
  return (
    <section className="flex mt-24">
      <div className="container mx-auto flex"> {/* Use flex to position elements */}
        <div className="w-1/2 text-left"> {/* Left half for text alignment */}
          <div className="text-[40px] text-[#000000] font-bold mb-4">Why join the Product Cohort?</div>
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
        {/* Right half for the image */}
        <div className="w-1/2 flex justify-center items-center ml-[100px]"> {/* Add padding-right here */}
          <img 
            src={Image1} 
            alt="Description of the image" 
            className="max-w-[90%] h-auto" // Maintain the same max-width for consistency
            style={{ width: '100%' }} // Set a max width to control size
          />
        </div>
      </div>
    </section>
  );
};

export default Why;