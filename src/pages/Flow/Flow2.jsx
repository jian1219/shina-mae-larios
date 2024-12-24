import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import FlowFooter from '../components/FlowFooter';
import shin11 from "../../images/shin11.jpg";
import playIcon from "../../icons/play (1).png";
import pauseIcon from "../../icons/pause.png"
import ImageSlider from '../components/ImageSlider';
import audio from "../../audio/music.mp3";
import pubgpic from "../../images/pubgpic.jpg"
import qandA from "../../icons/qa.png"
import AudioPlayer from '../components/AudioPlayer';
import onepiece from "../../icons/onepiece.jpg"
import zoro from "../../icons/Roronoa_Zoro.jpg"
import ChristmasTree from '../../images/christmas_tree-removebg-preview.png';



function Flow2() {
  const audioRef = useRef(null);
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);  // State for audio player visibility
  const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(true);  // State for play button visibility

  const handlePlayClick = () => {
    setIsAudioPlayerVisible(true);  // Show the audio player
    setIsPlayButtonVisible(false);  // Hide the play button when clicked

    // Play the audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio play failed:', error);
      });
    }
  };

  const navigate = useNavigate(); // Initialize useNavigate
  

  return (
    <div className='flow-2'> 
      <div className='flow-header-top'>
        <Header />
      </div>
      <div className='flow-scroll'>
        <div className='flow-2-content'>
          <div className='text-center'>
            <img className='rounded-lg' src={shin11} alt="" />
            <h1 className='mt-2 text-[17px] font-semibold'>shina the cutie</h1>
            <h1 className='text-[12px] px-2'>I could write a thousand poems about her beauty, yet no words could capture the way she makes my heart race when she’s near.</h1>
          </div>
          <div className='mt-[20px] mb-[20px] pb-[30px] border-y-2 border-grey'>
            <h1 className='ml-2 mt-3 font-semibold'>Ruth B. - Dandelions</h1>
            
            <div className='px-[10px] text-[13px] mt-[6px]'>
              <p>Every time I hear Dandelions by Ruth B, I think of you. It's like the song was written about how I feel—wishing on every dandelion for you to always be in my life. You make my heart feel full, like I’m living in a dream that I never want to wake up from. 🌼💛</p>
            </div>
            <div>
              <AudioPlayer />
            </div>
           
            {/* Show the audio player and play the audio when the button is clicked */}
          
          </div>
          <div>
            <img src={pubgpic} alt="" />
            <h1 className='text-center text-[13px] mt-[2px]'>Playing PUBG and winning</h1>
          </div>
          <div className='text-center mt-10'>
            <h1 className='text-[16px] font-semibold'>Small Survey Shin hahaha</h1>
            <button className='qandAbutton' onClick={() => navigate('/survey')}> <img className='w-[100px]' src={qandA} alt="" /> </button>
          </div>
          <div className='mb-10 mt-10'>
            <div className='flex justify-center'>
              <button  onClick={() => navigate('/christmasTree')}><img className='w-[100px]' src={ChristmasTree} alt="" /></button>
            </div>
            <h1 className='text-[20px] font-semibold text-center'>Click Christmas Tree</h1>
          </div>
          <div className='py-2 flex items-center'>
            <img className='w-[200px]' src={zoro} alt="" />
            <div className='text-center px-4'>
              <p>THERE IS SOMEONE THAT I MUST MEET AGAIN. AND UNTIL THAT DAY... NOT EVEN DEATH ITSELF CAN TAKE MY LIFE AWAY</p>
              <p className='mt-[20px]'>- RORONOA ZORO</p>
            </div>
           
          </div>
          <div>
            <img src={onepiece} alt="" />
          </div>
        </div>
      </div>

      <div className='flow-footer-bot'>
        <FlowFooter />
      </div>
    </div>
  );
}

export default Flow2;
