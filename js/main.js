$(function(){


	

	$('.section5 .tab_area ul li a').on('click', function(){
		var idx = $(this).parent().index();

		$('.section5 .tab_area ul li a').parent().removeClass('on');
		$(this).parent().addClass('on');
		$('.section5 .list_area > div').removeClass('active');
		$('.section5 .list_area > div').eq(idx).addClass('active');

		if( $(this).parent().hasClass('li1') ){
			$('.section5 .list_area').removeClass('st2');
			$('.section5 .list_area').addClass('st1');
		}else{
			$('.section5 .list_area').removeClass('st1');
			$('.section5 .list_area').addClass('st2');
		}
	});

	$('.section6 .board_wrap .t_type2 strong a').on('click', function(){
		var idx = $(this).index();
		//console.log($(this).parents('.board_wrap').find('.box_wrap').children('div'));
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$(this).parent().siblings().children('a').removeClass('active');
		$(this).parent().siblings().children('a').eq(idx).addClass('active');

		$(this).parents('.board_wrap').find('.box_wrap').children('div').css('display', 'none');
		$(this).parents('.board_wrap').find('.box_wrap').children('div').eq(idx).css('display', 'block');

	});

	//pc버전일때 교수진 공지 또는 미래공지 활성화
	pcBoardActive();
	$(window).resize(function(){
		pcBoardActive();
	})

	//section7
	guideBoxResizing();

	$(window).resize(function(){
		guideBoxResizing();
	});


	/*$('.section .hover_area a').on({
		mouseenter : function(){
			$(this).parent().siblings().children('a').removeClass('on');
			$(this).addClass('on');
		}
	});
	$('.section .hover_area').mouseleave(function(){
		$('.section .hover_area a').removeClass('on');
	});*/

});

function flipResizing(){
	var flipCont = $('#main .section1 .flip_slide a');
	var fWid = flipCont.outerWidth();
	//console.log(fWid);
	flipCont.css('height', fWid + 'px');

}


function guideBoxResizing(){
	var boxWid = $('#main .section7 .guide_cont .list_area ul li a').outerWidth();
	//console.log(fWid);
	$('#main .section7 .guide_cont .list_area ul li a').css('height', boxWid + 'px');

}

function pcBoardActive(){
	var winWid = $(window).outerWidth();
	//console.log(winWid);
	if(winWid > 1024){
		$('#main .section6 .board_wrap1 .box_wrap > div').css('display', 'block');
	}else{
		$('#main .section6 .board_wrap1 .box_wrap .noti_board').css('display', 'none');
	}
}
