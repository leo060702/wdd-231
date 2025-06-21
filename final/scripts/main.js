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

// Load Lodging Options from JSON
const lodgingList = document.getElementById("lodging-list");
if (lodgingList) {
  fetch("data/lodging-options.json")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json();
    })
    .then(data => {
      lodgingList.innerHTML = ""; // 清空旧内容
      data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${item.name}</strong> (${item.type})<br>
          <em>${item.location}</em><br>
          ${item.description}<br>
          <a href="${item.website}" target="_blank">Visit website</a>
        `;
        li.style.marginBottom = "1rem"; // 增加每项之间的间距
        lodgingList.appendChild(li);
      });
    })
    .catch(error => {
      lodgingList.innerHTML = "<li>Failed to load lodging data.</li>";
      console.error("Error loading JSON:", error);
    });
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

  // Hero Video Playlist: scene1.mp4 and scene2.mp4 looping
  const video = document.getElementById("heroVideo");
  if (video) {
    const sources = ["videos/scene1.mp4", "videos/scene2.mp4"];
    let index = 0;

    function playNext() {
      video.src = sources[index];
      video.load();
      video.play();
      index = (index + 1) % sources.length;
    }

    video.addEventListener("ended", playNext);
    playNext(); // start with first video
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
