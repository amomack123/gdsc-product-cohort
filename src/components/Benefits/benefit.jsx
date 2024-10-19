// import React from 'react';
// import './benefit.module.css';
// import Image1 from '../../../images/Image1.png';

// const Benefits = () => {
//   const benefits = [
//     { 
//       title: 'Hands-on Experience', 
//       description: [
//         'This cohort gives you the chance to work in a real-world scenario',
//         'with real deadlines, clients, and deliverables. By the end of the project, you will',
//         'have a fully developed website to showcase in your portfolio.'
//       ]
//     },
//     { 
//       title: 'Mentorship That Matters', 
//       description: [
//         'With guidance from experienced product managers who know the ins',
//         'and outs of launching professional websites, you will navigate through the',
//         'complexities of client communication and team dynamics.'
//       ]
//     },
//     { 
//       title: 'Professional Network', 
//       description: [
//         'Working with a startup means you are not just gaining experience - ',
//         'you are building relationships. The connections you make in our cohort',
//         'could open doors to internships or even startup ventures of your own.'
//       ]
//     }
//   ];

//   return (
//     <section className="flex mt-24 pb-[100px]">
//       <div className="container flex">
//         {/* Left half for the image */}
//         <div className="w-1/2 flex justify-center items-center pr-10">
//           <img 
//             src={Image1} 
//             alt="Description of the image" 
//             className="max-w-[90%] h-auto"
//             style={{ width: '100%' }}
//           />
//         </div>
        
//         {/* Right half for text */}
//         <div className="w-1/2 text-left pl-[180px]"> {/* Increased left padding to 180px */}
//           <div className="mb-6">
//             <h2 className="text-[40px] font-bold text-[#000000]">Benefits of the Product Cohort</h2>
//           </div>
//           <div className="benefits-container space-y-6">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="benefit-item flex flex-col space-y-2">
//                 <h3 className="text-[28px] text-[#184065]">{benefit.title}</h3>
//                 {benefit.description.map((line, lineIndex) => (
//                   <p key={lineIndex} className="text-[20px] text-[#555555]">{line}</p>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-start space-x-4 mt-6">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//               Join our cohort
//             </button>
//             <button className="border-2 border-[#3182ce] text-[#3182ce] bg-white font-bold py-2 px-4 rounded">
//               Contact us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;


import React from 'react';
import './benefit.module.css';
import Image1 from '../../../images/Image1.png';

const Benefits = () => {
  const benefits = [
    { 
      title: 'Hands-on Experience', 
      description: [
        'This cohort gives you the chance to work in a real-world scenario',
        'with real deadlines, clients, and deliverables. By the end of the project, you will',
        'have a fully developed website to showcase in your portfolio.'
      ]
    },
    { 
      title: 'Mentorship That Matters', 
      description: [
        'With guidance from experienced product managers who know the ins',
        'and outs of launching professional websites, you will navigate through the',
        'complexities of client communication and team dynamics.'
      ]
    },
    { 
      title: 'Professional Network', 
      description: [
        'Working with a startup means you are not just gaining experience - ',
        'you are building relationships. The connections you make in our cohort',
        'could open doors to internships or even startup ventures of your own.'
      ]
    }
  ];

  return (
    <section className="flex mt-24 pb-[100px]">
      <div className="container flex max-w-[1200px] mx-auto"> {/* Added max-width and centered */}
        {/* Left half for the image */}
        <div className="w-5/12 flex justify-center items-center pr-10"> {/* Adjusted width */}
          <img 
            src={Image1} 
            alt="Description of the image" 
            className="max-w-full h-auto"
            style={{ width: '100%' }}
          />
        </div>
        
        {/* Right half for text */}
        <div className="w-7/12 text-left pl-[100px]"> {/* Adjusted width and padding */}
          <div className="mb-6">
            <h2 className="text-[36px] font-bold text-[#000000] leading-tight">Benefits of the Product Cohort</h2> {/* Adjusted font size and added leading-tight */}
          </div>
          <div className="benefits-container space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item flex flex-col space-y-2">
                <h3 className="text-[24px] text-[#184065]">{benefit.title}</h3> {/* Slightly reduced font size */}
                {benefit.description.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-[18px] text-[#555555]">{line}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-start space-x-4 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Join our cohort
            </button>
            <button className="border-2 border-[#3182ce] text-[#3182ce] bg-white font-bold py-2 px-4 rounded">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;



