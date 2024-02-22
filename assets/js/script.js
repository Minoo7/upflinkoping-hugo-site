$(document).ready(function () {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        700
      );
    event.preventDefault();
  });

  activeOpacityListener(".site-board-member");
  // activeOpacityListener(".site-testimonial-item");

  $(".gallery-link").on("click", function () {
    $(this).find(".gallery").magnificPopup("open");
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    preload: [1, 2],
    closeOnContentClick: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
    callbacks: {
      lazyLoad: function (item) {
        console.log(item); // Magnific Popup data object that should be loaded
      },
      close: function () {
        //var magnificPopup = $.magnificPopup.instance;
        //$("#first").attr("href", magnificPopup.currItem.src)
        //$("#first").attr("data-source", magnificPopup.currItem.src)
        //$("#first img").attr("src", magnificPopup.currItem.src);
        //magnificPopup.index = 2;
      },
    },
  });

  // var container = $(".site-portfolio-item");
  // var content_height = container
    // .children(".site-portfolio-item-content")
    // .outerHeight();
  // var container_height = container.height();
  // for (var svg of document.querySelectorAll(".site-portfolio-item-thumb--svg svg")) {
    // var svg_height = svg.getBoundingClientRect().height;
    // var oldY = (container_height / 2) - (svg_height / 2);
    // var newY = (container_height - content_height) / 2 - (svg_height / 2);
    // svg.style.top = - (oldY-newY) + "px";
  // }

  // $(".card-container")
  // $( ".card-container" ).each(function( index ) {
    // // alert($( this ).text());
    // $(this).children(".card-body").height())
  // });

  // console.log($(".card-container"))


});

var height = $(".card-body").outerHeight();
$(".card-body").css("bottom", -height);
$(".card-container").css("padding-bottom", height);


function activeOpacityListener(item) {
  $(item).on("mouseenter", function () {
    $(item).addClass("inactive");
    $(this).removeClass("inactive").addClass("active");
  });
  $(item).on("mouseleave", function () {
    $(item).removeClass("inactive");
    $(item).removeClass("active");
  });
}

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".site-navigation").addClass("nav-bg");
  } else {
    $(".site-navigation").removeClass("nav-bg");
  }
});
