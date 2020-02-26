const cardItem = [];
const priceRight = [];
const priceLeft = [];


function drawSliderCards() {
    for (let key of window.catalog) {
        for (let i = 0; i < window.bestOffer['left'].length; i++) {
            if (window.bestOffer['left'][i] === key['id']) {
                let imgPath = key['preview'][0];
                let priceCard = key['price'];
                let image = `<img src = " ${imgPath} " alt = " ${key['title']}" title = " ${key['title']}">`;
                let price = `£${priceCard}`;
                cardItem.push({
                    title: key['title'],
                    price: price,
                    img: image
                });
                priceLeft.push({
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

    for (let key2 of window.catalog) {
        for (let q = 0; q < window.bestOffer['right'].length; q++) {
            if (window.bestOffer['right'][q] === key2['id']) {
                let imgPath2 = key2['preview'][0];
                let priceCard2 = key2['price'];
                let image2 = `<img src = " ${imgPath2} " alt = " ${key2['title']}" title = " ${key2['title']}">`;
                let price2 = `£${priceCard2}`;
                cardItem.push({
                    title: key2['title'],
                    price: price2,
                    img: image2
                });
                priceRight.push({
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

function moveCardsLeft() {
    document.getElementById('slider__button-left-top').onclick = leftTop;
    document.getElementById('slider__button-left-down').onclick = leftDown;
    let slider = document.getElementById('slider__wrapper-left');

    // window.bestOffer.left.length
    let counterLeft  = 0;
    let offset = 0;

    function leftDown() {

        if (offset > -450 * (window.bestOffer.left.length - 1)) {
            offset += -450;
        } else if (offset === -450 * (window.bestOffer.left.length - 1)) {
            offset = 0;
        }
        slider.style.top = offset + 'px';
        if(counterLeft < window.bestOffer.left.length - 1){
            counterLeft++;
        } else if (counterLeft === window.bestOffer.left.length - 1){
            counterLeft = 0;
        }
        console.log(window.bestOffer.left[counterLeft])
    }

    function leftTop() {

        if (offset === 0) {
            offset += -450 * (window.bestOffer.left.length - 1);
        } else {
            offset += 450;
        }
        slider.style.top = offset + 'px';
        if(counterLeft === 0){
            counterLeft = window.bestOffer.left.length - 1;
        } else if (counterLeft <= window.bestOffer.left.length - 1){
            counterLeft --;
        }
        console.log(window.bestOffer.left[counterLeft])
    }

}
function moveCardsRight() {
    document.getElementById('slider__button-right-top').onclick = rightTop;
    document.getElementById('slider__button-right-down').onclick = rightDown;
    let slider = document.getElementById('slider__wrapper-right');

    // window.bestOffer.left.length
    let counterRight  = 0;
    let offsetRight = 0;

    function rightDown() {

        if (offsetRight > -450 * (window.bestOffer.right.length - 1)) {
            offsetRight += -450;
        } else if (offsetRight === -450 * (window.bestOffer.right.length - 1)) {
            offsetRight = 0;
        }
        slider.style.top = offsetRight + 'px';
        if(counterRight < window.bestOffer.right.length - 1){
            counterRight++;
        } else if (counterRight === window.bestOffer.right.length - 1){
            counterRight = 0;
        }
        console.log(window.bestOffer.right[counterRight])
    }

    function rightTop() {

        if (offsetRight === 0) {
            offsetRight += -450 * (window.bestOffer.right.length - 1);
        } else {
            offsetRight += 450;
        }
        slider.style.top = offsetRight + 'px';
        if(counterRight === 0){
            counterRight = window.bestOffer.right.length - 1;
        } else if (counterRight <= window.bestOffer.right.length - 1){
            counterRight --;
        }
        console.log(window.bestOffer.right[counterRight])
    }

}
moveCardsLeft();
moveCardsRight();
