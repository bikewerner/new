document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menü öffnen/schließen
    const menuButton = document.createElement("div");
    menuButton.classList.add("mobile-menu-button");
    menuButton.textContent = "☰ Menü";
    document.body.insertBefore(menuButton, document.getElementById("nav"));

    menuButton.addEventListener("click", function () {
        document.querySelector("#nav ul").classList.toggle("active");
    });

    // Dropdowns für Mobile aktivieren
    document.querySelectorAll("#nav .dropdown > a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle("open");
        });
    });
});
