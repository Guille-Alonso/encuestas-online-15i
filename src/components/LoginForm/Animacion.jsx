import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from "../../asset/Login/hello.json";

export default function AnimacionLogo() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      autoSize
      
      style={{ 
        width: 250, 
        height:250,
        
                      
     }}
    />
  )
}