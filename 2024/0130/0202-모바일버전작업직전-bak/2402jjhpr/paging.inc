<?php
    // $pageInfo : page, nPage, nLine, nRows

    $pageInfo['maxPage'] = ceil($pageInfo['nRows']/$pageInfo['nLine']);

    $sPage = getPageSno($pageInfo['page'], $pageInfo['nPage'], 1);
    $ePage = getPageEno($pageInfo['page'], $pageInfo['nPage'], $pageInfo['maxPage']);

    $pPage = getPagePno($pageInfo['page'], $pageInfo['nPage'], 1);
    $nPage = getPageNno($pageInfo['page'], $pageInfo['nPage'], $pageInfo['maxPage']);

    CommonCaptureLog(true);
?>
<ul class="paging clear">

<?php if ($pageInfo['maxPage'] > 0) : ?>

    <?php if ($sPage > 1) : ?>
    <li><a href="#" data-page="1" class="board first" style="padding:0;"><span class="material-icons">first_page</span></a></li>
    <li class="prev_btn pager_btn"><a href="#" data-page="<?=$pPage?>" class="board prev" style="padding:0;"><span class="material-icons">arrow_back_ios</span></a></li>
    <?php endif; ?>

    <?php for ($p = $sPage; $p <= $ePage; $p++) : ?>
    <li class="num"><a href="#" data-page="<?=$p?>" class="<?=($p == $pageInfo['page'] ? 'current' : '')?>"><?=$p?></a></li>
    <?php endfor; ?>

    <?php if ($ePage < $pageInfo['maxPage']) : ?>
        <li class="next_btn pager_btn"><a href="#" data-page="<?=$nPage?>" class="board next" style="padding:0;"><span class="material-icons">arrow_forward_ios</span></a></li>
        <li><a href="#" data-page="<?=$pageInfo['maxPage']?>" class="board last" style="padding:0;"><span class="material-icons">last_page</span></a></li>
    <?php endif; ?>

<?php else : ?>
    <li class="num"><a href="#" data-page="1" class="current">1</a></li>
<?php endif; ?>

</ul>
<?php
    return CommonCaptureLog();

