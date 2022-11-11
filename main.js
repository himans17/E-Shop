// Special Countdown
let daysitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");


let countdown = () => {
    let futureDate = new Date("30 august 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    let days = Math.floor(myDate / 1000 / 60 / 60 /24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;


    daysitem.innerHTML = days; 
    hoursitem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;


} 


countdown()

setInterval(countdown, 1000);

//NAV HIDE

let navBar = document.querySelector('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListner("click", function(){
        navcollapse.classList.remove("show");
    })
})