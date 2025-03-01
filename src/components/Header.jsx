import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center fles items-center w-full overflow-hidden"
      style={{ backgroundImage: "url(/header_img.png)" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-4xl sm:text-3xl md:text-[65px] inline-block max-w-3xl font-semibold pt-50 ">
          أبحث عن المنزل الذي يناسب أحلامك
        </h2>
        <div className="flex justify-center gap-5 mt-10">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            المشاريع
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
            اتصل بنا
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
