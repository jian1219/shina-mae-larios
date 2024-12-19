import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';

function QandA1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      question: "What is your favorite color?",
      input: true // Marks this question as one with user input
    },
    {
      question: "What kind of personality do you find most attractive in a guy?",
      input: true // Marks this question as one with user input
    },
    {
      question: "What's something a guy could do to really impress you?",
      options: ["a. Be thoughtful", "b. Be funny", "c. Be a good listener", "d. Be spontaneous"]
    },
    {
      question: "What is your favorite type of music?",
      options: ["a. Pop", "b. Rock", "c. Jazz", "d. Classical"]
    },
    {
      question: "What's your idea of a perfect date?",
      input: true // Marks this question as one with user input
    },
    {
      question: "What's something you can't live without?",
      input: true // Marks this question as one with user input
    },
    {
      question: "What's something that always makes you smile?",
      input: true // Marks this question as one with user input
    },
    {
      question: "What kind of kisses do you enjoy most?",
      options: ["a. Soft and slow", "b. Passionate and intense", "c. Light and playful", "d. Unexpected and surprising"]
    },
    {
      question: "How do you feel about public displays of affection?",
      options: ["a. I love them!", "b. Only in the right setting", "c. I prefer more private moments", "d. Depends on the person"]
    },
    {
      question: "Shin do you miss me?",
      input: true // Marks this question as one with user input
    },
    {
      question: "Aside from me, is there anyone else entertaining you?",
      options: ["a. Yes", "b. No", "c. Maybe", "d. Secret"]
    },
    {
      question: "Kung mang harana ko sa imo shin unsa na song imo gusto HAHAHA eyts",
      input: true // Marks this question as one with user input
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion.input) {
      setAnswers((prev) => ({
        ...prev,
        [`question${currentQuestionIndex + 1}`]: userInput,
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [`question${currentQuestionIndex + 1}`]: selectedAnswer,
      }));
    }

    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer('');
      setUserInput('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert([answers]);

      if (error) {
        console.error('Error submitting answers:', error);
      } else {
        console.log('Answers submitted successfully:', data);
        setSubmissionSuccess(true);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <div className="flex justify-center mt-[20px] qandA">
      {!submissionSuccess && (
        <div className="question-container w-full max-w-md p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Question {currentQuestionIndex + 1}:</h2>
          <p className="mb-4">{currentQuestion.question}</p>

          {!currentQuestion.input ? (
            <div className="mb-4">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question${currentQuestionIndex + 1}`}
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => handleAnswerChange(option)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-4">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your answer here..."
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestion.input ? !userInput : !selectedAnswer}
              className={`px-4 py-2 text-white rounded ${
                currentQuestion.input
                  ? userInput
                    ? 'bg-blue-700 hover:bg-blue-600'
                    : 'bg-gray-300'
                  : selectedAnswer
                  ? 'bg-blue-700 hover:bg-blue-600'
                  : 'bg-gray-300'
              }`}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      )}

      {submissionSuccess && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="text-green-700 font-semibold">Submission Successful!</h3>
          <p className='text-black'>Your responses have been successfully submitted. Thank you!</p>
        </div>
      )}
    </div>
  );
}

export default QandA1;
