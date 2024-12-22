import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logoshin from "../../images/logoshin.jpg";
import me_myselfpic from "../../images/me_myself.jpg";
import shin4 from "../../images/shin 4.jpg";
import shin3 from "../../images/shin 3.jpg";
import petlogo from "../../icons/pets.png";
import fbdating from "../../icons/facebookdating.jpg";
import Mlandpubg from "../../icons/ML and pubg.jpg";
import dikewithshin from "../../video/dike.mp4";
import ShinaCat from "../../images/shinacat.jpg"

import Footer from '../Footer';

import audio from "../../audio/music.mp3";
import playIcon from "../../icons/play (1).png";
import pauseIcon from "../../icons/pause.png";

function Flow1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation


 

  // Array of content to display
  const contentArray = [
    {
      img: me_myselfpic,
      title: "This is me The Creator of this Web",
      description: [
        "I work on this when I'm bored.",
        "This Website is all about how I see Shina. The bigger the web the bigger Shina means to me.",
        "Created in December 20 2024.",
      ],
    },
    {
      img: logoshin,
      title: "Shin - Shina - Yam",
      description: [
        "Shina has always been my inspiration on creating this web.",
        "This web shows ...........",
      ],
    },
    {
      img: fbdating,
      title: "Facebook Dating.",
      description: [
        "Shina and I met through Facebook Dating. When I first saw her, she seemed humble and reserved, but I couldn’t shake the thought that it might be a scam. Despite my doubts, we started chatting, and I quickly realized she was genuine and kind.",
        "As our conversations grew, I felt more comfortable and asked for her Facebook account. Through our exchanges there, I got to know her better, and my doubts completely disappeared. Meeting Shina turned out to be a wonderful experience, bringing joy and authenticity into my life.",
      ],
    },
    {
      img: ShinaCat,
      title: "Shina and I both share a love for cats",
      description: [
        "It's always nice to connect with someone who shares the same passion, especially when it comes to the joy and companionship that cats bring.",
      ],
    },
    {
      img: Mlandpubg,
      title: "Online Games",
      description: [
        "As we got to know each other, I discovered that Shina loves playing Mobile Legends and PUBG. This common interest brought us even closer as we started playing together, sharing laughs and strategies in the game. It became one of the ways we bonded and spent quality time.",
      ],
    },
    {
      video: dikewithshin,
      title: "Firstmeet ",
      description: [
        "Dike CBR.",
        "I see a very himos shina and naa pay pa tabon sa face shhhh HAHAHAHA eyts",
      ],
    },
  ];

  const handleNext = () => {
    if (currentIndex === contentArray.length - 1) {
      // Navigate to another page if it's the last content
      navigate('/flow2'); // Replace '/another-page' with the desired route
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentContent = contentArray[currentIndex];

  return (
    <div className="flow1-bg">
      <div className='height100'>
           {/* Header Section */}
        <div className="flow1-header">
          <div className="flex items-center">
            <img src={petlogo} alt="Logo" />
            <h1>Shina Cutie</h1>
          </div>
         
        </div>

        {/* Dynamic Content Section */}
        <div className="flex justify-center mt-[20px]">
          <div className="flow-content">
            <div className="img-gradient-border">
              <div className="flex justify-center">
                {currentContent.video ? (
                  <video autoPlay loop muted className="w-[190px]">
                    <source src={currentContent.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={currentContent.img} alt="Content" />
                )}
              </div>
            </div>
            <div className="message">
              <div>
                <h1>{currentContent.title}</h1>
                {currentContent.description.map((text, index) => (
                  <p key={index} className="text-[12px] mt-[10px]">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <button onClick={handleNext} aria-label="Next content">
              NEXT
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Flow1;
