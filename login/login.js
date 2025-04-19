// ==================== phone-icon ====================

let phoneIpt = document.getElementById("number");
let phoneIcon = document.querySelector("i");
let nameIpt = document.querySelector(".div-name");
let dateIpt = document.querySelector(".div-date");

phoneIpt.addEventListener("click", ()=>{
    phoneIcon.style.color = "rgb(0, 55, 255)";

    nameIpt.addEventListener("click", ()=>{
        phoneIcon.style.color = "black"
    })

    dateIpt.addEventListener("click", ()=>{
        phoneIcon.style.color = "black"
    })

})