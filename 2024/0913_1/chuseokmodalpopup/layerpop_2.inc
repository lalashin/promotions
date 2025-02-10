<?php
    $CookieKey = 'Pop0821';

    if (@$_COOKIE[$CookieKey] == 'os') { return; }

    $ymd = date('Ymd');


?>

<?php if ($ymd <= '20231127') : ?>
<style type="text/css">
	.live_pop { display: block; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; background: rgba(10, 10, 10, 0.8); z-index: 4000;}
	.live_pop .pop_wrap { width: 100%; max-width: 768px; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%);
		overflow: hidden; box-sizing: border-box
	}
	.live_pop .pop_wrap .pop_wrap_img { position: relative; width: 100%; padding: 0; }
	.live_pop .pop_wrap .pop_wrap_img img { width:100%; }

	.live_pop .link1 { position: absolute; top: 10%; left:  0%; width:  50%; height: 88%; background: red; opacity: 0; }
	.live_pop .link2 { position: absolute; top: 10%; left: 50%; width:  50%; height: 88%; background: red; opacity: 0; }


	.live_pop .btn1 { position: absolute; top: 2%; left: 66%; width: 21%; height: 7%; background: red; opacity: 0; }
	.live_pop .btn2 { position: absolute; top: 2%; left: 88%; width:  11%; height: 7%; background: red; opacity: 0; }

	@media screen and (max-width: 768px) {
		.live_pop .pop_wrap { width: 100%; }

	}
</style>
<div class="live_pop">
	<div class="size">
		<div class="pop_wrap">
			<div class="pop_wrap_img">
				<img src="/police/popup/mainmodalpopup2/pop231127.png" alt="" >
				<a href="/police/classes/online/pass/" class="link1">패스바로가기</a>
				<a href="/police/center/notice/view.php?ssite_code=1&sdisplay=Array&sgb=1&no=444" class="link2">미래유니버스</a>

				<a href="#" class="btn1" onclick="setCookieWeb('<?=$CookieKey?>', 'os');jQuery('.live_pop').hide();return false;">오늘하루닫기</a>
				<a href="#" class="btn2" onclick="jQuery('.live_pop').hide();return false;">닫기</a>
			</div>
		</div>
	</div>
</div>

<?php else : ?>

<style type="text/css">
	.live_pop { display: block; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; background: rgba(10, 10, 10, 0.8); z-index: 4000;}
	.live_pop .pop_wrap { width: 100%; max-width: 768px; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%);
		overflow: hidden; box-sizing: border-box
	}
	.live_pop .pop_wrap .pop_wrap_img { position: relative; width: 100%; padding: 0; }
	.live_pop .pop_wrap .pop_wrap_img img { width:100%; }

	.live_pop .link1 { position: absolute; top: 10%; left:  0%; width:  50%; height: 88%; background: red; opacity: 0; }
	.live_pop .link2 { position: absolute; top: 10%; left: 50%; width:  50%; height: 88%; background: red; opacity: 0; }


	.live_pop .btn1 { position: absolute; top: 2%; left: 66%; width: 21%; height: 7%; background: red; opacity: 0; }
	.live_pop .btn2 { position: absolute; top: 2%; left: 88%; width:  11%; height: 7%; background: red; opacity: 0; }

	@media screen and (max-width: 768px) {
		.live_pop .pop_wrap { width: 100%; }

	}
</style>
<div class="live_pop">
	<div class="size">
		<div class="pop_wrap">
			<div class="pop_wrap_img">
				<img src="/police/popup/mainmodalpopup2/pop231204.png?" alt="" >
				<a href="/police/classes/online/pass/" class="link1">패스바로가기</a>
				<a href="/police/classes/offline/universe/" class="link2">미래유니버스</a>

				<a href="#" class="btn1" onclick="setCookieWeb('<?=$CookieKey?>', 'os');jQuery('.live_pop').hide();return false;">오늘하루닫기</a>
				<a href="#" class="btn2" onclick="jQuery('.live_pop').hide();return false;">닫기</a>
			</div>
		</div>
	</div>
</div>
<?php endif; ?>

