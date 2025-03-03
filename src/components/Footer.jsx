import React from 'react';
import whatsapp from '../assets/whatsapp.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import X from '../assets/x.svg'
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-500 py-4 md:flex-row md:justify-between">
        <p className="mb-4 text-center font-normal text-blue-500 md:mb-0">
          &copy; {currentYear} <a href="">Estate</a>. All
          Rights Reserved.
        </p>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
          <img src={facebook} alt="facebook" className='w-7'/>
          </a>
       
          <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
          <img src={instagram} alt="instagram" className='w-7'/>
          </a>
          
          <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
          <img src={X} alt="X" className='w-7'/>
          </a>

          <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
          <img src={whatsapp} alt="whatsapp" className='w-7'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;