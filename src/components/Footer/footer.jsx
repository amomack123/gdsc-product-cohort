import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start justify-center text-left">
            <div className="mb-2 text-center"> {/* Center content */}
              <img src="/path-to-google-dev-logo.svg" alt="Google Developer Student Clubs" className="h-8 mb-2" />
              <h3 className="text-[20px] font-bold text-black">Google Developer Student Clubs</h3>
              <p className="text-[18px] text-[#555555]">University of California, Davis</p> {/* Keep this under the h3 */}
            </div>
          </div>
          
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <h4 className="text-[18px] font-bold text-black mb-4 text-center">Links</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#About" className="text-[14px] text-[#555555] hover:text-black">About</a></li>
              <li><a href="#Apply" className="text-[14px] text-[#555555] hover:text-black">Apply</a></li>
              <li><a href="#Projects" className="text-[14px] text-[#555555] hover:text-black">Projects</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <h4 className="text-[18px] font-bold text-black mb-4 text-center">Students</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#FAQ" className="text-[14px] text-[#555555] hover:text-black">FAQ</a></li>
              <li><a href="#Contact" className="text-[14px] text-[#555555] hover:text-black">Contact</a></li>
              <li><a href="#Newsletter" className="text-[14px] text-[#555555] hover:text-black">Newsletter</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end space-x-4">
            {/* Placeholder for social media icons */}
            {<a href="#" className="text-[#555555] hover:text-black">
            <span className="sr-only">Instagram</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
            </svg>
          </a>}
          {<a href="#" className="text-[#555555] hover:text-black">
            <span className="sr-only">Link</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
            </svg>
          </a>}
          {<a href="#" className="text-[#555555] hover:text-black">
            <span className="sr-only">Instagram</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
            </svg>
          </a>}
          {<a href="#" className="text-[#555555] hover:text-black">
            <span className="sr-only">Instagram</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
            </svg>
          </a>}
          {<a href="#" className="text-[#555555] hover:text-black">
            <span className="sr-only">Instagram</span>
            <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
            </svg>
          </a>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
