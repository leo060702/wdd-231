const directory = document.getElementById("directory");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

async function fetchMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const isListView = directory.classList.contains("list");
  directory.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");

    let html = `<h3>${member.name}</h3>`;
    if (!isListView) {
      html += `<img src="${member.image}" alt="${member.name}" width="100">`;
    }
    html += `
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    card.innerHTML = html;
    directory.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  directory.classList.add("grid");
  directory.classList.remove("list");
  fetchMembers();
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list");
  directory.classList.remove("grid");
  fetchMembers();
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

fetchMembers();
