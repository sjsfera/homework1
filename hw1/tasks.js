const item1 = 15.678;

const item2 = 123.965;

const item3 = 90.2345;



let max = Math.max(item1, item2, item3);



let min = Math.min(item1, item2, item3);



let total = item1 + item2 + item3;



let item1Min = Math.floor(item1);

let item2Min = Math.floor(item2);

let item3Min = Math.floor(item3);

let totalPrice = item1Min + item2Min + item3Min;
             


let price = (item1 + item2 + item3) / 100;

let maxPrice = (Math.ceil(price)) * 100;



let totalValue = Math.floor(item1 + item2 + item3);



let all = item1 + item2 + item3;
const firstMoney = 500;



let summery = (Math.floor(((item1 + item2 + item3) / 3) * 10)) / 10;



const apple = 260;

let discount = Math.random() * 10;

let discPrice = (Math.floor((apple - discount) * 100)) / 100;

const origPrice = apple / 2;

let tr = Math.floor(discPrice - origPrice);


document.addEventListener('DOMContentLoaded', function() {
document.getElementById('task1').innerHTML = max;
}, false);   


               

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('task2').innerHTML = min;
}, false); 
                   

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('task3').innerHTML = total;
}, false); 

                       
                        
 document.addEventListener('DOMContentLoaded', function() {
document.getElementById('task4').innerHTML = totalPrice;
 }, false); 



 document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task5').innerHTML = maxPrice;
    }, false); 



 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('task6').innerHTML = (totalValue % 2 === 0);
  }, false); 



  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task7').innerHTML = firstMoney - all;
    }, false); 



    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('task8').innerHTML = summery;
        }, false); 


        

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('task9').innerHTML = tr;
            }, false); 