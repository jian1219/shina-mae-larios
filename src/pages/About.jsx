import React from 'react'
import qalogo from "../icons/qa.png"
import { useNavigate } from 'react-router-dom';


import Footer from './Footer'
import ImageSlider from './components/ImageSlider';

function About() {
    const navigate = useNavigate();

    const goToAnotherPage = () => {
      navigate('/home');
    };
  return (
    <div className='bg-gradient'>
      <div className='home-bg-blur'>
            <div className='header'>
              <div className='header-left'>
                  <img className='w-[80px]' src={qalogo} alt="" />
                  <h1 className='text-[18px]'>Shina Mae</h1>
              </div>
              <div className='header-right'>
                  <button onClick={goToAnotherPage}>Home</button>
                  <button className='active'>About</button>
              </div>
            </div>

            <div className='mt-[20px] px-[10px]'>
              <ImageSlider />
            </div>

          <div className='footer'>
              <Footer />
          </div>
      </div>
  </div>
  )
}

export default About
