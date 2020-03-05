'use strict';
let menuIcon = document.querySelector('.filter__menu-icon-wrapper ');
menuIcon.addEventListener('click', openFilter);
menuIcon.addEventListener('click', hideFilter);

function openFilter() {
    document.querySelector('.filter__menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.filter__menu-item').classList.toggle('filter__menu-item--mobil');
    document.querySelector('.filter__item-wrapper').classList.toggle('filter__item-wrapper--border');
}

function hideFilter() {
    document.querySelector('.filter__wrapper--table-mobile .filter__wrapper').classList.toggle('filter__wrapper-show');
}

let price = document.querySelector('.list__price ');
price.addEventListener('click', f);

function f() {
    let inputPrice = document.querySelector('.price input[type=radio]:checked');
    if (inputPrice.alt !== 'Not selected') {
        inputPrice.previousElementSibling.classList.toggle('label--active');
        document.querySelector('.price .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__price').innerText = `, ${inputPrice.alt}`;
        document.querySelector('.check-wrapper__price').style.color = '#f14a58';
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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__price').innerText = `, Price`;
            document.querySelector('.check-wrapper__price').style.color = 'black';
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
    if (inputPrice.alt !== 'Not selected') {
        inputPrice.previousElementSibling.classList.toggle('label--active');

        document.querySelector('.size .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__size').innerText = `, ${inputPrice.alt}`;
        document.querySelector('.check-wrapper__size').style.color = '#f14a58';
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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__size').innerText = `, Size`;
            document.querySelector('.check-wrapper__size').style.color = 'black';
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
    if (inputPrice.alt !== 'Not selected') {
        inputPrice.previousElementSibling.classList.toggle('label--active');

        document.querySelector('.brand .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__brand').innerText = `, ${inputPrice.alt}`;
        document.querySelector('.check-wrapper__brand').style.color = '#f14a58';
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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__brand').innerText = `, Brand`;
            document.querySelector('.check-wrapper__brand').style.color = 'black';
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
    if (inputPrice.alt !== 'Not selected') {
        inputPrice.previousElementSibling.classList.toggle('label--active');

        document.querySelector('.color .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__color').innerText = `, ${inputPrice.alt}`;
        document.querySelector('.check-wrapper__color').style.color = '#f14a58';
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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__color').innerText = `, Color`;
            document.querySelector('.check-wrapper__color').style.color = 'black';
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
    if (inputPrice.alt !== 'Not selected') {
        inputPrice.previousElementSibling.classList.toggle('label--active');

        document.querySelector('.product .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__product').innerText = `, ${inputPrice.alt}`;
        document.querySelector('.check-wrapper__product').style.color = '#f14a58';
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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__product').innerText = `, Product`;
            document.querySelector('.check-wrapper__product').style.color = 'black';

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


    if (inputPrice.alt !== 'Not selected') {

        inputPrice.previousElementSibling.classList.toggle('label--active');
        document.querySelector('.fashion .item__name').innerText = inputPrice.alt;
        document.querySelector('.check-wrapper__fashion').innerText = `${inputPrice.alt}`;
        document.querySelector('.check-wrapper__fashion').style.color = '#f14a58';

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
        if (inputPrice.alt === 'Not selected') {
            inputPrice.previousElementSibling.classList.toggle('label--active-not');
            document.querySelector('.check-wrapper__fashion').innerText = `Fashion`;
            document.querySelector('.check-wrapper__fashion').style.color = 'black';
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

const sortedCatalog = window.catalog;
sortedCatalog.sort((a, b) => {
    if (new Date(a.dateAdded) > new Date(b.dateAdded))
        return -1;
    if (new Date(a.dateAdded) < new Date(b.dateAdded))
        return 1;
    return 0
});

let catalogRender = [];
let counterCatalog = 0;
for (let item of sortedCatalog) {
    if (item.category === 'women' && item.fashion === 'Casual style') {
        catalogRender.push(item);
    }
}

let idCatalog = document.querySelector('#containerCatalog');
for (let i = 0; i < catalogRender.length; i++) {
    counterCatalog = i;
    creatItems(); //Draw all items
    if (i === 1 || i === 2 || i === 3) {
        writAdText(i); // Ad block
    }
}

// ad => advertisement
function writAdText(a) {
    let itemTextAd = document.createElement('div');
    itemTextAd.classList.add(`catalog__textAd${a}`);

    let itemTextAdH2Wrapper = document.createElement('div');
    itemTextAdH2Wrapper.classList.add('TextAdH2Wrapper');
    itemTextAdH2Wrapper.classList.add('container');

    let itemTextAdH2l = document.createElement('h2');
    itemTextAdH2l.classList.add('catalog__textH2Ad');
    itemTextAdH2l.innerText = 'Last weekend extra 50% off on all reduced boots and shoulder bags';

    let itemTextAdP1 = document.createElement('p');
    itemTextAdP1.classList.add('catalog__descriptionAd');
    itemTextAdP1.innerText = 'This offer is valid in-store and online. Prices displayed reflect this additional discount. This offer ends at 11:59 GMT on arch 1st 2019';

    itemTextAdH2Wrapper.append(itemTextAdH2l);
    itemTextAdH2Wrapper.append(itemTextAdP1);
    itemTextAd.append(itemTextAdH2Wrapper);
    idCatalog.append(itemTextAd);
}

function creatItems() {
    let anchor = document.createElement('a');
    anchor.classList.add('catalog__anchor');
    anchor.setAttribute('itemId', catalogRender[counterCatalog].id);
    anchor.href = 'item.html';

    let itemWrapper = document.createElement('div');
    itemWrapper.classList.add('catalog__item');
    itemWrapper.setAttribute('itemId', catalogRender[counterCatalog].id);

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('catalog__img-wrapper');

    let textImg = document.createElement('p');
    textImg.classList.add('catalog__text-Img');
    textImg.setAttribute('itemId', catalogRender[counterCatalog].id);
    textImg.innerText = 'View item';

    let itemImg = document.createElement('img');
    itemImg.classList.add('catalog__img');
    itemImg.alt = catalogRender[counterCatalog].title;
    itemImg.src = catalogRender[counterCatalog].preview[0];

    let itemH2 = document.createElement('h2');
    itemH2.classList.add('catalog__h2');
    itemH2.setAttribute('itemId', catalogRender[counterCatalog].id);
    itemH2.innerText = catalogRender[counterCatalog].title;

    let pWrapper = document.createElement('div');
    pWrapper.classList.add('catalog__p-wrapper');

    if (catalogRender[counterCatalog].price > catalogRender[counterCatalog].discountedPrice
        && catalogRender[counterCatalog].price !== null) {
        let itemPOldWrapper = document.createElement('div');
        itemPOldWrapper.classList.add('p-wrapper__price');

        let lineCatalog = document.createElement('hr');
        lineCatalog.classList.add('catalog__lineHr');

        let itemPOld = document.createElement('p');
        itemPOld.classList.add('catalog__p-old');
        itemPOld.classList.add('catalog__price');
        itemPOld.innerText = '£' + catalogRender[counterCatalog].price;

        pWrapper.append(itemPOldWrapper);
        itemPOldWrapper.append(itemPOld);
        if (catalogRender[counterCatalog].discountedPrice !== null) {
            itemPOldWrapper.append(lineCatalog);
        }
    }

    if (catalogRender[counterCatalog].discountedPrice !== null) {
        let itemP = document.createElement('p');
        itemP.classList.add('catalog__p');
        itemP.classList.add('catalog__price');
        itemP.innerText = '£' + catalogRender[counterCatalog].discountedPrice;
        pWrapper.append(itemP);
    }

    imgWrapper.append(textImg);
    imgWrapper.append(itemImg);
    anchor.append(imgWrapper);
    itemWrapper.append(anchor);
    itemWrapper.append(itemH2);
    itemWrapper.append(pWrapper);
    idCatalog.append(itemWrapper);
}

idCatalog.onclick = function (event) {
    let target = event.target;
    for (let key of catalogRender) {
        if (key.id === target.getAttribute('itemId')) {
            let objItem = JSON.stringify(key);
            sessionStorage.setItem("objItem", objItem)
        }
    }
};









