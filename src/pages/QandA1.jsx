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
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Track submission success
  const [userInput, setUserInput] = useState(''); // State for user input answers
  const [selectedAnswer, setSelectedAnswer] = useState(''); // State for selected answer

  // List of questions and their options
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["a. Red", "b. Blue", "c. Green", "d. Yellow"]
    },
    {
      question: "What kind of personality do you find most attractive in a guy?",
      options: ["a. Outgoing", "b. Caring", "c. Fun-loving", "d. Strong and independent"]
    },
    // Other questions...
    {
      question: "Shin do you miss me",
      input: true // Marks this question as one with user input
    },
    {
      question: "Aside from me, is there anyone else entertaining you?",
      input: true // Marks this question as one with user input
    },
    {
      question: "Party shin ha pag new season",
      input: true // Marks this question as one with user input
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer selection for multiple choice questions
  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle user input for questions that require input
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle "Next" button click
  const handleNextQuestion = () => {
    // Save the selected answer or input
    if (currentQuestion.input) {
      setAnswers((prev) => ({
        ...prev,
        [`question${currentQuestionIndex + 1}`]: userInput
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [`question${currentQuestionIndex + 1}`]: selectedAnswer
      }));
    }

    // Move to the next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer('');
      setUserInput('');
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
        setSubmissionSuccess(true); // Set submission success to true
        alert('Thank you for completing the questions shin!');
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

        {/* Display options for multiple-choice questions */}
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
          // Display input field for questions that require user input
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
            disabled={currentQuestion.input ? !userInput : !selectedAnswer} // Disable until an answer is selected or input is given
            className={`px-4 py-2 text-white rounded ${currentQuestion.input ? (userInput ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-300') : (selectedAnswer ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-300')}`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>

      {/* Hidden div that is displayed after successful submission */}
      {submissionSuccess && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="text-green-700 font-semibold">Submission Successful!</h3>
          <p>Your responses have been successfully submitted. Thank you!</p>
        </div>
      )}
    </div>
  );
}

export default QandA1;
