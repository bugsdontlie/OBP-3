import { useState } from "react";
import Question from "./Question";

function Quiz({ quiz, captureUserResponse, setIsComplete, calScore }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  function isLastQuestion() {
    return currentQuestionIdx === quiz?.length - 1;
  }

  function showPrevQues() {
    if (currentQuestionIdx === 0) return;
    setCurrentQuestionIdx((currentQuestionIdx) => currentQuestionIdx - 1);
  }

  function showNextQues() {
    if (isLastQuestion()) {
      setIsComplete(true);
      calScore();
      return;
    }
    setCurrentQuestionIdx((currentQuestionIdx) => currentQuestionIdx + 1);
  }
  return (
    <>
      {/* IF WE WANT TO SHOW ALL QUESTIONS AT ONCE, WE JUST NEED THIS CODE
      {quiz.map((question, ind) => {
        return <Question key={ind} question={question} />;
      })} */}
      <Question
        question={quiz[currentQuestionIdx]}
        captureUserResponse={captureUserResponse}
        currentQuestionIdx={currentQuestionIdx}
        showNextQues={showNextQues}
      />
      <button onClick={showPrevQues}>Prev</button>
      <button onClick={showNextQues}>
        {isLastQuestion() ? "Submit" : "Next"}
      </button>
    </>
  );
}

export default Quiz;
