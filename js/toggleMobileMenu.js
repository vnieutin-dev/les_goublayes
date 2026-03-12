function toggleMobileMenu() {
    const menu = document.getElementById("mobile-navbar");
    const toggle = document.querySelector(".mobile-navbar-toggle");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        toggle.textContent = "☰";
    } else {
        menu.style.display = "flex";
        toggle.textContent = "✕";
    }
}