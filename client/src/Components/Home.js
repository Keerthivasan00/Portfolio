import React, { useEffect, useState } from "react";
import header from "../assets/header.jpg";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";

function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${header})` }}
    >
      {isLargeScreen ? <Navbar /> : <Sidenavbar />}
    </div>
  );
}

export default Home;
