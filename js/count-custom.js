var COUNTCOT = {};

(function($) {
    "use strict";

    var $document = $(document);
    var $document_body = $(document.body);
    var $window = $(window);
  

    COUNTCOT.widget = {

        init: function() {

            var t = setTimeout(function() {
               
                COUNTCOT.widget.TM_funfact();
               
               
            }, 0);

        },

        
        TM_funfact: function() {
            var $animate_number = $('.animate-number');
            if( $animate_number.length > 0 ) {
                $animate_number.appear();
                $document_body.on('appear', '.animate-number', function() {
                    $animate_number.each(function() {
                        var current_item = $(this);
                        if (!current_item.hasClass('appeared')) {
                            current_item.animateNumbers(current_item.attr("data-value"), true, parseInt(current_item.attr("data-animation-duration"), 10)).addClass('appeared');
                        }
                    });
                });
            }
        },
     
    };


    COUNTCOT.documentOnReady = {
        init: function() {
           
            
            COUNTCOT.widget.init();
            
        }
    };


 
    $document.ready(
        COUNTCOT.documentOnReady.init
    );
    

})(jQuery);