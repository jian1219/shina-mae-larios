import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation

function Lock() {
  const [inputValue, setInputValue] = useState(''); // Store the input value
  const [error, setError] = useState(''); // Store error message
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    
    // Example: check if the input value is correct
    if (inputValue === 'ianpogi') {
      // Navigate to another page (e.g., /home)
      navigate('/welcome');
    } else {
      // Set error message if the input is incorrect
      setError('Incorrect input, please try again.');
    }
  };

  return (
    <div className="lock-page text-center mt-[100px]">
        <h1>LOCK for testing</h1>
      <h1>Enter the Correct Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
          placeholder="Enter password"
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
      {error && <p className="error-message">{error}</p>} {/* Display error message if input is incorrect */}
    </div>
  );
}

export default Lock;
