import React, { useState } from 'react';
import { supabase } from '../../config/supabaseClient'; // Ensure supabaseClient is set up correctly
import Header from '../components/Header';
import FlowFooter from '../components/FlowFooter';
import catgif from "../../icons/cat.gif";
import emojisad from "../../icons/cryingemoji.gif"; // Add an emoji sad GIF

function Survey() {
  const [response, setResponse] = useState(50); // Default range value (50%)
  const [isSubmitted, setIsSubmitted] = useState(false); // To handle submission state
  const [nickname, setNickname] = useState(''); // To store the second input (name to call)
  const [isNameVisible, setIsNameVisible] = useState(false); // To toggle the second question visibility

  const handleSubmit = async () => {
    // Insert the response into Supabase
    const { data, error } = await supabase
      .from('survey')
      .insert([{ survey1: response, survey2: nickname }]); // Include nickname if available

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      setIsSubmitted(true); // Indicate that the response has been submitted
    }
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;
    setResponse(value);
    setIsNameVisible(value > 70); // If percentage is above 70%, show the second question
  };

  return (
    <div className='flow-2'>
      <div className='flow-header-top'>
        <Header />
      </div>
      <div className='flow-scroll'>
        <div className='flex justify-center mt-10'>
          <img className='w-[170px] rounded-[50%]' src={catgif} alt="Cat GIF" />
        </div>
        <h1 className='text-center text-[20px] font-semibold'>Shin Simple Question</h1>
        <div className='text-center mt-5 px-[20px]'>
          <p className='text-[16px] font-medium'>How many percent would you say yes if I "ligaw" you shin?</p>
          <input
            type="range"
            min="0"
            max="100"
            value={response}
            onChange={handleRangeChange}
            className="mt-4 w-[90%]"
          />
          <div className='mt-2'>
            <span className='text-sm'>{response}%</span>
          </div>

          {isNameVisible ? (
            <div className='mt-5 flex justify-center'>
                <div className='w-[90%]'>
                    <p className='text-[14px] font-medium'>In the future Unsay Gusto nimo Tawagan shin HAHAHAHHA?</p>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Input here"
                        className="mt-2 p-1 border rounded-lg"
                    />
                </div>
              
            </div>
          ) : response <= 70 ? (
            <div className='mt-5'>
              <img className='w-[100px] mx-auto' src={emojisad} alt="Sad Emoji" />
            </div>
          ) : null}

          <div className='mt-4'>
            <button 
              onClick={handleSubmit}
              className='px-6 py-2 button-survey text-white rounded-lg'
            >
              Submit
            </button>
          </div>
        </div>

        {isSubmitted && (
          <div className='mt-1 text-[10px] text-center color-survey-submit'>
            Thank you for your response Shin! Your answer has been saved.
          </div>
        )}
      </div>
      <div className='flow-footer-bot'>
        <FlowFooter />
      </div>
    </div>
  );
}

export default Survey;
