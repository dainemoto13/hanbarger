// ハンバーガーメニュー
$('.menuWrapper').on('click', function(){
  // テキストの入れ替え
  let text = 'menu';
  if($(this).hasClass('on')){
    text = 'menu';
  }else{
    text = 'close';
  }
  $(this).toggleClass('on').find('.menuBtn').text(text);
});
$(function(){
  $('#1').on('click', function(){
    $(this).css('color', '#ff0000');
    $("#sample").text("びっくりハンバーグ");
    $("#sample2").text("チーズインハンバーグ");
    $("#sample3").text("デミグラスハンバーグ");
  });
});

$(function(){
  $('#2').on('click', function(){
    $(this).css('color', 'yellow');
    $("#sample").text("マルゲリータピザ");
    $("#sample2").text("３種のチーズピザ");
    $("#sample3").text("チキンピザ");
  });
});

$(function(){
  $('#3').on('click', function(){
    $(this).css('color', 'blue');
    $("#sample").text("コーラ");
    $("#sample2").text("スプライト");
    $("#sample3").text("水");
  });
});
