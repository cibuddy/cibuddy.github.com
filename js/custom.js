
$(document).ready(function(){
  setInterval('rotateImages()', 3000);
})
// swap images (build servers)
function rotateImages(){
  var $active = $('.ciRotate .active');
  var $next = ($('.ciRotate .active').next().length > 0) ? $('.ciRotate .active').next() : $('.ciRotate img:first');
  $active.fadeOut(function(){
    $active.removeClass('active').css({ "display": "none" });
    $next.fadeIn().addClass('active').css({ "display": "block" });
  });
}
// twitter button script
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");