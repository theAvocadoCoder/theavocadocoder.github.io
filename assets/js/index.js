
const homeNavLink = document.querySelector("#home-nav-link"),
  projectsNavLink = document.querySelector("#projects-nav-link"),
  goHomeLink = document.querySelector("#go-home");

goHomeLink.addEventListener("click", () => {
  document.querySelector("#home").classList.toggle("hidden", false);
  document.querySelector("#in-progress").classList.toggle("hidden", true);
});
homeNavLink.addEventListener("click", () => {
  document.querySelector("#home").classList.toggle("hidden", false);
  document.querySelector("#in-progress").classList.toggle("hidden", true);
});
projectsNavLink.addEventListener("click", () => {
  document.querySelector("#home").classList.toggle("hidden", true);
  document.querySelector("#in-progress").classList.toggle("hidden", false);
});

// function switchTab() {
//   e.preventDefault();
  
//   const homeTab = document.querySelector("#home"),
//   projectTab = document.querySelector("#project"),
//   inProgressTab = document.querySelector("#in-progress");

//   if (tab === "home") {
//     homeTab.classList.toggle("hidden");
//     inProgressTab.classList.toggle("hidden");
//  } else if (tab === "in-progress") {
    
//   }
// }