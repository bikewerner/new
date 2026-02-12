$(document).ready(function() {
    // Lädt die zentrale nav.html
    $("#nav").load("nav.html", function() {
        
        // 1. Desktop Dropdowns (wie im Original)
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // 2. Mobile Menü (Panel) komplett neu aufbauen
        // Wir warten 100ms, um sicherzugehen, dass das Template fertig ist
        setTimeout(function() {
            var $navPanel = $('#navPanel');
            if ($navPanel.length > 0) {
                var $mobileNav = $navPanel.find('nav');
                
                // Wir leeren das mobile Panel komplett
                $mobileNav.empty();
                
                // Wir kopieren das komplette Menü aus der geladenen nav.html hinein
                var $menuClone = $('#nav > ul').clone();
                $mobileNav.append($menuClone);

                // Jetzt vergeben wir die Klassen für Einrückung und Design (depth-0, depth-1)
                $mobileNav.find('a').each(function() {
                    var $a = $(this);
                    var depth = $a.parents('ul').length - 1;
                    
                    // Wir geben JEDEM Link die Klasse "link" und seine Tiefe
                    $a.attr('class', 'link depth-' + depth);
                    
                    // Damit das Menü nicht bei Klick auf "Geplante Touren" zuklappt (da es ein # Link ist)
                    if ($a.attr('href') == '#') {
                        $a.on('click', function(e) { e.preventDefault(); });
                    }
                });
            }
        }, 100);

        // 3. Aktiven Link markieren
        var path = window.location.pathname.split("/").pop() || 'index.html';
        $('a[href="' + path + '"]').closest('li').addClass('current');
    });
});
