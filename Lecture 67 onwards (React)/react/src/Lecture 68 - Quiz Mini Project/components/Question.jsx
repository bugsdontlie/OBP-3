import Option from "./Option";

function Question({
  showNextQues,
  question,
  captureUserResponse,
  currentQuestionIdx,
}) {
  return (
    <>
      <h1>{question?.title}</h1>
      {question?.options?.map((option, ind) => {
        return (
          <Option
            showNextQues={showNextQues}
            key={ind}
            ind={ind}
            option={option}
            currentQuestionIdx={currentQuestionIdx}
            captureUserResponse={captureUserResponse}
          />
        );
      })}
    </>
  );
}

export default Question;
