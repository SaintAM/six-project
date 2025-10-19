import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./data";
import "./index.scss";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    setCorrect(question.correct === index ? correct + 1 : correct);
  };

  return (
    <div className="App">
      {questions.length !== step ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
