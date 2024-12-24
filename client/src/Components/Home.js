import React, { useEffect, useState } from "react";
import header from "../assets/header.jpg";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <>
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${header})` }}
    >
      
      {/* <Landing/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/> */}
      <section className="w-full h-screen" id="Home">
        <Landing/>
        </section>
    
        <section className="w-full h-screen " id="About">
          <About />
        </section>
        <section className="w-full h-screen " id="Skill">
          <Skills />
        </section>
        <section className="w-full h-screen " id="Project">
          <Project />
        </section>
        <section className="w-full h-screen " id="Contact">
          <Contact />
        </section>
    
    </div>
     <div>
     <div className="h-1/6 w-full fixed top-0"><Navbar/></div>
     
     </div> 
       
     
     
    
    
    
    </>
    
  );
}

export default Home;
