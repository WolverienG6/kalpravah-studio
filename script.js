const image = (name) => `https://kalpravah-ali.vercel.app/product/${name}`;

const projects = [
  {
    category: "architecture", number: "01", location: "LUCKNOW", year: "2024",
    type: "RESIDENTIAL ARCHITECTURE", title: "The Earth House", image: image("p1-1.jpg"),
    description: "A serene residence in Lucknow designed around organic textures, soft lime plaster, and warm timber tones, crafting a tranquil sanctuary.", photos: "3 Architectural Photographs",
    slug: "earth-house", subtitle: "Warm Minimalist Living", highlights: ["Tactile Lime Plaster Walls", "Custom Teak Millwork", "Integrated Ambient Lighting"], gallery: ["p1-1.jpg", "p1-2.jpg", "p1-3.jpg"]
  },
  {
    category: "residential", number: "02", location: "SAHARANPUR, UP", year: "2023",
    type: "RESIDENTIAL INTERIOR", title: "The Courtyard Sanctuary", image: image("p2-1.jpg"),
    description: "Centering the home in Saharanpur, UP around light and green courtyards, this design balances rich traditional craftsmanship with sleek modern lines.", photos: "5 Architectural Photographs",
    slug: "courtyard-sanctuary", subtitle: "Indoor-Outdoor Harmony", highlights: ["Central Atrium Garden", "Handcrafted Stone Joinery", "Acoustic Wood Louvers"], gallery: ["p2-1.jpg", "p2-2.jpg", "p2-3.jpg", "p2-4.jpg", "p2-5.jpg"]
  },
  {
    category: "commercial", number: "03", location: "BANGALORE", year: "2024",
    type: "COMMERCIAL INTERIOR", title: "Boutique Studio Suite", image: image("p3-1.jpg"),
    description: "An intentional, high-end workspace for creative leaders, featuring curated furniture, micro-cement flooring, and acoustic warmth.", photos: "5 Architectural Photographs",
    slug: "boutique-studio-suite", subtitle: "Commercial Architectural Interior", highlights: ["Custom Executive Desks", "Fluted Wall Details", "Concealed Smart Storage"], gallery: ["p3-1.jpg", "p3-2.jpg", "p3-3.jpg", "p3-4.jpg", "p3-5.jpg"]
  },
  {
    category: "contemporary", number: "04", location: "BANGALORE", year: "2024",
    type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse", image: image("p4.jpg"),
    description: "Expansive residence featuring double-height ceiling voids, warm earthy hues, and bespoke Italian marble accents.", photos: "4 Architectural Photographs",
    slug: "aura-penthouse", subtitle: "Contemporary Residence", highlights: ["Double-Height Lounge", "Architectural Wall Arches", "Custom Lighting Sculptures"], gallery: ["p4.jpg", "p5-1.jpg", "p5-2.jpg", "p5-3.jpg"]
  }
];

const services = [
  { image: "p2-1.jpg", title: "Residential Interior Design", description: "Bespoke residential spaces tailored to your daily rituals, combining tactile luxury with spatial clarity and intentional living.", tags: ["Private Residences", "Luxury Apartments", "Farmhouses & Villas", "Penthouse Interiors"] },
  { image: "p3-1.jpg", title: "Commercial & Studio Spaces", description: "Distinctive workspaces and boutique corporate environments built around culture, productivity and spatial elegance.", tags: ["Executive Suites", "Boutique Offices", "Design Studios", "Creative Workspaces"] },
  { image: "p2-4.jpg", title: "Spatial Renovation & Styling", description: "Transforming existing environments with refined spatial layouts, bespoke furniture curation, natural materiality, and intentional styling.", tags: ["Spatial Renovation", "Custom Furniture", "Material Curation", "Art & Styling"] },
  { image: "p5-1.jpg", title: "Turnkey Design & Execution", description: "End-to-end design management from spatial concept and material selection to final styling and move-in execution.", tags: ["Spatial Planning", "Custom Joinery", "Lighting Architecture", "Curated Furnishing & Art"] }
];

const slides = [
  { image: "p4.jpg", type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse", slug: "aura-penthouse" },
  { image: "p1-1.jpg", type: "RESIDENTIAL ARCHITECTURE", title: "The Earth House", slug: "earth-house" },
  { image: "p2-1.jpg", type: "RESIDENTIAL INTERIOR", title: "The Courtyard Sanctuary", slug: "courtyard-sanctuary" },
  { image: "p3-1.jpg", type: "COMMERCIAL INTERIOR", title: "Boutique Studio Suite", slug: "boutique-studio-suite" },
  { image: "p5-1.jpg", type: "CONTEMPORARY RESIDENCE", title: "Aura Penthouse Lounge", slug: "aura-penthouse" },
  { image: "p1-2.jpg", type: "RESIDENTIAL ARCHITECTURE", title: "Lime Plaster Sanctuary", slug: "earth-house" },
  { image: "p2-3.jpg", type: "RESIDENTIAL INTERIOR", title: "Courtyard Terrace", slug: "courtyard-sanctuary" },
  { image: "p3-2.jpg", type: "COMMERCIAL INTERIOR", title: "Studio Acoustic Slats", slug: "boutique-studio-suite" }
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

const caseStudyGrid = document.querySelector("#case-study-grid");
if (caseStudyGrid) caseStudyGrid.innerHTML = projects.map((project) => `
  <a class="case-tile" href="${project.slug}/" aria-label="View ${project.title} case study">
    <div class="case-tile-image"><img src="${project.image}" alt="${project.title}" /><span class="case-tile-explore">EXPLORE CASE STUDY ↗</span></div>
    <div class="case-tile-body">
      <div class="case-tile-meta"><span>${project.type} • ${project.location} (${project.year})</span><span>0${project.number}</span></div>
      <h2>${project.title}</h2><p>${project.description}</p>
      <div class="case-tile-highlights">${project.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}</div>
    </div>
  </a>`).join("");

const caseStudyHost = document.querySelector("#case-detail-content");
if (caseStudyHost) {
  const projectIndex = projects.findIndex((item) => item.slug === document.body.dataset.caseStudy);
  const project = projects[projectIndex];
  const next = projects[(projectIndex + 1) % projects.length];
  if (project && next) {
    document.title = `${project.title} — Kalpravah Studio`;
    caseStudyHost.innerHTML = `
      <section class="case-detail-hero">
        <p class="section-kicker">${project.type} • ${project.location} (${project.year})</p>
        <h1>${project.title}</h1><p class="case-detail-subtitle">${project.subtitle}</p>
        <div class="case-detail-cover"><img src="${project.image}" alt="${project.title} interior" /></div>
      </section>
      <section class="case-detail-story">
        <div class="case-detail-vision"><h2>The Architectural Vision.</h2><p>${project.description}</p><p>Thoughtful planning, natural light, and carefully chosen materials give this space its character. Each detail supports the way it is lived in while creating a calm, lasting visual rhythm.</p><h3>KEY CRAFT &amp; MATERIAL HIGHLIGHTS</h3><div class="case-detail-highlights">${project.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}</div></div>
        <aside class="case-detail-overview"><h3>PROJECT OVERVIEW</h3><dl><div><dt>Location</dt><dd>${project.location}</dd></div><div><dt>Typology</dt><dd>${project.type}</dd></div><div><dt>Year Completed</dt><dd>${project.year}</dd></div><div><dt>Design Studio</dt><dd>Kalpravah Interior Design Studio</dd></div><div><dt>Scope</dt><dd>Interior Architecture &amp; Styling</dd></div></dl><button type="button" data-open-project>INQUIRE FOR YOUR HOME ↗</button></aside>
      </section>
      <section class="case-detail-gallery"><p class="section-kicker">PHOTOGRAPHY PORTFOLIO</p><div class="case-detail-gallery-title"><h2>Spatial Collage &amp; Details.</h2><span>${project.gallery.length} High-Resolution Photographs</span></div><div class="case-detail-images">${project.gallery.slice(1).map((photo, index) => `<img src="${image(photo)}" alt="${project.title} spatial detail ${index + 1}" loading="lazy" />`).join("")}</div></section>
      <section class="case-detail-next"><div><p class="section-kicker">NEXT CASE STUDY</p><h2>${next.title}</h2><p>${next.type} • ${next.location}</p></div><div class="case-detail-next-actions"><a href="../${next.slug}/">EXPLORE NEXT PROJECT →</a><a href="../">BACK TO ALL PROJECTS</a></div></section>`;
  }
}

const servicesGrid = document.querySelector("#services-grid");
if (servicesGrid) servicesGrid.innerHTML = services.map((service, index) => `
  <article class="service-card reveal"><img src="${image(service.image)}" alt="${service.title}" /><div class="service-body"><span class="service-num">0${index + 1}</span><h3>${service.title}</h3><p>${service.description}</p><div class="service-tags">${service.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><button type="button" data-placeholder="${service.title} enquiry">ENQUIRE FOR THIS PRACTICE</button></div></article>`).join("");

const principleList = document.querySelector("#principle-list");
if (principleList) principleList.innerHTML = principles.map((item, index) => `<article class="principle reveal"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p><span>P. ${String(index + 1).padStart(2, "0")}</span></article>`).join("");

let currentSlide = 2;
const stage = document.querySelector("#carousel-stage");
let slideElements = [];
function updateSlides() {
  slideElements.forEach((element, index) => {
    const total = slides.length;
    const diff = (index - currentSlide + total) % total;
    const relative = diff > total / 2 ? diff - total : diff;
    const position = relative === 0 ? "active" : relative === -1 ? "side-left" : relative === 1 ? "side-right" : relative === -2 ? "far-left" : relative === 2 ? "far-right" : relative < 0 ? "off-left" : "off-right";
    element.className = `slide ${position}`;
    element.setAttribute("aria-label", `${position === "active" ? "View" : "Show"} ${slides[index].title} ${position === "active" ? "case study" : "in portfolio"}`);
    if (position.startsWith("off-")) {
      element.tabIndex = -1;
      element.setAttribute("aria-hidden", "true");
    } else {
      element.removeAttribute("tabindex");
      element.removeAttribute("aria-hidden");
    }
  });
}
function renderSlides() {
  if (!stage) return;
  stage.innerHTML = slides.map((slide, index) => {
    const href = `${caseStudyGrid ? "" : "projects/"}${slide.slug}/`;
    return `<a class="slide" data-slide-index="${index}" href="${href}"><img src="${image(slide.image)}" alt="" /><div class="slide-caption"><span>${slide.type} · VIEW CASE STUDY →</span><h3>${slide.title}</h3></div></a>`;
  }).join("");
  slideElements = [...stage.querySelectorAll(".slide")];
  updateSlides();
}

stage?.addEventListener("click", (event) => {
  const slide = event.target.closest(".slide");
  if (!slide) return;
  const index = Number(slide.dataset.slideIndex);
  if (index !== currentSlide) {
    event.preventDefault();
    currentSlide = index;
    updateSlides();
  }
});

document.querySelectorAll(".filters button").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filters .active")?.classList.remove("active"); button.classList.add("active"); renderProjects(button.dataset.filter);
}));
document.querySelector(".prev")?.addEventListener("click", () => { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateSlides(); });
document.querySelector(".next")?.addEventListener("click", () => { currentSlide = (currentSlide + 1) % slides.length; updateSlides(); });

const menu = document.querySelector(".mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
function setMenu(open) { if (!menu || !menuToggle) return; menu.classList.toggle("open", open); document.body.classList.toggle("menu-open", open); menu.setAttribute("aria-hidden", String(!open)); menuToggle.setAttribute("aria-expanded", String(open)); }
menuToggle?.addEventListener("click", () => setMenu(true));
document.querySelector(".menu-close")?.addEventListener("click", () => setMenu(false));
document.querySelectorAll("[data-close-menu]").forEach((el) => el.addEventListener("click", () => setMenu(false)));
function scrollToId(id) { document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }
document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => scrollToId(button.dataset.scroll)));

function projectFormMarkup(prefix) {
  return `<form class="project-form" data-project-form="${prefix}">
    <div class="project-form-row">
      <label for="${prefix}-name">YOUR NAME *<input id="${prefix}-name" name="name" type="text" autocomplete="name" placeholder="e.g. Ananya Shah" required /></label>
      <label for="${prefix}-email">EMAIL ADDRESS *<input id="${prefix}-email" name="email" type="email" autocomplete="email" placeholder="ananya@example.com" required /></label>
    </div>
    <div class="project-form-row">
      <label for="${prefix}-phone">PHONE / WHATSAPP *<input id="${prefix}-phone" name="phone" type="tel" autocomplete="tel" placeholder="+91 98765 43210" required /></label>
      <label for="${prefix}-city">CITY / LOCATION *<input id="${prefix}-city" name="city" type="text" autocomplete="address-level2" placeholder="e.g. Bangalore, Mumbai, Delhi..." required /></label>
    </div>
    <div class="project-form-row project-form-row-three">
      <label for="${prefix}-type">PROJECT TYPE<select id="${prefix}-type" name="type"><option>Residential Interior</option><option>Commercial / Studio</option><option>Hospitality &amp; Retail</option><option>Online &amp; Turnkey</option></select></label>
      <label for="${prefix}-budget">APPROX. BUDGET<select id="${prefix}-budget" name="budget"><option>₹15L - ₹25L</option><option selected>₹25L - ₹50L</option><option>₹50L - ₹1Cr</option><option>₹1Cr+</option></select></label>
      <label for="${prefix}-timeline">TIMELINE<select id="${prefix}-timeline" name="timeline"><option>Immediate</option><option selected>1 - 3 Months</option><option>3 - 6 Months</option><option>Planning Phase</option></select></label>
    </div>
    <label for="${prefix}-message">TELL US ABOUT YOUR SPACE<textarea id="${prefix}-message" name="message" rows="3" placeholder="Share details about your layout, design preferences, or specific room requirements..."></textarea></label>
    <button class="project-form-submit" type="submit">SUBMIT CONSULTATION INQUIRY <span aria-hidden="true">↗</span></button>
    <p class="project-form-note">Preview form — submissions are not sent yet.</p>
    <p class="project-form-status" role="status" hidden></p>
  </form>`;
}

const contactFormHost = document.querySelector("[data-project-form-host]");
if (contactFormHost) contactFormHost.innerHTML = projectFormMarkup("contact");

document.body.insertAdjacentHTML("beforeend", `<div class="project-modal" hidden>
  <div class="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" tabindex="-1">
    <button class="project-modal-close" type="button" data-close-project aria-label="Close project form">×</button>
    <p class="section-kicker">PROJECT CONSULTATION &amp; INQUIRY</p>
    <h2 id="project-modal-title">Start Your Project.</h2>
    <p class="project-modal-intro">Based in Bangalore • Designing Intentional Homes Across India.</p>
    ${projectFormMarkup("modal")}
  </div>
</div>`);

const projectModal = document.querySelector(".project-modal");
let projectModalReturnFocus = null;
function openProjectModal() {
  projectModalReturnFocus = document.activeElement;
  setMenu(false);
  projectModal.hidden = false;
  document.body.classList.add("project-modal-open");
  projectModal.querySelector("input").focus();
}
function closeProjectModal() {
  projectModal.hidden = true;
  document.body.classList.remove("project-modal-open");
  const returnTarget = projectModalReturnFocus?.closest(".mobile-menu") ? menuToggle : projectModalReturnFocus;
  if (returnTarget?.isConnected) returnTarget.focus();
}
document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open-project]");
  if (opener) {
    event.preventDefault();
    openProjectModal();
  } else if (event.target.closest("[data-close-project]") || event.target === projectModal) {
    closeProjectModal();
  }
});
document.addEventListener("submit", (event) => {
  if (!event.target.matches(".project-form")) return;
  event.preventDefault();
  const status = event.target.querySelector(".project-form-status");
  status.textContent = "This is a preview. Your details have not been sent.";
  status.hidden = false;
});
document.addEventListener("keydown", (event) => {
  if (projectModal.hidden) return;
  if (event.key === "Escape") return closeProjectModal();
  if (event.key !== "Tab") return;
  const focusable = [...projectModal.querySelectorAll("button, input, select, textarea")];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

document.querySelectorAll(".about-faq-item button").forEach((button) => button.addEventListener("click", () => {
  const willOpen = button.getAttribute("aria-expanded") !== "true";
  document.querySelectorAll(".about-faq-item").forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector("button").setAttribute("aria-expanded", "false");
    item.querySelector(".about-faq-answer").hidden = true;
  });
  if (willOpen) {
    button.closest(".about-faq-item").classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    document.getElementById(button.getAttribute("aria-controls")).hidden = false;
  }
}));

let toastTimer;
function showToast(message = "This is a placeholder for the enquiry integration.") { const toast = document.querySelector(".toast"); if (!toast) return; toast.textContent = message; toast.classList.add("show"); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3200); }
document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-placeholder]"); if (trigger && trigger.tagName !== "FORM") showToast(`${trigger.dataset.placeholder} is ready for your integration.`); });
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

const introScreen = document.querySelector(".intro-screen");
if (introScreen) {
  const counter = introScreen.querySelector(".intro-counter span");
  const duration = 1600;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let startTime;
  let finished = false;

  function setIntroProgress(percent) {
    counter.textContent = String(percent).padStart(2, "0");
    introScreen.style.setProperty("--intro-progress", `${percent}%`);
  }

  function finishIntro() {
    if (finished) return;
    finished = true;
    setIntroProgress(100);
    window.setTimeout(() => introScreen.classList.add("is-gone"), reducedMotion ? 100 : 250);
  }

  function animateIntro(timestamp) {
    if (finished) return;
    startTime ??= timestamp;
    const percent = Math.min(100, Math.floor(((timestamp - startTime) / duration) * 100));
    setIntroProgress(percent);
    if (percent < 100) window.requestAnimationFrame(animateIntro);
    else finishIntro();
  }

  if (reducedMotion) finishIntro();
  else {
    window.requestAnimationFrame(animateIntro);
    // A background tab may throttle animation frames; never leave the intro covering the page.
    window.setTimeout(finishIntro, duration + 800);
  }
}
