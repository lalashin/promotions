<!--교재선택 팝업-->
<div class="popup pop_transfer4" data-gubun="주소팝업" style="display:block;">
    <div class="size">
        <div class="pop_wrap">
            <div class="tit_wrap">
                <p class="fw500">
                    헌법 기본서 증정 Event
                </p>
                <a href="#" class="popClick pop_closebtn"><img src="/img/icon_close.png"></a>
            </div>
            <div class="desc_wrap clear">
                <div class="top" style="font-size:1.6rem">
                   여러분의 도전을 응원하는 마음으로 준비했습니다.
                   <span style="color:#ff3838; font-size:1.4rem; display: block;">* 필수항목입니다.</span>
                </div>
                <div class="btm">
                  
                    <div class="clear">
                        <b class="fw500"><spna class="clr_rd">*</spna> 이름</b>
                        <div class="fw400 fon1_8">
                            <div class="fw400 fon1_8">
                                <input type="text" name="name" value="<?php echo $_SESSION["member_name"];?>" class="inid br4 cert-data">
                            </div>
                        </div>
                    </div>
                    <div class="clear">
                        <b class="fw500"><spna class="clr_rd">*</spna> 연락처</b>
                        <div class="fw400 fon1_8">
                            <div class="fw400 fon1_8">
                                <input type="text" name="tel" value="<?php echo $_SESSION["member_cell"];?>" class="inid br4 cert-data">
                            </div>
                        </div>
                    </div>

                    <div class="clear">
                        <b class="fw500"><spna class="clr_rd">*</spna> 배송받을 주소를 입력해 주세요.</b>
                        <div class="fw400 fon1_8" style="width:100%;">
                            <div class="fw400 fon1_8">
                                <p class="fw400">주소</p>
                                <input type="text" name="zipcode" value="<?php echo $user_info["zipcode"]?>" class="max150  cert-data" style=" margin-right:2px; border-radius: 4px;" readonly="true"><button class="btn search-address">주소 검색</button>
                                <p class="fw400">상세주소1</p>
                                <input type="text" name="addr0" value="<?php echo $user_info["addr0"]?>" class="inid2 br4 cert-data" readonly="true">
                                <p class="fw400">상세주소2</p>
                                <input type="text" name="addr1" value="<?php echo $user_info["addr1"]?>" class="inid2 br4 cert-data">
                            </div>
                        </div>
                    </div>
                    <div class="clear">
                        <b class="fw500">배송 메모</b>
                        <div class="fw400 fon1_8">
                            <div class="fw400 fon1_8">
                                <input type="text" name="memo" value="" class="inid2 br4 cert-data">
                            </div>
                        </div>
                    </div>

                    <div class="group" style="border-bottom: 1px solid rgba(204, 204, 204, 0.5);">                      
                        <em class="clr_rd fw700">※ 배송비의 경우 본인 부담이며 실 결제 시 배송비 3,500원이 같이 결제됩니다. </em>
                        <em class="fw700 only-teacher2">※ 강성민 교수님 기본서 교재의 경우 4월 8일(월) 출간 예정으로 출간 즉시 발송될 예정입니다. </em>
                        ※ 준비된 교재 소진 시 조기 마감될 수 있습니다.<br>
                        ※ 배송지 정보 오류로 인한 재발송은 불가합니다.<br>
                        ※ 환불 시 이벤트 교재 비용이 차감되어 환불 처리됩니다.                        
                    </div>
                    
                </div>
            </div>
            <div class="btn_box">
                <a href="#" class="btn popClick pass-register">이벤트 신청하기</a>
               
            </div>
        </div>
    </div>
</div>
<!--//현직경찰 인증팝업-->