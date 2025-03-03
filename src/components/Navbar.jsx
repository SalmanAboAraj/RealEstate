import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import menu_icon from '../assets/menu_icon.svg'
import cross_icon from '../assets/cross_icon.svg'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  useEffect(() => {
      if(showMobileMenu) {
          document.body.style.overflow = 'hidden'
      }
      else {
          document.body.style.overflow = 'auto'
      }
      return () => {
          document.body.style.overflow = 'auto'
      }; 
  }, [showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10" dir='rtl'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className='w-20' src={logo} alt="logo"/>
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#ِHeader" className='cursor-pointer hover:text-gray-400'>الرئيسية</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>من نحن</a>
          <div className="relative">
            <span onClick={() => setShowProjectsDropdown(!showProjectsDropdown)} className='cursor-pointer hover:text-gray-400'>المشاريع</span>
            {showProjectsDropdown && (
              <div className="absolute right-0 bg-white text-black rounded-md shadow-md mt-2 w-30">
                <a onClick={() => setShowProjectsDropdown(false)} href="#Project" className='block px-2 py-2 hover:bg-gray-200 rounded-md'>مشاريع مكتملة</a>
                <a onClick={() => setShowProjectsDropdown(false)} href="#ProjectsInProgress" className='block px-2 py-2  hover:bg-gray-200 rounded-md'>مشاريع قيد التنفيذ</a>
              </div>
            )}
          </div>
        </ul>
        <button className='hidden md:block bg-white px-4 rounded-full h-10 hover:bg-gray-400'>تسجيل الدخول</button>
        <img onClick={() => setShowMobileMenu(true)} src={menu_icon} className='md:hidden w-7' alt="menu"/>
      </div>
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' :  'h-0 w-0'}  left-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-1 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>الرئيسية</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>من نحن</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Project" className='px-4 py-2 rounded-full inline-block'>مشاريع مكتملة</a>
          <a onClick={() => setShowMobileMenu(false)} href="#ProjectsInProgress" className='px-4 py-2 rounded-full inline-block'>مشاريع قيد التنفيذ</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>اتصل بنا</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
