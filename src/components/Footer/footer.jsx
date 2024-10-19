import React from 'react';
import gdsc from "../../../images/gdsc.png";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start justify-center text-left">
            <div className="mb-2"> {/* Removed text-center */}
              <div className="flex justify-center mb-2">
                <img src={gdsc} alt="Google Developer Student Clubs" className="h-8" />
              </div>
              <h3 className="text-[20px] font-bold text-black">Google Developer Student Clubs</h3>
              <p className="text-[18px] text-[#555555]">University of California, Davis</p>
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
            <a href="#" className="text-[#555555] hover:text-black">
              <span className="sr-only">Instagram</span>
              <svg className="w-[36px] h-[36px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="text-[#555555] hover:text-black">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-[36px] h-[36px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                <path fill="currentColor" d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
            </a>
            <a href="#" className="text-[#555555] hover:text-black">
              <span className="sr-only">YouTube</span>
              <svg className="w-[36px] h-[36px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="text-[#555555] hover:text-black">
              <span className="sr-only">Discord</span>
              <svg className="w-[36px] h-[36px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
            </a>
            <a href="#" className="text-[#555555] hover:text-black">
              <span className="sr-only">TikTok</span>
              <svg className="w-[36px] h-[36px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 8v2h-2v8c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h8v2h2V3h2v5h2zm-4 2H7v8h10v-8zm-2-4H7v2h8V6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
