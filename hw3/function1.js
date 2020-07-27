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