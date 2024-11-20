$(function(){

	var offset_top = $('.prc_nav').offset().top;
	var basic = 220;
	$(window).scroll(function(){			
			var pos = $(document).scrollTop();		
			//console.log("pos : " + pos);
			//console.log("offset_top : " + offset_top);

			if(pos >= (offset_top - basic) ){
				$('#sub.prc_view .prc_nav').addClass('before');
				//console.log("***pos : " + pos);
				//console.log("***offset_top : " + offset_top);
			}else{
				$('#sub.prc_view .prc_nav').removeClass('before');
			}		
	});

	$(window).resize(function(){
			offset_top = $('.prc_nav').offset().top;
			var w = $(window).innerWidth();
			if(  w <= 1024 ) { basic = 10;  }
			else if(  w <= 768 ) { basic = 50;  }
			else if(  w <= 540 ) { basic = 400;  }
			else if(  w <= 480 ) { basic = 200}
			//console.log(w);	
	});


	/*
	function nav_before() {

		$(window).scroll(function(){			
			var pos = $(document).scrollTop();		
			if(pos >= (offset_top - 220) ){
				$('#sub.prc_view .prc_nav').addClass('before');
			}else{
				$('#sub.prc_view .prc_nav').removeClass('before');
			}		
		});
		
	}*/


	/*
	var url = location.href;
	var win_url = url.split('?spc=');
	var stand = win_url[1].slice(0, 1);	
	console.log("stand :" + typeof stand, stand);


	$('.prc_nav .tabs li a').each(function(index){
		var href = $(this).attr('href');
		console.log("href :" + href);
		var page = href.split('?spc=');
		var now_page = page[1].slice(0, 1);
		console.log("now_page :" + typeof now_page, now_page);

		if( stand == now_page ) {
			console.log("1111111111111");
			$('.prc_nav .tabs li').removeClass('on');
			$(this).parent().addClass('on');

			if( stand !== "0" ) {
				console.log("222222222");
				var page_top = $('.prc_nav').offset().top;
				$(document).scrollTop(page_top - 150);
			}
		}
	});*/
	
		
	$('.poster_wrap button').on('click', function(){
		$(this).closest('.poster_wrap').hide();
		$(this).closest('.poster_wrap').next('#video_player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	});

	
	var item_slide = new Swiper(".mySwiper2", {
		slidesPerView : 1,
		spaceBetween : 0,
		speed : 600,
		loop: true,
		navigation : {
			prevEl : ".item_prev",
			nextEl : ".item_next",
		}
	});	

	var list_wrap = $('.con_list');
	var list ='.con_list .basic';

	list_wrap.each(function(index ){
		$(this).find('.con_list .basic') .each(function(index2){					
			var step_num = list_wrap.eq(index).find(list).eq(index2).find('.step > span').length;
			if( step_num > 1) { 
				for(var i = 1; i < step_num; i++) {
					var target = list_wrap.eq(index).find('.con_list .basic').eq(index2).find('.step > span').eq(i);
					target.prepend("<i><img src='/img/icon_span_dot.png'></i>");
				}
			}	
		});
	}); 

	$('.textbook_chek label').on("click", function(){ 
		if($(this).hasClass('on')){ 
			$(this).removeClass('on');
			$(this).closest('.pop_parent').children('.col_popup').stop().fadeOut(400);
		} else {
			$(this).addClass('on');
			$(this).closest('.pop_parent').children('.col_popup').stop().fadeIn(400);
		}
	});

	$('.textbook_all_btn').on("click", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).closest('.con_tit').next().find('.con_list > ul > li').removeClass('active');
			$(this).closest('.con_tit').next().find('.product_list > div').stop().slideUp();
		} else {
			$('.sell input:checkbox').prop("checked", false);			
			$(this).addClass('on');
			$(this).closest('.con_tit').next().find('.con_list > ul > li').addClass('active');
			$(this).closest('.con_tit').next().find('.product_list > div').stop().slideDown();
		}
	});

	$('.textbook_btn2 label').on("click", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).closest('li').removeClass('active');
			$(this).closest('.basic').next().children().stop().slideUp();
			$(this).closest('.pop_parent').children('.col_popup').stop().fadeOut(400);
		} else {			
			$('.con_list > ul > li').removeClass('active');
			$('.textbook_btn2 label').removeClass('on');
			$('.product_list > div').stop().slideUp();
			$('.textbook_btn2 input:checkbox').prop("checked", false);			
			$('.col_popup').stop().fadeOut(400);

			$(this).addClass('on');
			$(this).closest('li').addClass('active');
			$(this).closest('li').find('.product_list .sell input:checkbox').prop("checked", true);
			$(this).closest('.basic').next().children().stop().slideDown();
			$(this).closest('.pop_parent').children('.col_popup').stop().fadeIn(400);
		}
	});

	$('.textbook_btn').on("click", function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).closest('li').removeClass('active');
			$(this).closest('.basic').next().children().stop().slideUp();
		} else {			
			$('.con_list > ul > li').removeClass('active');
			$('.textbook_btn').removeClass('on');
			$('.textbook_sale > div').stop().slideUp();			
			$(this).addClass('on');
			$(this).closest('li').addClass('active');
			$(this).closest('.basic').next().children().stop().slideDown();
		}
	});
	
	/*
	$('.tit_area .tabs .tabs_btn').on('mouseover',  function() {
			$(this).addClass('onHover');
	}).on('mouseleave', function(){
			$(this).removeClass('onHover');   	
	}).on('click', function(){
			var type = $(this).data("name");
			var num=0;  
			var wrap = $(this).closest('.sec_con');
			
			wrap.find('.tit_area .tabs .tabs_btn').removeClass('on');   	
			$(this).addClass('on');   

			wrap.find('.contents_box > div').each(function(index, item){
				$(item).css("display", "none");
				if( type == $(item).data("name")) {
					$(item).css("display", "block");
				}
			});
	});
	*/

	var tabMenu     = $(".sec_con3 .tit_area .tabs li");
	var tabContent  = $(".contents_box1 > div");
	var tabMenu2    = $(".sec_con4 .tit_area .tabs li");
	var tabContent2 = $(".contents_box2 > div");
	var tabMenu3    = $(".sub_tabs li");
	var tabContent3 = $(".course_container .contents_box .con_wrap > div");

	tabMenu.on("click", function(event) { event.preventDefault();
		var index = $(this).index();
		activation(index);           		
	})

	function activation(_index) {    		
		tabMenu.children().removeClass("on");
		tabMenu.eq(_index).children().addClass("on");
		tabContent.removeClass("on");
		tabContent.eq(_index).addClass("on");
	}

	tabMenu2.on("click", function(event) { event.preventDefault();
		var index = $(this).index();
		activation2(index);         

		tabMenu3.children().removeClass("on");

		tabContent2.eq(index).find(".sub_tabs li").eq(0).children().addClass("on");
		tabContent2.eq(index).find(".con_wrap > div").eq(0).addClass("on");
		tabContent2.eq(index).find(".btn_box").removeClass('off');
	})

	function activation2(_index) {    		
		tabMenu2.children().removeClass("on");
		tabMenu2.eq(_index).children().addClass("on");
		tabContent2.removeClass("on");
		tabContent2.eq(_index).addClass("on");
	}

	tabMenu3.on("click", function(event) { event.preventDefault();
		var index = $(this).index();
		var parent_box =  $(this).closest('.course');

		activation3(index, parent_box);   	

	});

	function activation3(_index, _parent_box) {    			

		tabMenu3.children().removeClass("on");
		_parent_box.find(".sub_tabs li").eq(_index).children().addClass("on");
		 // tabMenu3.eq(_index).children().addClass("on");
		tabContent3.removeClass("on");
		_parent_box.find(".con_wrap > div").eq(_index).addClass("on");
		// tabContent3.eq(_index).addClass("on");

		if( _index == 1  ) {
				$('.btn_box').addClass('off');
			} else {
				$('.btn_box').removeClass('off');
		}
	};

	$('.course_list_btn').on("click", function() {
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).parents().parents().parents('li').removeClass('active');
			$(this).parents().parents().next().children('.list').stop().slideUp();
		} else {			
			$('.con_list > ul > li').removeClass('active');
			$('.course_list_btn').removeClass('on');
			$('.course_list .list').stop().slideUp();			

			$(this).addClass('on');
			$(this).parents().parents().parents('li').addClass('active');
			$(this).parents().parents().next().children().stop().slideDown();
		}
	});

	/*
	var type = $('.sub_tabs .tabs_btn.on').data("name2");

	$('.sub_tabs .tabs_btn').on('mouseover',  function() {
			$(this).addClass('onHover');
	}).on('mouseleave', function(){
			$(this).removeClass('onHover');   	
	}).on('click', function(){
			type = $(this).data("name2");
			var num=0;  

			$('.sub_tabs .tabs_btn').removeClass('on');   	
			$(this).addClass('on');   

			$('.course_container .contents_box .con_wrap > div').each(function(index, item){
				console.log(item);

				$(item).css("display", "none");
				if( type == $(item).data("name2")) {
					$(item).css("display", "block");
				}
			})

			if( type == 'type1_2'  ) {
				$('.btn_box').addClass('off');
			} else {
				$('.btn_box').removeClass('off');
			}
	})

	if( type == 'type1_2'  ) {
			$('.btn_box').addClass('off');
	} else {
			$('.btn_box').removeClass('off');
	}	
	*/

})
