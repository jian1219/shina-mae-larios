import React, { useState } from 'react';
import QandA1 from './QandA1'; // Make sure this is a valid component

function Question() {
  // State to track if the "Continue" button has been clicked
  const [showQuestion, setShowQuestion] = useState(false);

  // Function to handle the button click
  const handleContinueClick = () => {
    setShowQuestion(true); // Show the question after the button is clicked
  };

  return (
    <div className='px-5'>
      <h1 className='text-[12px] '>
        Shin i want a night call hahaha, whyy are you so very himoss. I created this website para madali ang oras and to ask you a very very simple questions
      </h1>


      {/* Show the "Continue" button */}
      {!showQuestion && (
        <div className='mt-[20px]'>
            <h2 className='text-center mt-10'>Click the Button Shin</h2>
            <div className='flex justify-center'>
                <button className='question-button mt-[30px]' onClick={handleContinueClick}>
                    Continue
                </button>
            </div>
        </div>
      )}

      {/* Show the question component after clicking the "Continue" button */}
      {showQuestion && <QandA1 />}
    </div>
  );
}

export default Question;
