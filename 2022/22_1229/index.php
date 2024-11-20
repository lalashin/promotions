<?php
    include_once "{$_SERVER['DOCUMENT_ROOT']}/include/common.php";
    include_once "{$_SERVER['DOCUMENT_ROOT']}/lib/db/CommonDB.class.inc";

    $applyCode = '20221229_fireOffSession';
    $reqCnt = 0;

    if ($loginCheck) {
        $CommonDB = new CommonDB();
        $reqCnt = $CommonDB->select_query("
                                        SELECT COUNT(*) AS cnt
                                          FROM apply_list
                                         WHERE applyCode = '{$applyCode}'
                                               AND gubun = '참가신청'
                                               AND member_fk = {$_SESSION['member_no']}
                                        ")[0]['cnt'];
    }

    $_SESSION[$applyCode] = true;
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no, address=no, email=no">
    <meta name="title" content="중심의 이동! 미래인재소방학원">
    <meta name="keywords" content="미래인재컴퍼니, 미래인재소방학원">
    <meta name="description" content="">
    <meta name="url" content="https://www.miraeij.com/fire/">
    <meta name="image" content="https://www.miraeij.com/img/og_img_fire.jpg">
    <meta property="og:title" content="중심의 이동! 미래인재소방학원">
    <meta property="og:keywords" content="미래인재컴퍼니, 미래인재소방학원">
    <meta property="og:description" content="">
    <meta property="og:url" content="https://www.miraeij.com/fire/">
    <meta property="og:image" content="https://www.miraeij.com/img/og_img_fire.jpg" />
    <meta name="og:type" charset="" content="website" />
    <meta name="image:width" content="800" />
    <meta name="image:height" content="400" />
    <link rel="canonical" href="https://www.miraeij.com/fire/" />


    <title>중심의 이동! 미래인재소방학원</title>
    <link rel="icon" type="image/x-icon" href="/favicon_fire.ico" />
    <!-- Styles -->
    <link rel="stylesheet" href="/css/reset.css?v=1670288051">
    <link rel="stylesheet" href="/css/common.css?v=1670288051">
    <link rel="stylesheet" href="/css/content.css?v=1670288051">
    <link rel="stylesheet" href="/css/content2.css">
    <link rel="stylesheet" href="/css/content3.css?v=1670288051">
    <link rel="stylesheet" href="/css/program.css?v=1670288051">
    <link rel="stylesheet" href="/css/custom.css?v=1670288051" />
    <link rel="stylesheet" href="/css/responsive.css?v=1670288051">
    <link rel="stylesheet" href="/css/responsive2.css?v=1670288051">
    <!-- Docs styles -->
    <!-- <link rel="stylesheet" href="/css/dist/demo.css" /> -->
    <link rel="stylesheet" href="https://cab-starplayer.service.concdn.com/starplayer/1.0.0/starplyr.css" />
    <!-- Preload -->
    <link rel="preload" as="font" crossorigin type="font/woff2"
        href="https://cdn.plyr.io/static/fonts/gordita-medium.woff2" />
    <link rel="preload" as="font" crossorigin type="font/woff2"
        href="https://cdn.plyr.io/static/fonts/gordita-bold.woff2" />
    <!-- scripts -->
    <script src="/js/jquery-1.12.0.min.js" type="text/javascript"></script>
    <script src="/js/easing.js" type="text/javascript"></script>
    <script type="text/javascript" src="/js/common.js?v=1670288051"></script>
    <script type="text/javascript" src="/js/function_jquery.js"></script>
    <script type="text/javascript" src="/js/function.js"></script>
    <script type="text/javascript" src="/smarteditor/js/HuskyEZCreator.js"></script>
    <script type="text/javascript" src="/js/calendar_beans_v2.0.js"></script>
    <!--<script type="text/javascript" src="/js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="/js/jquery.validate.unobtrusive.min.js"></script>
    -->
    <script type="text/javascript" src="/js/jquery.form.js"></script>
    <script type="text/javascript" src="/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/js/swiper.min.js"></script>
    <link rel="stylesheet" href="/css/swiper.css" />

    <script type="text/javascript" src="/js/custom.js"></script>
    <script type="text/javascript" src="/js/CommonMJ.js"></script>
    <script type="text/javascript" src="/js/jquery.ajaxQueue.min.js"></script>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <script type="text/javascript" src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>


    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>

    <link rel="stylesheet" href="<?=getSaltUrl('css/season.css')?>">

</head>

<body>
	<div id="sub" class="sub about fire_season">
	<div class="sub_wrap">
		<div class="sec_wrap">
			<div class="section section1">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img01.png" class="pc">
							<img src="images/mo-session-img01.png" class="mo">
						</span>
                        <a href="/fire" class="fire_home" alt="">홈페이지 바로가기</a>
						<a href="#" class="fire_season_btn jqClick open-pop" alt="">설명회신청하기</a>
					</div>
				</div>
			</div>
			<!-- //1 -->
			<div class="section section2">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img02.png" class="pc">
							<img src="images/mo-session-img02.png" class="mo">
						</span>
					</div>
                    <a href="#section4" class="fire_map_btn" alt="">찾아오는 길</a>
				</div>
			</div>
			<!-- //2 -->
			<div class="section section3">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img03.png" class="pc">
							<img src="images/mo-session-img03.png" class="mo">
						</span>
					</div>
				</div>
			</div>
			<!-- //3 -->
			<div class="section section4" id="section4">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img04.png" class="pc">
							<img src="images/mo-session-img04.png" class="mo">
						</span>
						<a href="#" class="fire_reserve_btn jqClick open-pop" alt="">설명회참석예약하기</a>
					</div>
				</div>
			</div>
			<!-- //4 -->
			<div class="section section5">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img05.png" class="pc">
							<img src="images/mo-session-img05.png" class="mo">
						</span>
					</div>
				</div>
			</div>
			<!-- //5 -->
			<div class="section section6">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img06.png" class="pc">
							<img src="images/mo-session-img06.png" class="mo">
						</span>
						<a href="FireOffSession.jpg" class="fire_down_btn" alt="" download>소문내기이미지다운</a>
						<a href="#" class="fire_url_btn" alt="" onclick="return CommonMJ.copyClipboard(self.location.href);">이벤트url복사</a>
					</div>
				</div>
			</div>
			<!-- //6 -->
			<div class="section section7">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img07.png" class="pc">
							<img src="images/mo-session-img07.png" class="mo">
						</span>
					</div>
				</div>
			</div>
			<!-- //7 -->
			<div class="section section8">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img08.png" class="pc">
							<img src="images/mo-session-img08.png" class="mo">
						</span>
						<div class="fire_ad_check">
							<input type="text" name="contents" class="check_write" placeholder="소문내기 링크를 등록해주세요" />
							<button class="check_btn jqClick regFire"></button>
						</div>
					</div>
				</div>
			</div>
			<!-- //8 -->
			<div class="section section9" page="1">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img09.png" class="pc">
							<img src="images/mo-session-img09.png" class="mo">
						</span>
						<div class="fire_board">
							<table>
                                <caption>게시판 목록</caption>
                                <colgroup>
                                    <col width="80px">
                                    <col width="*">
                                    <col width="120px">
                                    <col width="140px">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="no">NO.</th>
                                        <th class="cont">내용</th>
                                        <th class="iname">참여자</th>
                                        <th class="wdate">작성일</th>
                                    </tr>
                                </thead>
                                <tbody class="listHtml">
                                    <tr>
                                        <td colspan="4" align="center">등록된 글이 없습니다.</td>
                                    </tr>
                                </tbody>
							</table>
                            <div class="pagenate clear pageHtml" style="margin-top:60px;"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- //9 -->
			<div class="section section10">
				<div class="size">
					<div class="inner">
						<span>
							<img src="images/pc-session-img10.png" class="pc">
							<img src="images/mo-session-img10.png" class="mo">
						</span>
					</div>
				</div>
			</div>
			<!-- //10 -->

		</div>
	</div>
</div>
<!-- 22.12.29 -->
<div class="request_pop">
    <div class="size">
        <div class="pop_wrap">
            <div class="tit_wrap">
                <p class="fw500">합격전략 설명회 사전 예약 신청</p>
                <a href="#" class="popClick pop_closebtn"><img src="images/icon_close.png" style="width: 18px; height: 18px;"></a>
            </div>
            <div class="desc_wrap clear">
                <div class="top">
                    <p>

                        [소방] ‘극강의 공부효율’ 소방 합격전략설명회<br>
                        - 일시: 2023.01.07(토) 오후 2시<br>
                        - 장소: 미래인재소방학원 <br>

                    </p>
                </div>
                <div class="btm">
                    <div class="bbs">

                        <table class="write">
                            <caption>글쓰기</caption>
                        <colgroup>
                            <col width="180px">
                            <col width="*">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>신청자 이름/ 연락처</th>
                                <td><?=$_SESSION['member_name']?> / <?=$_SESSION['member_cell']?></td>
                            </tr>
                            <tr>
                                <th>최종학력</th>
                                <td>
                                    <span class="select">
                                        <select name="area1" class="dSelect" title="최종학력선택">
                                            <option value="대학생">대학생</option>
                                            <option value="대학 휴학생">대학 휴학생</option>
                                            <option value="고등학교 졸업">고등학교 졸업</option>
                                            <option value="직장인">직장인</option>
                                            <option value="기타">기타</option>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>준비기간</th>
                                    <td>
                                        <span class="select">
                                            <select name="area2" class="dSelect" title="준비기간선택">
                                                <option value="0~6개월">0~6개월</option>
                                                <option value="1년 미만">1년 미만</option>
                                                <option value="2년 미만">2년 미만</option>
                                                <option value="3년 미만">3년 미만</option>
                                                <option value="4년 미만">4년 미만</option>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>응시횟수</th>
                                    <td>
                                        <span class="select">
                                            <select name="area3" class="dSelect" title="준비기간선택">
                                                <option value="0회">0회</option>
                                                <option value="1회">1회</option>
                                                <option value="2회">2회</option>
                                                <option value="3회">3회</option>
                                                <option value="4회">4회 이상</option>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>궁금한 내용</th>
                                    <td>
                                        <textarea name="memo" cols="50" rows="2" style="height:100px;"></textarea>
                                        <!-- <em>* 신청자의 핸드폰으로 예약 내용이 발송되므로 연락처를 정확하게 입력해 주세요.</em> -->

                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <div class="agree">
                                            <div class="txt_wrap">
                                                <div class="txt">
                                                    <h3>개인정보 수집 및 활용 동의 안내</h3>
                                                    <ul>
                                                        <li>1.개인정보 수집 이용 목적
                                                            <span>- 신규 강좌, 특강, 모의고사, 설명회, 각 종 이벤트 안내</span>
                                                        </li>
                                                        <li>2.개인정보 수집 항목
                                                            <span>- 이름, 연락처, 최종학력, 준비기간, 응시횟수, 궁금한 내용</span>
                                                        </li>
                                                        <li>3.개인정보 이용기간 및 보유기간
                                                            <span>- 신청일로부터 1년</span>
                                                        </li>
                                                        <li>4. 개인정보제공 동의거부에 따른 불이익
                                                            <span>- 귀하는 개인정보 제공 동의를 거부할 수 있으며 동의 거부에 따른 불이익은 없으나,
                                                                위 제공사항은 온라인 사전 예약에 반드시 필요한 사항으로, 거부하실 경우
                                                                온라인 사전예약이 불가함을 알려드립니다.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p class="check">
                                                <input type="checkbox" name="agree" id="agree" class="required" value="Y" title="이용약관3" style="width:auto;">
                                                <label for="agree">개인정보 수집에 동의합니다.</label>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- //write--->

                        <div class="btn_box">
                            <a href="#" class="btn popClick register">예약하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<script>
var _Sub = jQuery('#sub')
    .on('click', '.jqClick', function(event) { event.preventDefault(); event.stopPropagation(); var _this = jQuery(this);

        if (_this.hasClass('open-pop')) {
            _POP.trigger('open');

        } else if (_this.hasClass('regFire')) {
            var _cont = _this.siblings('[name="contents"]'),
                data = {
                         op: 'register',
                         gubun: '소문내기',
                         contents: jQuery.trim(_cont.val()),
                       };

            if (!data.contents.length) {
                alert('내가 작성한 글 링크를 입력해주세요.');
                _cont.focus();

            } else {
                CommonMJ.post({ url:'proc.php', data:data })
                      .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                          if (result.errno == 2) {
                                alert('로그인이 필요한 서비스입니다.');
                                location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                          } else if (result.errno == 0) {
                              _cont.val('');
                              _Section9.trigger('reload');
                          }
                      });
            }
        }
    }),
    _Section9 = jQuery('.section.section9')
        .on('reload', function(event, page) { event.preventDefault(); event.stopPropagation();
            var data = {
                         op: 'list',
                         gubun: '소문내기',
                         page: page || _Section9.data('page') || 1,
                       };

            CommonMJ.post({ url:'proc.php', data:data })
                  .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                      if (result.errno == 2) {
                            alert('로그인이 필요한 서비스입니다.');
                            location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                      } else if (result.errno == 0) {
                          _Section9.data('page', result.pageInfo.page);

                          jQuery('.listHtml', _Section9).html(result.listHtml);
                          jQuery('.pageHtml', _Section9).html(result.pageHtml);
                      }
                  });
        })
        .on('click', '.pageHtml a', function(event) { event.preventDefault(); event.stopPropagation();
            var _this = jQuery(this),
                 page = parseInt(_this.data('page'), 10);

            if (!isNaN(page)) {
                _Section9.trigger('reload', page);
            }
        })
    _POP = jQuery('.request_pop')
        .on('click', '.popClick', function(event) { event.preventDefault(); event.stopPropagation(); var _this = jQuery(this);

            if (_this.hasClass('pop_closebtn')) {
                _POP.trigger('close');

            } else if (_this.hasClass('register')) {
                var data = {
                             op: 'register',
                             gubun: '참가신청',
                             area1 : jQuery('[name="area1"]', _POP).val(),
                             area2 : jQuery('[name="area2"]', _POP).val(),
                             area3 : jQuery('[name="area3"]', _POP).val(),
                             memo  : jQuery('[name="memo"]', _POP).val(),
                             agree : jQuery(':checkbox[name="agree"]', _POP).is(':checked'),
                           };

                if (!data.agree) {
                    alert('개인정보 수집에 동의하셔야 합니다.');

                } else {
                    CommonMJ.post({ url:'proc.php', data:data })
                          .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                              if (result.errno == 2) {
                                alert('로그인이 필요한 서비스입니다.');
                                location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                              } else if (result.errno == 0) {
                                _POP.trigger('close');
                              }
                          });
                }
            }
        })
        .on('open', function(event) { event.preventDefault();

            <?php if (!$loginCheck) { ?>
                if(confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?')){
                    location.href = '/member/login.php?url='+encodeURIComponent(location.href);
                }

            <?php } elseif ($reqCnt > 0) { ?>
                alert('이미 신청하셨습니다.');

            <?php } else { ?>
                _POP.stop().fadeIn(400);
            <?php } ?>
        })
        .on('close', function(event) { event.preventDefault();
            _POP.stop().fadeOut(400);
        });

_Section9.trigger('reload');
</script>
</body>

</html>

