function showMobileMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    var mobileMenuBtn = document.getElementById("mobile-menu-btn-icon");
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
    } else {
        mobileMenu.classList.add("show");
    }
    if (mobileMenuBtn.classList.contains("fa-bars")) {
        mobileMenuBtn.classList.remove("fa-bars");
        mobileMenuBtn.classList.add("fa-times");
    } else {
        mobileMenuBtn.classList.remove("fa-times");
        mobileMenuBtn.classList.add("fa-bars");
    }
}

function designMouseOver() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("purple", "black-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "graphic designer";
}
function designMouseOut() {
    document.getElementById("main").classList.remove("purple", "black-text");
    document.getElementById("main").classList.add("white-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "professional creator";
}

function musicMouseOver() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("green", "black-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "musician";
}
function musicMouseOut() {
    document.getElementById("main").classList.remove("green", "black-text");
    document.getElementById("main").classList.add("white-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "professional creator";
}

function videoMouseOver() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("red", "black-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "videographer";
}
function videoMouseOut() {
    document.getElementById("main").classList.remove("red", "black-text");
    document.getElementById("main").classList.add("white-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "professional creator";
}

function vrMouseOver() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("yellow", "black-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "VR developer";
}
function vrMouseOut() {
    document.getElementById("main").classList.remove("yellow", "black-text");
    document.getElementById("main").classList.add("white-text");
    var title = document.getElementById("title");
    while (title.firstChild) title.removeChild(title.firstChild);
    title.innerHTML = "professional creator";
}