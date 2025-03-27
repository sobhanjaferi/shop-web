// ============================= search bar =============================

let searchIpt = document.getElementById("search-ipt");
let searchIcon = document.getElementById("search-icon");

searchIpt.style.display = "none";

searchIcon.addEventListener("click", ()=>{
    searchIpt.style.display = "inline";
    searchIcon.style.display = "none";
})

// ============================= slider =============================

let slids = document.querySelector(".item");
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");

icon1.addEventListener("click",()=>{
    slide1.style.display = 'block';
    slide2.style.display = 'none';
    slide3.style.display = 'none';
    set.add("hidden")
});
icon2.addEventListener("click",()=>{
    slide2.style.display = 'block';
    slide1.style.display = 'none';
    slide3.style.display = 'none';

});
icon3.addEventListener("click",()=>{
    slide3.style.display = 'block';
    slide1.style.display = 'none';
    slide2.style.display = 'none';
});

let set =  setInterval(()=>{
    slide1.style.display = "none";
    slide2.style.display = "block";
        setInterval(()=>{
            slide2.style.display = "none";
            slide3.style.display = "block";
                setInterval(()=>{
                    slide3.style.display = "none";
                    slide1.style.display = "block";
        },4000)
    },4000)
},4000)

// ============================= home section supper-offer =============================

let hourInput = document.getElementById("hour");
let minInput = document.getElementById("minets");
let secondInput = document.getElementById("seconds");

var second = 60;
var minet = 7;
var hour = 29;

let intervalHotOffer = setInterval(function () {
    hourInput.textContent = hour;
    minInput.textContent = minet;
    secondInput.textContent = second;
    second--;

    let textHottSupperOffer = document.getElementById("span-timer");

    if (second < 0) {
        second = 59;
        if (minet > 0) {
            minet--;
        } else if (hour > 0) {
            hour--;
            minet = 59;
        } else {
            textHottSupperOffer.innerHTML = "پایان تخفیف";
            textHottSupperOffer.style.textAlign = "center";
            textHottSupperOffer.style.color = "red";
            textHottSupperOffer.style.marginLeft = "30px"
            clearInterval(intervalHotOffer);
        }
    }
}, 1000);