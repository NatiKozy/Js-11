const button = document.querySelector('#button');
const result = document.querySelector('#sum');


const price1 = document.querySelector('#price1').innerHTML;
const price2 = document.querySelector('#price2').innerHTML;
const price3 = document.querySelector('#price3').innerHTML;
const price4 = document.querySelector('#price4').innerHTML;

const sum = Number(price1) + Number(price2) + Number(price3) + Number(price4);
    result.textContent = sum;

function countSale() {
    const count = 20;
    const totalPrice = sum - sum*count/100;
    result.textContent = totalPrice;
}

button.addEventListener('click', countSale);