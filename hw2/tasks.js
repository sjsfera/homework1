
let b = null;
while (b === null) {
  n = +prompt('Enter the number n?');
  if (isNaN(n) === false)
  
  {
    b = Number.isInteger(n);    
  }   
  else {
    b = null;
  }     
}

let c = null;
while (c === null) {
  m = +prompt('Enter the number m?');
  if (isNaN(m) === false)
 
 {
    c = Number.isInteger(m);    
  }   
  else {
    c = null;
  }     
}

let res = 0;
let sum = confirm('Пропускаємо парне число?'); 
for (let i = n; i <= m; i=i+1) {
  if (sum && (i % 2 === 1)) {
    continue;
  }
  else     
    res += i; 
  
}
/*
let sum = confirm('Пропускаємо не парне число?'); 
for (let i = n; i <= m; i=i+1) {
  if (i % 2) {
    continue;
  }
  else {
    sum += i;
  }
}
*/



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('task1').innerHTML =  n;
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task2').innerHTML =  m;
    }); 

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task3').innerHTML =  res;
    }); 




