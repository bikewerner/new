/*
window.onload = () => {
    // Funktion, um einzelne Daten abzufragen und zuzuweisen
    const fetchData = (url, elementId, suffix = '') => {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                // Hier prüfen wir den Text, um sicherzustellen, dass die Daten korrekt geladen werden
                console.log(`Laden der Daten für ${elementId}:`, text);
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
            // Debug-Ausgabe, um zu prüfen, wie der CSV-Text aussieht
            console.log("CSV-Daten:", text);

            // CSV-Daten in ein Array umwandeln
            const rows = text.trim().split('\n').map(row => row.split(','));

            // Prüfen, wie die Daten jetzt aussehen
            console.log("Verarbeitete Zeilen:", rows);

            // Mapping der Zellen basierend auf der Tabelle
            const dataMapping = {
                "WalzerBerg": { value: rows[0][0], suffix: '' },
                "WCBerg": { value: rows[0][1], suffix: '' },
                "WindelBerg": { value: rows[0][2], suffix: '' },
                "WuBerg": { value: rows[0][3], suffix: '' },
                "WurstBerg": { value: rows[0][4], suffix: '' },

                "WalzerSprint": { value: rows[1][0], suffix: '' },
                "WCSprint": { value: rows[1][1], suffix: '' },
                "WindelSprint": { value: rows[1][2], suffix: '' },
                "WuSprint": { value: rows[1][3], suffix: '' },
                "WurstSprint": { value: rows[1][4], suffix: '' },

                "WalzerTeilnahmen": { value: rows[2][0], suffix: ' / ' },
                "WCTeilnahmen": { value: rows[2][1], suffix: ' / ' },
                "WindelTeilnahmen": { value: rows[2][2], suffix: ' / ' },
                "WuTeilnahmen": { value: rows[2][3], suffix: ' / ' },
                "WurstTeilnahmen": { value: rows[2][4], suffix: ' / ' },

                "WalzerKilometer": { value: rows[3][0], suffix: ' km' },
                "WCKilometer": { value: rows[3][1], suffix: ' km' },
                "WindelKilometer": { value: rows[3][2], suffix: ' km' },
                "WuKilometer": { value: rows[3][3], suffix: ' km' },
                "WurstKilometer": { value: rows[3][4], suffix: ' km' },

                "WalzerHoehenmeter": { value: rows[4][0], suffix: ' m' },
                "WCHoehenmeter": { value: rows[4][1], suffix: ' m' },
                "WindelHoehenmeter": { value: rows[4][2], suffix: ' m' },
                "WuHoehenmeter": { value: rows[4][3], suffix: ' m' },
                "WurstHoehenmeter": { value: rows[4][4], suffix: ' m' },

                "WalzerPlatten": { value: rows[5][0], suffix: '' },
                "WCPlatten": { value: rows[5][1], suffix: '' },
                "WindelPlatten": { value: rows[5][2], suffix: '' },
                "WuPlatten": { value: rows[5][3], suffix: '' },
                "WurstPlatten": { value: rows[5][4], suffix: '' },
            };

            // Werte den HTML-Elementen zuweisen
            for (let key in dataMapping) {
                const element = document.getElementById(key);
                if (element) {
                    const { value, suffix } = dataMapping[key];
                    element.innerText = value !== "-" ? value + suffix : "Keine Daten";
                }
            }
        })
        .catch(error => console.error("Fehler beim Laden der CSV-Daten:", error));
};
*/




/* alte Version -> Zuweisungen nicht korrekt */
window.onload = () => {
const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";

fetch(url)
    .then(res => res.text())
    .then(text => {
        const rows = text.trim().split("\n").map(row => row.split(","));

        // IDs in derselben Reihenfolge wie in der Tabelle
        const ids = [
            "WalzerBerg", "WCBerg", "WindelBerg", "WuBerg", "WurstBerg",
            "WalzerSprint", "WCSprint", "WindelSprint", "WuSprint", "WurstSprint",
            "WalzerTeilnahmen", "WCTeilnahmen", "WindelTeilnahmen", "WuTeilnahmen", "WurstTeilnahmen",
            "WalzerKilometer", "WCKilometer", "WindelKilometer", "WuKilometer", "WurstKilometer",
            "WalzerHoehenmeter", "WCHoehenmeter", "WindelHoehenmeter", "WuHoehenmeter", "WurstHoehenmeter",
            "WalzerPlatten", "WCPlatten", "WindelPlatten", "WuPlatten", "WurstPlatten"
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



window.onload = () => {
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";
    
    // Funktion zum Laden der Daten aus einer URL und Zuweisung zu einem Element
    const fetchData = (url, elementId) => {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                const rows = text.trim().split("\n").map(row => row.split(","));

                // IDs in derselben Reihenfolge wie in der Tabelle
                const ids = [
                    "WalzerBerg", "WCBerg", "WindelBerg", "WuBerg", "WurstBerg",
                    "WalzerSprint", "WCSprint", "WindelSprint", "WuSprint", "WurstSprint",
                    "WalzerTeilnahmen", "WCTeilnahmen", "WindelTeilnahmen", "WuTeilnahmen", "WurstTeilnahmen",
                    "WalzerKilometer", "WCKilometer", "WindelKilometer", "WuKilometer", "WurstKilometer",
                    "WalzerHoehenmeter", "WCHoehenmeter", "WindelHoehenmeter", "WuHoehenmeter", "WurstHoehenmeter",
                    "WalzerPlatten", "WCPlatten", "WindelPlatten", "WuPlatten", "WurstPlatten"
                ];

                // Daten zu den Elementen zuweisen
                rows.forEach((row, rowIndex) => {
                    row.forEach((cell, colIndex) => {
                        const id = ids[rowIndex * row.length + colIndex];
                        if (id) {
                            // Der Wert "-" wird nun beibehalten
                            document.getElementById(id).innerText = cell.replace(/^"|"$/g, '');
                        }
                    });
                });
            })
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    };

    // Daten aus der ersten URL für die Tourenzahl laden
    fetchData("https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=B1", "AnzahlTouren");

    // Weitere Daten für die Tabelle laden
    fetchData(url);
};

