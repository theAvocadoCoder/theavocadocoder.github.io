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
        viewResume = document.querySelector("#view-resume"),
        contactForm = document.querySelector("form#contact-form"),
        formSubject = document.querySelector("input#subject"),
        resumeContainer = document.querySelector("#resume-container"),
        resumeBgDiv = document.querySelector("#resume-bg-div"),
        resumeCanvas = document.querySelector("#resume-canvas"),
        downloadResume = document.querySelector("#download-resume"),
        closeResume = document.querySelector("#close-resume");

    const navLinks = document.querySelectorAll("#nav-list a");

    const baseUrl = window.location.hostname == "127.0.0.1"
        ? window.location.origin
        : "/member-kay-portfolio";
    
    const resumeUrl = baseUrl + "/assets/resume.pdf";

    logoLink.setAttribute("href", baseUrl+"/");

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

    downloadResume.addEventListener("click", () => {
        const resumeLink = document.createElement("a");
        resumeLink.style.display = "hidden";
        document.body.appendChild(resumeLink);
        resumeLink.setAttribute("href", resumeUrl);
        resumeLink.setAttribute("download", "Kelechi_Nwa-uwa_Resume");
        resumeLink.click();
    })

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

        const name = document.querySelector("#contact-form input[name='name']").value;
        const redirect = document.querySelector("#contact-form input[name='redirect']");

        formSubject.value = `${name} reached out on your site`;
        redirect.value = `${baseUrl}/thanks.html`;

        contactForm.submit();
    }

    function toggleResume() {
        // Close navigation if it is open
        if (!navList.classList.contains("hidden")) {
            toggleNav();
        }

        resumeContainer.classList.toggle("hidden");
        // resumeContainer.classList.toggle("flex");
        // resumeContainer.classList.toggle("items-center");
        // resumeContainer.classList.toggle("justify-center");
        
        // Disable body scroll when resume is open
        !resumeContainer.classList.contains("hidden")
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "scroll";
    }


    //  Render Resume
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.mjs";

    pdfjsLib.getDocument("./assets/resume.pdf").promise.then(function(pdf) {

        pdf.getPage(1).then(function(page) {

            const viewport = page.getViewport({
                scale: 1
            });

            resumeCanvas.height = viewport.height;

            resumeCanvas.width = viewport.width;

            const ctx = resumeCanvas.getContext('2d');

            const renderContext = {

                canvasContext: ctx,

                viewport: viewport

            };

            page.render(renderContext);

        });

    });
});