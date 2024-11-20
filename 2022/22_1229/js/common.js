$(function(){
	// Mobile Ui

	var mobile = {
		open : function(){
			$('.mo_menu2').stop().animate({'left':'0'},400,'easeInOutQuad');
		},
		close : function(){
			$('.mo_menu2').stop().animate({'left':'-200%'}, 400, 'easeInOutQuad');
		},
		down : function(target){
			$(target).addClass('on');
			$(target).next().stop().slideDown(400,'easeInOutQuad');

		},
		up : function(target){
			$(target).removeClass('on');
			$(target).next().stop().slideUp(400, 'easeInOutQuad');
		},
		siblingsUp : function(target){
			$(target).parent().siblings('li').children('a').removeClass('on');
			$(target).parent().siblings('li').children('ul').stop().slideUp(400, 'easeInOutQuad');
		},
		bgOn : function(){
			$('.mbg').stop().fadeIn(400);
		},
		bgOff : function(){
			$('.mbg').stop().fadeOut(400);
		}
	}


	$('.mo_open').on('click',function(){
		mobile.open();
		mobile.bgOn();
		//$('html,body').css({'overflow':'hidden' , 'height' : '100%'});
		//$.fn.fullpage.setAutoScrolling(false);
	});
	$('.mo_close').on('click',function(){
		mobile.close();
		mobile.bgOff();
		//$('html,body').css({'overflow':'visible' , 'height' : 'initial'});
	});

	$('.mgnb .depth1 > li > a').on('click',function(){
		mobile.siblingsUp(this);
		if($(this).hasClass('on')){
			mobile.up(this);
		}else{
			mobile.down(this);
		}
	});

	mo_action();
	

	/*$('.header .util1 > ul > li').on({
		//var obj = $(this);

		mouseover : function(){
			if( $(this).hasClass('on') ){
				$(this).removeClass('on');
				$(this).next().stop().slideUp();

			}else{
				$(this).addClass('on');
				$(this).next().stop().slideDown();
				$(this).parent().siblings().children('a').removeClass('on');
				$(this).parent().siblings().find('ul').stop().slideUp();
			}
		},
		mouseleave : function(){
			$('.header .top .util1 > ul > li > a').removeClass('on');
			$('.header .top .util1 > ul > li > ul').stop().slideUp();
		}


	});*/

	$('.header .util1 > ul > li').on({
		mouseover : function(){
			$(this).addClass('on');
			$(this).children('a').next().stop().slideDown();
		},
		mouseleave : function(){
			$(this).removeClass('on');
			$(this).children('a').next().stop().slideUp();
		}
	});

	$('.header .gnb .depth1 > li').on({
		mouseover : function(){
			$(this).children('a').next().stop().slideDown();
		},
		mouseleave : function(){
			$(this).children('a').next().stop().slideUp();
		}
	});

	$('.header .util2 > ul > li').on({
		mouseover : function(){
			$(this).children('a').next().stop().slideDown();
		},
		mouseleave : function(){
			$(this).children('a').next().stop().slideUp();
		}
	});

	var standard_num = 45;

	$(window).scroll(function(){
		var scTop = $(window).scrollTop();

		//console.log(vh);

		if(scTop > standard_num){
			//$('#main').css('height', vh + 'px');
			$('.header').addClass('fixed');
			$('#sub').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
			$('#sub').removeClass('fixed');
		}
	});

	$('.q_site > a').on('click', function(){
		if( $(this).parent().hasClass('closed') ){
			$(this).parent().removeClass('closed');

		}else{
			$(this).parent().addClass('closed');
		}
	});

	$('.top_btn .btn2').on('click', function(){
		$('html').animate({'scrollTop' : '0'}, 800, 'easeInOutQuad');
	});

	$('.sub_lnb .menu_last > a').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next().stop().slideUp();
		}else{
			$(this).addClass('on');
			$(this).next().stop().slideDown();
			$(this).parent().siblings().find('a').removeClass('on');
			$(this).parent().siblings().find('ul').stop().slideUp();
		}
	});

	if ( $('#sub').hasClass("member_login") ) {
		console.log('member_login');
		$("#footer").addClass('member');
	}


	$('.mo_menu .mo_gnb > ul > li > a').on('click', function(){
		var obj = $(this);

		handleSideMenu(obj);

	});

	$('.mo_menu .mo_qsite > ul > li > a').on('click', function(){
		var obj = $(this);

		checkActive(obj);
	});

	$('.pop_closebtn').on("click", function(){
		$('.popup').stop().fadeOut(400);
	})

	$('.agree1_btn').on("click", function(){
		$('.pop_footer_agree1').stop().fadeIn(400);
	})

	$('.agree2_btn').on("click", function(){
		$('.pop_footer_agree2').stop().fadeIn(400);
	})

	$('.c_btn > a').on("click", function(){
		$('.header_search').stop().fadeOut(400);
	})

	$('.c_btn2 > a').on("click", function(){
		$('.all_menu_pc').stop().fadeOut(400);
		$("html, body").removeClass("not_scroll");
	})

	/*플로팅배너*/
	$('.f_banner span').on({
		mouseenter : function(){
			$(this).css('opacity', '0');
			$(this).siblings().addClass('active');
		}
	});
	$('.f_banner a').on({
		mouseleave : function(){
			$(this).siblings().css('opacity', '1');
			$(this).removeClass('active');
		}
	});
	
	/*
	setTimeout(function(){
		$(".video_wrap.pc video").prop("controls",false); 
	}, 5000)
	*/

	$('.muted_btn').on("click", function(){
		$("#prm_video video").prop('muted', !$("#prm_video video").prop('muted'));
		if ( $(this).hasClass('off') ){
			$(this).removeClass('off');
			$(this).addClass('on');
		} else {
			$(this).addClass('off');
			$(this).removeClass('on');
		}
	});


	var banner_slide3 = new Swiper(".bannerSwiper3", {
		effect : "fade",
		speed : 400,
		loop: true,
		autoplay : {
			delay : 5000,
			disableOnInteraction : false,
		},
		navigation : {
			prevEl : ".banner_prev3",
			nextEl : ".banner_next3",
		},

	});
	
});

function popupCenter(url, title, w, h) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'resizable=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	if (window.focus) {
		newWindow.focus();
	}
}


function viewSearch(){
	$('.header_search').stop().fadeIn(400);
}

function viewMenu(){
	$("html, body").addClass("not_scroll");
	$('.all_menu_pc').stop().fadeIn(400);
}

function handleSideMenu(obj){
	if( $(obj).hasClass('on') ){
		$(obj).removeClass('on');
		$(obj).parents('.mo_gnb').removeClass('on');
		$(obj).next().stop().slideUp();

	}else{
		$(obj).addClass('on');
		$(obj).next().stop().slideDown();
		$(obj).parents('.mo_gnb').addClass('on');
		$(obj).parent().siblings().children('a').removeClass('on');
		$(obj).parent().siblings().find('ul').stop().slideUp();
	}
}

function checkActive(obj){
	$(obj).parent().siblings().children('a').removeClass('on');
	$(obj).addClass('on');
}

var scroll_val;

function activeAllMenu(str){
	var scTop = $(window).scrollTop();
	scroll_val = scTop;
	
	if(scTop > 45){
		setTimeout(function(){
			$('.' + str).stop().animate({'left':'0'},400);
		}, 500);
	}else{
		$('.' + str).stop().animate({'left':'0'},400);
	}

	not_scroll_on(scTop);



}

function closeMenu(i, obj){
	if(i == 0){
		$(obj).parents('.mo_menu').stop().animate({'left':'-200%'}, 400);
	}
	if(i == 1){
		$(obj).parents('.mo_menu').stop().animate({'left':'200%'}, 400);
	}

	if(i == 2){
		$(obj).parents('.all_menu_pc').stop().animate({'left':'200%'}, 400);
	}

	not_scroll_off();



}

var scroll_val;
var scroll_val_re = 0;
var scroll_target;

function not_scroll_on(_scTop) {
	scroll_val = _scTop;

	$("html, body").addClass("not_scroll");

	if( $('#header').siblings('#main').length > 0 ) {
		scroll_target = 'main';
	} else if( $('#header').siblings('#sub').length > 0 ) {
		scroll_target = 'sub';

		if ( $('#header').siblings('#sub').hasClass('prc_home0') ) {	

			var offset_top = $('.prc_nav').offset().top;			
			var w = $(window).innerWidth();			
			var basic ;

			if(  w <= 768 ) { basic = 50; }
			else if(  w <= 540 ) { basic = 400; }
			else if(  w <= 480 ) { basic = 200 }

			if(_scTop >= (offset_top - basic) ){
				$('#sub').addClass('prc_scr_hmoe');
			}else{
				$('#sub').remove('prc_scr_hmoe');
			}		
			
		}

		if ( $('#header').siblings('#sub').hasClass('prc_home1') || 
			$('#header').siblings('#sub').hasClass('prc_home2') ||
			$('#header').siblings('#sub').hasClass('prc_home3') ||
			$('#header').siblings('#sub').hasClass('prc_home4') ||
			$('#header').siblings('#sub').hasClass('prc_home5') ||
			$('#header').siblings('#sub').hasClass('prc_home6') ||
			$('#header').siblings('#sub').hasClass('prc_home7') ) {
			$('#sub').addClass('prc_scr');
		} 

		if ( $('#header').siblings('#sub').hasClass('course_view') || 
			$('#header').siblings('#sub').hasClass('books_view') ) {
			var offset_top = $('.tab_wrap').offset().top;
			if(_scTop >= (offset_top - 200) ){
				$('#sub').addClass('prc_scr');
			} else {
				$('#sub').removeClass('prc_scr');
			}			
		} 

		scroll_val = scroll_val;
		scroll_val_re = 0;
	}

	console.log("_scTop : " + _scTop);

	if ( _scTop > 45 ) {
		$('#header .top.banner').hide();	
		$('#header').addClass('not_scr');

		$('#'+scroll_target).css({
			'position':'relative',
			'top':'-'+scroll_val+'px'
		});

		if( $(scroll_target).find('#footer').length > 0 ) { 
			$('#footer').css({
				'position':'relative',
				'top':'-'+scroll_val+'px'
			});
		}

	} 
}

function not_scroll_off () {

	$("html, body").removeClass("not_scroll");

	$('#header .top.banner').show();
	$('#header').removeClass('not_scr');
	$('.prc_view').removeClass('prc_scr');
	$('#sub').removeClass('prc_scr');

	$(window).scrollTop(scroll_val);
	$('#'+scroll_target).css({
		'position':'relative',
		'top': scroll_val_re+'px'
	});
	$('#footer').css({
		'position':'relative',
		'top':'0px'
	});

}

function popOpen(i){
	$('#popup' + i).stop().fadeIn(400);
}
function popCloseAll(str){
	$('#' + str).stop().fadeOut(400);
	//console.log(str);
	//alert(1);
}

function prmVideoCls(id){
	var videoH = $('#prm_video').height();
	$('#prm_video').stop().animate({'margin-top' : -videoH + 'px'}, 800, function(){
		$('#header').addClass('video_off');
		$('#sub').addClass('video_off');
		$('#prm_video').remove();
		$('#prm_video').removeClass('scroll');

		if( $('#sub').hasClass('prm_campaign') ) {
			$(window).scrollTop(1);
			setTimeout(function(){
				$('.section2 .img1').addClass('done');
				$('.section2 .img2').addClass('done');	
			}, 800);
			
		}
	});	
}

function mo_action() {
	if( is_touch_device() ) {
		$('.section.banner').hide();
		$('#footer .cs_wrap').hide();
		$('.toolbar_wrap').addClass('on');
	}
}




/* 삭제하지 말것 */
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

function refresh_captcha(){
	document.getElementById("capt_img").src="/include/captcha.php?waste="+Math.random();
	return false;
}

function is_touch_device() {
  return 'ontouchstart' in window;
}

/* - - - - - - - - - */
