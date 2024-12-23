
    <div class="sec section8">
        <div class="inner">
            <img src="images/workskill_08.jpg" class="pc-img">
            <img src="images/mo_workskill_08.jpg" class="mo-img">
            <div class="linkform">
                <div class="inner nanum">
                    <input type="text" name="contents" placeholder="ex-경찰학에 이어 실무종합까지 너무 기대됩니다. 교수님 늘 감사합니다!">
                    <input type="button" value="작성 완료하기" class="jqClick regTell writeBtn"/>
                    <div class="count-text" style="display:none;">
                        <span id="textLengthCheck">0</span> /<span id="text-limit">100</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sec section9 "><!--타이틀이미지-->
        <div class="inner">
            <img src="images/workskill_09.jpg" class="pc-img">
            <img src="images/mo_workskill_09.jpg" class="mo-img">
        </div>
    </div>

    <div class="sec section10 bbs_wrap"><!--기대평 리스트-->
        <div class="inner">
            <div class="pr_board_area">

                <!--게시판-->
                <div class="board">
                    <div class="bbs bbs2 on">
                        <!--게시판리스트-->
                        <div class="list_bg">
                            <table class="list">
                                <caption>게시판 목록</caption>
                                <colgroup>
                                    <col width="80px">
                                    <col width="*">
                                    <col width="120px">
                                    <col width="140px">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>내용</th>
                                        <th>참여자</th>
                                        <th>작성일</th>
                                    </tr>
                                </thead>
                                <tbody class="listHtml">
                                    <tr>
                                        <td colspan="4" align="center">등록된 글이 없습니다.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--//게시판리스트-->
                        <!--페이징-->
                        <div class="pagenate clear pageHtml"></div>
                        <!--//페이징-->

                    </div>
                </div>
                <!--//게시판-->
            </div>

        </div>
    </div>


    <script type="text/javascript">

        function getTextLength(str) {
            var len = 0;

            for (var i = 0; i < str.length; i++) {
                if (escape(str.charAt(i)).length == 6) {
                    len++;
                }
                len++;
            }
            return len;
        }

        var text_limit = 100;
        $("#text-limit").text(text_limit);

        $("textarea[name=contents]").keyup(function(){
            var content = $(this).val();
            
            $("#textLengthCheck").text(content.length); //실시간 글자수 카운팅
            if (content.length > text_limit) {
                alert("최대 " + text_limit + "자까지 입력 가능합니다.");
                $(this).val(content.substring(0, text_limit));
                $("#textLengthCheck").text(text_limit);
            }
        });

        var _Sub = jQuery('#sub')
            .on('click', '.jqClick', function(event) { event.preventDefault(); event.stopPropagation(); var _this = jQuery(this);

                if (_this.hasClass('regTell')) {
                    var _cont = _this.closest('.sec').find('textarea[name="contents"]'),
                        data = {
                                op: 'register',
                                gubun: '소문내기',
                                contents: jQuery.trim(_cont.val()),
                            };

                    if (!data.contents.length) {
                        alert('내용을 입력해주세요.');
                        _cont.focus();

                    } else {
                        var _bbswrap = _BbsWrap;
                        CommonMJ.post({ url:'proc.php', data:data })
                            .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                                if (result.errno == 2) {
                                    alert('로그인이 필요한 서비스입니다.');
                                    location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                                } else if (result.errno == 0) {
                                    _cont.val('');
                                    _bbswrap.trigger('reload');
                                }
                            });

                    }
                }
            }),

        _BbsWrap = jQuery('.bbs_wrap')
            .on('reload', function(event, page) { event.preventDefault(); event.stopPropagation(); var _bbswrap = jQuery(this);
                var data = {
                            op: 'list',
                            gubun: '소문내기',
                            page: page || _bbswrap.data('page') || 1,
                        };

                CommonMJ.post({ url:'proc.php', data:data })
                    .done(function(result) { if (result.alertmsg || false) { alert(result.alertmsg); }

                        if (result.errno == 2) {
                                alert('로그인이 필요한 서비스입니다.');
                                location.href = '/member/login.php?url='+encodeURIComponent(location.href);

                        } else if (result.errno == 0) {
                            _bbswrap.data('page', result.pageInfo.page);

                            jQuery('.listHtml', _bbswrap).html(result.listHtml);
                            jQuery('.pageHtml', _bbswrap).html(result.pageHtml);
                        }
                    });
            })
            .on('click', '.pageHtml a', function(event) { event.preventDefault(); event.stopPropagation();
                var _this = jQuery(this),
                    _bbswrap = _this.closest('.bbs_wrap'),
                    page = parseInt(_this.data('page'), 10);

                if (!isNaN(page)) {
                    _bbswrap.trigger('reload', page);
                }
            });

        jQuery(function() {
            _BbsWrap.trigger('reload');
        });

    </script>