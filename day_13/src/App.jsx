
import React, { useState } from 'react';
import questions from "./questions.json";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    const isCorrect =
      option === questions[currentIndex].correct_answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(
        "Your score is " + (score + (isCorrect ? 1 : 0))
      );
    }
  };

  const prevhandler = () => {
    setCurrentIndex(
      (currentIndex - 1 + questions.length) % questions.length
    );
  };

  const nexthandler = () => {
    setCurrentIndex((currentIndex + 1) % questions.length);
  };

  return (
    <div>
      <h1>Quiz App</h1>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <p>{questions[currentIndex].question}</p>

      <div className="options">
        {questions[currentIndex].options.map((option, index) => (
          <button key={index} onClick={() => checkAnswer(option)}>
            {option}
          </button>
        ))}
      </div>

      <button onClick={prevhandler}>Previous</button>
      <button onClick={nexthandler}>Next</button>

      <p>Score: {score}</p>
    </div>
  );
};

export default App;
