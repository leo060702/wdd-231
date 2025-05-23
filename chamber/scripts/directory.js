const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

async function fetchMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  directory.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name}" width="100">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    directory.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  directory.classList.add("grid");
  directory.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list");
  directory.classList.remove("grid");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

fetchMembers();
