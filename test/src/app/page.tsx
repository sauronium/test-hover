'use client';
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './animatehand.json';

const MyLottieComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={"w-[50%] flex item-center border-8 "}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie
        animationData={animationData}
        loop={isHovered} // Prevent looping when not hovered
        autoplay={true} // Play only on hover
        style={{ height: '500px', width: '800px' }} 
      />
    </div>
  );
};

export default MyLottieComponent;