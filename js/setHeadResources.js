// Function to add meta tags, stylesheet, script, and title
function setHeadResources() {
    // List of meta tags, link, script, and title
    const resources = [
        // Meta Tags
        { type: 'meta', attributes: { charset: 'utf-8' } },
        { type: 'meta', attributes: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' } },
        { type: 'meta', attributes: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },

        // Link to CSS
        { type: 'link', attributes: { rel: 'stylesheet', type: 'text/css', href: 'css/style.css' } },

        // Script to toggle mobile menu
        { type: 'script', attributes: { src: 'js/toggleMobileMenu.js' } },
        { type: 'script', attributes: { src: 'js/loadMenu.js' } },
        { type: 'script', attributes: { src: 'js/loadFooter.js' } },

        // Title tag
        { type: 'title', content: 'Ferme des Goublayes' }
    ];

    // Loop through the resources array and add the respective elements to <head>
    resources.forEach(resource => {
        let element;

        switch (resource.type) {
            case 'title':
                element = document.createElement('title');
                element.textContent = resource.content;
                break;
            default:
                element = document.createElement(resource.type);
                for (let [key, value] of Object.entries(resource.attributes)) {
                    element.setAttribute(key, value);
                }
                break;
        }

        // Append the element to the <head> section
        document.head.appendChild(element);
    });
}

// Call the function when the page loads
window.addEventListener('load', setHeadResources);
