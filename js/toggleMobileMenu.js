function toggleMobileMenu() {
    const menu = document.getElementById("mobile-navbar")

    if (menu.style.display === "flex") {
        menu.style.display = "none";  // Hide the menu
    } else {
        menu.style.display = "flex";  // Show the menu
    }
}