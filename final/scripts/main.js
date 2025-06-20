// Responsive Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Contact Form Submit Binding
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  // Hero Background Video Switching
  const videoElement = document.getElementById('heroVideo');
  if (videoElement) {
    const videos = ['videos/scene1.mp4', 'videos/scene2.mp4'];
    let currentIndex = 0;

    function playNextVideo() {
      videoElement.src = videos[currentIndex];
      videoElement.play();
      currentIndex = (currentIndex + 1) % videos.length;
    }

    videoElement.addEventListener('ended', playNextVideo);
    playNextVideo();
  }

  // Load Lodging Options from JSON (for contact.html)
  const lodgingList = document.getElementById("lodging-list");
  if (lodgingList) {
    fetch("data/lodging.json")
      .then(response => {
        if (!response.ok) throw new Error("Failed to load lodging data.");
        return response.json();
      })
      .then(data => {
        data.forEach(item => {
          const li = document.createElement("li");
          li.innerHTML = `
            <strong>${item.name}</strong> (${item.type})<br>
            <em>${item.location}</em><br>
            ${item.description}<br>
            <a href="${item.website}" target="_blank">More info</a>
          `;
          lodgingList.appendChild(li);
        });
      })
      .catch(error => {
        lodgingList.innerHTML = `<li>Unable to load lodging data.</li>`;
        console.error("lodging.json error:", error);
      });
  }
});

// Contact Form Submit Handler
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

  // Store form data in sessionStorage for thankyou.html
  sessionStorage.setItem("formName", name);
  sessionStorage.setItem("formEmail", email);
  sessionStorage.setItem("formSubject", subject);
  sessionStorage.setItem("formMessage", message);

  // Redirect to thank you page
  window.location.href = "thankyou.html";
}
