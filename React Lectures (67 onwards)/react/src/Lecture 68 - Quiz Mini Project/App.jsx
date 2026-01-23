import { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const quiz = [
    {
      title: "djfhdfo d jwdj fd",
      options: ["dwdwdwd", "DWdwdwd", "iefh kdjv", "ekfnjdfj"],
      correctOption: 3,
      score: 40,
    },
    {
      title: "2 djfhdfo d jwdj fd",
      options: ["dwdwdwd", "DWdwdwd", "iefh kdjv", "ekfnjdfj"],
      correctOption: 3,
      score: 40,
    },
    {
      title: "3 djfhdfo d jwdj fd",
      options: ["dwdwdwd", "DWdwdwd", "iefh kdjv", "ekfnjdfj"],
      correctOption: 3,
      score: 40,
    },
    {
      title: "4 djfhdfo d jwdj fd",
      options: ["dwdwdwd", "DWdwdwd", "iefh kdjv", "ekfnjdfj"],
      correctOption: 3,
      score: 40,
    },
  ];

  /* 
  
  an ideal user response will look like: 

  userResponse = {
    0: 3,
    1: 2,
    2: 2,
    3: 1,
    5: 0
  };

  this will be achieved using something like this:
  const obj = {};
  obj[1] = 2;
  
  will give
  obj = {1: 2}
  */
  const [userResponse, setUserResponse] = useState({});
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  function captureUserResponse(qIdx, oIdx) {
    setUserResponse((userResponse) => {
      userResponse[qIdx] = oIdx;
      return userResponse;
    });
  }

  function calScore() {
    let totalScore = 0;
    console.log({ userResponse });

    for (let i = 0; i < quiz.length; i++) {
      if (userResponse[i] === quiz[i].correctOption)
        totalScore += quiz[i].score;
    }
    console.log({ totalScore });

    setScore(totalScore);
  }

  return (
    <>
      {!isComplete ? (
        <Quiz
          quiz={quiz}
          captureUserResponse={captureUserResponse}
          setIsComplete={setIsComplete}
          calScore={calScore}
        />
      ) : (
        <h1>{score}</h1>
      )}
    </>
  );
}

export default App;
