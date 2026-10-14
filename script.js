const image = (name) => `https://kalpravah-ali.vercel.app/product/${name}`;

const projects = [
  {
    category: "architecture", number: "01", location: "LUCKNOW", year: "2024",
    type: "RESIDENTIAL ARCHITECTURE", title: "The Earth House", image: image("p1-1.jpg"),
    description: "A serene residence in Lucknow designed around organic textures, soft lime plaster, and warm timber tones, crafting a tranquil sanctuary.", photos: "3 Architectural Photographs"
  },
  {
    category: "residential", number: "02", location: "SAHARANPUR, UP", year: "2023",
    type: "RESIDENTIAL INTERIOR", title: "The Courtyard Sanctuary", image: image("p2-1.jpg"),
    description: "Centering the home in Saharanpur around light and green courtyards, this design balances rich traditional craftsmanship with sleek modern lines.", photos: "5 Architectural Photographs"
  },
  {
    category: "commercial", number: "03", location: "BANGALORE", year: "2024",
    type: "COMMERCIAL INTERIOR", title: "Boutique Studio Suite", image: image("p3-1.jpg"),
    description: "An intentional, high-end workspace for creative leaders, featuring curated furniture, micro-cement flooring, and acoustic warmth.", photos: "5 Architectural Photographs"
  },
  {
    category: "contemporary", number: "04", location: "BANGALORE", year: "2024",
    type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse", image: image("p4.jpg"),
    description: "Expansive residence featuring double-height ceiling voids, warm earthy hues, and bespoke Italian marble accents.", photos: "4 Architectural Photographs"
  }
];

const services = [
  { image: "p2-1.jpg", title: "Residential Interior Design", description: "Bespoke residential spaces tailored to your daily rituals, combining tactile luxury with spatial clarity and intentional living.", tags: ["Private Residences", "Luxury Apartments", "Farmhouses & Villas", "Penthouse Interiors"] },
  { image: "p3-1.jpg", title: "Commercial & Studio Spaces", description: "Distinctive workspaces and boutique corporate environments built around culture, productivity and spatial elegance.", tags: ["Executive Suites", "Boutique Offices", "Design Studios", "Creative Workspaces"] },
  { image: "p2-4.jpg", title: "Spatial Renovation & Styling", description: "Transforming existing environments with refined spatial layouts, bespoke furniture curation, natural materiality, and intentional styling.", tags: ["Spatial Renovation", "Custom Furniture", "Material Curation", "Art & Styling"] },
  { image: "p5-1.jpg", title: "Turnkey Design & Execution", description: "End-to-end design management from spatial concept and material selection to final styling and move-in execution.", tags: ["Spatial Planning", "Custom Joinery", "Lighting Architecture", "Curated Furnishing & Art"] }
];

const slides = [
  { image: "p4.jpg", type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse" },
  { image: "p1-1.jpg", type: "RESIDENTIAL ARCHITECTURE", title: "The Earth House" },
  { image: "p2-1.jpg", type: "RESIDENTIAL INTERIOR", title: "The Courtyard Sanctuary" },
  { image: "p3-1.jpg", type: "COMMERCIAL INTERIOR", title: "Boutique Studio Suite" },
  { image: "p5-1.jpg", type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse Lounge" },
  { image: "p1-2.jpg", type: "RESIDENTIAL ARCHITECTURE", title: "Lime Plaster Sanctuary" },
  { image: "p2-3.jpg", type: "RESIDENTIAL INTERIOR", title: "Courtyard Terrace" },
  { image: "p3-2.jpg", type: "COMMERCIAL INTERIOR", title: "Studio Acoustic Slats" }
];

const principles = [
  ["01", "Intentional Homes", "We design spaces around human proportion, natural light, and quiet functionality rather than transient design trends."],
  ["02", "Timeless Materials", "We honor authentic materials including natural stone, solid wood, lime plaster, and brass that age gracefully over time."],
  ["03", "Attention To Detail", "Every shadow gap, joint reveal, hidden hinge, and light beam is calculated to create seamless spatial rhythm."],
  ["04", "Designed For Living", "Our interiors are not static museum pieces; they are tactile, warm environments built to nourish your everyday life."]
];

const projectsGrid = document.querySelector("#projects-grid");
function renderProjects(filter = "all") {
  if (!projectsGrid) return;
  const filtered = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  projectsGrid.innerHTML = filtered.map((project) => `
    <article class="project-card">
      <div class="project-image"><img src="${project.image}" alt="${project.title}" /><span class="project-number">${project.number} ${project.location} · ${project.year}</span></div>
      <p class="project-type">${project.type} ${project.year}</p><h3>${project.title}</h3>
      <p>${project.description}<br /><span>${project.photos} · View Case Study →</span></p>
    </article>`).join("");
}

const servicesGrid = document.querySelector("#services-grid");
if (servicesGrid) servicesGrid.innerHTML = services.map((service, index) => `
  <article class="service-card reveal"><img src="${image(service.image)}" alt="${service.title}" /><div class="service-body"><span class="service-num">0${index + 1}</span><h3>${service.title}</h3><p>${service.description}</p><div class="service-tags">${service.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><button type="button" data-placeholder="${service.title} enquiry">ENQUIRE FOR THIS PRACTICE</button></div></article>`).join("");

const principleList = document.querySelector("#principle-list");
if (principleList) principleList.innerHTML = principles.map((item, index) => `<article class="principle reveal"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p><span>P. ${String(index + 1).padStart(2, "0")}</span></article>`).join("");

let currentSlide = 2;
const stage = document.querySelector("#carousel-stage");
function renderSlides() {
  if (!stage) return;
  stage.innerHTML = slides.map((slide, index) => {
    const total = slides.length;
    const diff = (index - currentSlide + total) % total;
    const relative = diff > total / 2 ? diff - total : diff;
    const position = relative === 0 ? "active" : relative === -1 ? "side-left" : relative === 1 ? "side-right" : relative === -2 ? "far-left" : relative === 2 ? "far-right" : "hidden";
    return `<article class="slide ${position}" aria-hidden="${position !== "active"}"><img src="${image(slide.image)}" alt="${slide.title}" /><div class="slide-caption"><span>${slide.type} · VIEW CASE STUDY →</span><h3>${slide.title}</h3></div></article>`;
  }).join("");
}

document.querySelectorAll(".filters button").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filters .active")?.classList.remove("active"); button.classList.add("active"); renderProjects(button.dataset.filter);
}));
document.querySelector(".prev")?.addEventListener("click", () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; renderSlides(); });
document.querySelector(".next")?.addEventListener("click", () => { currentSlide = (currentSlide + 1) % slides.length; renderSlides(); });

const menu = document.querySelector(".mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
function setMenu(open) { if (!menu || !menuToggle) return; menu.classList.toggle("open", open); document.body.classList.toggle("menu-open", open); menu.setAttribute("aria-hidden", String(!open)); menuToggle.setAttribute("aria-expanded", String(open)); }
menuToggle?.addEventListener("click", () => setMenu(true));
document.querySelector(".menu-close")?.addEventListener("click", () => setMenu(false));
document.querySelectorAll("[data-close-menu]").forEach((el) => el.addEventListener("click", () => setMenu(false)));
function scrollToId(id) { document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }
document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => scrollToId(button.dataset.scroll)));

let toastTimer;
function showToast(message = "This is a placeholder for the enquiry integration.") { const toast = document.querySelector(".toast"); if (!toast) return; toast.textContent = message; toast.classList.add("show"); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200); }
document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-placeholder]"); if (trigger && trigger.tagName !== "FORM") showToast(`${trigger.dataset.placeholder} is ready for your integration.`); });
document.querySelector(".enquiry-form")?.addEventListener("submit", (event) => { event.preventDefault(); showToast("Project enquiry is ready for your email or form integration."); });
let observer = null;
if ("IntersectionObserver" in window) {
  observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}
window.addEventListener("keydown", (event) => { if (event.key === "Escape") setMenu(false); });
renderProjects(); renderSlides();
window.setTimeout(() => document.querySelector(".intro-screen")?.classList.add("is-gone"), 1200);
