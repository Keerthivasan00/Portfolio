import React from "react";
import Navbar from "./Navbar";
import photo from "../assets/profesional photo.jpg";

function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/keerthivasan_cv.pdf";
    link.download = "Keerthivasan_CV.pdf"; 
    link.click();
  };
  return (
    <>
      <Navbar />
      <div className="w-full  xl:h-25 h-26 flex items-center">
        <div className="h-full w-full lg:flex">
          <div className="w-full h-52 lg:w-5/12 lg:h-full flex justify-center items-center">
            <img
              src={photo}
              alt=""
              className="w-52 h-52 lg:w-96 lg:h-96 rounded-xl"
            />
          </div>
          <div className="w-full h-98 lg:h-full lg:flex lg:flex-col lg:justify-center">
            <div className="text-sm flex justify-center lg:p-1 lg:text-2xl text-purple-600 font-extrabold" style={{ fontFamily: "Itim" }}>Who I am?</div>
            <div className="text-sm flex justify-center lg:p-4 lg:text-2xl" style={{ fontFamily: "Itim" }}>
              Hai I am Keerthivasan,
            </div>
            <div className="text-sm p-2  lg:text-2xl" style={{ fontFamily: "Itim" }}>
              I'm motivated and passionate full-stack developer eager to launch
              a career in web development, I possess a solid foundation in CSS,
              JavaScript, and the MERN stack (My Sql, Express.js, React,
              Node.js).
            </div>
            <div className="text-sm p-2 lg:text-2xl" style={{ fontFamily: "Itim" }}>
              I have successfully developed various projects that highlight my
              ability to create responsive and user-friendly web applications,
              including a personal portfolio site.
            </div>
            <div className="text-sm  flex p-2 lg:text-2xl" style={{ fontFamily: "Itim" }}>
              My background includes experience with Git for version control, I
              thrive in collaborative environments and enjoy tackling
              challenges, making me a dedicated team player committed to
              delivering high-quality software solutions. I am excited to
              contribute my skills and grow in a dynamic web development role.
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleDownloadCV}
                className="bg-purple-500 text-white font-bold py-1 px-3 rounded-2xl"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
