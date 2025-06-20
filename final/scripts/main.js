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
