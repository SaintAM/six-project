import { questions } from "../data";

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, i) => (
          <li key={text} onClick={() => onClickVariant(i)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
