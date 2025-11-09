// console.log("hello");
// console.log("kapishan");
// console.log("bike ride");
// console.log("50+20");
// document.getElementById("text").innerHTML="Hello Uki";
// document.write("Welcome to javascript");
// // window.alert("wrong");
// console.log("javascript is fun");
// var subject="maths"

// console.log(subject);
// var favourite= prompt("input favourite color");
// console.log(favourite);
// document.body.style.backgroundColor=favourite;
// var price=5;
// var quantity= 10;
// var display= price*quantity;
// console.log(display);
// let color;
// console.log(color);
// var firstname="kapishan";
// var lastname= "yogarasa";
// var fullname= "my name is"+" "+firstname+lastname;
// console.log(fullname);

// let age = 20;
// console.log(typeof age);

// reduce (reduce the count)
let customerSpentAmount= [450,80,90,20];
let totalAmountSpent= customerSpentAmount.reduce((prevVal,currentVal) => {
    console.log(prevVal+currentVal)
    return prevVal+currentVal
},0);
console.log(totalAmountSpent);

// concat (add many string and merge)
let books=["node.js","react.js"];
let updatebook= books.concat(["next.js","express.js"]);
console.log(updatebook);
// slice (cut values)
let foods=["noodels","chicken_rice","briyani","kottu"];
console.log(foods.slice(2));
console.log(foods.slice(2,3));
console.log(foods.slice(2,-1));
// splice (cut and add value)
let animals=["cat","dog","rabbit","tortoise"];
animals.splice(1,0,"parrot");
console.log(animals);
animals.splice(1,1,"ken");
console.log(animals);
// includes (true or false)
let arr=[10,"math",30,"tech"];
console.log(arr.includes("math"));
console.log(arr.includes(20));
// indexof(wich place be value)
let str="this is paragraph.hello guys, how are you?, nice you meet you!paragraph";
console.log(str.indexOf("paragraph")); //first value index only show
