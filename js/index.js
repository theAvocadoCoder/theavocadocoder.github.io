
/* Arbitrary Data */
const projectsData = {
  "hngi_fe_linktree": {
    type: "Individual",
    description: [],
    site: "theavocadocoder.github.io",
    isSiteFirst: true,
  },
  "pixelite": {
    type: "Individual",
    description: [],
    site: "theavocadocoder.github.io",
    isSiteFirst: true,
  },
  "random-quotes-generator": {
    type: "Individual",
    description: [],
    site: "theavocadocoder.github.io",
    isSiteFirst: true,
  },
  "plantify-app": {
    type: "Collaborative",
    description: [],
    site: "netlify.app",
    isSiteFirst: false,
  },
  "odin_tic-tac-toe": {
    type: "Individual",
    description: [],
    site: "theavocadocoder.github.io",
    isSiteFirst: true,
  },
  "kelechi-nwauwa-lendsqr-fe-test": {
    type: "Individual",
    description: [],
    site: "theavocadocoder.github.io",
    isSiteFirst: true,
  },
}


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

function openAddress(id, site, isSiteFirst) {
  // window.open(
  //   isSiteFirst
  //     ? `https://${site}/${id}`
  //     : `https://${id}.${site}`,
  //   "_blank"
  // )
  return isSiteFirst
      ? `https://${site}/${id}`
      : `https://${id}.${site}`
}

function openProjectDetails(tile) {
  console.log("the function was called", tile.children[1].innerHTML);
  projectTitle.appendChild(document.createTextNode(tile.children[1].innerHTML));
  currentProject = projectsData[tile.id];
  projectType.appendChild(document.createTextNode(`${currentProject.type} project`));
  currentProject.description.forEach(p => {
    let pElement = document.createElement("p");
    pElement.appendChild(document.createTextNode(p));
    projectDescription.appendChild(pElement);
  });
  projectDeploymentLink.href = openAddress(
    tile.id,
    currentProject.site,
    currentProject.isSiteFirst
  );
  projectDeploymentLink.appendChild(document.createTextNode("view live site"));
  projectGithubLink.href = openAddress(
    tile.id,
    "github.com/theAvocadoCoder",
    true
  );
  projectGithubLink.appendChild(document.createTextNode("view source code"));

  projectDialog.showModal();
}

// function openProjectDetails(tile) {
//   if (tile.id === "plantify-app" || tile.id === "kelechi-nwauwa-lendsqr-fe-test") {
//     window.open(`https://${tile.id}.netlify.app`, "_blank");
//   } else {
//     window.open(`https://theavocadocoder.github.io/${tile.id}`, "_blank");
//   }
// }


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


/* Project Dialog Elements */

const projectDialog = document.querySelector("#project-dialog"),
  closeDialog = document.querySelector("#close-dialog"),
  projectTitle = document.querySelector("#project-title"),
  projectType = document.querySelector("#project-type"),
  projectDescription = document.querySelector("#project-description"),
  projectGithubLink = document.querySelector("#project-github-link"),
  projectDeploymentLink = document.querySelector("#project-deployment-link");



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
});

projectDialog.addEventListener("close", () => {
  projectTitle.innerHTML = "";
  projectType.innerHTML = "";
  projectDescription.innerHTML = "";
  projectGithubLink.innerHTML = "";
  projectDeploymentLink.innerHTML = "";
});

closeDialog.addEventListener("click", () => {
  projectDialog.close();
})