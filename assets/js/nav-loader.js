$(document).ready(function() {
    // Lädt die zentrale nav.html
    $("#nav").load("nav.html", function() {
        
        // 1. Desktop Dropdowns (wie in fuessen.html)
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // 2. Mobile Menü (Panel) reparieren
        var $navPanel = $('#navPanel');
        if ($navPanel.length > 0) {
            var $mobileNav = $navPanel.find('nav');
            
            // Kopiert die Liste in das mobile Panel
            $mobileNav.html($('#nav').html());

            // FORMATIERUNG WIEDERHERSTELLEN:
            // Wir gehen jeden Link durch und weisen ihm die "Tiefe" (depth) zu
            $mobileNav.find('a').each(function() {
                var $a = $(this);
                // Berechnet, wie tief der Link im Menü sitzt
                var depth = $a.parents('ul').length - 1;
                
                // Fügt die Klassen hinzu, die das CSS (main.css) erwartet
                $a.addClass('link depth-' + depth);
                
                // Falls es ein Hauptpunkt (depth 0) ist, bekommt er das weiße Design
                // Falls es ein Unterpunkt (depth 1) ist, wird er eingerückt und grau
            });
        }
        
        // 3. Aktiven Link markieren
        var path = window.location.pathname.split("/").pop() || 'index.html';
        $('a[href="' + path + '"]').closest('li').addClass('current');
    });
});
