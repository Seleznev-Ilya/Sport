'use strict';

let price = document.querySelector('.list__price ');
price.addEventListener('click', f);

function f() {
    let inputPrice = document.querySelector('.price input[type=radio]:checked');
    if( inputPrice.alt !== 'Not selected' ){
        inputPrice.previousElementSibling.classList.toggle( 'label--active');

        document.querySelector('.price .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.price .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.price .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.price .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }
        document.querySelector('.price .item__name').innerText = "";
        let category = document.querySelector('.price .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.price .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}

let size = document.querySelector('.list__size ');
size.addEventListener('click', f2);

function f2() {
    let inputPrice = document.querySelector('.size input[type=radio]:checked');
    if( inputPrice.alt !== 'Not selected' ){
        inputPrice.previousElementSibling.classList.toggle( 'label--active');

        document.querySelector('.size .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.size .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.size .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.size .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }
        document.querySelector('.size .item__name').innerText = "";
        let category = document.querySelector('.size .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.size .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}

let brand = document.querySelector('.list__brand ');
brand.addEventListener('click', f3);

function f3() {
    let inputPrice = document.querySelector('.brand input[type=radio]:checked');
    if( inputPrice.alt !== 'Not selected' ){
        inputPrice.previousElementSibling.classList.toggle( 'label--active');

        document.querySelector('.brand .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.brand .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.brand .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.brand .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }
        document.querySelector('.brand .item__name').innerText = "";
        let category = document.querySelector('.brand .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.brand .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}

let color = document.querySelector('.list__color');
color.addEventListener('click', f4);

function f4() {
    let inputPrice = document.querySelector('.color input[type=radio]:checked');
    if( inputPrice.alt !== 'Not selected' ){
        inputPrice.previousElementSibling.classList.toggle( 'label--active');

        document.querySelector('.color .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.color .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.color .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.color .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }
        document.querySelector('.color .item__name').innerText = "";
        let category = document.querySelector('.color .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.color .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}

let product = document.querySelector('.list__product');
product.addEventListener('click', f5);

function f5() {
    let inputPrice = document.querySelector('.product input[type=radio]:checked');
    if( inputPrice.alt !== 'Not selected' ){
        inputPrice.previousElementSibling.classList.toggle( 'label--active');

        document.querySelector('.product .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.product .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.product .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.product .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }
        document.querySelector('.product .item__name').innerText = "";
        let category = document.querySelector('.product .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.product .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}
let fashion = document.querySelector('.list__fashion');
fashion.addEventListener('click', f6);

function f6() {
    let inputPrice = document.querySelector('.fashion input[type=radio]:checked');


    if( inputPrice.alt !== 'Not selected' ){

        inputPrice.previousElementSibling.classList.toggle( 'label--active');
        document.querySelector('.fashion .item__name').innerText = inputPrice.alt;
        let item = document.querySelector('.fashion .filter__item-section');
        item.style.backgroundColor = '#f7f7f7';
        let name = document.querySelector('.fashion .item__name');
        name.style.top = 'calc(60% - 12px)';
        name.style.left = 20 + 'px';
        name.style.fontSize = 16 + 'px';
        name.style.color = ' #f14a58';
        let category = document.querySelector('.fashion .item__category');
        category.style.top = 10 + '%';
        category.style.left = 20 + 'px';
        category.style.fontSize = 12 + 'px';
    } else {
        if(inputPrice.alt === 'Not selected'){
            inputPrice.previousElementSibling.classList.toggle( 'label--active-not');
        }

        document.querySelector('.fashion .item__name').innerText = "";
        let category = document.querySelector('.fashion .item__category');
        category.style.top = 'calc(50% - 12px)';
        category.style.left = 20 + 'px';
        category.style.fontSize = 16 + 'px';
        let item = document.querySelector('.fashion .filter__item-section');
        item.style.backgroundColor = 'white';
    }
}












