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
