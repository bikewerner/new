$(document).ready(function() {
    $("#nav").load("nav.html", function() {
        
        // Desktop Dropdowns
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // Mobile Panel Reparatur
        var $navPanel = $('#navPanel');
        if ($navPanel.length > 0) {
            var $mobileNav = $navPanel.find('nav');
            $mobileNav.html($('#nav').html());

            // Jedes <a> bekommt seine Tiefen-Klasse (depth-0, depth-1, etc.)
            $mobileNav.find('a').each(function() {
                var $a = $(this);
                var depth = $a.parents('ul').length - 1;
                $a.addClass('link depth-' + depth);
            });
        }
        
        // Aktive Seite markieren
        var path = window.location.pathname.split("/").pop() || 'index.html';
        $('a[href="' + path + '"]').closest('li').addClass('current');
    });
});
