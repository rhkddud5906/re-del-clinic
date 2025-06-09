$(document).ready(function () {
  AOS.init({
    duration: 1400,
  });

  $(".mobile-sitemap-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile-header .gnb").fadeToggle();
  });

  // mobile gnb
  $(".mobile-header .gnb .depth1 > li").first().find(".depth2").show();
  $(".mobile-header .gnb .depth1 > li button").on("click", function () {
    $(".mobile-header .gnb .depth2").hide();
    $(this).siblings(".depth2").show();
  });

  // 상단 이동
  $(".top-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "500");
    return false;
  });

  $(".pages-faq ul li").on("click", function () {
    $(".pages-faq .answer").slideUp();
    $(".pages-faq ul li").removeClass("active");
    if ($(this).children(".pages-faq .answer").is(":hidden")) {
      $(this).children(".pages-faq .answer").slideDown();
      $(this).addClass("active");
    } else {
      $(this).children(".pages-faq .answer").slideUp();
      $(this).removeClass("active");
    }
  });
});
