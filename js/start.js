"use strict";
const cardItem = []; // for draw rads
const priceRight = []; //  data to calculate common price with slider left
const priceLeft = []; //  data to calculate ... right

function drawSliderCards() {
    for (let key of window.catalog) { // card (key) of catalog cards
        for (let i = 0; i < window.bestOffer['left'].length; i++) { //loop by length of left slider
            if (window.bestOffer['left'][i] === key['id']) { // id from left slider compare with id from catalog cards
                let imgPath = key['preview'][0];
                let priceCard = key['price'];
                let image = `<img src="${imgPath}" alt="${key['title']}" title=" ${key['title']}">`;
                let price = `${priceCard}`;
                cardItem.push({
                    title: key['title'],
                    price: `£${price}`,
                    img: image
                });
                priceLeft.push({
                    id: key['id'],
                    title: key['title'],
                    price: price,
                    img: image
                });
            }
        }
    }
    let tmpl = document.getElementById('slider__card-left').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('slider__wrapper-left').innerHTML = tmpl({
        list: cardItem
    });

    for (let key2 of window.catalog) { // card (key) of catalog cards
        for (let q = 0; q < window.bestOffer['right'].length; q++) { //loop by length of right slider
            if (window.bestOffer['right'][q] === key2['id']) { // id from right slider compare with id from catalog cards
                let imgPath2 = key2['preview'][0];
                let priceCard2 = key2['price'];
                let image2 = `<img src="${imgPath2}" alt="${key2['title']}" title="${key2['title']}">`;
                let price2 = `${priceCard2}`;
                cardItem.push({
                    title: key2['title'],
                    price: `£${price2}`,
                    img: image2
                });
                priceRight.push({
                    id: key2['id'],
                    title: key2['title'],
                    price: price2,
                    img: image2
                });
            }
        }
    }
    let tmpl2 = document.getElementById('slider__card-right').innerHTML.trim();
    tmpl2 = _.template(tmpl2);
    document.getElementById('slider__wrapper-right').innerHTML = tmpl2({
        list: cardItem
    });
}

drawSliderCards();
let slider = document.getElementById('slider__wrapper-left');
let counterLeft = 0;
let offset = 0;
let slider2 = document.getElementById('slider__wrapper-right');
let counterRight = 0;
let offsetRight = 0;
let btnRightTop = document.getElementById('slider__button-right-top');
let btnRightDown = document.getElementById('slider__button-right-down');
let btnLeftTop = document.getElementById('slider__button-left-top');
let btnLeftDown = document.getElementById('slider__button-left-down');
btnRightTop.addEventListener('click', function () {
    if (offsetRight === 0) {
        offsetRight += -450 * (window.bestOffer.right.length - 1);
    } else {
        offsetRight += 450;
    }
    slider2.style.top = offsetRight + 'px';
    if (counterRight === 0) {
        counterRight = window.bestOffer.right.length - 1;
    } else if (counterRight <= window.bestOffer.right.length - 1) {
        counterRight--;
    }
});
btnRightDown.addEventListener('click', function () {
    if (offsetRight > -450 * (window.bestOffer.right.length - 1)) {
        offsetRight += -450;
    } else if (offsetRight === -450 * (window.bestOffer.right.length - 1)) {
        offsetRight = 0;
    }
    slider2.style.top = offsetRight + 'px';
    if (counterRight < window.bestOffer.right.length - 1) {
        counterRight++;
    } else if (counterRight === window.bestOffer.right.length - 1) {
        counterRight = 0;
    }
});
btnLeftDown.addEventListener('click', function () {
    if (offset > -450 * (window.bestOffer.left.length - 1)) {
        offset += -450;
    } else if (offset === -450 * (window.bestOffer.left.length - 1)) {
        offset = 0;
    }
    slider.style.top = offset + 'px';
    if (counterLeft < window.bestOffer.left.length - 1) {
        counterLeft++;
    } else if (counterLeft === window.bestOffer.left.length - 1) {
        counterLeft = 0;
    }
});
btnLeftTop.addEventListener('click', function () {
    if (offset === 0) {
        offset += -450 * (window.bestOffer.left.length - 1);
    } else {
        offset += 450;
    }
    slider.style.top = offset + 'px';
    if (counterLeft === 0) {
        counterLeft = window.bestOffer.left.length - 1;
    } else if (counterLeft <= window.bestOffer.left.length - 1) {
        counterLeft--;
    }
});
let idForBagFromLeft = '';
let idForBagFromRight = '';
btnLeftTop.addEventListener('click', () => {
    let a = document.getElementById('notDiscountedPrice');
    let b = document.getElementById('discountedPrice');
    a.innerHTML = `£${+priceLeft[counterLeft].price + +priceRight[counterRight].price}`;
    b.innerHTML = `£${(+priceLeft[counterLeft].price + +priceRight[counterRight].price) - window.bestOffer.discount}`;
    idForBagFromLeft = priceLeft[counterLeft].id;

});
btnRightDown.addEventListener('click', () => {
    let a = document.getElementById('notDiscountedPrice');
    let b = document.getElementById('discountedPrice');
    a.innerHTML = `£${+priceLeft[counterLeft].price + +priceRight[counterRight].price}`;
    b.innerHTML = `£${(+priceLeft[counterLeft].price + +priceRight[counterRight].price) - window.bestOffer.discount}`;
    idForBagFromRight = priceRight[counterRight].id;
});
btnLeftDown.addEventListener('click', () => {
    let a = document.getElementById('notDiscountedPrice');
    let b = document.getElementById('discountedPrice');
    a.innerHTML = `£${+priceLeft[counterLeft].price + +priceRight[counterRight].price}`;
    b.innerHTML = `£${(+priceLeft[counterLeft].price + +priceRight[counterRight].price) - window.bestOffer.discount}`;
    idForBagFromLeft = priceLeft[counterLeft].id;
});
btnRightTop.addEventListener('click', () => {
    let a = document.getElementById('notDiscountedPrice');
    let b = document.getElementById('discountedPrice');
    a.innerHTML = `£${+priceLeft[counterLeft].price + +priceRight[counterRight].price}`;
    b.innerHTML = `£${(+priceLeft[counterLeft].price + +priceRight[counterRight].price) - window.bestOffer.discount}`;
    idForBagFromRight = priceRight[counterRight].id;
});
let arr = [];

function arrivals() {
    let arrItems = {
        line: [
            '739d3ae0-6dca-4453-a7a4-a94b841a296d', //'With Patchwork Crochet'
            '8c061815-6a7d-4465-bb78-1bdc6c5adebf', // Only Skinny Jeans
            '8b300772-eee3-4ff1-b091-e89f17e0e469', //'Neck Knitted Jumper'
            '9ded7821-e510-4a16-ba9f-57c1e3442ad8'//'Turtle Neck Jumper in Rib'
        ]
    };
    for (let key of window.catalog) {
        for (let i = 0; i < arrItems['line'].length; i++) {
            if (arrItems['line'][i] === key['id']) {
                let imgPath = key['preview'][0];
                let priceCard = key['price'];
                let image = `<img src = " ${imgPath} " alt = " ${key['title']}" title = " ${key['title']}">`;
                let price = `${priceCard}`;

                arr.push({
                    title: key['title'],
                    price: price,
                    img: image
                });
            }
        }
    }
    let tmpl = document.getElementById('arrivals__card').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('arrivals__cards').innerHTML = tmpl({
        list: arr
    });
}

arrivals();

let sliderAddBag = document.querySelector('.slider__bag');

sliderAddBag.addEventListener('click', addIdInLocalStor);

function addIdInLocalStor() {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        localStorage.setItem('leftIdStart', idForBagFromLeft);
        localStorage.setItem('rightIdStart', idForBagFromRight);
        console.log('запись');
    }
}

