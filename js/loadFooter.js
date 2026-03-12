// Function to load the menu dynamically from an external HTML file
function loadFooter() {
    // Use the fetch API to load the menu.html file
    fetch('includes/footer.html')  // Make sure the path is correct
        .then(response => response.text()) // Convert response to text
        .then(data => {
            // Insert the loaded HTML content into the menu-container div
            document.getElementById('footer-wrapper').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
}

loadFooter();