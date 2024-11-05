import React from "react";
import Navbar from "./Navbar";
import c from "../assets/skills icon/c.png";
import cpluse from "../assets/skills icon/c++.png";
import node from "../assets/skills icon/node.png";
import reacts from "../assets/skills icon/react.png";
import java from "../assets/skills icon/java.png";
import mysql from "../assets/skills icon/mysql.png";
import css from "../assets/skills icon/css.png";
import js from "../assets/skills icon/js.png";

function Skills() {
  return (
    <>
      <Navbar />
      <div className="w-full  xl:h-25 h-26 flex items-center bg-purple-100 ">
        <div className="w-full h-4/5 border-2 border-purple-200 flex flex-wrap lg:gap-x-20 gap-x-9 items-center justify-center ">
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={c} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={cpluse} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={java} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={css} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={js} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={reacts} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={node} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
          <div className="lg:w-80 lg:h-48 w-36 h-28  border-2 border-purple-400 hover:animate-pulse flex justify-center items-center ">
            <img src={mysql} alt="" className="lg:w-36 w-20 h-20 lg:h-36 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
