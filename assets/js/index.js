
/* Functions */

function addHighlightColor() {
  const toggleColor = (navLink, hash)=>{
    navLink.id.split("-")[0] === hash
      ? navLink.classList.toggle("text-green-600", true)
      : navLink.classList.toggle("text-green-600", false);
  }
  switch (location.hash.substring(1)) {
    case "": 
      navLinks.forEach(link => toggleColor(link, "home"));
      break;

    case "about": 
      navLinks.forEach(link => toggleColor(link, "about"));
      break;

    case "contact": 
      navLinks.forEach(link => toggleColor(link, "contact"));
      break;

    case "projects": 
      navLinks.forEach(link => toggleColor(link, "projects"));
      break;
  
    default:
      navLinks.forEach(link => toggleColor(link, "home"));
      break;
  }
}

function changeTab(tab=homeTab) {
  if (tab === projectsTab) {
    homeTab.classList.toggle("hidden", true);
    inProgressTab.classList.toggle("hidden", true);
    projectsTab.classList.toggle("hidden", false);
    window.location.assign(`./#${tab.id.split('-')[0]}`);
  } else if (tab === inProgressTab) {
    homeTab.classList.toggle("hidden", true);
    projectsTab.classList.toggle("hidden", true);
    inProgressTab.classList.toggle("hidden", false);
  } else {
    projectsTab.classList.toggle("hidden", true);
    inProgressTab.classList.toggle("hidden", true);
    homeTab.classList.toggle("hidden", false);
  }
}

function displayPage() {
  addHighlightColor();
  const tab = location.hash.substring(1) === "projects"
    ? projectsTab
    // ? inProgressTab
    : homeTab
  changeTab(tab);
}

function openProjectDetails(tile) {
  window.open(`https://theavocadocoder.github.io/${tile.id}`, "_blank");
}


/* Links */

const homeNavLink = document.querySelector("#home-nav-link"),
  aboutNavLink = document.querySelector("#about-nav-link"),
  contactNavLink = document.querySelector("#contact-nav-link"),
  projectsNavLink = document.querySelector("#projects-nav-link"),
  goHomeLink = document.querySelector("#go-home");

const navLinks = [homeNavLink, projectsNavLink, aboutNavLink, contactNavLink];


/* Tabs & Sections */

const homeTab = document.querySelector("#home"),
  aboutSection = document.querySelector("#about"),
  contactSection = document.querySelector("#contact"),
  inProgressTab = document.querySelector("#in-progress"),
  projectsTab = document.querySelector("#projects");


/* Grouped Selectors */

const projectTiles = document.querySelectorAll(".project-tile");

/* Event Listeners */

window.addEventListener("hashchange", displayPage);
window.addEventListener("load", displayPage);

goHomeLink.addEventListener("click", changeTab);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (link === projectsNavLink) {
      // changeTab(inProgressTab);
      changeTab(projectsTab);
    } else {
      changeTab();
    }
  })
});

projectTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    openProjectDetails(tile);
  })
})