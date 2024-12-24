import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import About from "./About";
import Sidenavbar from "./Sidenavbar";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1020);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1020);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const [scroll, setScroll] = useState(0); // State to track scroll position
  // Function to handle scroll event
  const handleScroll = () => {
    setScroll(window.scrollY); // Update scroll state with current scroll position
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  // Conditional logic for Navcolor based on scroll position
 
  let Navcolor = scroll < 266.4 ? " " : "bg-purple-500";
  
  return (
    <>
    {isLargeScreen ?
      <div className={`${loca ? ' text-white shadow-2xl shadow-purple-500':' '}flex w-full h-1/2 ${Navcolor}  justify-center items-center  pl-20`}>
        <div className="lg:w-11/12 sm:w-9/12 w-full h-20 flex items-center justify-between">
          <div
            className={`${loca ? 'text-purple-500 ':'text-whit'} lg:text-5xl text-3xl font-extrabold lg:w-1/5 w-full h-full flex items-center`} 
            style={{ fontFamily: "DynaPuff" }}
          >
            Portfolio
          </div>
          <div
            
            className={`${loca ? 'text-purple-500' : 'text-white'} w-full h-full flex justify-end items-center gap-14 ${
              isVisible ? 'translate-y-0 animate-fade-in-left' : '-translate-y-28 animate-fade-out'
            }`}
            style={{ fontFamily: "DynaPuff" }}
          >
            {/* <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skill</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link> */}
            <a href="#About">About</a>
            <a href="#Project">Project</a>
            <a href="#Skill">Skills</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className=" w-24 h-ful flex justify-center">
            <button className={`${loca ? 'text-black':'text-white'}`} onClick={() => toggleVisibility()}>
              {isVisible ? (
                 <RiCloseLargeFill className="lg:w-8 lg:h-8 w-6 h-6"  />
              ) : (
                <CiMenuBurger className="lg:w-8 lg:h-8 w-6 h-6"/>
              )}
            </button>
          </div>
        </div>
      </div>
  :
   <Sidenavbar/>
  }
    </>
  );
}

export default Navbar;
