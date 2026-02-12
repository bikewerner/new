$(document).ready(function() {
    // 1. Load the centralized nav file
    $("#nav-placeholder").load("nav.html", function() {
        
        // 2. Automatic Highlighting logic
        var path = window.location.pathname.split("/").pop();
        if (path == '' || path == 'new/') { path = 'index.html'; }
        
        // Find the link matching the current file and add 'current' class
        var targetLink = $('#nav a[href="' + path + '"]');
        targetLink.closest('li').addClass('current');
        targetLink.closest('ul').parent('li').addClass('current');

        // 3. Re-initialize Dropotron (Desktop Menu)
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // 4. FIX FOR MOBILE (Hamburger Menu)
        // If the mobile panel already exists (but is empty), we remove it.
        // Then we trigger a window resize to force main.js to rebuild it.
        if ($('#navPanel').length > 0) {
            $('#navPanel, #titleBar').remove();
        }
        $(window).trigger('resize');
    });
});
