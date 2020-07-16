let item1Min = Math.floor(item1);

let item2Min = Math.floor(item2);

let item3Min = Math.floor(item3);

let totalPrice = item1Min + item2Min + item3Min;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task4').innerHTML = totalPrice;
    }, false); 