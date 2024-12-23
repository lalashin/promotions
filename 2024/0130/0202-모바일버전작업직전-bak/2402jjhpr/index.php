<?php
    include 'config.inc';   // applyCode, 모의고사코드, onCnt/offCntS/offCntH, startYMDH, onEYMD, offEYMD, enterYMDHI

    $root = $_SERVER['DOCUMENT_ROOT'];
    include_once getSitePath('header.php');

?>
<!--231117-->
<link rel="stylesheet" href="<?=getSaltUrl('css/workskill.css')?>">
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js" integrity="sha256-uJhTN8Fnqk5uUpb/pv0ojmW81ODaj4JDlyb5Yfb3M9o=" crossorigin="anonymous"></script>

<script>

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.counterUp=e():t.counterUp=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"divideNumbers",function(){return o}),n.d(e,"hasComma",function(){return i}),n.d(e,"isFloat",function(){return u}),n.d(e,"decimalPlaces",function(){return l});e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,i=void 0===n?"start":n,u=e.duration,l=void 0===u?1e3:u,a=e.delay,c=void 0===a?16:a,d=e.lang,f=void 0===d?void 0:d;if("stop"!==i){if(r(t),/[0-9]/.test(t.innerHTML)){var s=o(t.innerHTML,{duration:l||t.getAttribute("data-duration"),lang:f||document.querySelector("html").getAttribute("lang")||void 0,delay:c||t.getAttribute("data-delay")});t._countUpOrigInnerHTML=t.innerHTML,t.innerHTML=s[0],t.style.visibility="visible",t.countUpTimeout=setTimeout(function e(){t.innerHTML=s.shift(),s.length?(clearTimeout(t.countUpTimeout),t.countUpTimeout=setTimeout(e,c)):t._countUpOrigInnerHTML=void 0},c)}}else r(t)};var r=function(t){clearTimeout(t.countUpTimeout),t._countUpOrigInnerHTML&&(t.innerHTML=t._countUpOrigInnerHTML,t._countUpOrigInnerHTML=void 0),t.style.visibility=""},o=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?1e3:n,o=e.delay,i=void 0===o?16:o,u=e.lang,l=void 0===u?void 0:u,a=r/i,c=t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),d=[],f=0;f<a;f++)d.push("");for(var s=0;s<c.length;s++)if(/([0-9.][,.0-9]*[0-9]*)/.test(c[s])&&!/<[^>]+>/.test(c[s])){var p=c[s],v=/[0-9]+,[0-9]+/.test(p);p=p.replace(/,/g,"");for(var g=/^[0-9]+\.[0-9]+$/.test(p),y=g?(p.split(".")[1]||[]).length:0,b=d.length-1,m=a;m>=1;m--){var T=parseInt(p/a*m,10);g&&(T=parseFloat(p/a*m).toFixed(y),T=parseFloat(T).toLocaleString(l)),v&&(T=T.toLocaleString(l)),d[b--]+=T}}else for(var M=0;M<a;M++)d[M]+=c[s];return d[d.length]=t.toString(),d},i=function(t){return/[0-9]+,[0-9]+/.test(t)},u=function(t){return/^[0-9]+\.[0-9]+$/.test(t)},l=function(t){return u(t)?(t.split(".")[1]||[]).length:0}}])});
</script>


<div id="sub" class="prm_page event-view fixed">

    <div class="sec section1">
        <div class="inner">
            <!-- <img src="images/workskill_01.jpg" class="pc-img">
            <img src="images/mo_workskill_01.jpg" class="mo-img"> -->
        </div>
    </div>

    <div class="sec section2">
        <div class="inner">
            <img src="images/workskill_02.jpg" class="pc-img">
            <img src="images/mo_workskill_02.jpg" class="mo-img">

        </div>
    </div>

    <div class="sec section3">
        <div class="inner">
            <img src="images/workskill_03.jpg" class="pc-img">
            <img src="images/mo_workskill_03.jpg" class="mo-img">

        </div>
    </div>

    <div class="sec section4"><!--커리큘럼영상-->
        <div class="inner">
            <img src="images/workskill_04.jpg" class="pc-img">
            <img src="images/mo_workskill_04.jpg" class="mo-img">
            <div class="videa_area1">
                <a href="#" class="videoPlayIcon video_area1" class="link1" data-code="Ms5O14rZJAw"><img src="<?=YoutubeThumbRemote('Ms5O14rZJAw')?>" /></a>
            </div>
            <div class="t-img">
                <img src="images/jang.png" alt="">

            </div>
        </div>
    </div>

    <div class="sec section5"><!--숫자 카운트 스크립트 2곳 / 1일1제 가기 링크--><!--링크 3개-->
        <div class="inner">
            <img src="images/workskill_05.jpg" class="pc-img">
            <img src="images/mo_workskill_05.jpg" class="mo-img">
            <div class="num_area pretendard">
            <!-- 숫자 인덱스	 -->
                <div class="num-container" id="num-container">
                    <div class="num-item pleft">
                        <span class="nums counter" data-count="">516</span>
                    </div>
                    <div class="num-item pright">
                        <span class="nums counter" data-count=""><?php echo number_format("1102785");?></span>
                    </div>

                </div>
            </div>
            
            <a href="https://www.youtube.com/playlist?list=PL7OJBXEPc93m7BEv_YarJFyfM191D38R9" class="link1" target="_blank">실무종합 1일 1제 바로가기</a>

        </div>
    </div>

    <div class="sec section6">
        <div class="inner">
            <img src="images/workskill_06.jpg" class="pc-img">
            <img src="images/mo_workskill_06.jpg" class="mo-img">
            <a href="/police/professor/main/60#CurriculumWrap" class="link1">장정훈 교수홈 바로가기</a>
            <a href="https://cafe.daum.net/tntpolice" class="link2" target="_blank">장정훈 교수 공식카페 바로가기</a>
            <a href="https://open.kakao.com/o/gIFxCgJf" class="link3" target="_blank">실무종합 ox복습 오픈채팅방 바로가기</a>
        </div>
    </div>

    <div class="sec section7"><!--기대평 EVENT-->
        <div class="inner">
            <img src="images/workskill_07.jpg" class="pc-img">
            <img src="images/mo_workskill_07.jpg" class="mo-img">
        </div>
    </div>

    <?php include_once "template/cheerUp.php"; ?>

    <div class="sec section11"><!--유의사항-->
        <div class="inner">
            <ul class="noticeList Pretendard">
                <li>
                    <span class="s_tit">기대평 EVENT 유의사항</span>
                    <ul class="mt10">
                        <li class="fw800 xi-icon"> 사은품 안내:
                            <ul class="grade ml10 mb20">
                                <li>1등(2명): 스타벅스 e카드 3만원 교환권</li>
                                <li>2등(3명): B.B.Q 치킨 쿠폰</li>
                                <li>3등(10명): 스타벅스 아메리카노 쿠폰</li>
                            </ul>
                        </li>
                        <li class="xi-icon"> 사은품은 내부 사정에 의해 변경될 수 있습니다.</li>
                        <li class="xi-icon"> 2/16(금) 24시까지 입력된 건에 한해 인정됩니다. 사은품은 가입 시 입력하신 휴대폰 번호로 2/29(목) 개별 문자 발송 예정입니다.</li>
                        <li class="xi-icon"> 타인을 비방하거나 욕설하는 내용이 작성된 경우 별도 통보 없이 삭제 처리됩니다.</li>
                        <li class="xi-icon"> 작성해주신 게시글은 마케팅 자료로 사용될 수 있습니다.</li>
                        <li class="xi-icon"> 타인의 게시글을 복사하여 입력하는 경우 지급 대상에서 제외 됩니다.</li>
                        <li class="xi-icon"> 본 이벤트는 조기 종료될 수 있습니다.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</div>
<!--//231117-->


<script type="text/javascript">

    jQuery(document).ready(function($){
        
        // var counterUp = window.counterUp["default"];
        // var $counters = $(".counter");

        // $counters.each(function (ignore, counter) {
		// 	var waypoint = new Waypoint( {
		// 		element: $(this),
		// 		handler: function() { 
		// 			counterUp(counter, {
		// 				duration: 3000,
		// 				delay: 20
		// 			}); 
		// 			this.destroy();
		// 		},
		// 		offset: 'bottom-in-view',
		// 	} );
		// });

    });

    //const countUp = new CountUp('count1', 989);
    $('.counter').counterUp({
        delay: 80,
        time : 4000,
        beginAt: 100,
        //offset : 200
    });

    //CommonMJ.click2Youtube.call(jQuery('.pc_only .videoPlayIcon'));
    CommonMJ.click2Youtube.call(jQuery('.videoPlayIcon'));

    <?php if (isWWW()) : ?>
        window.onload = function() {
            <?php if (MobileCheck()) { ?>
                CommonMJ.scrollTo('.section1');
            <?php } else { ?>
                if (document.location.hash) { CommonMJ.scrollTo('.' + document.location.hash.substr(1)); }
                else                        { CommonMJ.scrollTo('.section1', 60); }
            <?php } ?>
        }
    <?php endif; ?>

</script>

<?php 

//include_once "{$GLOBALS['INC_SITE']}/ADMIN_CTRL.inc"; ?>

<?php $ADMPREFIX = 'https://admin.miraeij.com/admin'; ?>
<?php $GLOBALS['ADM_MENU'][] = "<li><a href=\"{$ADMPREFIX}/event/applyList/?applyCode={$applyCode}\" class=\"menu\" target=\"_blank\">소문내기</a></li>"; ?>

<?php include_once getSitePath('footer.php'); ?>

