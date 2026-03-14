document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-navbar-toggle");
    const menu = document.getElementById("mobile-navbar");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
        const isOpen = menu.style.display === "flex";
        menu.style.display = isOpen ? "none" : "flex";
        toggle.textContent = isOpen ? "☰" : "✕";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    });
});
