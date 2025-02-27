window.onload = () => {
    // Funktion, um einzelne Daten abzufragen und zuzuweisen
    const fetchData = (url, elementId, suffix = '') => {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                document.getElementById(elementId).innerText = text.trim().replace(/^"|"$/g, '') + suffix;
            })
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    };

    // Anzahl der Touren abrufen
    fetchData("https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=B1", "AnzahlTouren");

    // URL der relevanten CSV-Daten
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";

    // CSV-Daten abrufen
    fetch(url)
        .then(res => res.text())
        .then(text => {
            // CSV-Daten in ein Array umwandeln
            const rows = text.trim().split('\n').map(row => row.split(','));

            // Mapping der Zellen basierend auf der Tabelle
            const dataMapping = {
                "WalzerBerg": rows[0][0],
                "WCBerg": rows[0][1],
                "WindelBerg": rows[0][2],
                "WuBerg": rows[0][3],
                "WurstBerg": rows[0][4],

                "WalzerSprint": rows[1][0],
                "WCSprint": rows[1][1],
                "WindelSprint": rows[1][2],
                "WuSprint": rows[1][3],
                "WurstSprint": rows[1][4],

                "WalzerTeilnahmen": rows[2][0],
                "WCTeilnahmen": rows[2][1],
                "WindelTeilnahmen": rows[2][2],
                "WuTeilnahmen": rows[2][3],
                "WurstTeilnahmen": rows[2][4],

                "WalzerKilometer": rows[3][0],
                "WCKilometer": rows[3][1],
                "WindelKilometer": rows[3][2],
                "WuKilometer": rows[3][3],
                "WurstKilometer": rows[3][4],

                "WalzerHoehenmeter": rows[4][0],
                "WCHoehenmeter": rows[4][1],
                "WindelHoehenmeter": rows[4][2],
                "WuHoehenmeter": rows[4][3],
                "WurstHoehenmeter": rows[4][4],

                "WalzerPlatten": rows[5][0],
                "WCPlatten": rows[5][1],
                "WindelPlatten": rows[5][2],
                "WuPlatten": rows[5][3],
                "WurstPlatten": rows[5][4],
            };

            // Werte den HTML-Elementen zuweisen
            for (let key in dataMapping) {
                const element = document.getElementById(key);
                if (element) {
                    element.innerText = dataMapping[key] !== "-" ? dataMapping[key] : "Keine Daten";
                }
            }
        })
        .catch(error => console.error("Fehler beim Laden der CSV-Daten:", error));
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
