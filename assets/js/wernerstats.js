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

            // Extrahiere AnzahlTouren aus der Zelle B1 (Zelle B1 ist nicht Teil von W2:AA7, also separat behandeln)
            const anzahlTourenUrl = "https://docs.google.com/spreadsheets/d/1mHrH9Og6JcrQZttzevMcsIC3CPmaxY9SZdTTM9wI8JY/gviz/tq?tqx=out:csv&range=B1";
            fetch(anzahlTourenUrl)
                .then(res => res.text())
                .then(text => {
                    const anzahlTouren = text.trim().split("\n")[0].split(",")[0]; // B1 auslesen
                    if (anzahlTouren) {
                        document.querySelectorAll(".AnzahlTouren").forEach(el => {
                            el.innerText = anzahlTouren.replace(/^"|"$/g, ''); // Alle Instanzen updaten
                        });
                    }
                })
                .catch(error => console.error("Fehler beim Laden von AnzahlTouren:", error));

            // Daten zu den Elementen zuweisen (Nur W2:AA7)
            rows.forEach((row, rowIndex) => {
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
