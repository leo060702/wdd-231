// Responsive Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

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

// Contact Form Submit Handler
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Store form values in localStorage
  localStorage.setItem("contactName", name);
  localStorage.setItem("contactSubject", subject);
  localStorage.setItem("contactMessage", message);

  // Redirect to thank you page
  window.location.href = "thankyou.html";

  return false;
}
