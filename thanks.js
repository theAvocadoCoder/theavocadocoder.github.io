document.addEventListener("DOMContentLoaded", () => {
    const backToSite = document.querySelector("#back-to-site");

    backToSite.addEventListener("click", () => {
        history.back();
    })
})