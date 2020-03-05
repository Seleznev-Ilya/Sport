function checkThis(arg){

let itemIdObj = JSON.parse(arg);
    let imgTest = document.querySelector('.imgTest');
    imgTest.src = itemIdObj.preview[0];
    console.log(itemIdObj);
}
checkThis(sessionStorage.getItem("objItem"));