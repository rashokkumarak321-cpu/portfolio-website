const API_BASE = "http://localhost:8080/api";

/* ---------- Hero: typed code effect ---------- */
const codeLines = [
  "const developer = {",
  '  name: "R.ASHOK KUMAR",',
  '  role: "Full-Stack Developer",',
  '  stack: ["Java", "MySQL", "HTML", "CSS", "JS"],',
  '  status: "open to opportunities"',
  "};",
];

function typeHeroCode() {
  const el = document.getElementById("typedCode");
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const fullText = codeLines.join("\n");

  if (prefersReduced) {
    el.textContent = fullText;
    return;
  }

  let i = 0;
  function typeChar() {
    if (i <= fullText.length) {
      el.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeChar, 18);
    }
  }
  typeChar();
}

/* ---------- Projects: fetch from live API ---------- */
async function loadProjects() {
  const grid = document.getElementById("projectsGrid");
  const status = document.getElementById("projectsStatus");

  try {
    const response = await fetch(`${API_BASE}/projects`);
    if (!response.ok) throw new Error("Request failed");

    const projects = await response.json();

    if (projects.length === 0) {
      status.textContent = "No projects added yet — check back soon.";
      return;
    }

    grid.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const tags = (project.techStack || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .map((t) => `<span>${t}</span>`)
        .join("");

      card.innerHTML = `
        <h3>${escapeHtml(project.title || "Untitled project")}</h3>
        <p>${escapeHtml(project.description || "")}</p>
        <div class="project-card__tags">${tags}</div>
        <div class="project-card__links">
          ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener">GitHub →</a>` : ""}
          ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener">Live Demo →</a>` : ""}
        </div>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    status.textContent =
      "Couldn't reach the API — make sure the Spring Boot server is running on port 8080.";
    grid.appendChild(status);
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Contact form ---------- */
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");
const contactSubmit = document.getElementById("contactSubmit");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  contactSubmit.disabled = true;
  contactStatus.textContent = "Sending…";

  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Request failed");

    contactStatus.textContent = "Message sent — thank you!";
    contactForm.reset();
  } catch (err) {
    contactStatus.textContent =
      "Couldn't send right now — the /api/contact endpoint isn't built yet.";
  } finally {
    contactSubmit.disabled = false;
  }
});

/* ---------- Init ---------- */
typeHeroCode();
loadProjects();
