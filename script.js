document.addEventListener("DOMContentLoaded", () => {
  const goToPage2 = document.getElementById("goToPage2");
  const goBack = document.getElementById("goBack");

  if (goToPage2) {
    goToPage2.addEventListener("click", () => {
      // Add a nice fade-out animation before redirect
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = "about.html", 300);
    });
  }

  if (goBack) {
    goBack.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = "index.html", 300);
    });
  }
});
