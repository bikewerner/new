$(document).ready(function() {
    // 1. Load the nav.html content into the placeholder
    $("#nav-placeholder").load("nav.html", function() {
        
        // 2. Highlight the current page automatically
        var path = window.location.pathname.split("/").pop();
        if (path == '') { path = 'index.html'; } // Handle root URL
        
        // Find the link matching the current file and add 'current' class
        var targetLink = $('#nav a[href="' + path + '"]');
        targetLink.closest('li').addClass('current');
        
        // Optional: Also highlight the parent category
        targetLink.closest('ul').parent('li').addClass('current');

        // 3. APPLY DROPOTRON FORMATTING
        // We run this HERE, inside the callback, ensuring the HTML exists first.
        $('#nav > ul').dropotron({
            mode: 'fade',
            noOpenerFade: true,
            speed: 300,
            alignment: 'center'
        });
    });
});
