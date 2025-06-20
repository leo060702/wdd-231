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
  event.preventDefault(); // Prevent default form submission

  // Get form fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("form-message");

  // Basic validation
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Show success message
  formMessage.style.display = "block";

  // Clear form fields
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";

  return false;
}
