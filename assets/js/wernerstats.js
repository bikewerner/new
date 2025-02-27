window.onload = () => {
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";

    fetch(url)
        .then(res => res.text())
        .then(text => {
            const rows = text.trim().split("\n").map(row => row.split(","));

            // IDs in derselben Reihenfolge wie in der Tabelle
            const ids = [
                "WalzerBerg", "WalzerSprint", "WalzerTeilnahmen", "WalzerKilometer", "WalzerHoehenmeter", "WalzerPlatten",
                "WCBerg", "WCSprint", "WCTeilnahmen", "WCKilometer", "WCHoehenmeter", "WCPlatten",
                "WindelBerg", "WindelSprint", "WindelTeilnahmen", "WindelKilometer", "WindelHoehenmeter", "WindelPlatten",
                "WuBerg", "WuSprint", "WuTeilnahmen", "WuKilometer", "WuHoehenmeter", "WuPlatten",
                "WurstBerg", "WurstSprint", "WurstTeilnahmen", "WurstKilometer", "WurstHoehenmeter", "WurstPlatten"
            ];

            // Daten zu den Elementen zuweisen
            rows.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    const id = ids[rowIndex * row.length + colIndex]; 
                    if (id) {
                        document.getElementById(id).innerText = cell.replace(/^"|"$/g, '');
                    }
                });
            });
        })
        .catch(error => console.error("Fehler beim Laden der Daten:", error));
};
