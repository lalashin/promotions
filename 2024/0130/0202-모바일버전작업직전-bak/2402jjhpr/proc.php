<?php
if (is_ajax_request()) {
    include 'config.inc';

    $op = $_POST['op'];

    $retarr = [
                 'errno'    => 1,
                 'alertmsg' => '',
              ];

    if ($op == 'register' && @$_POST['gubun'] == '소문내기' && @$_POST['contents']) {

        $now = date("YmdHis",strtotime("now"));

        $event_start = date("YmdHis", strtotime("2024-01-30 10:00:00"));
        //$event_start = date("YmdHis", strtotime("2024-02-02 10:00:00"));
        $event_end = date("YmdHis", strtotime("2024-02-16 23:59:59"));

        if ($now < $event_start) :
            $retarr['alertmsg'] = '이벤트 시작 전입니다.';
        elseif ($now > $event_end) :
            $retarr['alertmsg'] = '이벤트가 끝났습니다.';
        endif;
 
        if (strlen($retarr['alertmsg']) > 0) :

            header('Content-Type: application/json');
            echo json_encode($retarr);
            die;

        endif;

        $len = mb_strlen(preg_replace('/\s+/', '', $_POST['contents']), 'UTF-8');

        if ($len < 10) {
            $retarr['alertmsg'] = '10자 이상 작성해주세요.';

        } elseif ($loginCheck) {
            $member_id = ($adminCheck && @$_POST['member_id'] ? @$_POST['member_id'] : $_SESSION['member_id']);

            $check_data = $DB->select_common('apply_list', 
                                        'count(member_id) as cnt', 
                                        array(
                                            "applyCode" => $applyCode,
                                            'gubun'        => $_POST['gubun'],
                                            'member_fk'    => $_SESSION['member_no'],
                                            'member_id'    => $member_id,
                                        ),
                                        1
                                        )["cnt"];
            if ($check_data > 0) :
                $retarr['alertmsg'] = '이미 참여하셨습니다.';
                
            else :
                $cnt = $DB->insert_common('apply_list',
                                        [
                                            'applyCode'    => $applyCode,
                                            'gubun'        => $_POST['gubun'],
                                            'member_fk'    => $_SESSION['member_no'],
                                            'member_id'    => $member_id,
                                            'member_name'  => $_SESSION['member_name'],
                                            'member_cell'  => $_SESSION['member_cell'],
                                            'member_email' => $_SESSION['member_email'],
                                            'contents'     => $_POST['contents'],
                                        ]);
            
                if (isIDX($cnt)) {
                    $retarr['errno'] = 0;
                    $retarr['alertmsg'] = '응원글이 등록되었습니다.';
    
                } elseif (isDEV()) {
                    $retarr['alertmsg'] = $GLOBALS['connI']->error;
    
                } else {
    
                    $retarr['alertmsg'] = '요청처리중 장애가 발생했습니다.';
                }
            endif;

        } else { $retarr['errno'] = 2; }   // 로그인 필요

    // 소문내기 목록
    } elseif ($op == 'list' && @$_POST['gubun'] == '소문내기') {
        $pageInfo = [
                      'page'  => (isIDX(@$_POST['page']) ? $_POST['page'] : 1),
                      'nPage' => 10,
                      'nLine' => 10,
                    ];
        $pageInfo['sno'] = ($pageInfo['page']-1)*$pageInfo['nLine'];    // 0 부터 시작

        $where = [
                   'applyCode' => $applyCode,
                   'gubun'     => $_POST['gubun'],
                   'viewYN'     => "Y",
                 ];

        $data = $DB->select_common('apply_list', 'member_id, member_name, contents, DATE(registdate) AS regYMD', $where, "no DESC@{$pageInfo['sno']},{$pageInfo['nLine']}");
        $pageInfo['nRows'] = $DB->get_totalrows();

        $retarr['errno'] = 0;
        $retarr['listHtml'] = include 'list.inc';
        $retarr['pageHtml'] = include 'paging.inc';
        $retarr['pageInfo'] = $pageInfo;
    
    } else { show_404(); }
} else { show_404(); }

header('Content-Type: application/json');
echo json_encode($retarr);
die;

