import React from 'react'
import qalogo from "../icons/qa.png"
import { useNavigate } from 'react-router-dom';
import Question from './Question'
import Footer from './Footer'

function Home() {

    const navigate = useNavigate();

    const goToAnotherPage = () => {
      navigate('/about');
    };
  return (
    <div className='bg-gradient'>
        <div className='home-bg-blur'>
            <div className='test'>
                <div className='header'>
                    <div className='header-left'>
                        <img className='w-[80px]' src={qalogo} alt="" />
                        <h1 className='text-[18px]'>Shina Mae</h1>
                    </div>
                    <div className='header-right'>
                        <button className='active'>Home</button>
                        <button onClick={goToAnotherPage}>About</button>
                    </div>

                
                </div>

                <div className='flex justify-center mt-[30px]'>
                    <Question />
                </div>
            </div>
           
            <div className='footer'>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Home
