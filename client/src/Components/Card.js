import React from "react";
// import photo from "../assets/task.jpg";
import photos from "../assets/profesional photo.jpg";
import { FaGithub } from "react-icons/fa";

function Card({data}) {
  return (
    <>
       <div className="lg:w-3/12 w-full lg:h-3/5 h-80  ">
        <div className="w-full h-full rounded-xl border-2 bg-black border-black">
          <div className="w-full h-16  rounded-t-xl pl-5 flex items-center ">
            <div className="lg:w-11 lg:h-4/6 w-10 h-10 rounded-full flex">
              <img
                src={photos}
                alt="profile"
                className="rounded-full w-full h-full lg:border-4 border-2 border-purple-500"
              />
            </div>
            <div className="pl-4 font-bold text-white text-xs lg:text-base">
              {data.name}
              {/* KEERTHIVASAN K */}
              <div className="font-thin underline text-white text-xs lg:text-sm">
                {/* Task Management System */}
                {data.title}
              </div>
            </div>
          </div>
          {/* <div className="w-full h-24 flex items-center"> */}
            <div className="text-white pl-2 ">
              <div className="pl-1 font-extrabold text-sm lg:text-xl">Project describition</div>
              <p className="pl-4 p-2 text-xs lg:text-sm">
                {/* A Task Management System is a tool that helps organize, assign,
                and track tasks in real-time, improving team productivity and
                workflow efficiency. It enables users to set deadlines,
                prioritize tasks, and collaborate effectively. */}
                {data.describition}
              </p>
            </div>
          {/* </div> */}
          <div className="h-29 lg:h-56 w-full p-2  rounded-b-xl flex justify-center items-center relative ">
            <img src={data.img} alt="" className="w-10/12 h-full rounded-2xl text-white hover:animate-zoom-in" />
            <div className="lg:w-14 lg:h-14 w-8 h-8 rounded-full bg-white absolute bottom-2 lg:right-14 right-10 opacity-75">
              <button className="w-full h-full">
                <FaGithub className="w-full h-full hover:text-blue-800 " />
              </button>
            </div>
          </div>
        </div>
       </div>
    </>
  );
}

export default Card;
