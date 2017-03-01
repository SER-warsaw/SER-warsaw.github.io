$(document).ready(function(){

$(".inline").colorbox({inline:true, width:"50%"});

var menus = document.getElementsByClassName('mobile-toggle');

[].forEach.call(menus, function (m) {
  m.addEventListener('click', function () {
      m.classList.toggle('open');
  });
});

$('.mobile-toggle').click(function() {
    if ($('.navbar').hasClass('open-nav')) {
        $('.navbar').removeClass('open-nav');
    } else {
        $('.navbar').addClass('open-nav');
    }
});

	$('.timer').countTo();
});