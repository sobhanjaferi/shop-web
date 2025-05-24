// ==================== phone-icon ====================

let phoneIpt = document.getElementById("number");
let phoneIcon = document.querySelector("i");
let nameIpt = document.querySelector(".div-name");
let dateIpt = document.querySelector(".div-date");
let submit = document.getElementById("btn-account");

phoneIpt.addEventListener("click", function(){
    phoneIcon.style.color = "rgb(0, 55, 255)";

    nameIpt.addEventListener("click", ()=>{
        phoneIcon.style.color = "black"
    })

    dateIpt.addEventListener("click", ()=>{
        phoneIcon.style.color = "black"
    })

})

// ==================== button-event ====================

const save = document.getElementById("btn-account");

save.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href = "../index.html";
    },3000);
});