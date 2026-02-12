$(document).ready(function() {
    // 1. Wir laden den Inhalt in das existierende <nav id="nav">
    // WICHTIG: nav.html darf nur noch das <ul> enthalten!
    $("#nav").load("nav.html", function() {
        
        // --- A. Aktive Seite markieren ---
        var path = window.location.pathname.split("/").pop();
        if (path == '' || path == 'new/') { path = 'index.html'; }
        
        var targetLink = $('#nav a[href="' + path + '"]');
        targetLink.closest('li').addClass('current');
        targetLink.closest('ul').parent('li').addClass('current');

        // --- B. Dropotron für Desktop aktivieren ---
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // --- C. Mobile Ansicht reparieren ---
        // Das Template hat das mobile Menü (#navPanel) schon leer erstellt.
        // Wir müssen unseren geladenen Inhalt dort hineinkopieren.
        
        var $navPanel = $('#navPanel');
        
        // Wenn das Panel existiert (wurde von main.js erstellt)
        if ($navPanel.length > 0) {
            // Wir suchen das <nav> innerhalb des Panels und füllen es mit unserer Liste
            var $mobileNav = $navPanel.find('nav');
            if ($mobileNav.length > 0) {
                $mobileNav.html( $('#nav').html() );
            }
            
            // Damit die Links im mobilen Menü klickbar sind (Original-Logik des Templates):
            $mobileNav.find('a').addClass('link depth-0');
        }
    });
});
