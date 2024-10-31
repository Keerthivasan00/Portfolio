import React, { useEffect, useState } from "react";
import header from "../assets/header.jpg";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import Landing from "./Landing";

function Home() {
  // const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1020);

  // useEffect(() => {
  //   const handleResize = () => setIsLargeScreen(window.innerWidth >= 1020);

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${header})` }}
    >
      <div className="h-1/6 w-auto"><Navbar/></div>
      <Landing/>
    </div>
    
    </>
    
  );
}

export default Home;
