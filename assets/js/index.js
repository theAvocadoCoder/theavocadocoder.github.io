
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
  });
}

function clearClassList(element) {
  const classListLength = element.classList.length;
  for (let i = 0; i < classListLength; i++) {
    element.classList.remove(element.classList[0]);
  }
}

function openProjectDetails(tile) {
  document.createElement("div");
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

window.addEventListener("hashchange", addHighlightColor);
window.addEventListener("load", addHighlightColor);

goHomeLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  addHighlightColor(homeNavLink);
});

homeNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  projectsTab.classList.toggle("hidden", true);
  addHighlightColor(homeNavLink);
});

aboutNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  projectsTab.classList.toggle("hidden", true);
  addHighlightColor(aboutNavLink);
});

contactNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  projectsTab.classList.toggle("hidden", true);
  addHighlightColor(contactNavLink);
});

projectsNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", true);
  projectsTab.classList.toggle("hidden", false);
  addHighlightColor(projectsNavLink);
});

projectTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    openProjectDetails(tile);
  })
})