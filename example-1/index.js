const add = require("./add.js");
const multiply = require("./multiply.js");

console.log("Hello from the developer console!");
const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + " " + time;

console.log(dateTime);

result = multiply(add(2, 2), 4);
console.log(result);
