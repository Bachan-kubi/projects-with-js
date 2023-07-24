// let display = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);

// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       display.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       display.value = string;
//     }else if(e.target.innerHTML=="DEL"){
//         string = string.substring(0, string.length-1);
//         display.value = string;
//     } else if(
//         e.target.innerHTML =="+" ||
//         e.target.innerHTML =="-" ||
//         e.target.innerHTML =="/" ||
//         e.target.innerHTML =="*" 
//         ){
//         string += e.target.innerHTML;
//         display.value = string;
//     }
//     else if(e.target.innerHTML == "="){
//         string = eval(string);
//         display.value = string;
//     }
//     else {
//       string += e.target.innerHTML;
//       console.log(string);
//       display.value = string;
//     }
//   });
// });

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
console.log(input)
let string = "";
let operator = "";
let arr = Array.from(buttons);

arr.forEach(button=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string+operator);
      input.value = string;
    } else{
      console.log(e.target.innerHTML);
      string = string+e.target.innerHTML;
      input.value = string;
    }
  })
})










