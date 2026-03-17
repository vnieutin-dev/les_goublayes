function initMobileMenu() {
    const toggle = document.querySelector(".mobile-navbar-toggle");
    const menu = document.getElementById("mobile-navbar");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("open");
        toggle.textContent = isOpen ? "✕" : "☰";
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });
}
