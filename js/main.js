$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $("#logo").css({
        "opacity": "1"
      })
    } else {
      $("#logo").css({
        "opacity": "0"
      })
    }
  })
})
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $("#logo_w").css({
        "opacity": "0"
      })
    } else {
      $("#logo_w").css({
        "opacity": "1"
      })
    }
  })
})
