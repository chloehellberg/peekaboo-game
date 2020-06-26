$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });


  $(".fading").click(function() {
    $("h1").fadeOut();
  });

});