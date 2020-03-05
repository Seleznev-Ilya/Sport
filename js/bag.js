"use strict";
let bLeft = localStorage.getItem('leftIdStart');
let bRight = localStorage.getItem('rightIdStart');
let bItem = localStorage.getItem('slicker');
let globalContainerBag = document.querySelector('.bag__wrapper');

function takeIbforBag(a, b, c) {
    for (let item of window.catalog) {
        if (a === item.id) {
            drawBag(item);
        }
        if (b === item.id) {
            drawBag(item);
        }
        if (c === item.id) {
            drawBag(item);
        }
    }
}

takeIbforBag(bLeft, bRight, bItem);

function drawBag(a) {
    let cardOfGoods = document.createElement('div');
    cardOfGoods.classList.add('cardOfGoods');

    let itemBagCard = document.createElement('div');
    itemBagCard.classList.add('itemBagCard');

    let bagImage = document.createElement('img');
    bagImage.classList.add('bagImage');
    bagImage.src = a.preview[0];

    let bagDescriptionWrapper = document.createElement('div');
    bagDescriptionWrapper.classList.add('bagDescriptionWrapper');

    let bagtitleCard = document.createElement('p');
    bagtitleCard.classList.add('bagtitleCard');
    bagtitleCard.innerText = a.title;

    let bagPriceCard = document.createElement('p');
    bagPriceCard.classList.add('bagPriceCard');
    bagPriceCard.innerText = '£' + a.price;

    let bagColorCard = document.createElement('p');
    bagColorCard.classList.add('bagColorCard');
    bagColorCard.innerText = a.colors;

    let bagCaunterCard = document.createElement('p');
    bagCaunterCard.classList.add('bagCaunterCard');
    bagCaunterCard.innerText = `Quantiti: - 1 +`;

    let bagRemove = document.createElement('p');
    bagRemove.classList.add('bagRemove');
    bagRemove.innerText = 'Remove item';

    bagDescriptionWrapper.append(bagtitleCard);
    bagDescriptionWrapper.append(bagPriceCard);
    bagDescriptionWrapper.append(bagColorCard);
    bagDescriptionWrapper.append(bagCaunterCard);
    bagDescriptionWrapper.append(bagRemove);

    itemBagCard.append(bagImage);
    cardOfGoods.append(itemBagCard);
    cardOfGoods.append(bagDescriptionWrapper);
    globalContainerBag.append(cardOfGoods);
}