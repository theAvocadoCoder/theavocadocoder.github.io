
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


/* Links */

const homeNavLink = document.querySelector("#home-nav-link"),
  aboutNavLink = document.querySelector("#about-nav-link"),
  contactNavLink = document.querySelector("#contact-nav-link"),
  projectsNavLink = document.querySelector("#projects-nav-link"),
  goHomeLink = document.querySelector("#go-home");

const navLinks = [homeNavLink, projectsNavLink, aboutNavLink, contactNavLink];


/* Tabs & Sections */

const homeTab = document.querySelector("#home"),
  inProgressTab = document.querySelector("#in-progress"),
  aboutSection = document.querySelector("#about"),
  contactSection = document.querySelector("#contact");


/* Event Listeners */

goHomeLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  addHighlightColor(homeNavLink);
});

homeNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  addHighlightColor(homeNavLink);
});

aboutNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  addHighlightColor(aboutNavLink);
});

contactNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", false);
  inProgressTab.classList.toggle("hidden", true);
  addHighlightColor(contactNavLink);
});

projectsNavLink.addEventListener("click", () => {
  homeTab.classList.toggle("hidden", true);
  inProgressTab.classList.toggle("hidden", false);
  addHighlightColor(projectsNavLink);
});

// function switchTab() {
//   e.preventDefault();
  
//   const homeTab = homeTab,
//   projectTab = document.querySelector("#project"),
//   inProgressTab = inProgressTab;

//   if (tab === "home") {
//     homeTab.classList.toggle("hidden");
//     inProgressTab.classList.toggle("hidden");
//  } else if (tab === "in-progress") {
    
//   }
// }