// Update footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Set timestamp hidden field
document.getElementById("timestamp").value = new Date().toISOString();

// Modal control functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Mobile Menu Toggle (恢复汉堡菜单功能)
const menuToggle = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('nav.mobile');

menuToggle.addEventListener('click', () => {
  if (mobileNav.style.display === 'flex') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'flex';
  }
});
