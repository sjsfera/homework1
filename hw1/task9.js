const apple = 260;

            let discount = Math.random() * 10;

            let discPrice = (Math.floor((apple - discount) * 100)) / 100;

            const origPrice = apple / 2;

            let tr = Math.floor(discPrice - origPrice);

            document.addEventListener('DOMContentLoaded', function() {
                document.getElementById('task9').innerHTML = tr;
                }, false); 