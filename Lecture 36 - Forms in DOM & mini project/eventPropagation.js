const h1Element = document.querySelector("h1");
const innerDiv = document.querySelector(".inner-div");
const outerDiv = document.querySelector(".outer-div");

h1Element.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("h1Element clicked");
});

innerDiv.addEventListener("click", () => {
  console.log("innerDiv clicked");
});

outerDiv.addEventListener("click", () => {
  console.log("outerDiv clicked");
});

document.body.addEventListener("click", () => {
  console.log("body clicked");
});
