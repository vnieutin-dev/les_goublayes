function displaySpinner() {
  const loader = document.getElementById("page-loader");
  if (!loader) return;

  const initLoader = () => {
    const imgs = [...document.querySelectorAll('img[fetchpriority="high"]')];
    
    if (imgs.length === 0) {
      loader.remove();
      return;
    }

    const loadPromises = imgs.map((img) => {
      if (img.complete) return img.decode().catch(() => {});

      // If not cached don't wait for decode (better for Safari)
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    });

    const timeout = new Promise((resolve) => setTimeout(resolve, 3000)); // Shorter timeout

    Promise.race([Promise.all(loadPromises), timeout]).then(() => {
      document.body.style.overflow = "";
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 600);
    });
  };

  if (document.readyState !== "loading") {
    initLoader();
  } else {
    document.addEventListener("DOMContentLoaded", initLoader);
  }
}
displaySpinner();