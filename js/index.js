var $sliderImg = $('#js-slider-img');
var $sliderBtn = $('#js-slider-btn');
var $sliderShadow = $('#js-slider-shadow');

var $music = $('#js-music')[0];
var $musicList = $('#js-music').find('source');
var $musicPre = $('#js-music-pre');
var $musicStart = $('#js-music-start');
var $musicNext = $('#js-music-next');

var $sidebarHeader = $('.sidebar-header');
var $sidebarContent = $('.sidebar-content');

var currentSrcIndex = 0;

/* slider文字说明 */
// 鼠标移入/移出——>提示显示/消失
$sliderImg.on({
  mouseenter: function() {
    $sliderBtn.toggle(600);
  },
  mouseleave: function() {
    $sliderBtn.toggle(600);
  }
});
// 点击提示出现详情
$sliderBtn.on('click', function() {
  $sliderShadow.show(600)
                .delay(1000)
                .on('click', function() {
                  $(this).hide(600);
                });
});
/* slider文字说明 end */

/* 音乐播放功能 */
// 暂停、播放切换
$musicStart.on('click', function() {
  if ($music.paused) {
    $music.play();
    $musicStart.removeClass('music-pause');
  } else {
    $music.pause();
    $musicStart.addClass('music-pause');
  }
});
// 上一首
$musicPre.on('click', function() {
  --currentSrcIndex < 0 && (currentSrcIndex = $musicList.length - 1);
  currentSrc = $musicList.eq(currentSrcIndex).prop("src");
  $music.src = currentSrc;
  $music.play();
});
// 下一首
$musicNext.on('click', function() {
  ++currentSrcIndex > $musicList.length - 1 && (currentSrcIndex = 0);
  currentSrc = $musicList.eq(currentSrcIndex).prop("src");
  $music.src = currentSrc;
  $music.play();
});
/* 音乐播放功能 end */

/* 侧边栏 */
// 切换效果
$sidebarHeader.on('click', function() {
  $sidebarContent.toggle(600);
  $(this).toggleClass('sidebar-header-change');
});
/* 侧边栏 end */