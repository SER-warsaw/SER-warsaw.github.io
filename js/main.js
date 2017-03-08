$(document).ready(function(){

//timeline view content 
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


$(function($){
  $.scrollTo(0);
  
  $('.link').click(function(){
  $.scrollTo($(this).attr('href'),700);
});
});

$(function() {
    var firstText = "Zwiń";
    var secText = "Rozwiń";
    $(".slide-btn").click(function(event) { 
      $('.show').slideToggle(1000);
      $('#slide-btn').fadeOut(function () {
      $('#slide-btn').text(($('#slide-btn').text() == secText) ? firstText : secText).fadeIn();
    });
  });

$(".return-btn").click(function(){
  $('.show').slideToggle(1000);
  $('#slide-btn').fadeOut(function () {
  $('#slide-btn').text(($('#slide-btn').text() == secText) ? firstText : secText).fadeIn();
    });
  });
});

$('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 500
       });

// timer from information section
	$('.timer').countTo();

});