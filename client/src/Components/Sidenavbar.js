import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

function Sidenavbar() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <>
      <div className="w-full h-28 flex pt-7">
        <div
          className="lg:text-5xl text-3xl font-extrabold text-white pl-2 lg:w-1/5 w-2/5 h-full flex items-center"
          style={{ fontFamily: "DynaPuff" }}
        >
          Portfolio
        </div>
        <button className="text-black fixed right-5 pt-7" onClick={()=>toggleVisibility()}>
          <CiMenuBurger className="lg:w-8 lg:h-8 w-6 h-6" />
        </button>
      </div>
      <div className={`w-24 h-96 fixed right-0 flex flex-col gap-5 items-end pr-5 text-white text-lg transform transition-all duration-500 ease-in-out ${isVisible ? 'translate-x-0 animate-fade-in' :'translate-x-full animate-fade-out'}`} style={{fontFamily:"DynaPuff"}}>
            <Link to="/home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skill</Link>
            <Link to="/Projects">Project</Link>
            <Link to="Contact">Contact</Link>
      </div>
    </>
  );
}

export default Sidenavbar;
