// course.js - handles course rendering and filtering
const courseData = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, type: "WDD", completed: true },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, type: "WDD", completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 3, type: "CSE", completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, type: "CSE", completed: false }
];

const container = document.getElementById("course-cards");
const creditDisplay = document.getElementById("total-credits");

function renderCourses(filterType = "ALL") {
  container.innerHTML = "";
  let filtered = courseData;

  if (filterType === "WDD") filtered = courseData.filter(c => c.type === "WDD");
  else if (filterType === "CSE") filtered = courseData.filter(c => c.type === "CSE");

  let totalCredits = 0;
  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = course.completed ? "course complete" : "course";
    card.innerHTML = `<strong>${course.code}</strong>: ${course.name} (${course.credits} credits)`;
    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditDisplay.textContent = totalCredits;
}

document.getElementById("all-courses").addEventListener("click", () => renderCourses("ALL"));
document.getElementById("wdd-courses").addEventListener("click", () => renderCourses("WDD"));
document.getElementById("cse-courses").addEventListener("click", () => renderCourses("CSE"));

// Initial render
renderCourses();
