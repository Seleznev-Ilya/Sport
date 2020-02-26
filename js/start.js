let cardItem;
let cardItem2;

function drawSliderCards() {
    cardItem = [];
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
            }
        }
    }
    let tmpl = document.getElementById('slider__card-left').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('slider__wrapper-left').innerHTML = tmpl({
        list: cardItem
    });

    cardItem2 = [];
    for (let key2 of window.catalog) {
        for (let q = 0; q < window.bestOffer['right'].length; q++) {
            if (window.bestOffer['right'][q] === key2['id']) {
                let imgPath2 = key2['preview'][0];
                let priceCard2 = key2['price'];
                let image2 = `<img src = " ${imgPath2} " alt = " ${key2['title']}" title = " ${key2['title']}">`;
                let price2 = `£${priceCard2}`;
                cardItem2.push({
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
        lists: cardItem2
    });
}

function drawSliderCards2() {
    // cardItem2 = [];
    // for (let key2 of window.catalog) {
    //     for (let q = 0; q < window.bestOffer['right'].length; q++) {
    //         if (window.bestOffer['right'][q] === key2['id']) {
    //             let imgPath2 = key2['preview'][0];
    //             let priceCard2 = key2['price'];
    //             let image2 = `<img src = " ${imgPath2} " alt = " ${key2['title']}" title = " ${key2['title']}">`;
    //             let price2 = `£${priceCard2}`;
    //             cardItem2.push({
    //                 title: key2['title'],
    //                 price: price2,
    //                 img: image2
    //             });
    //         }
    //     }
    // }
    // let tmpl2 = document.getElementById('slider__card-right').innerHTML.trim();
    // tmpl2 = _.template(tmpl2);
    // document.getElementById('slider__wrapper-right').innerHTML = tmpl2({
    //     lists: cardItem2
    // });
}

// drawSliderCards2();
drawSliderCards();