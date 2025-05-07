<?php
   // $CookieKey = 'Pop0821';
	$CookieKey = 'joinCouponPopup';
    if (@$_COOKIE[$CookieKey] == 'os') { return; }
?>



<style type="text/css">
	.joinCoupon_pop { display: block; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; background: rgba(10, 10, 10, 0.8); z-index: 4000;}
	.joinCoupon_pop .pop_wrap { width: 100%; max-width: 768px; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%);
		overflow: hidden; box-sizing: border-box;
		/*padding: 9px 14px;*/
	}
	.joinCoupon_pop .pop_wrap .pop_wrap_img { position: relative; width: 100%; height:100%;}
	.joinCoupon_pop .pop_wrap .pop_wrap_img img { width:100%; height:100%; }

	.joinCoupon_pop .pop_btn {width:100%; height:30px; display:flex; justify-content: flex-end; margin-bottom:10px}
	.joinCoupon_pop .pop_btn a { display:inline-block; color:#fff; font-size:13px; font-weight:300; text-align:center; line-height:2.2;  border:1px solid #fff; box-sizing: border-box;}
	.joinCoupon_pop .pop_btn .todaybtn { width: 165px; height: 30px;  }
	.joinCoupon_pop .pop_btn .closebtn {width:  76px; height: 30px; margin-left:5px;  }

	.popImgA_area{ position:relative; }
	.joinCoupon_pop .popImgA_area .link1 { position: absolute; top: 0; left:  0; width: 100%; height: 100%; background: red; opacity: 0; }


	@media screen and (max-width: 768px) {
		.joinCoupon_pop .pop_wrap { width: 90%; margin-left:0;}


	}
</style>
<div class="joinCoupon_pop">
	<div class="size">
		<div class="pop_wrap">

			<div class="pop_wrap_img">
				<div class="pop_btn">
					<!--<a href="#" class="todaybtn" onclick="setCookieWeb('<?=$CookieKey?>', 'os');jQuery('.joinCouponPopup').hide();return false;">오늘하루보지않기</a>-->
					<a href="#" class="closebtn" onclick="jQuery('.joinCouponPopup').hide();return false;">닫기</a>
				</div>
				<div class="popImgA_area">
					<img src="popup/241128.jpg" alt="">
					<a href="#" class="link1"></a>
					
				</div>
				
			</div>
		</div>
	</div>
</div>

<script>
	//$('.click-to-move').on('click', function (e) {
	//	$('.joinCoupon_pop').hide();
	////	CommonMJ.scrollTo('.section5');
	//	return false;
//	});
</script>
