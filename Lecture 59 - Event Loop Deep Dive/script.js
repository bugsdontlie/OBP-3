// console.log("start");
// const obj = new Promise((resolve) => {
//   console.log("inside promise");
//   setTimeout(function insideSetTimeout() {
//     resolve("we're done");
//   }, 0);
// });
// obj.then(function insideThen(msg) {
//   console.log(msg);
// });
// console.log("end");

/* 
start
end
inside promise
we're done
*/
/* console.log("=================");

console.log("start");
async function fn() {
  console.log("before await");
  const data = await fetch("https://dummyjson.com/products");
  console.log({ data });
  console.log("after await");
}
fn();
console.log("end"); */

console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
Promise.resolve().then(() => console.log("C"));
console.log("D");
