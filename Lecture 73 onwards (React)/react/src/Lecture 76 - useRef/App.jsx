import { useEffect, useRef, useState } from "react";

function App() {
  /* function sum(a, b) {
    a = 10;
    b = 15;
    return a + b;
  }

  let x = 5;
  let y = 11;

  console.log(sum(x, y));
  console.log({ x, y });

  let p = [1, 2, 3];
  let q = { age: 2, name: "Vaibhav" };
  function sum2(a, b) {
    a.push(4);
    b.age = 10;
    return a[0] + b.age;
  }

  console.log(sum2(p, q));
  console.log({ p, q });
 */

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const intervalRef = useRef(null);
  const inputRef = useRef();
  const sectionRef = useRef();

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setCount((count) => ++count);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  function handleFocus() {
    inputRef.current.focus();
  }

  function handleScroll() {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <>
      {/* <h1>Here's the value of count: {countRef.current}</h1>
      <button onClick={() => countRef.current++}>Increase count</button>

      <h1>Here's the value of count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase count
      </button> */}

      {/* <h1>Prev count: {countRef.current}</h1>
      <h1>Curr count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase count
      </button> */}

      {/* <h1>{count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button> */}

      {/* <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus</button>
      </div> */}

      <h1>Welcome to OBP-3</h1>
      <button onClick={handleScroll}>Scroll to last section</button>
      <div style={{ height: "100vh" }}></div>
      <h2>Hiii.....Bye...</h2>
      <div style={{ height: "100vh" }}></div>
      <section ref={sectionRef}>Last section</section>
    </>
  );
}

export default App;
