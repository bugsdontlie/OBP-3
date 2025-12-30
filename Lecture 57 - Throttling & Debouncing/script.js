/* window.addEventListener("scroll", () => {
  console.log("scrolled");
}); */

function handleScroll() {
  console.log("scrolling throttled");
}

/* Throttling using Global Variable
let isAllowed = true;

function throttle(delay) {
  if (!isAllowed) return;
  handleScroll();
  isAllowed = false;
  setTimeout(() => {
    isAllowed = true;
  }, delay);
}

window.addEventListener("scroll", () => {
  throttle(1000);
}); */

/* Throttling implemented using closures */
function throttle(fn, delay) {
  let isAllowed = true;
  return function () {
    if (!isAllowed) return;
    fn();
    isAllowed = false;
    setTimeout(() => {
      isAllowed = true;
    }, delay);
  };
}

const throttledScroll = throttle(handleScroll, 1000);
window.addEventListener("scroll", throttledScroll);

/* 
timeline of debouncing with delay = 3s

below is the timeline when user has triggered the event:
(t = 0) -> (t = 2) -> (t = 4) -> (t = 8) -> stops triggering at all

at (t = 7) & (t = 11) -- the function will be called
*/

function debounce(fn, delay) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function saveInput(value) {
  //assume that api is called to save this input
  console.log(value);
}

const debounceSaveInput = debounce(saveInput, 2000);

const input = document.querySelector("input");
input.addEventListener("input", () => {
  //   saveInput(input.value);
  debounceSaveInput(input.value);
});

/* 

User interacted at (t = 0) 
    -> fn has entered the macrotask queue(MTQ) and will be executed at t=3
User interacted at (t = 2) 
    -> clearTimeout will remove this function from macrotask queue, as this fn() is not executed yet
        & fn() will again enter MTQ and will be executed at t=5
User interacted at (t = 4) 
    -> clearTimeout will remove this function from macrotask queue 
        & fn() will again enter MTQ and will be executed at t=7

At (t=7) -> fn() will be executed successfully 
User interacted at (t = 8) 
    -> clearTimeout will remove this function from macrotask queue 
        but there will be no effect as fn() is already executed at (t=7)
        & fn() will again enter MTQ and will be executed at t=11

since no more user interaction is there, the fn() will finally execute at t=11 and will never execute again
*/
