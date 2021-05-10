

$(document).ready(function(){
	
	$(window).on('load', function() {
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow');  
  $('body').delay(350).css({'overflow':'visible'});
});

});

   $(document).ready(function() {
        $('.cus-select').select2();
    });

 $('#datepicker').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });

!(function (v) {
    "use strict";
  
        jQuery(document).ready(function () {
            
      (function () {
                    var e = v(".promo-slider");
                    if (e.length) {
                        var r = v(".promo-slider__count"),
                            i = v(".slider__prev"),
                            s = v(".slider__next");
                        e.on("init afterChange", function (e, i, s, t) {
                            var o = (s || 0) + 1;
                            r.text(o + "/" + i.slideCount);
                        }),
                            e.slick({ fade: !0, adaptiveHeight: !0, infinite: !0, speed: 1200,pauseOnHover: false, autoplay: true,  dots: true,
            autoplaySpeed: 3000, draggable: true, cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100, prevArrow: i, nextArrow: s });
                    }
                })()
           
                
        });
})(jQuery);



if ($('#testimonial-slider').length) {
        $('#testimonial-slider').slick({
            autoplay: false,
            fade:false,
           pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            speed: 800,
            dots: true,
            arrows: false,
			prevArrow:'.navid1 .prev',
            nextArrow:'.navid1 .next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
						adaptiveHeight: true,
						dots: false
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
						
						
                    }
                },
				{
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }



 $('.totop').tottTop({
            scrollTop: 100
        });  


   $('a.mm-original-link').click( function(e) {e.preventDefault(); return false; } );


wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

