$(document).ready(function() {
    $("#nav-placeholder").load("nav.html", function() {
        var path = window.location.pathname.split("/").pop();
        if (path == '') { path = 'index.html'; }
        
        var targetLink = $('#nav a[href="' + path + '"]');
        targetLink.closest('li').addClass('current');
        targetLink.closest('ul').parent('li').addClass('current');

        // Format for Desktop
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });

        // FIX FOR MOBILE: 
        // If the mobile panel exists, we might need to trigger the template's 
        // built-in responsive handler. Most HTML5 UP templates use 'navPanel'.
        if ($('.navPanel').length > 0) {
            // This forces the mobile menu to re-read the loaded nav.html
            $(window).trigger('resize'); 
        }
    });
});
