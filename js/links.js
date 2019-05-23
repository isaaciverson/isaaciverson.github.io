// MENU MOUSECLICK
function designMouseClick() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("purple", "black-text");
    window.location.href = "design.html";
}
function musicMouseClick() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("green", "black-text");
    window.location.href = "music.html";
}
function videoMouseClick() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("red", "black-text");
    window.location.href = "video.html";
}
function vrMouseClick() {
    document.getElementById("main").classList.remove("white-text");
    document.getElementById("main").classList.add("yellow", "black-text");
    window.location.href = "vr.html";
}
function otherMouseClick() {
    window.location.href = "other.html";
}