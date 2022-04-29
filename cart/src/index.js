import faker from 'faker';

let productString = '';

for (let i=0; i<5; i++) {
    productString += `<div>${faker.commerce.productName()}</div>`;
}

document.getElementById('cart-list').innerHTML = productString;