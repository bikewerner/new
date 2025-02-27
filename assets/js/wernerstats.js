window.onload = () => {
    // Funktion, um einzelne Daten abzufragen und zuzuweisen
    const fetchData = (url, elementId, suffix = '') => {
        fetch(url)
            .then(res => res.text())
            .then(text => document.getElementById(elementId).innerText = text.trim().replace(/^"|"$/g, '') + suffix);
    };

    // Daten für AnzahlTouren abrufen
    fetchData("https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=B1", "AnzahlTouren");

    // Alle anderen Daten auf einmal abrufen
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";

    fetch(url)
        .then(res => res.text())
        .then(text => {
            // CSV in Zeilen und Zellen aufteilen
            const rows = text.trim().split("\n").map(row => row.split(","));

            // Mapping der Zellen basierend auf der Tabelle
            const data = {
                "WalzerBerg": rows[1][0],
                "WCBerg": rows[1][1],
                "WindelBerg": rows[1][2],
                "WuBerg": rows[1][3],
                "WurstBerg": rows[1][4],
                
                "WalzerSprint": rows[2][0],
                "WCSprint": rows[2][1],
                "WindelSprint": rows[2][2],
                "WuSprint": rows[2][3],
                "WurstSprint": rows[2][4],
                
                "WalzerTeilnahmen": rows[3][0],
                "WCTeilnahmen": rows[3][1],
                "WindelTeilnahmen": rows[3][2],
                "WuTeilnahmen": rows[3][3],
                "WurstTeilnahmen": rows[3][4],
                
                "WalzerKilometer": rows[4][0],
                "WCKilometer": rows[4][1],
                "WindelKilometer": rows[4][2],
                "WuKilometer": rows[4][3],
                "WurstKilometer": rows[4][4],
                
                "WalzerHoehenmeter": rows[5][0],
                "WCHoehenmeter": rows[5][1],
                "WindelHoehenmeter": rows[5][2],
                "WuHoehenmeter": rows[5][3],
                "WurstHoehenmeter": rows[5][4],
                
                "WalzerPlatten": rows[6][0],
                "WCPlatten": rows[6][1],
                "WindelPlatten": rows[6][2],
                "WuPlatten": rows[6][3],
                "WurstPlatten": rows[6][4],
            };

            // Werte zu den entsprechenden HTML-Elementen zuweisen
            for (let key in data) {
                const element = document.getElementById(key);
                if (element) {
                    element.innerText = data[key] !== "-" ? data[key] : "Keine Daten";
                }
            }
        })
        .catch(error => console.error("Fehler beim Laden der Daten:", error));
};



/* alte Version -> Zuweisungen nicht korrekt
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
*/
