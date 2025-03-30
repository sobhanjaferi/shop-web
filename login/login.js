// input-password-lock-onlock-icon

let lock = document.getElementById("lock");
let onlock = document.getElementById("onlock");
let a = document.querySelector("a");
let passwordType = document.getElementById("ipt-password");
let form = document.querySelector("form");
let containerForm = document.querySelector(".container");
let body = document.querySelector('body');

onlock.style.display = "none";

lock.addEventListener("click",()=>{
    lock.style.display = "none";
    onlock.style.display = "inline";
    passwordType.type = "text";
    onlock.addEventListener("click",()=>{
        onlock.style.display = "none";
        lock.style.display = "inline";
        passwordType.type = "password";
    })
})


form.addEventListener("click", ()=>{
    containerForm.style.backgroundColor = "rgba(255, 255, 255, 0.256)";
    containerForm.style.padding = "25px 10px"
})