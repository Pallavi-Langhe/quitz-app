import React from "react";
import "../App.css";

const Answer = ({ userAnswer, question, resetQuitz = () => {} }) => {
  const correctAnswer = userAnswer.filter((answer) => answer).length;
  return (
    <div className="results">
      <h1>Result</h1>
      <p>
        You answer {correctAnswer} answers correct out of {question.length}
        <span onClick={resetQuitz}> Click here io retry</span>
      </p>

      <ul>
        {question.map((que, index) => {
          return (
            <li key={index} data-correct={userAnswer[index]}>
              Q{index + 1}. {que.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answer;
