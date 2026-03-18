function displaySpinner() {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");
    const highPriorityImgs = [
      ...document.querySelectorAll('img[fetchpriority="high"]'),
    ];

    // 1. Create a promise for every image
    const loadPromises = highPriorityImgs.map((img) => {
      // If already complete, just resolve
      if (img.complete) return img.decode();

      // Otherwise, wait for load AND decode
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

    // 2. Use Promise.all instead of Promise.race
    Promise.all(loadPromises).then(() => {
      // 3. The "Double rAF" ensures the browser has had a chance to
      // actually paint the decoded pixels to the screen.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!loader) return;

          document.body.style.overflow = "";

          loader.classList.add("hidden");
          loader.addEventListener("transitionend", () => loader.remove(), {
            once: true,
          });

          // Safety timeout: remove if transitionend fails to fire
          setTimeout(() => loader.remove(), 500);
        });
      });
    });
  });
}

displaySpinner();