$(document).ready(function () {
  AOS.init({
    duration: 1400,
  });

  // 모바일 메뉴
  $(".mobile-sitemap-btn").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("hidden");
    $(".mobile-header .gnb").fadeToggle();
  });

  // 모바일 하위 메뉴
  $(".mobile-header .gnb .depth1 > li").first().find(".depth2").show();
  $(".mobile-header .gnb .depth1 > li button").on("click", function () {
    $(".mobile-header .gnb .depth2").hide();
    $(this).siblings(".depth2").show();
  });

  // 상담신청하기
  $(".consultation-request-btn").on("click", function () {
    $(".consultation-request").fadeIn();
  });

  $(".consultation-request .close-btn").on("click", function () {
    $(".consultation-request").fadeOut();
  });

  // 상단 이동
  $(".quick-banner button, .mobile-quick-banner .top-btn").on(
    "click",
    function () {
      $("html, body").animate({ scrollTop: 0 }, "500");
      return false;
    }
  );

  // 모바일 퀵배너
  $(".mobile-quick-banner .menu-btn").on("click", function () {
    $(".mobile-quick-banner").addClass("active");
    $(".mobile-quick-banner .menu").addClass("active");
  });

  $(".mobile-quick-banner .menu button").on("click", function () {
    $(".mobile-quick-banner").removeClass("active");
    $(".mobile-quick-banner .menu").removeClass("active");
  });

  // 자주 묻는 질문
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
