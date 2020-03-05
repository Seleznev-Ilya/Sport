let slicker = JSON.parse(sessionStorage.getItem("objItem"));
let imgTest = document.querySelector('.imgTest');
let imgTest1 = document.querySelector('.imgTest1');
let imgTest2 = document.querySelector('.imgTest2');
let imgTest3 = document.querySelector('.imgTest3');

let imgInput1 = document.querySelector('#image1');
let imgInput2 = document.querySelector('#image2');
let imgInput3 = document.querySelector('#image3');

checkThis(sessionStorage.getItem("objItem"));

imgTest1.addEventListener('click', slick1);
imgTest2.addEventListener('click', slick2);
imgTest3.addEventListener('click', slick3);

function slick1() {
    imgInput1.checked = true;
        imgTest.src = slicker.preview[0];
}
function slick2() {
    imgInput2.checked = true;
        imgTest.src = slicker.preview[1];
}
function slick3() {
    imgInput3.checked = true;
        imgTest.src = slicker.preview[2];
}


function checkThis(arg) {
    let itemIdObj = JSON.parse(arg);
    imgTest.src = itemIdObj.preview[0];
    imgTest1.src = itemIdObj.preview[0];
    imgTest2.src = itemIdObj.preview[1];
    imgTest3.src = itemIdObj.preview[2];
    console.log(itemIdObj);
}

