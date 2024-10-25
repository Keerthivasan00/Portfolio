import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex w-auto h-1/6 justify-center items-center">
        <div className="lg:w-11/12 sm:w-9/12 w-full h-24 flex items-center justify-between">
          <div
            className="lg:text-5xl text-3xl font-extrabold text-white lg:w-1/5 w-full h-full flex items-center"
            style={{ fontFamily: "DynaPuff" }}
          >
            Portfolio
          </div>
          <div
            className={`w-full h-full flex justify-end items-center gap-14 text-white ${
              isVisible
                ? "translate-y-0 animate-fade-in-left"
                : "-translate-y-28 animate-fade-out"
            }`}
            style={{ fontFamily: "DynaPuff" }}
          >
            <Link to="/home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skill</Link>
            <Link to="/Projects">Project</Link>
            <Link to="Contact">Contact</Link>
          </div>
          <div className=" w-24 h-ful flex justify-center">
            <button className="text-white " onClick={() => toggleVisibility()}>
              {isVisible ? (
                 <RiCloseLargeFill className="lg:w-8 lg:h-8 w-6 h-6"  />
              ) : (
                <CiMenuBurger className="lg:w-8 lg:h-8 w-6 h-6"/>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
