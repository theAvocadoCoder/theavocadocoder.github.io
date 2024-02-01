document.addEventListener("DOMContentLoaded", () => {
    // Toggle the theme
    const themeToggle = document.querySelector("#theme-toggle")
    themeToggle.addEventListener("click", () => {
        localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark");
    });


    // Query Elements
    const logoImg = document.querySelector("#logo-img"),
        logoText = document.querySelector("#logo-text"),
        menuButton = document.querySelector("#menu-button"),
        navList = document.querySelector("#nav-list"),
        burgerIcon = document.querySelector("#burger-icon"),
        closeIcon = document.querySelector("#close-icon");

    const navLinks = document.querySelectorAll("#nav-list a");


    // Event Listeners
    menuButton.addEventListener("click", toggleNav);

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (!navList.classList.contains("hidden")) {
                toggleNav();
            }
        })
    })

    // Functions
    function toggleNav() {
        navList.classList.toggle("hidden");
        navList.classList.toggle("flex");
        burgerIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
        logoImg.classList.toggle("z-20");
        logoText.classList.toggle("z-20");
        logoText.classList.toggle("hidden");
    }
})