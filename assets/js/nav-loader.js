$(document).ready(function() {
    // 1. Sauberes HTML holen
    $.get("nav.html", function(data) {
        
        // --- DESKTOP ---
        var $nav = $("#nav");
        $nav.html(data);
        
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

        // --- MOBILE (Der Wächter) ---
        var checkCount = 0;
        var panelChecker = setInterval(function() {
            var $navPanel = $('#navPanel');
            
            if ($navPanel.length > 0 || checkCount > 50) {
                clearInterval(panelChecker);
                
                if ($navPanel.length > 0) {
                    var $mobileNav = $navPanel.find('nav');
                    
                    // Inhalt komplett austauschen
                    $mobileNav.empty().html(data);
                    
                    // FORMATIERUNG ANWENDEN
                    $mobileNav.find('a').each(function() {
                        var $a = $(this);
                        var depth = $a.parents('ul').length - 1;
                        
                        // Hier setzen wir die wichtigen Klassen für das CSS
                        $a.addClass('link depth-' + depth);
                        
                        // Verhindert Sprung nach oben bei "#" Links
                        if ($a.attr('href') === '#') {
                            $a.on('click', function(e) { e.preventDefault(); });
                        }
                    });
                }
            }
            checkCount++;
        }, 100);

    }).fail(function() {
        console.error("Fehler: nav.html nicht gefunden.");
    });
});
