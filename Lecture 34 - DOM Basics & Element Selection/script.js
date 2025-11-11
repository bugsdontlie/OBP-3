console.log(window.document.body);
console.log(document.body);

//Note down the difference b/w these two
console.log(document.body.childNodes);
console.log(document.body.children);

//Note down the difference b/w these two
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

//Selectors in DOM - most commonly used selector
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".first-div-child"));
console.log(document.querySelector("#second-div"));
console.log(document.querySelector("div.first-div"));
console.log(document.querySelector("div#second-div"));

//Other specific selectors
//select an element based on class
console.log(document.getElementsByClassName("first-div-child"));

//select an element based on Id
console.log(document.getElementById("second-div"));

//select an element based on Tag Name
console.log(document.getElementsByTagName("div"));

const para = document.querySelector("p");

console.log(para);

//changing the CSS styles using JS
para.style.color = "blue";
para.style.backgroundColor = "yellow";

//setting, editing and deleting an attribute value
const imageElement = document.querySelector("img");

//updating the value of existing attribute
imageElement.setAttribute("src", "image 2.png");

//creating a new data-attribute
imageElement.setAttribute("data-price", 100);

//deleting an attribute, by setting its value to null
imageElement.setAttribute("data-price", null);

//accessing and updating text of an element using innerHTML
console.log(para.innerHTML); //accessing

para.innerHTML = `<strong>${para.textContent}</strong>`; //updating

const secondPara = document.querySelector(".second-para");

//accessing and updating text of an element using textContent
console.log(secondPara.textContent); //accessing

secondPara.textContent = "This is a new content"; //updating

//H.W -> write the difference b/w innerHTML & textContent

//className property
// const sectionElement = document.querySelector(".class1");
// deleting a class
// const classes = sectionElement.className.split(" ");
// classes.splice(2, 1);
// sectionElement.className = classes.join(" ");

//classList

const sectionElementCopy = document.querySelector(".class1");
console.log(sectionElementCopy.classList);
