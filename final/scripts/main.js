// Responsive Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Contact Form Handling
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  // Populate thankyou.html if needed
  if (document.body.classList.contains("thank-you-page")) {
    const name = sessionStorage.getItem("formName") || "Guest";
    const subject = sessionStorage.getItem("formSubject") || "(No subject)";
    const message = sessionStorage.getItem("formMessage") || "(No message)";

    const msgContainer = document.getElementById("user-message");
    if (msgContainer) {
      msgContainer.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Subject:</strong> ${subject}<br>
        <strong>Message:</strong><br><em>${message.replace(/\n/g, "<br>")}</em>
      `;
    }

    // Optional: clear storage after display
    sessionStorage.removeItem("formName");
    sessionStorage.removeItem("formSubject");
    sessionStorage.removeItem("formMessage");
  }
});

// Form Submission Logic
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  sessionStorage.setItem("formName", name);
  sessionStorage.setItem("formEmail", email);
  sessionStorage.setItem("formSubject", subject);
  sessionStorage.setItem("formMessage", message);

  window.location.href = "thankyou.html";
}
