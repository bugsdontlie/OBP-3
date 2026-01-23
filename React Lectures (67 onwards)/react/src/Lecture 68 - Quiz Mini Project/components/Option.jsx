function Option({
  showNextQues,
  ind,
  option,
  currentQuestionIdx,
  captureUserResponse,
}) {
  return (
    <p
      style={{ cursor: "pointer" }}
      onClick={() => {
        captureUserResponse(currentQuestionIdx, ind);
        showNextQues();
      }}
    >
      {option}
    </p>
  );
}

export default Option;
