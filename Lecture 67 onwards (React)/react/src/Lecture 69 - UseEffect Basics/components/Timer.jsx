import { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("Timer started");
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer deleted");
    };
  }, []);
  return (
    <>
      <p>{time}</p>
    </>
  );
}

export default Timer;
