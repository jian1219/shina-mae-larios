import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';

function QandA1() {
  // State to track the current question index and selected answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  // List of questions and their options
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["a. Red", "b. Blue", "c. Green", "d. Yellow"]
    },
    {
      question: "What is your dream job?",
      options: ["a. Doctor", "b. Engineer", "c. Artist", "d. Teacher"]
    },
    {
      question: "What do you like to do in your free time?",
      options: ["a. Reading", "b. Playing Sports", "c. Watching TV", "d. Traveling"]
    },
    {
      question: "What is your favorite type of music?",
      options: ["a. Pop", "b. Rock", "c. Jazz", "d. Classical"]
    },
    {
      question: "What is your favorite food?",
      options: ["a. Pizza", "b. Sushi", "c. Burgers", "d. Pasta"]
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // State to track the selected answer for the current question
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Handle answer selection
  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle "Next" button click
  const handleNextQuestion = () => {
    // Save the selected answer
    setAnswers((prev) => ({
      ...prev,
      [`question${currentQuestionIndex + 1}`]: selectedAnswer
    }));

    // Move to the next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer('');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAnswers(); // Submit answers to Supabase
    }
  };

  // Submit answers to Supabase
  const submitAnswers = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .insert([answers]);

      if (error) {
        console.error('Error submitting answers:', error);
      } else {
        console.log('Answers submitted successfully:', data);
        alert('Thank you for completing the questions!');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <div className="flex justify-center mt-[20px] qandA">
      <div className="question-container w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Question {currentQuestionIndex + 1}:</h2>
        <p className="mb-4">{currentQuestion.question}</p>

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

        <div className="flex justify-center">
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer} // Disable until an answer is selected
            className={`px-4 py-2 text-white rounded ${
              selectedAnswer ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-300'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QandA1;
