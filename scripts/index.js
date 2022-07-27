let headerwrap = document.getElementsByClassName('header-wrap')[0]
let dom = document.getElementById("navagitor")
let main = document.getElementsByClassName("mode-main")[0]
window.onload = function(){
  dom.style.transform = 'translate3d(0, 0, 0)'
}

let currentTop = 0
window.onscroll = function(){
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  console.log(scrollTop)
  if(scrollTop<180){
    headerwrap.style.display = 'initial'
    if(180-scrollTop>80){
      dom.style.height = 180-scrollTop+'px'
    }else{
      dom.style.height = 80+'px'
    }
  }else{
    headerwrap.style.display = 'none'

    if(currentTop>scrollTop){
      headerwrap.style.display = 'initial'
      dom.style.height = 80+'px'
    }
    currentTop = scrollTop
  }
}
$(function() {
  new WOW().init();
  var $container = $('#masonry');
  $container.imagesLoaded(function() {
    $container.masonry({
      itemSelector: '.box',
      gutter: 20,
      isAnimated: true,
      columnWidth: 400
    });
   });
   $('#stage').share({sites: ['qzone', 'qq', 'weibo','wechat','facebook', 'twitter']});
});