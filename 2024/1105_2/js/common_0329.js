$(function(){
	//var standard_num = 45;
	var standard_num = 115;

    var _window = jQuery(window);

	_window.scroll(function(){
		var scTop   = _window.scrollTop();
        var thisTop = standard_num + (window.screen.width > 768 ? 120 : 0);

		if(scTop > thisTop){
			$('.header').addClass('fixed');
			$('#sub').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
			$('#sub').removeClass('fixed');
		}
	});

	$('.sub_lnb .menu_last > a, .sub_lnb .has_list > a').on('click', function(e){ e.preventDefault();
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

	$('.pop_closebtn').on("click", function(event) { event.preventDefault();
		$('.popup').stop().fadeOut(400);
	})

	$('.agree1_btn').on("click", function(){
		$('.pop_footer_agree1').stop().fadeIn(400);
	})

	$('.agree2_btn').on("click", function(){
		$('.pop_footer_agree2').stop().fadeIn(400);
	});

	// 팝업 x일간 보지않기
	// 사용 예 : <a href="#" class="week_close ex-pop-close" data-expire="7" data-popclass="main_toprightPop" data-popkey="PopPoliceRTSlide240822">7일간 그만보기</a>
	$(".ex-pop-close").on("click", function(){

		//기간
		var expire = $(this).data("expire");

		var value = "none";

		//만료일 (만료일 1일이고 오늘 자정 기준까지일때 ) (오늘+1일을 set)
		var expire_date = $(this).data("expire-date");
		if (expire_date){
			value = expire_date;
		}

		//팝업 키
		var popkey = $(this).data("popkey");
		//대상팝업 클래스
		var popclass = $(this).data("popclass");

		if(expire){
			$.cookie(popkey, value, {expires:expire,path:"/"});
		}

		$("."+popclass).fadeOut("fast");

	});

});

/* 삭제하지 말것 */
/*
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}
*/

function is_touch_device() {
  return 'ontouchstart' in window;
}

/* - - - - - - - - - */

