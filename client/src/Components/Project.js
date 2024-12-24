import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import photo from "../assets/task.png";
import cloud from "../assets/cloud.png";
import todo from "../assets/todo.png";
import portfolio from "../assets/portfolio.png";
import { useLocation } from 'react-router-dom';

import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

function Project() {
  const project = [
    {
      name: "KEERTHIVASA K",
      title: "Task Management System",
      describition:
        "A Task Management System is a tool that helps organize, assign, and track tasks in real-time, improving team productivity and workflow efficiency. It enables users to set deadlines, prioritize tasks, and collaborate effectively.",
      img: photo,
    },
    {
      name: "KEERTHIVASA K",
      title: "ToDo List-Site",
      describition:
        "A simple and intuitive To-Do List application that helps users manage tasks, set deadlines, and track progress. It allows for efficient organization of daily activities to boost productivity.",
      img: todo,
    },
    {
      name: "KEERTHIVASA K",
      title: "Cloud-Lab-Site",
      describition:
        "A static website for the college's Cloud Computing Lab, highlighting student achievements, lab-in-charge faculty information, and unique lab features. The site serves as an organized platform for sharing lab activities.",
      img: cloud,
    },
    {
      name: "KEERTHIVASA K",
      title: "Portfolio",
      describition:
        "A personal portfolio website showcasing projects, skills, and achievements, providing a comprehensive view of expertise and experience. Designed for easy navigation to highlight professional accomplishments effectively.",
      img: portfolio,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.length - 1 : prevIndex - 1
    );
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
  };

  // Function to get projects to display based on screen size
  const getDisplayedProjects = (isSmallScreen) => {
    if (isSmallScreen) {
      return [project[currentIndex]]; // Only one card for small screens
    }
    return [
      project[currentIndex],
      project[(currentIndex + 1) % project.length],
      project[(currentIndex + 2) % project.length],
    ];
  };
  const location = useLocation();
  const [isPname, setIsPname] = useState(false);

  useEffect(() => {
    
    if (location.pathname !== '/') {
      setIsPname(true);
      // console.log(isPname) 
    } else {
      setIsPname(false);
      // console.log(isPname)
    }
  }, [location]); 

  return (
    <>
      {isPname && <Navbar />}
      <div className="w-full lg:h-25 h-26 flex items-center justify-center" id="Project">
        <div className="w-full h-full  flex justify-center items-center lg:p-10">
          <button onClick={handleClickLeft}>
            <FaCircleArrowLeft className="lg:w-10 lg:h-10 w-7 h-7" />
          </button>

          <div className=" flex flex-warp  justify-center items-center">
            <div className="block md:hidden">
              {getDisplayedProjects(true).map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>

            <div className="hidden md:flex space-x-20 items-center justify-center">
              {getDisplayedProjects(false).map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
          <button onClick={handleClickRight}>
            <FaCircleArrowRight className="lg:w-10 lg:h-10 w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Project;
