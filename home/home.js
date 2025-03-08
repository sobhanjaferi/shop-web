// =============================================================== slider =========================================================================

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

// ====================================================== home section supper-offer ===========================================================
    
let hourInput = document.getElementById("hour");
let minInput = document.getElementById("minets");
let secondInput = document.getElementById("seconds");
    
var second = 10;  
var minet = ": "+ 4;
var hour = ": "+ 2;

let intervalHotOffer = setInterval(function(){

    hourInput.textContent = hour;
    minInput.textContent = minet;
    secondInput.textContent = second;
    second--;

    let textHottSupperOffer = document.getElementById("span-timer");

    if(second == 0){
        second = 10;
        minet--;
    }else if(minet == 0){
        hour--;
    }else if(hour == 0){
        textHottSupperOffer.innerHTML = "پایان تخفیف";
    }

},1000);