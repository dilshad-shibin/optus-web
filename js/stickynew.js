(function($) {
    "use strict";

var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 800) {
            $("#sticky_funtion").removeClass("menu_secfixed");
        } else {
            $("#sticky_funtion").addClass("menu_secfixed");
        }
    });
    
	})(jQuery);