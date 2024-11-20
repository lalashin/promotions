var t1;
var t2;
var t3;
var t4;

jQuery(document).ready(function(){
	var is_skip=0;

	t1 = new TimelineMax({ repeat:0, repeatDelay:0});
	t1.to("#btm_text", 0.5, {opacity:1, delay:0, onComplete:ani_skip});
	t1.to("#visual_bg.bg_1 img", 8, {scale:1.1, delay:0, onComplete:ani_skip});

	t2 = new TimelineMax({repeat:0, repeatDelay:2.5});
	t2.to("#text_ani_1", 1 , {opacity:1,delay:1.3} );
	t2.to("#text_ani_2", 1 , {opacity:1, delay:-0.7} );
	t2.to(".text_ani", 0.5 , {opacity:0,delay:1} );

	t4 = new TimelineMax({repeat:0, repeatDelay:2.5});
	t4.to("#wline_1", 1.0 , {left:0, delay:1} );
	t4.to("#wline_2", 1.0 , {top:0, delay:-0.8} );
	t4.to("#wline_3", 1.0 , {right:0, delay:-0.8} );
	t4.to("#wline_4", 1.0 , {bottom:0, delay:-0.8} );
	t4.to(".wline", 0.5 , {opacity:0, delay:1} );

	t3 = new TimelineMax({repeat:0, repeatDelay:0});
	t3.to("#vlogo_1", 1.0 , {opacity:1, delay:4.1})
	.to("#vlogo_2", 1.0 , {opacity:1, delay:-1 })
	.to("#vlogo_3", 1.0 , {opacity:1, delay:-1})
	.to("#vlogo_4", 1.0 , {opacity:1, delay:-1})
	.to("#vlogo_5", 1.0 , {opacity:1, delay:-1})
	.to("#vlogo_ani .vlogo", 0.5, {opacity:1, delay:2});


	//console.clear();

	main_slider = $('.main_visual_slide').slick({
		dots: true,
	    arrows:false,
		infinite: true,
		speed:500,
		lazyLoad: 'progressive',
		autoplay:true,
		autoplaySpeed:7000,
		slidesToShow:1,
		slidesToScroll:1
	});

	$('.main_visual_slide').on("afterChange", function(){
		var curidx = $(".slick-active").attr("data-slick-index");

		if(curidx == 0) {

			t1.gotoAndPlay(0);
			t2.gotoAndPlay(0);
			t3.gotoAndPlay(0);
			t4.gotoAndPlay(0);

		} else {
			t1.gotoAndStop(0);
			t2.gotoAndStop(0);
			t3.gotoAndStop(0);
			t4.gotoAndStop(0);
		}

	});



	function ani_skip(){
		if(is_skip==0){
			//main_slider.slideTo(1);
			//main_slider.autoplay.start();
		}
		is_skip=1;
	}

});


