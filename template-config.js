
class ProjectCard extends HTMLElement {
    constructor() {
        super();
        // Clone template content
        let template = document
            .getElementById("projectCardTemplate")
            .content.cloneNode(true)
        ;

        // Create a style element for the shadow DOM
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "style.css";
        
        // Attach the style and template to the shadow DOM
        const shadowRoot = this.attachShadow({
            mode: "open",
        });

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(template);
        
        // Get the card container
        const card = shadowRoot.querySelector("div.projectCard__container")
        
        // Toggle the theme
        document.querySelector("#theme-toggle").addEventListener("click", () => {
            localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
            card.classList?.toggle("dark");
        });

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            card.classList?.add('dark')
        } else {
            card.classList?.remove('dark')
        }

        // Set the project name based on `name` attributes
        shadowRoot.querySelector(
            ".projectCard__name"
        ).innerText = this.getAttribute("name");

        // Set the project description based on the `description` attributes
        shadowRoot.querySelector(
            ".projectCard__description"
        ).innerText = this.getAttribute("description");

        // Set the project image based on the `image` attributes
        shadowRoot.querySelector(
            ".projectCard__image"
        ).src = `./assets/${this.getAttribute("name").toLowerCase().split(" ").join("-")}.png`;

        // Set the project image alt text based on the `name` attributes
        shadowRoot.querySelector(
            ".projectCard__image"
        ).alt = `image preview of ${this.getAttribute("name")} live site`;

        // Set the project liveSite based on the `liveSite` attributes
        shadowRoot.querySelector(
            ".projectCard__liveSite"
        ).href = this.getAttribute("liveSite");

        // Set the project sourceCode based on the `sourceCode` attributes
        shadowRoot.querySelector(
            ".projectCard__sourceCode"
        ).href = this.getAttribute("sourceCode");

    }
}

// Define the custom element
customElements.define(
    "project-card",
    ProjectCard
)
