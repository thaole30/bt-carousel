const carouselList = document.querySelector('.carousel-list');
const items = document.querySelectorAll('.carousel-list .item');
// console.log("items", items)

//get btn
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//get size of 1 item
const itemSize = items[0].offsetWidth;
console.log(itemSize);

let counter = 1;
console.log("counter", counter);


//dịch chuyển tới slide đầu tiên (pass qua last clone slide)
carouselList.style.transform = `translateX(-${itemSize}px)`;

nextBtn.addEventListener("click", function () {
    counter++;
    console.log("counter", counter);
    carouselList.style.transform = `translateX(-${counter * itemSize}px)`;
    carouselList.style.transition = 'transform 1s ease-in-out';

})


prevBtn.addEventListener("click", function () {

    counter--;
    console.log("counter", counter);
    carouselList.style.transform = `translateX(-${counter * itemSize}px)`;
    carouselList.style.transition = 'transform 1s ease-in-out';
})



carouselList.addEventListener("transitionend", function() {
    console.log("event transitionend");
    console.log( "transitionend", items[counter]);

    if(items[counter].id === "firstClone") {
        counter = items.length - counter;
        console.log("new counter", counter);
        carouselList.style.transition = 'none';
        carouselList.style.transform = `translateX(-${counter * itemSize}px)`
    }
})