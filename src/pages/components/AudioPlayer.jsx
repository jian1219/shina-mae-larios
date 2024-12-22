import React, { useRef, useState } from 'react';

import audio from "../../audio/music.mp3";
import playIcon from "../../icons/play (1).png";
import pauseIcon from "../../icons/pause.png";

import ImageSlider from './ImageSlider';

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
       <div className='mt-[20px] px-[10px]'>
          <ImageSlider />
        </div>
        <div className='mt-5'>
        <h1 className='poem italic'>Like the dandelions drifting in the wind, my love for you is carried everywhere, growing stronger with each passing moment, as if the universe itself is wishing for us to be together forever</h1>
        </div>
      <audio ref={audioRef}>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='flex justify-center mt-[40px]'>
        <button onClick={handlePlayPause}>
          <img
            className='w-[70px]'
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
