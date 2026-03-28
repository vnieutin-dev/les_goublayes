function displaySpinner() {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");
    const highPriorityImgs = [
      ...document.querySelectorAll('img[fetchpriority="high"]'),
    ];

    // Create a promise for every image
    const loadPromises = highPriorityImgs.map((img) => {
      // If already complete, just resolve
      if (img.complete) return img.decode();

      // Otherwise, wait for load and decode
      return new Promise((resolve) => {
        img.addEventListener(
          "load",
          () => {
            img.decode().then(resolve).catch(resolve);
          },
          { once: true },
        );

        // Handle errors so the loader doesn't stay forever if an image fails
        img.addEventListener("error", resolve, { once: true });
      });
    });

    document.body.style.overflow = "hidden";

    Promise.all(loadPromises).then(() => {
      // The "Double rAF" ensures the browser has had a chance to actually paint the decoded pixels to the screen
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!loader) return;

          document.body.style.overflow = "";

          loader.classList.add("hidden");
          loader.addEventListener("transitionend", () => loader.remove(), {
            once: true,
          });

          // Safety timeout
          setTimeout(() => loader.remove(), 500);
        });
      });
    });
  });
}

displaySpinner();