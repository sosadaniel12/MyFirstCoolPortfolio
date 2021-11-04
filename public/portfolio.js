$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(400, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(300, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade1").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight() / 3;

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(400, 2);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(400, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade2").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight() / 4;

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(400, 2);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(400, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
