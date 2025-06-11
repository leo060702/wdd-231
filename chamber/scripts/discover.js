
document.addEventListener("DOMContentLoaded", () => {
  loadPlaces();
  handleVisits();
});

function loadPlaces() {
  fetch("data/places.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("cards-container");
      data.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("discover-card");
        card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
            <img src="${place.image}" alt="${place.name}">
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;
        container.appendChild(card);
      });
    });
}

function handleVisits() {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween === 0) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }
  localStorage.setItem("lastVisit", now);
}
