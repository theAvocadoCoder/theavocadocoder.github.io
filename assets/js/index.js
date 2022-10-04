
/* Functions */

function addHighlightColor(activeTab) {
  navLinks.forEach(link => {
    if (link !== activeTab) {
      link.classList.toggle("text-green-600", false);
    } else {
      link.classList.toggle("text-green-600", true);
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