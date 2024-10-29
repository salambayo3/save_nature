const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");
const scroll = document.querySelector(".scroll-up");
var eye = document.getElementById("eye");
var secondEye = document.getElementById("eye-slash");
var pword = document.getElementById("password")


menuBtn.onclick = () => {
    menuBtn.classList.add("fa-times");
    navbar.classList.toggle("navbar-active");
}
window.onscroll = () => {
    navbar.classList.remove("navbar-active");
}

window.addEventListener("scroll", function () {
    scroll.classList.toggle("scroll-up-active", window.scrollY > 80);
});



var sendBtn = document.getElementById("send")
var oper = document.querySelector(".container")
var close = document.querySelector(".close-icon");
// popup Event

sendBtn.addEventListener("click", function show() {
    oper.classList.toggle("container-active");
    document.body.style.overflow = "hidden"
});


close.onclick = () => {
    oper.classList.remove("container-active");
}


// reveal state Event
var state = false;

eye.addEventListener("click", function () {
    if (state) {
        pword.setAttribute("type", "password");
        state = false;
        secondEye.style.color = "#ff702a"
    } else {
        pword.setAttribute("type", "text");
        state = true;
        eye.classList.toggle("fa-eye-slash")
        secondEye.style.color = "#fff"
    }
});



























































function message() {
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var amount = document.getElementById("amount")
    var num = document.getElementById("num")
    var lname = document.getElementById("lname")
    const success = document.getElementById("success")
    const danger = document.getElementById("danger")


    if (name.value == "" || email.value == "" || amount.value == "") {
        danger.style.display = "block";
    } else {
        setTimeout(() => {
            name.value = "";
            email.value = "";
            amount.value = "";
            num.value = "";
            lname.value = "";
        }, 2000)
        success.style.display = "block";
        // danger.style.display = "block";
    }
}
// sendBtn.addEventListener("click", () => {
//     message();
// })