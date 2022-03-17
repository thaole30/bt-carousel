const carouselList = document.querySelector('.carousel-list');

//get btn
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

nextBtn.addEventListener("click", function () {
    console.log("button next")

    const firstItem = carouselList.children[0];
    firstItem.style.animationName = "fadeOut";
    firstItem.addEventListener("animationend", function () {
        firstItem.style.animationName = null;
        carouselList.appendChild(firstItem);
    }, {once: true});
})

prevBtn.addEventListener("click", function () {
    let lastItem = carouselList.children[carouselList.children.length - 1];
    carouselList.insertBefore(lastItem, carouselList.children[0]);

    const firstItem = carouselList.children[0];
    firstItem.style.animationName = "fadeIn";
    firstItem.addEventListener("animationend", function () {
        firstItem.style.animationName = null;
    }, {once: true});
});


// change theme

const checkbox = document.getElementById('check');

const ball = document.querySelector('header label .ball');

checkbox.addEventListener('change', function () {
    document.querySelector('body').classList.toggle('dark');

    if(document.querySelector('body').classList.contains("dark")) {
        console.log("ball move")
        ball.style.transform = 'translateX(28px)';
    } else {
        ball.style.transform = 'translateX(0px)';
    }
})

