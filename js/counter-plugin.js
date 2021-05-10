


/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!function(e){function r(r){return e(r).filter(function(){return e(this).is(":appeared")})}function t(){a=!1;for(var e=0,t=i.length;t>e;e++){var n=r(i[e]);if(n.trigger("appear",[n]),p[e]){var o=p[e].not(n);o.trigger("disappear",[o])}p[e]=n}}function n(e){i.push(e),p.push()}var i=[],o=!1,a=!1,f={interval:250,force_process:!1},u=e(window),p=[];e.expr[":"].appeared=function(r){var t=e(r);if(!t.is(":visible"))return!1;var n=u.scrollLeft(),i=u.scrollTop(),o=t.offset(),a=o.left,f=o.top;return f+t.height()>=i&&f-(t.data("appear-top-offset")||0)<=i+u.height()&&a+t.width()>=n&&a-(t.data("appear-left-offset")||0)<=n+u.width()?!0:!1},e.fn.extend({appear:function(r){var i=e.extend({},f,r||{}),u=this.selector||this;if(!o){var p=function(){a||(a=!0,setTimeout(t,i.interval))};e(window).scroll(p).resize(p),o=!0}return i.force_process&&setTimeout(t,i.interval),n(u),e(u)}}),e.extend({force_appear:function(){return o?(t(),!0):!1}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}());

/*
 *  animateNumbers
 * -----------------------------------------------
*/
/***********
	Animates element's number to new number with commas
	Parameters:
		stop (number): number to stop on
        commas (boolean): turn commas on/off (default is true)
		duration (number): how long in ms (default is 1000)
		ease (string): type of easing (default is "swing", others are avaiable from jQuery's easing plugin
	Examples:
        $("#div").animateNumbers(1234, false, 500, "linear"); // half second linear without commas
		$("#div").animateNumbers(1234, true, 2000); // two second swing with commas
		$("#div").animateNumbers(4321); // one second swing with commas
	This fully expects an element containing an integer
	If the number is within copy then separate it with a span and target the span
	Inserts and accounts for commas during animation by default
***********/
!function(t){t.fn.animateNumbers=function(e,n,a,i){return this.each(function(){var d=t(this),o=parseInt(d.text().replace(/,/g,""));n=void 0===n?!0:n,t({value:o}).animate({value:e},{duration:void 0==a?1e3:a,easing:void 0==i?"swing":i,step:function(){d.text(Math.floor(this.value)),n&&d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(d.text())!==e&&(d.text(e),n&&d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})})}}(jQuery);

!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(e){var i=t(this);if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),d=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),o=a/d;if(!i.attr("id")){var h="fitvid"+e;i.attr("id",h)}
i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);



