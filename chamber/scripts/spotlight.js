const container = document.getElementById("spotlight-container");

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  // 只筛选 level 为 2 或 3 的会员
  const featured = data.filter(m => m.level === 2 || m.level === 3);
  const selected = [];

  while (selected.length < 2 && featured.length > 0) {
    const index = Math.floor(Math.random() * featured.length);
    selected.push(featured.splice(index, 1)[0]);
  }

  selected.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name}" width="100" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

loadSpotlights();
