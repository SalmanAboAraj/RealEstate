import React, { useEffect } from "react";
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";
import project_img_5 from "../assets/project_img_5.jpg";  
import project_img_6 from "../assets/project_img_6.jpg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
const Project = () => {

const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];


    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardsToShow, setCardsToShow] = React.useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth > 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1);
            }
        };
            updateCardsToShow();
        
            window.addEventListener("resize", updateCardsToShow);
            return () => window.removeEventListener("resize", updateCardsToShow);
        
    },[])
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    };
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        مشاريع{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          مكتملة
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        نصمم المساحات ونبني الإرث - استكشف محفظتنا
      </p>

      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="مشروع سابق" onClick={prevProject}
        >
          <img src={left_arrow} alt="سابق" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="مشروع تالي" onClick={nextProject}
        >
          <img src={right_arrow} alt="تالي" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${(100 * currentIndex) / cardsToShow}%)`}}>
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14"/>
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {project.price} <span>|</span> {project.location}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
