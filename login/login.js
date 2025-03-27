// input-password-lock-onlock-icon

let lock = document.getElementById("lock");
let onlock = document.getElementById("onlock");
let a = document.querySelector("a");
let passwordType = document.getElementById("ipt-password");


onlock.style.display = "none"

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