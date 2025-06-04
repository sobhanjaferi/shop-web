// ============================= search bar =============================

const navBar = {
    1 : document.getElementById("list_icon"),
    2 : document.getElementById("list_icon_true"),
    3 : document.getElementById("list_icon_false"),
    4 : document.getElementById("container_list_icon"),
    5 : document.getElementById("acount"),
    6 : document.getElementById("house"),
    7 : document.getElementById("shopping_card"),
    8 : document.getElementById("search-ipt"),
    9 : document.getElementById("search-icon"),
    10 : document.getElementById("page_up")
}

navBar[8].style.display = "none";

navBar[9].addEventListener("click", ()=>{
    navBar[8].style.display = "inline";
    navBar[9].style.display = "none";
})

navBar[2].addEventListener("click", function(){
    navBar[4].style.display = "flex";
    navBar[2].style.display = "none";
    navBar[3].style.display = "flex";
})

navBar[3].addEventListener("click", function(){
    navBar[4].style.display = "none";
    navBar[2].style.display = "flex";
    navBar[3].style.display = "none";
})

navBar[10].style.display = "none";

let timeSlideUp = function(){setTimeout(()=>{
    navBar[10].style.display = "inline";
},5000)}

timeSlideUp()

navBar[10].addEventListener("click",()=>{
    navBar[10].style.display = "none";
    timeSlideUp()
})

// ============================= slider =============================

let slides = document.querySelectorAll(".item");
let currentIndex = 0;

function changeSlide(){

    slides.forEach(slide => slide.style.display = "none");

    slides[currentIndex].style.display = "block";

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(changeSlide, 15000);

changeSlide();

// ============================= home section supper-offer =============================

let hourInput = document.getElementById("hour");
let minInput = document.getElementById("minutes");
let secondInput = document.getElementById("seconds");

let second = 60;
let minet = 7;
let hour = 29;

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
            textHottSupperOffer.style.marginLeft = "30px";
            clearInterval(intervalHotOffer);
        }
    }
}, 1000);