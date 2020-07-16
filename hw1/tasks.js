const item1 = 15.678;

const item2 = 123.965;

const item3 = 90.2345;



const max = Math.max(item1, item2, item3);



const min = Math.min(item1, item2, item3);



const total = item1 + item2 + item3;



const item1Min = Math.floor(item1);

const item2Min = Math.floor(item2);

const item3Min = Math.floor(item3);

const totalPrice = item1Min + item2Min + item3Min;
             


const price = (item1 + item2 + item3) / 100;

const maxPrice = (Math.ceil(price)) * 100;



const totalValue = Math.floor(item1 + item2 + item3);



const all = item1 + item2 + item3;
const firstMoney = 500;



const summery = (Math.floor(((item1 + item2 + item3) / 3) * 100)) / 100;



const apple = 260;

const discount = Math.random() * 10;

const discPrice = (Math.floor((apple - discount) * 100)) / 100;

const origPrice = apple / 2;

const clearTotal = Math.floor(discPrice - origPrice);


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
            document.getElementById('task9').innerHTML = clearTotal;
            }, false); 