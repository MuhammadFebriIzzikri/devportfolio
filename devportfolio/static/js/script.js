const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka navigasi");
      menuToggle.textContent = "☰";
    });
  });
}

const projectGrid = document.querySelector("#projectsGrid");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function createProjectCard(project) {
  const techTags = (project.tech || [])
    .map((tech) => `<span class="tech-tag">${escapeHTML(tech)}</span>`)
    .join("");

  // Tautan proyek berasal dari data proyek. Jangan memasukkan data yang tidak dipercaya
  // tanpa validasi bila API ini nanti menerima data dari pengguna.
  const demo = escapeHTML(project.demo || "#projects");
  const code = escapeHTML(project.code || "https://github.com/");
  const title = escapeHTML(project.title || "Proyek");
  const category = escapeHTML(project.category || "Project");
  const description = escapeHTML(project.description || "");
  const icon = escapeHTML(project.icon || "✦");
  const accent = ["blue", "purple", "green"].includes(project.accent) ? project.accent : "blue";

  return `
    <article class="project-card">
      <div class="project-art ${accent}">
        <div class="art-grid"></div>
        <div class="art-symbol">${icon}</div>
      </div>
      <div class="project-body">
        <span class="project-category">${category}</span>
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="tech-list">${techTags}</div>
        <div class="project-links">
          <a href="${demo}">Demo <span>↗</span></a>
          <a href="${code}" target="_blank" rel="noopener noreferrer">Kode sumber <span>↗</span></a>
        </div>
      </div>
    </article>`;
}

async function loadProjects() {
  if (!projectGrid) return;

  try {
    const response = await fetch("/api/projects");
    if (!response.ok) throw new Error("API proyek tidak merespons.");

    const projects = await response.json();
    if (!Array.isArray(projects) || projects.length === 0) {
      projectGrid.innerHTML = '<p class="project-loading">Belum ada proyek. Tambahkan data proyek di app.py.</p>';
      return;
    }
    projectGrid.innerHTML = projects.map(createProjectCard).join("");
  } catch (error) {
    console.error(error);
    projectGrid.innerHTML = '<p class="project-loading">Proyek belum bisa dimuat. Pastikan server Python sedang berjalan, lalu muat ulang halaman.</p>';
  }
}

loadProjects();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
