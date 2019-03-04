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