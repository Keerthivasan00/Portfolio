import React, { useEffect,useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link,useLocation } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";

function Sidenavbar() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    const location = useLocation();
  const homePath = '/';
  const [loca, setLoca] = useState(false);

  useEffect(() => {
    if (location.pathname !== homePath) {
      setLoca(true);
    } else {
      setLoca(false); 
    }
  }, [location.pathname]); 

  return (
    <>
      <div className="w-full h-20 flex pt-6">
        <div
          className={`${loca ? 'text-purple-400 bg-white':' text-white '}lg:text-5xl text-3xl font-extrabold pl-2 lg:w-1/5 w-2/5 h-full flex items-center`}
          style={{ fontFamily: "DynaPuff" }}
        >
          Portfolio
        </div>
        <button className={`${loca ? 'text-black':'text-white'} fixed right-5 pt-5`} onClick={()=>toggleVisibility()}>
        {isVisible ? (
                 <RiCloseLargeFill className="lg:w-8 lg:h-8 w-6 h-6"  />
              ) : (
                <CiMenuBurger className="lg:w-8 lg:h-8 w-6 h-6"/>
              )}
        </button>
      </div>
      <div
      className={`${
        loca ? 'text-purple-400' : 'text-white'} w-24 h-96 fixed right-0 flex flex-col gap-5 items-end pr-5 text-lg transform transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-x-0 animate-fade-in' : 'translate-x-full animate-fade-out'
      }`}
      style={{ fontFamily: "DynaPuff" }}
    >
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skill</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
}

export default Sidenavbar;
