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
      <div className="w-full bg-purple-500 h-20.2 flex justify-between  pr-3">
        <div
          className={`${loca ? 'text-purple-500':' text-white '}lg:text-5xl ${Navcolor} text-3xl font-extrabold pl-2 lg:w-1/5 w-2/5 h-full flex items-center`}
          style={{ fontFamily: "DynaPuff" }}
        >
          Portfolio
        </div>
        <button className={`${loca ? 'text-black':'text-white'} pt-1`} onClick={()=>toggleVisibility()}>
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
