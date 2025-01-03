import React, { useEffect, useState } from 'react';
import "../css/General.css";
import { useNavigate } from 'react-router-dom';

import shina1 from "../images/shina pic1.jpg"

function Welcome() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false); // Remove cursor after typing animation finishes
    }, 2300); // Match the duration of the typing animation (3s)

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const goToAnotherPage = () => {
    navigate('/flow1');
  };

  return (
    <div className="welcome-bg text-white">
        <div className="flex justify-center pt-20">
            <div className='text-center'>
                <h1 className={`text-animate ${!showCursor ? 'no-cursor' : ''}`}>
                    Hello shina 
                </h1>
                <br />
                <h1 className={`text-animate ${!showCursor ? 'no-cursor' : ''}`}>
                    Your so Cutie pie
                </h1>
                <div className='flex justify-center'>
                    <img className='w-[210px] rounded-lg' src={shina1} alt="" />
                </div>
               
                <br />
                <h1 className={`text-animate ${!showCursor ? 'no-cursor' : ''}`}>
                    Shin and miming
                </h1>
                <br />
                <button onClick={goToAnotherPage} className='Welcome-but'>Continue</button>
                <br />
                <p className='mt-[30px] text-[10px] italic'>use cp for best experience</p>
            </div>

        </div>
    </div>
  );
}

export default Welcome;
