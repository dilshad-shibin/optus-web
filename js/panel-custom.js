(function ($) {
    "use strict";

    var $document = $(document),
        $window = $(window),
        $body = $('body'),
        $html = $('html'),
           
        
       
        /* menu setting*/
        header_menu_timeout = 200,
        header_menu_delay = 200,

      

    // Template Blocks
    blocks = {
      
        
		mobileMenuToggle: $('.tt-menu-toggle'),
	
    };

    var ttwindowWidth = window.innerWidth || $window.width();

   
    // Mobile Menu
    if (blocks.mobileMenuToggle.length) {
        blocks.mobileMenuToggle.initMM({
            enable_breakpoint: true,
            mobile_button: true,
            breakpoint: 1920,
            menu_class: 'mobile-main-menu'
        });
    };
   
   


})(jQuery);


