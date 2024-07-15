function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // Função para trocar o idioma para inglês
function setLanguageEnglish() {
  fetch('./locales/en.json')
    .then(response => response.json())
    .then(data => {
      translateUI(data);
    });
}

// Função para trocar o idioma para português
function setLanguagePortuguese() {
  fetch('./locales/pt.json')
    .then(response => response.json())
    .then(data => {
      translateUI(data);
    });
}

// Função para traduzir todos os elementos da UI
function translateUI(data) {
  // Navbar
  document.getElementById('nav-about').textContent = data.nav_about;
  document.getElementById('nav-experience').textContent = data.nav_experience;
  document.getElementById('nav-projects').textContent = data.nav_projects;
  document.getElementById('nav-contact').textContent = data.nav_contact;

  // Section: Profile
  document.getElementById('section-hello').textContent = data.section_hello;
  document.getElementById('section-title').textContent = data.section_title;
  document.getElementById('section-subtitle').textContent = data.section_subtitle;
  document.getElementById('btn-cv').textContent = data.btn_cv;
  document.getElementById('btn-contact').textContent = data.btn_contact;

  // Section: About
  document.getElementById('about-title').textContent = data.about_title;
  document.getElementById('about-experience').textContent = data.about_experience;
  document.getElementById('about-education').textContent = data.about_education;
  document.getElementById('about-text').textContent = data.about_text;

  // Section: Experience
  document.getElementById('explore-experience').textContent = data.explore_experience;
  document.getElementById('exp-design').textContent = data.exp_design;
  document.getElementById('exp-frontend').textContent = data.exp_frontend;
  document.getElementById('exp-design-tools').textContent = data.exp_design_tools;
  document.getElementById('exp-frontend-tools').textContent = data.exp_frontend_tools;

  // Section: Projects
  document.getElementById('browse-projects').textContent = data.browse_projects;
  document.getElementById('projects-title').textContent = data.projects_title;

  // Section: Contact
  document.getElementById('contact-title').textContent = data.contact_title;
  document.getElementById('contact-get-in-touch').textContent = data.contact_get_in_touch;
  document.getElementById('contact-email').textContent = data.contact_email;
  document.getElementById('contact-linkedin').textContent = data.contact_linkedin;
}

// Definindo o idioma padrão como inglês ao carregar a página
setLanguageEnglish();
