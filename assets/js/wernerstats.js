window.onload = () => {
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=B1:AA7";

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

            // Extrahiere AnzahlTouren aus der Zelle B1 (erste Zeile, erste Spalte)
            const anzahlTouren = rows[0][1]; // B1
            if (anzahlTouren) {
                document.getElementById("AnzahlTouren").innerText = anzahlTouren.replace(/^"|"$/g, ''); // Setze den Wert für AnzahlTouren
            }

            // Daten zu den Elementen zuweisen
            rows.slice(1).forEach((row, rowIndex) => {  // Beginnt mit der zweiten Zeile, um W2:AA7 abzurufen
                row.forEach((cell, colIndex) => {
                    const id = ids[rowIndex * row.length + colIndex]; 
                    if (id) {
                        // Ersetze 0 durch "-" und füge entsprechende Suffixe hinzu
                        let value = cell.replace(/^"|"$/g, ''); // Entferne Anführungszeichen
                        if (value === "0") value = "-";  // Ersetze "0" mit "-"
                        if (id.includes("Kilometer")) value += " km";  // Kilometer-Suffix
                        if (id.includes("Hoehenmeter")) value += " m";  // Höhenmeter-Suffix

                        document.getElementById(id).innerText = value;
                    }
                });
            });
        })
        .catch(error => console.error("Fehler beim Laden der Daten:", error));
};



/*funktioniert für tabelle aber nicht für b1 anzahl touren
window.onload = () => {
    const url = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=W2:AA7";
    
    // Funktion zum Laden der Daten aus einer URL und Zuweisung zu einem Element
    const fetchData = (url) => {
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
                            // Wert von 0 in "-" umwandeln
                            let value = cell.replace(/^"|"$/g, '');
                            if (value === '0') {
                                value = '-';
                            }

                            // Suffix für Höhenmeter (m) und Kilometer (km) hinzufügen
                            if (id.includes("Hoehenmeter")) {
                                value += ' m';
                            } else if (id.includes("Kilometer")) {
                                value += ' km';
                            }

                            // Zuweisung des Werts an das entsprechende Element
                            document.getElementById(id).innerText = value;
                        }
                    });
                });
            })
            .catch(error => console.error("Fehler beim Laden der Daten:", error));
    };

    // Daten aus der URL für die Tabelle mit den Werten laden
    fetchData(url);
};
*/
