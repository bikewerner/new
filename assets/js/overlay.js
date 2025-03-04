function openOverlay(id) {
    document.getElementById(id).style.display = "flex";
}

function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
}

// Schließt das Overlay bei Klick außerhalb des Inhalts
document.addEventListener("click", function(event) {
    const overlays = document.querySelectorAll(".overlay");
    overlays.forEach(overlay => {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});
