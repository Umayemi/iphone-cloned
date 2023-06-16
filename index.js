const apk = document.querySelector("#applications");
const firstSlide = document.querySelector("#slide1");
const secondSlide = document.querySelector("#slide2");
const screenChange = document.querySelector(".app-wrap");
const move = document.querySelector(".open-bar");
const lockScreen = document.querySelector("#frame");
const pagination = document.querySelectorAll(".span1");
pagination.forEach(function(item) {
    item.addEventListener('click', function() {
        pagination.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
const right =()=>{
    apk.style.left = "-310px"
}
const left =()=>{
    apk.style.left = "0px"
}
const swipe = ()=>{
    move.style.transform = "translateY(5px)"
    document.querySelector('.lockscreen').style.height = "0 ";
    screenChange.style.scale = "1"
    screenChange.classList.add('activated');
}
