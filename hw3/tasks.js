/* Task number 1*/
/*
let anyString = prompt('Введіть 6-не число');

 let a = anyString.charAt(0);
 let b = anyString.charAt(1);
 let c = anyString.charAt(2);
 let d = anyString.charAt(3);
 let e = anyString.charAt(4);
 let f = anyString.charAt(5);

 let digits = [a,b,c,d,e,f];
 

 function getMaxDigit(digits) {
   let max = digits[0];
   for (let i=1; i<digits.length; i++) {
     (digits[i] > max) && (
       max = digits[i]
     );  
   }
   return max;
 }
  
    document.getElementById('task1').innerHTML = getMaxDigit(digits);
  
  */  

/* Task number 2*/
/*
function getName (name) {
let str = prompt('Напишіть своє імя або будь яке');
let strUper = str.substr(0, 1);
let firstLetter = strUper.toUpperCase();
let strLow = str.substr(1);
let endWord = strLow.toLowerCase();
const word = firstLetter + endWord;

return word;
}; 

  document.getElementById('task2').innerHTML = getName(name);
*/

/* Task number 3*/
  
/*
let randomNumber1 = +prompt('Введіть ціле, будьяке, мінімальне число N');
let  n = Math.ceil(randomNumber1);
let randomNumber2 = +prompt('Введіть ціле, будьяке, максимальне число M');
let m = Math.ceil(randomNumber2);

function getRandomInRange(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}


document.getElementById('task3').innerHTML = getRandomInRange(n, m);

*/
/* Task number 4*/
/*

let enterStr = prompt('Введіть речення');

let enterLet = prompt('Введіть літеру яку треба прибрати');


let regex = new RegExp(enterLet, 'gi');

let form = regex.global;  


let strResult = enterStr.replace(regex, '');


document.getElementById('task4').innerHTML = strResult;
*/
/* Task number 5*/
/*
let text =  prompt('Ask word');

let letter = prompt('Введіть літеру яку треба порахувати');

let regex1 = new RegExp(letter, 'gi');

let form1 = regex1.global;  

let partText = text.replace(regex1, '');

let counLetter = text.length - partText.length;


 document.getElementById('task5').innerHTML = counLetter;
*/

/* Task number 6*/


let max = '9999999999';

const randomPassw = +prompt('Введіть кількість символів для вашого паролю від 1 до 10 включно');

let numb = max.substr(0, randomPassw);

function getRandomInt(numb) {
  return Math.floor(Math.random() * Math.floor(numb));
}



document.addEventListener('DOMContentLoaded', function() {
 document.getElementById('task6').innerHTML =  getRandomInt(numb);
  }); 



//document.getElementById('task6').innerHTML = getRandomInt(numb);







 

