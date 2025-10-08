document.addEventListener("DOMContentLoaded", () => {
  // LOGIN PAGE LOGIC
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" && password === "") {
        localStorage.setItem("isLoggedIn", "true");
        document.body.classList.add("fade-out");
        setTimeout(() => (window.location.href = "dashboard.html"), 300);
      } else {
        errorMsg.textContent = "Invalid username or password!";
      }
    });
  }

  // DASHBOARD PAGE LOGIC
  const logoutBtn = document.getElementById("logoutBtn");
  const subscriberTable = document.getElementById("subscriberTable");

  if (logoutBtn) {
    // Redirect if not logged in
    if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "index.html";
      return;
    }

    // Fake subscriber data
    const subscribers = [
      { name: "Vallabha HD", email: "alice@example.com", status: "Active" },
      { name: "abcd", email: "bob@example.com", status: "Inactive" },
      { name: "Charlie Brown", email: "charlie@example.com", status: "Active" },
      { name: "Diana Prince", email: "diana@example.com", status: "Active" },
      { name: "Ethan Clark", email: "ethan@example.com", status: "Inactive" }
    ];

    // Populate table
    subscribers.forEach((sub, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>${sub.name}</td>
        <td>${sub.email}</td>
        <td class="${sub.status === "Active" ? "status-active" : "status-inactive"}">
          ${sub.status}
        </td>
      `;
      subscriberTable.appendChild(row);
    });

    // Logout button
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      document.body.classList.add("fade-out");
      setTimeout(() => (window.location.href = "index.html"), 300);
    });
  }
});
