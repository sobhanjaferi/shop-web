// ============================= search bar =============================

const listICons = document.getElementById("list_icon");
const iconList = document.getElementById("list_icon_true");
const closeIcon = document.getElementById("list_icon_false");

const navBarDivIcons = document.getElementById("container_list_icon");
const navBarIconFirst = document.getElementById("acount");
const navBarIconSecond = document.getElementById("house");
const navBarIconThird = document.getElementById("shopping_card");

const searchIpt = document.getElementById("search-ipt");
const searchIcon = document.getElementById("search-icon");

const slideUp = document.getElementById("page_up");

const navBar = {
    1 : listICons,
    2 : iconList,
    3 : closeIcon,
    4 : navBarDivIcons,
    5 : navBarIconFirst,
    6 : navBarIconSecond,
    7 : navBarIconThird,
    8 : searchIpt,
    9 : searchIcon,
    10 : slideUp
}

navBar[8].style.display = "none";

searchIcon.addEventListener("click", ()=>{
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

function changeSlide() {

    slides.forEach(slide => slide.style.display = "none");

    slides[currentIndex].style.display = "block";

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(changeSlide, 3000);

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
