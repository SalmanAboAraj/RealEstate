import React from "react";
import brand_img from "../assets/brand_img.png";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        حول{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          علامتنا التجارية
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
      وجهتك الأولى للعقارات الفاخرة والتجارية
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>سنة من الخبرة</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>مشروع مكتمل</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>مشروع قيد التصميم</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>مشروع قيد الإنشاء</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            هل تبحث عن منزل أحلامك، أو شقة فاخرة، أو عقار استثماري؟ لقد وصلت إلى
            المكان الصحيح. في [اسم الموقع]، نقدم لك أفضل الخيارات العقارية في
            السوق، مع واجهة مستخدم سهلة الاستخدام وتصميم مبتكر يجعل عملية البحث
            والشراء أكثر بساطة وراحة.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            أقرأ المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
