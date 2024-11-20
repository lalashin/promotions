<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/include/common.php";

    include_once $_SERVER['DOCUMENT_ROOT']."/lib/siteProperty.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/lib/util/function.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/lib/util/codeUtil.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/lib/util/dateUtil.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/lib/util/page.php";

    $_SESSION['offrecruit'] = true;

    include_once $_SERVER['DOCUMENT_ROOT']."/lib/board/Common.class.php";

    $root = $_SERVER['DOCUMENT_ROOT'];
	$s = 1;
	$p = "contact";
	$sp = 2;
	$spc = 0;
    include_once "{$root}/law/header.php";
?>

<!-- 23.02.12 -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css">
<link rel="stylesheet" href="<?=getSaltUrl('css/event_t.css?')?>">
<!-- <link rel="stylesheet" href="/css/swiper.css"/>
<script type="text/javascript" src="/js/swiper.min.js"></script> -->

<!-- 22.02.13-->
<script src="include/main.js"></script>
<script type="text/javascript" src="include/slick.js"></script>
<script type="text/javascript" src="include/TweenMax.min.js"></script>


<div id="sub" class="sub">

    <input type="hidden" name="onstate" value="0" id="onstate" />

    <?php include_once "{$root}/police/include/sub_visual.php";?>

    <!-- 23.01.12 -->
    <div class="sub_wrap animate fast">
        <!-- <div class="sec_wrap"> -->
            <div class="section section0 main_visual_slide" style="background:#000;">
            <!-- 메인비주얼 23.01.13-->
                      <div class="visual_item">
                          <div class="main_movie_wrap">
                              <div class="main_movie">
                                  <div class="visual_bg bg_1" id="visual_bg">
                                      <img src="img/main_visual_bg_1.png" class="for_pc">
                                      <img src="img/main_visual_bg_1_m.png" class="for_mobile">
                                  </div>
                                  <div class="text_ani_wrap">
                                      <div class="text_ani text_ani_1" id="text_ani_1">당신은 오직 합격만 생각하십시오.</div>
                                      <div class="text_ani text_ani_2" id="text_ani_2"><img src="img/dda_1.png" alt=""/> 합격을 위한 모든 방법은 저희가 만들어내겠습니다 <img src="img/dda_2.png" alt=""/>
                                      </div>
                                      <div class="wline wline_1" id="wline_1"></div>
                                      <div class="wline wline_2" id="wline_2"></div>
                                      <div class="wline wline_3" id="wline_3"></div>
                                      <div class="wline wline_4" id="wline_4"></div>
                                  </div>
                                  <div class="vlogo_ani" id="vlogo_ani">
                                      <div class="vlogo_box"  id="vlogo_box">
                                          <div class="vlogo" id="vlogo_1"><img src="img/v_logo_5_gold.png" alt="" /></div>
                                          <div class="vlogo" id="vlogo_2"><img src="img/v_logo_1_gold.png" alt="" /></div>
                                          <div class="vlogo" id="vlogo_3"><img src="img/v_logo_2_gold.png" alt="" /></div>
                                          <div class="vlogo" id="vlogo_4"><img src="img/v_logo_3_gold.png" alt="" /></div>
                                          <div class="vlogo" id="vlogo_5"><img src="img/v_logo_4_gold.png" alt="" /></div>
                                      </div>
                                  </div>
                                  <div class="btm_text" id="btm_text">
                                    <span class="wide_sq"></span>
                                      미래인재고시학원 <strong>7급 전문팀</strong>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="visual_item">
                          <div class="main_movie_wrap">
                              <div class="main_movie movie_2">
                                  <div class="visual_bg bg_2" id="visual_bg">
                                      <img src="img/main_visual_bg_2.png" class="for_pc">
                                      <img src="img/main_visual_bg_2_m.png" class="for_mobile">
                                  </div>
                                  <div class="tit_ani_wrap">
                                      <div class="tit_1" id="">미래인재고시학원만의 <strong>차별화된 교육 서비스</strong></div>
                                      <div class="tit_2" id="">전문가의 명품 강의에서부터 프리미엄 학습관리까지<br>
                                        7급 합격에 필요한 모든 학습서비스를 제공합니다</div>
                                      <div class="tit_3">
                                        <img src="img/main_visual2_img.png" class="pc">
                                        <img src="img/main_visual2_img_m.png" class="mo">
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
              <!-- //메인비주얼 -->
            </div>
        <!-- </div> -->
            <div id="section1" class="section section1">
                <img src="img/pc_publicOff_img01.png" class="pc">
                <img src="img/mo_publicOff_img01.png" class="mo">
                <a href="#section1" class="link1"></a>
                <a href="#section4" class="link2"></a>
                <a href="#section5" class="link3"></a>
                <a href="#section6" class="link4"></a>
            </div>
            <div id="section2" class="section section2">
                <img src="img/pc_publicOff_img02.png" class="pc">
                <img src="img/mo_publicOff_img02.png" class="mo">
                <a href="https://www.miraeij.com/law/free/offline/view.php?steacher_fk=93&sstatus_free=1&no=805" class="link5"></a>
                <div class="video1">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FxlCbGDOwvc" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div id="section3" class="section section3">
                <img src="img/pc_publicOff_img03.png" class="pc">
                <img src="img/mo_publicOff_img03.png" class="mo">
            </div>
            <div id="section4" class="section section4">
                <img src="img/pc_publicOff_img04.png" class="pc">
                <img src="img/mo_publicOff_img04.png" class="mo">
                <a href="#section1" class="link1_1"></a>
                <a href="#section4" class="link2_1"></a>
                <a href="#section5" class="link3_1"></a>
                <a href="#section6" class="link4_1"></a>
            </div>
            <div id="section5" class="section section5">
                <img src="img/pc_publicOff_img05.png" class="pc">
                <img src="img/mo_publicOff_img05.png" class="mo">
                <a href="#section1" class="link1_2"></a>
                <a href="#section4" class="link2_2"></a>
                <a href="#section5" class="link3_2"></a>
                <a href="#section6" class="link4_2"></a>
            </div>
            <div id="section6" class="section section6">
                <img src="img/pc_publicOff_img06.png" class="pc">
                <img src="img/mo_publicOff_img06.png" class="mo">
                <a href="#section9" class="link1_3"></a>
                <a href="#section10" class="link2_3"></a>
                <a href="#section11" class="link3_3"></a>
                <a href="#section12" class="link4_3"></a>
            </div>
            <div id="section7" class="section section7">
                <img src="img/pc_publicOff_img07.png" class="pc">
                <img src="img/mo_publicOff_img07.png" class="mo">
                <a href="https://www.miraeij.com/law/classes/offline/synthetic/view.php?ssite_code=4&skind=4&smock=2&no=806" class="link1_4"></a>
            </div>
            <div id="section8" class="section section8">
                <img src="img/pc_publicOff_img08.png" class="pc">
                <img src="img/mo_publicOff_img08.png" class="mo">

            </div>
            <div id="section9" class="section section9">
                <img src="img/pc_publicOff_img09.png" class="pc">
                <img src="img/mo_publicOff_img09.png" class="mo">
                <a href="#section9" class="link1_5"></a>
                <a href="#section10" class="link2_5"></a>
                <a href="#section11" class="link3_5"></a>
                <a href="#section12" class="link4_5"></a>
            </div>
            <div id="section10" class="section section10">
                <img src="img/pc_publicOff_img10.png" class="pc">
                <img src="img/mo_publicOff_img10.png" class="mo">
                <a href="#section9" class="link1_6"></a>
                <a href="#section10" class="link2_6"></a>
                <a href="#section11" class="link3_6"></a>
                <a href="#section12" class="link4_6"></a>

            </div>
            <div id="section11" class="section section11">
                <img src="img/pc_publicOff_img11.png" class="pc">
                <img src="img/mo_publicOff_img11.png" class="mo">
                <a href="#section9" class="link1_7"></a>
                <a href="#section10" class="link2_7"></a>
                <a href="#section11" class="link3_7"></a>
                <a href="#section12" class="link4_7"></a>
            </div>
            <div id="section12" class="section section12">
                <img src="img/pc_publicOff_img12.png" class="pc">
                <img src="img/mo_publicOff_img12.png" class="mo">
                <a href="#section9" class="link1_8"></a>
                <a href="#section10" class="link2_8"></a>
                <a href="#section11" class="link3_8"></a>
                <a href="#section12" class="link4_8"></a>

            </div>
            <div id="section13" class="section section13">
                <img src="img/pc_publicOff_img13.png" class="pc">
                <img src="img/mo_publicOff_img13.png" class="mo">
                <a href="https://www.miraeij.com/law/classes/offline/synthetic/view.php?ssite_code=4&skind=4&smock=2&no=806" class="link1_9"></a>
            </div>
            <div id="section14" class="section section14">
                <img src="img/pc_publicOff_img14_1.png" class="pc">
                <img src="img/mo_publicOff_img14_1.png" class="mo">
            </div>
            <div id="section15" class="section section15">
                <div class="section_inner" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                    <div class="classroom_slider">
                        <div class="item"><img src="img/p_1.png" alt=""></div>
                        <div class="item"><img src="img/p_2.png" alt=""></div>
                        <div class="item"><img src="img/p_3.png" alt=""></div>
                        <div class="item"><img src="img/p_4.png" alt=""></div>
                        <div class="item"><img src="img/p_5.png" alt=""></div>
                        <div class="item"><img src="img/p_6.png" alt=""></div>
                        <div class="item"><img src="img/p_7.png" alt=""></div>
                        <div class="item"><img src="img/p_8.png" alt=""></div>
                    </div>
                    <script>
                          jQuery('.classroom_slider').slick({
                            dots: false,
                            infinite: true,
                            speed:1000,
                            slidesToShow:3,
                            slidesToScroll:1,
                            centerMode:true,
                            autoplay:true,
                            centerPadding:'0px',
                            responsive: [
                              {
                                breakpoint: 1360,
                                settings: {
                                  slidesToShow: 3,
                                  centerPadding: '0px',
                                  slidesToScroll: 1
                                }
                              },
                              {
                                breakpoint: 720,
                                settings: {
                                  slidesToShow: 2,
                                  slidesToScroll: 1
                                }
                              }
                            ]
                          });
                      </script>
                </div>


            </div>
    </div>

    <!-- 바텀배너 시작 -->
    <div class="section b_section band_banner">
        <img src="img/pc-fixed.png" alt="" class="pc">
        <img src="img/mo-fixed.png" alt="" class="mo">
        <a href="/law/classes/offline/synthetic/view.php?ssite_code=4&skind=4&smock=2&no=806" class="b_link1"></a>
        <a href="/law/free/offline/view.php?steacher_fk=93&sstatus_free=1&no=805" class="b_link2"></a>
    </div>
    <!--//바텀배너-->
</div>

<?php include_once "{$root}/law/footer.php"; ?>

