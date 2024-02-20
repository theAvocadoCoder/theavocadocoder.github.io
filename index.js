document.addEventListener("DOMContentLoaded", () => {
    // Query Elements
    const logoLink = document.querySelector("#logo-link"),
        logoImg = document.querySelector("#logo-img"),
        logoText = document.querySelector("#logo-text"),
        menuButton = document.querySelector("#menu-button"),
        themeToggle = document.querySelector("#theme-toggle"),
        navList = document.querySelector("#nav-list"),
        burgerIcon = document.querySelector("#burger-icon"),
        closeIcon = document.querySelector("#close-icon"),
        contactForm = document.querySelector("form#contact-form"),
        viewResume = document.querySelector("#view-resume"),
        resumeContainer = document.querySelector("#resume-container"),
        closeResume = document.querySelector("#close-resume");

    const navLinks = document.querySelectorAll("#nav-list a");


    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    
    logoLink.setAttribute("href", baseUrl);

    // Render Resume
    const resumeUrl = baseUrl + "assets/Kelechi_Nwa-uwa_Resume.pdf";

    // console.log(location.origin, location.host, location.pathname, "baseUrl =", baseUrl, "resumeUrl =", resumeUrl);

    const resumeObj = document.createElement("object");
    
    resumeObj.setAttribute("type", "application/pdf");

    resumeObj.setAttribute("data", resumeUrl);

    resumeObj.setAttribute("width", `${window.innerWidth > 768 ? "660" : window.innerWidth - 20}`);

    resumeObj.setAttribute("height", `${window.innerWidth > 768 ? "960" : window.innerHeight * .85}`);

    document.querySelector("#resume-bg-div>div").appendChild(resumeObj);


    // Event Listeners
    menuButton.addEventListener("click", toggleNav);

    // Toggle the theme
    themeToggle.addEventListener("click", () => {
        localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark");
    });

    // Close nav on nav link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (!navList.classList.contains("hidden")) {
                toggleNav();
            }
        });
    });

    contactForm.addEventListener("submit", handleContactSubmit);

    viewResume.addEventListener("click", toggleResume);

    // downloadResume.addEventListener("click", () => {
    //     const resumeLink = document.createElement("a");
    //     resumeLink.style.display = "hidden";
    //     document.body.appendChild(resumeLink);
    //     resumeLink.setAttribute("href", resumeUrl);
    //     resumeLink.setAttribute("download", "Kelechi_Nwa-uwa_Resume");
    //     resumeLink.click();
    // })

    closeResume.addEventListener("click", toggleResume);


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

    function handleContactSubmit(e) {
        e.preventDefault();
        const [name, email] = document.querySelectorAll("form input[required");
        const [next, replyTo, subject] = document.querySelectorAll("input:is([name=_next],[name=_replyto],[name=_subject])");

        next.setAttribute("value", `${baseUrl}thanks.html`);
        replyTo.setAttribute("value", `${email.value}`);
        subject.setAttribute("value", `${name.value} reached out to you!`);

        // console.log(name, email, replyTo, next, subject);

        contactForm.submit();
    }

    function toggleResume() {
        // Close navigation if it is open
        if (!navList.classList.contains("hidden")) {
            toggleNav();
        }

        resumeContainer.classList.toggle("hidden");
        
        // Disable body scroll when resume is open
        !resumeContainer.classList.contains("hidden")
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflowY = "scroll";
    }
});