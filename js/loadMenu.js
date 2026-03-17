function loadMenu() {
    fetch('includes/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-wrapper').innerHTML = data;
            initMobileMenu();
        })
        .catch(error => {
            console.error('Error loading the menu:', error);
        });
}

loadMenu();