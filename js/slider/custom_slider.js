(function () {
	"use strict";
	// default
		var tpj=jQuery;			
		var revapi4;
		tpj(document).ready(function() {
		if(tpj("#rev_slider_4_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_4_1");
		}else{
		revapi4 = tpj("#rev_slider_4_1").show().revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:900000,
		navigation: {
		keyboardNavigation:"off",
		keyboard_direction: "horizontal",
		mouseScrollNavigation:"off",
		onHoverStop:"off",
		touch:{
		touchenabled:"on",
		swipe_threshold: 75,
		swipe_min_touches: 1,
		swipe_direction: "horizontal",
		drag_block_vertical: false
		}
		,
		arrows: {
		style:"zeus",
		enable:true,
		hide_onmobile:true,
		hide_under:600,
		hide_onleave:true,
		hide_delay:200,
		hide_delay_mobile:1200,
		left: {
		h_align:"left",
		v_align:"center",
		h_offset:30,
		v_offset:0
		},
		right: {
		h_align:"right",
		v_align:"center",
		h_offset:30,
		v_offset:0
		}
		}
		,
		bullets: {
		enable:false,
		hide_onmobile:true,
		hide_under:600,
		style:"metis",
		hide_onleave:true,
		hide_delay:200,
		hide_delay_mobile:1200,
		direction:"horizontal",
		h_align:"center",
		v_align:"bottom",
		h_offset:0,
		v_offset:30,
		space:5,
		}
		},
		viewPort: {
		enable:true,
		outof:"pause",
		visible_area:"80%"
		},
		responsiveLevels:[1240,992,768,480],
		gridwidth:[1240,992,768,480],
		gridheight:[600,640,540,320],
		lazyType:"none",
		parallax: {
		type:"mouse",
		origo:"slidercenter",
		speed:2000,
		levels:[2,3,4,5,6,7,12,16,10,50],
		},
		shadow:0,
		spinner:"off",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
		simplifyAll:"off",
		nextSlideOnWindowFocus:"off",
		disableFocusListener:false,
		}
		});
		}
		});
	//
})(jQuery);