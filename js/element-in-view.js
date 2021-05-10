(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).on('scroll', function() {
  
  $(".auto-animation h2, .auto-animation .text-box").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view"); 
    } else {
      el.removeClass("now-in-view");
    }
  });
  
});

$(document).on('ready', function() {
  $(".auto-animation h2, .auto-animation .text-box").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("now-in-view"); 
	} else {
	  el.removeClass("now-in-view");
	}
  });
});


$(window).on('scroll', function() {
  
  $(".auto-animationsvg ").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("st3"); 
    } else {
      el.removeClass("st3");
    }
  });
  
});

$(document).on('ready', function() {
  $(".auto-animationsvg ").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("st3"); 
	} else {
	  el.removeClass("st3");
	}
  });
});


$(window).on('scroll', function() {
  
  $(".auto-animation-strock ").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("st1"); 
    } else {
      el.removeClass("st1");
    }
  });
  
});

$(document).on('ready', function() {
  $(".auto-animation-strock ").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("st1"); 
	} else {
	  el.removeClass("st1");
	}
  });
});


$(window).on('scroll', function() {
  
  $(".auto-animation-strock2 ").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("st2"); 
    } else {
      el.removeClass("st2");
    }
  });
  
});

$(document).on('ready', function() {
  $(".auto-animation-strock2 ").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	  el.addClass("st2"); 
	} else {
	  el.removeClass("st2");
	}
  });
});