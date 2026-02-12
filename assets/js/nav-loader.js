$(document).ready(function() {
    // Lädt die zentrale nav.html
    $("#nav").load("nav.html", function() {
        
        // 1. Desktop Dropdowns initialisieren
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // 2. Mobile Ansicht (Panel) gewaltsam füllen
        var $navPanel = $('#navPanel');
        if ($navPanel.length > 0) {
            // Wir suchen das innere Nav-Element im Panel
            var $panelNav = $navPanel.find('nav');
            
            // Falls das Panel schon existiert, leeren wir es und kopieren unser geladenes Menü hinein
            $panelNav.empty();
            $panelNav.html($('#nav').html());

            // Jetzt verpassen wir jedem Link die Tiefe (depth) für das Styling
            $panelNav.find('a').each(function() {
                var $a = $(this);
                var depth = $a.parents('ul').length - 1;
                $a.addClass('link depth-' + depth);
                
                // Entferne mobile Event-Handler, die das Menü einklappen könnten
                $a.off('click'); 
            });
        }
        
        // 3. Aktive Seite markieren
        var path = window.location.pathname.split("/").pop() || 'index.html';
        $('a[href="' + path + '"]').closest('li').addClass('current');
    });
});
