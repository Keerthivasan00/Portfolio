 import React, { useState } from 'react';
import Navbar from './Navbar';

function Project() {
  const project = [
    { id: 1, name: "keerthi" },
    { id: 2, name: "vasu" },
    { id: 3, name: "hari" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.length) % project.length);
  };

  return (
    <>
      <Navbar />
      <div className='w-full xl:h-25 h-26 flex items-center'>
        <div className='w-full h-5/6 bg-pink-300 flex gap-10 justify-center '>
          <button onClick={handleClickLeft}>Left</button>
          <button onClick={handleClickRight}>Right</button>
          <div>
            {/* Display the name of the current project */}
            {project[currentIndex].name}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
