<?
	$root = $_SERVER['DOCUMENT_ROOT'];
	$s = 1;
	$p = "guide";
	$sp = 0;	
	include_once $root."/police/header.php";
?>

<style>
	.header_search{display:none;}
</style>

<link rel="stylesheet" href="css/content4.css?v=<?=time()?>">
<link rel="stylesheet" href="css/responsive4.css?v=<?=time()?>">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js"></script>

<script>
	$(function(){		
		$('img[usemap]').rwdImageMaps();


		//randomActive();
	});

	$(document).on('click', '.section2 .tab_area ul li a', function(){
		var idx = $(this).parent().index();

		$(this).parent().siblings().children('a').removeClass('on');
		$(this).addClass('on');
		$('.section2 .cont_wrap > div').removeClass('active');
		$('.section2 .cont_wrap > div').eq(idx).addClass('active');	
	});	
	
	$(document).on('click', '.section2 .cont4_tab ul li a', function(){
		var idx2 = $(this).parent().index();

		$(this).parent().siblings().children('a').removeClass('on');
		$(this).addClass('on');
		$('.section2_1 .cont4_con > div').removeClass('active');
		$('.section2_1 .cont4_con > div').eq(idx2).addClass('active');		
	});

	function goSection(str){
		var ofTop = $('.' + str).offset().top;
		var headerHgt = $('#header.fixed .btm').outerHeight();
		var subVisualHgt = $('#sub.fixed .sub_visual').outerHeight();

		//console.log(subVisualHgt);
		
		$('html').animate({'scrollTop' : ofTop - (headerHgt + subVisualHgt)}, 600);
	}

	/*function getCont(i, obj){

		$(obj).parent().siblings().children('a').removeClass('on');
		$(obj).addClass('on');

		$.ajax({
			url : 'ajax'+ i + '.html',
			dataType : 'html',
			error : function(){
				console.log('정보를 찾을 수 없습니다.');
			},
			success : function(data){
				var r = data.trim();
				$('#sec2_cont').html(r);
			}
		});
	}*/

/* 0806 랜덤 기능 제거요청
	function randomActive(){
		var ranNum = Math.floor(Math.random() * 5);
		//console.log(ranNum);

		$('.section2 .cont4_tab ul li a').removeClass('on');
		$('.section2_1 .cont4_con > div').removeClass('active');
		$('.section2 .cont4_tab ul li a').eq(ranNum).addClass('on');
		$('.section2_1 .cont4_con > div').eq(ranNum).addClass('active');	

	}
*/

</script>

<div id="sub" class="sub intro">
	<?include_once $root."/police/include/sub_visual.php";?> 
	<div class="sub_wrap">
		<div class="sec_wrap">
			<div class="section section1">
				<div class="size">
					<div class="imgs back_img pc" style="background-image:url('img/img_sec1.png');">
						<img src="img/img_sec1.png" class="basic_img" />	
					</div>
					<!-- <div class="imgs back_img mo" style="background-image:url('img/mo/img_sec1_mo.png');">
						<img src="img/mo/img_sec1_mo.png" class="basic_img" />	
					</div> -->
					<div class="go_link">
						<a href="javascript:;" onclick="goSection('targetCont4')">
							<img src="img/btn_sec1.png" />
						</a>
					</div>
				</div>
			</div>
			<div class="section section2">
				<div class="size">
					<div class="inner">							
						<div class="tab_area">
							<ul class="col_wrap col2">
								<li class="li1">
									<a href="javascript:;" class="on back_img">
										<img src="img/img_tab_1.jpg" class="basic_img" />
									</a>
								</li>
								<li class="li2">
									<a href="javascript:;" class="back_img">
										<img src="img/img_tab_2.jpg" class="basic_img" />
									</a>
								</li>
							</ul>
						</div>
						<div id="sec2_cont" class="cont_wrap">
							<div class="section2_1 active">
								<div class="cont_area">
									<div class="cont1">
										<div class="imgs pc">
											<img src="img/img_sec2_1.jpg" usemap="#imgmap1" />
											<map id="imgmap1" name="imgmap1">
												<area shape="rect" alt="사이버 경찰청 바로가기" title="사이버 경찰청 바로가기" coords="542,614,769,662" href="https://public.jinhakapply.com/policev2/main.aspx" target="_blank" />
											</map>
										</div>
									</div>
									<div class="cont2">
										<div class="tit_area">									
											<div class="imgs back_img pc" style="background-image:url('img/img_sec2_2_tit.jpg');">
												<img src="img/img_sec2_2_tit.jpg" class="basic_img" />	
											</div>
										</div>
										<div class="cont_area">
											<div class="cont2A">													
												<div class="cont2_tab">
													<ul class="col_wrap col3">
														<li class="li1">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab1_on.jpg');" onclick="goSection('cont2A');">
																<img src="img/img_sec2_tab1_on.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li2">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab2.jpg');" onclick="goSection('cont2B');">
																<img src="img/img_sec2_tab2.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li3">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab3.jpg');" onclick="goSection('cont2C');">
																<img src="img/img_sec2_tab3.jpg" class="basic_img" />
															</a>
														</li>
													</ul>	
												</div>												
												<div class="imgs back_img pc" style="background-image:url('img/img_sec2_2_1.jpg');">
													<img src="img/img_sec2_2_1.jpg" class="basic_img" />	
												</div>											
											</div>
											<div class="cont2B">													
												<div class="cont2_tab">
													<ul class="col_wrap col3">
														<li class="li1">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab1.jpg');" onclick="goSection('cont2A');">
																<img src="img/img_sec2_tab1.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li2">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab2_on.jpg');" onclick="goSection('cont2B');">
																<img src="img/img_sec2_tab2_on.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li3">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab3.jpg');" onclick="goSection('cont2C');">
																<img src="img/img_sec2_tab3.jpg" class="basic_img" />
															</a>
														</li>
													</ul>	
												</div>												
												<div class="imgs back_img pc" style="background-image:url('img/img_sec2_2_2.jpg');">
													<img src="img/img_sec2_2_2.jpg" class="basic_img" />	
												</div>											
											</div>
											<div class="cont2C">													
												<div class="cont2_tab">
													<ul class="col_wrap col3">
														<li class="li1">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab1.jpg');" onclick="goSection('cont2A');">
																<img src="img/img_sec2_tab1.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li2">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab2.jpg');" onclick="goSection('cont2B');">
																<img src="img/img_sec2_tab2.jpg" class="basic_img" />
															</a>
														</li>
														<li class="li3">
															<a href="javascript:;" class="back_img" style="background-image:url('img/img_sec2_tab3_on.jpg');" onclick="goSection('cont2C');">
																<img src="img/img_sec2_tab3_on.jpg" class="basic_img" />
															</a>
														</li>
													</ul>	
												</div>												
												<div class="imgs back_img pc" style="background-image:url('img/img_sec2_2_3.jpg');">
													<img src="img/img_sec2_2_3.jpg" class="basic_img" />	
												</div>											
											</div>
										</div>
									</div>
									<div class="cont3">
										<div class="imgs back_img pc">
											<img src="img/img_sec2_3.jpg" usemap="#imgmap2" />									
											<map id="imgmap2" name="imgmap2">
												<area shape="rect" alt="확인하기" title="확인하기" coords="898,534,1052,575" href="/lib/download.php?path=/upload/file/&vf=file_info1.hwp&af=<?=urlencode("22년_제2차_공채_및_하반기_경채_시험_원서접수결과.hwp")?>" target="_blank" />
												<area shape="rect" alt="확인하기" title="확인하기" coords="897,588,1053,631" href="/lib/download.php?path=/upload/file/&vf=file_info2.hwp&af=<?=urlencode("22년_제1차_필기합격선_평균_최저_.hwp")?>" target="_blank" />
												<area shape="rect" alt="확인하기" title="확인하기" coords="897,645,1054,684" href="/lib/download.php?path=/upload/file/&vf=file_info3.hwp&af=<?=urlencode("22년_원서접수_결과_보고_공지용_.hwp")?>" target="_blank" />
												<area shape="rect" alt="확인하기" title="확인하기" coords="894,699,1054,739" href="/lib/download.php?path=/upload/file/&vf=file_info4.hwp&af=<?=urlencode("21년_제2차_필기합격선.hwp")?>" target="_blank" />
												<area shape="rect" alt="확인하기" title="확인하기" coords="898,752,1054,794" href="/lib/download.php?path=/upload/file/&vf=file_info5.hwp&af=<?=urlencode("21년_하반기_공채경채_원서접수_결과-공지용.hwp")?>" target="_blank" />
											</map>
										</div>
										
									</div>
									<div class="cont4 targetCont4">
										<div class="tit_area">									
											<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_tit.jpg');">
												<img src="img/img_sec2_4_tit.jpg" class="basic_img" />										
											</div>
										</div>																				
										<div class="cont4_tab">
											<ul class="col_wrap col5">
												<li>
													<a href="javascript:;" class="on">
														<div class="tb">
															<div class="tbc nanum">
																<span>형 사 법</span>
																<b>신 광 은</b>
															</div>
														</div>
													</a>
												</li>
												<li>
													<a href="javascript:;">
														<div class="tb">
															<div class="tbc nanum">
																<span>경 찰 학</span>
																<b>장 정 훈</b>
															</div>
														</div>
													</a>
												</li>
												<li>
													<a href="javascript:;">
														<div class="tb">
															<div class="tbc nanum">
																<span>헌 법</span>
																<b>전 효 진</b>
															</div>
														</div>
													</a>
												</li>
												<li>
													<a href="javascript:;">
														<div class="tb">
															<div class="tbc nanum">
																<span>헌 법</span>
																<b>문 태 환</b>
															</div>
														</div>
													</a>
												</li>
												<li>
													<a href="javascript:;">
														<div class="tb">
															<div class="tbc nanum">
																<span>범 죄 학</span>
																<b>박 상 민</b>
															</div>
														</div>
													</a>
												</li>
											</ul>	
										</div>
										<div class="cont4_con">
											<div class="cont4_1 prof1 active">
												<div class="img_video">
													<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_1.jpg');">
														<img src="img/img_sec2_4_1.jpg" class="basic_img" />	
													</div>
													<div class="video_wrap">
														<iframe width="1280" height="720" src="https://www.youtube.com/embed/5zd_2hUod3Q" title="[미래인재경찰학원] 신광은 교수님 학습가이드" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
													</div>
												</div>
											</div>
											<div class="cont4_2 prof2">
												<div class="img_video">
													<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_2.jpg');">
														<img src="img/img_sec2_4_2.jpg" class="basic_img" />	
													</div>
													<div class="video_wrap">
														<iframe width="1280" height="720" src="https://www.youtube.com/embed/m9SFQ-tO1nY" title="[미래인재경찰학원] 장정훈 교수님 학습가이드" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
													</div>
												</div>
											</div>
											<div class="cont4_3 prof3">
												<div class="img_video">
													<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_3.jpg');">
														<img src="img/img_sec2_4_3.jpg" class="basic_img" />	
													</div>
													<div class="video_wrap">
														<iframe width="1280" height="720" src="https://www.youtube.com/embed/WZlT-aR-kMQ" title="[미래인재경찰학원] 전효진 교수님 학습가이드" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
													</div>
												</div>
											</div>
											<div class="cont4_4 prof4">
												<div class="img_video">
													<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_4.jpg');">
														<img src="img/img_sec2_4_4.jpg" class="basic_img" />	
													</div>
													<div class="video_wrap">
														<iframe width="1280" height="720" src="https://www.youtube.com/embed/I3J9gdHwU5o" title="[미래인재경찰학원] 문태환 교수님 학습가이드" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
													</div>
												</div>
											</div>
											<div class="cont4_5 prof5">
												<div class="img_video">
													<div class="imgs back_img pc" style="background-image:url('img/img_sec2_4_5.jpg');">
														<img src="img/img_sec2_4_5.jpg" class="basic_img" />	
													</div>
													<div class="video_wrap">
														<iframe width="1280" height="720" src="https://www.youtube.com/embed/HOUpY3OrL3I" title="[미래인재경찰학원] 박상민 교수님 학습가이드" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section2_2">								
								<div class="cont_area">
									<div class="cont1">
										<div class="imgs back_img pc" style="background-image:url('img/img_sec3_1.jpg');">
											<img src="img/img_sec3_1.jpg" class="basic_img" />	
										</div>
									</div>
									<div class="cont2">
										<div class="cont2_1">
											<div class="img_area">
												<div class="imgs pc back_img" style="background-image:url('img/img_sec3_2_1.jpg');">
													<img src="img/img_sec3_2_1.jpg" class="basic_img" />
													<!-- <map id="imgmap3" name="imgmap3">
														<area shape="rect" alt="호봉표 더 보러가기" title="호봉표 더 보러가기" coords="484,948,718,992" href="https://www.mpm.go.kr/mpm/info/resultPay/bizSalary/2022/#pay2022_7" target="_blank" />
													</map> -->
												</div>
												<div class="btn_area">
													<a href="https://www.mpm.go.kr/mpm/info/resultPay/bizSalary/2022/#pay2022_7" target="_blank">
														<img src="img/img_btn.jpg" />
													</a>
												</div>
											</div>
										</div>
										<div class="cont2_2">
											<div class="img_area">
												<div class="imgs pc back_img" style="background-image:url('img/img_sec3_2_2.jpg');" >
													<img src="img/img_sec3_2_2.jpg" class="basic_img" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="section section3">
				<div class="size">
					<div class="tab_area">
						<ul class="col_wrap col2">
							<li>
								<a href="javascript:;">
									<img src="img/img_tab_1.jpg" onclick="goSection('section2');" />
								</a>
							</li>
							<li>
								<a href="javascript:;">
									<img src="img/img_tab_2_on.jpg" onclick="goSection('section3');" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div> -->
		</div>		
	</div>
</div>


<?
	include_once $root."/police/footer.php";
?>