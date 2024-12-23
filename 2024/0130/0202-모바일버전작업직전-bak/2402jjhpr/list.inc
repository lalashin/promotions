<?php
    CommonCaptureLog(true);
?>
    <?php if (@$data && count($data)) { ?>
    <?php   $eno = $pageInfo['nRows'] - $pageInfo['sno']; ?>
        <?php foreach ($data as $k => $v) { ?>
        <tr>
            <td class="no"><?=($eno-$k)?></td>
            <td class="title txt_l"><?=$v['contents']?></td>
            <td class="name"><?=substr($v['member_id'], 0, -3)?>***</td>
            <td class="date"><?=$v['regYMD']?></td>
        </tr>
        <?php } ?>
    <?php } else { ?>
        <tr>
            <td colspan="4">등록된 글이 없습니다.</td>
        </tr>
    <?php } ?>

<?php
    return CommonCaptureLog();