import { add, subtract } from "./calculator.js";
import print from "./print.js";

print("Addition", add(2, 3));
print("Subtraction", subtract(12, 3));

axios
  .get("https://jsonplaceholder.typicode.com/todosss/1")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
