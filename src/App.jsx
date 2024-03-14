import "./App.css";
import { useState } from "react";
import question from "./constants/questions.json";
import Question from "./components/Question";
import Answer from "./components/Answer";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };

  const resetQuitz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };
  return (
    <div className="App">
      <h1>Quitz App</h1>
      {/* user question coponent */}
      {currentQuestion < question.length && (
        <Question
          question={question[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {/* user Answer coponent */}
      {currentQuestion === question.length && (
        <Answer
          userAnswer={userAnswer}
          question={question}
          resetQuitz={resetQuitz}
        />
      )}
    </div>
  );
}

export default App;
