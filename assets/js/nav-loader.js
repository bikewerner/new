$(document).ready(function() {
    // Wir holen den SAUBEREN HTML-Code der Navigation
    $.get("nav.html", function(data) {
        
        // ---------------------------------------------
        // 1. Desktop Navigation füllen & starten
        // ---------------------------------------------
        var $nav = $("#nav");
        $nav.html(data); // Inhalt einfügen

        // Dropotron (Dropdowns) aktivieren
        $nav.find('> ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // Aktiven Link markieren (Desktop)
        var path = window.location.pathname.split("/").pop() || 'index.html';
        $nav.find('a[href="' + path + '"]').closest('li').addClass('current');
        $nav.find('a[href="' + path + '"]').closest('ul').parent('li').addClass('current');


        // ---------------------------------------------
        // 2. Mobile Navigation ("Wächter"-Funktion)
        // ---------------------------------------------
        // Wir prüfen alle 100ms, ob das mobile Panel (#navPanel) schon da ist.
        // Das Original-Skript (main.js) braucht manchmal kurz, um es zu erstellen.
        
        var checkCount = 0;
        var panelChecker = setInterval(function() {
            var $navPanel = $('#navPanel');
            
            // Wenn das Panel da ist ODER wir schon 5 Sekunden warten (Notausstieg)
            if ($navPanel.length > 0 || checkCount > 50) {
                clearInterval(panelChecker); // Wächter stoppen
                
                if ($navPanel.length > 0) {
                    var $mobileNav = $navPanel.find('nav');
                    
                    // ALLES löschen, was vorher drin war (z.B. nur "Home")
                    $mobileNav.empty();
                    
                    // Den sauberen HTML-Code von oben einfügen
                    $mobileNav.html(data);
                    
                    // FORMATIERUNG: Klassen verteilen (depth-0, depth-1)
                    $mobileNav.find('a').each(function() {
                        var $a = $(this);
                        var depth = $a.parents('ul').length - 1;
                        
                        // Klasse setzen
                        $a.attr('class', 'link depth-' + depth);
                        
                        // Klick-Blocker für "#"-Links entfernen wir hier bewusst nicht,
                        // damit man auf "Geplante Touren" klicken kann, ohne dass was passiert.
                        if ($a.attr('href') === '#') {
                            $a.on('click', function(e) { e.preventDefault(); });
                        }
                    });
                    
                    console.log("Mobile Navigation erfolgreich aktualisiert.");
                }
            }
            checkCount++;
        }, 100); // Alle 100ms prüfen

    }).fail(function() {
        console.error("Konnte nav.html nicht laden!");
    });
});
