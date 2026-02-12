$(document).ready(function() {
    // 1. Navigation laden
    $("#nav").load("nav.html", function() {
        
        // --- A. Aktive Seite markieren (Desktop & Mobile) ---
        var path = window.location.pathname.split("/").pop();
        if (path == '' || path == 'new/') { path = 'index.html'; }
        
        var targetLink = $('#nav a[href="' + path + '"]');
        targetLink.closest('li').addClass('current');
        targetLink.closest('ul').parent('li').addClass('current');

        // --- B. Desktop: Dropdowns aktivieren ---
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // --- C. Mobile: Komplett-Neuaufbau ---
        var $navPanel = $('#navPanel');
        
        // Sicherheitscheck: Existiert das Panel schon?
        if ($navPanel.length > 0) {
            var $mobileNav = $navPanel.find('nav');
            
            // 1. Inhalt von Desktop kopieren
            $mobileNav.html( $('#nav').html() );

            // 2. CSS-Klassen für das Styling hinzufügen (wie im Original-Template)
            $mobileNav.find('a').addClass('link depth-0');
            $mobileNav.find('li li a').removeClass('depth-0').addClass('depth-1');
            $mobileNav.find('li li li a').removeClass('depth-1').addClass('depth-2');

            // 3. Aufklapp-Funktion (Opener) einbauen
            // Wir suchen alle Listenpunkte, die eine Unterliste (ul) haben
            $mobileNav.find('li').has('ul').each(function() {
                var $li = $(this);
                
                // Wir fügen den "Opener" (das Pfeil-Icon) hinzu
                $('<span class="opener"></span>')
                    .appendTo($li) // Wird rechts neben den Link gesetzt
                    .on('click', function(event) {
                        // Verhindern, dass der Klick woanders hingeht
                        event.preventDefault();
                        event.stopPropagation();
                        
                        // Das Menü auf/zuklappen
                        var $ul = $li.find('> ul');
                        $ul.slideToggle(200);
                        
                        // Klasse 'active' toggeln (für Pfeil-Rotation etc.)
                        $li.toggleClass('active');
                    });
            });
        }
    });
});
