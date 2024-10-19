import React from 'react';
import Image1 from "../../../images/Image1.png";


const Heading = () => {
  return (
    <section className="flex mt-24"> {/* Margin-top for spacing */}
      <div className="w-1/2 pl-[117px]"> {/* Add padding-left here */}
        <div className="container mx-auto">
          <div className="content text-left"> {/* Text is left-aligned */}
            <p className="text-[20px] text-[#184065] mb-2 font-nunito">
              Build Real-World Products with the
            </p>
            <h1 className="text-[68px] text-[#000000] font-bold leading-tight font-nunito">
              UC Davis <br />
              Product Cohort
            </h1>
            <p className="text-[20px] text-[#555555] mt-4 font-nunito">
              This cohort focuses on collaborating with real-world <br />
              startups to deliver a fully-functional product, simulating <br />
              the experience of working in a professional environment.
            </p>
            <div className="button-container space-x-4 mt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Join our cohort
              </button>
              <button className="border-2 border-[#3182ce] text-[#3182ce] bg-white font-bold py-2 px-4 rounded">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center pr-[117px]"> {/* Add padding-right here */}
        <img src={Image1} alt="Description of the image" className="max-w-[90%] h-auto" /> {/* Limit the image width */}
      </div>
    </section>
  );
};

export default Heading;

