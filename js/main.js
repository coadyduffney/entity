$(document).ready(function() {
  animateNav();
  $(window).scroll(function() {
    animateNav();
  });
});

// Transition effect for navbar
function animateNav() {
  if ($(this).scrollTop() > 500) {
    $(".navbar").addClass("solid");
    $(".navbar-brand").addClass("visible");
  } else {
    $(".navbar").removeClass("solid");
    $(".navbar-brand").removeClass("visible");
  }
}

// Initialize Lightgallery
lightGallery(document.getElementById("legion-video-gallery"), {
  thumbnail: true,
  exThumbImage: "data-exthumbimage",
  loadYoutubeThumbnail: false
});

lightGallery(document.getElementById("uldir-video-gallery"), {
  thumbnail: true,
  exThumbImage: "data-exthumbimage",
  loadYoutubeThumbnail: false
});

lightGallery(document.getElementById("temp-raid-video-gallery"), {
  thumbnail: true,
  exThumbImage: "data-exthumbimage",
  loadYoutubeThumbnail: false
});

// Hide & Show video galleries
$("#uldir-link").on("click", function() {
  $("#legion-video-gallery").css("display", "none");
  $("#legion-text").css("display", "none");
  $("#uldir-video-gallery").css("display", "block");
  $("#uldir-text").css("display", "block");
  $("#temp-raid-video-gallery").css("display", "none");
  $("#temp-raid-text").css("display", "none");
});

$("#antorus-link").on("click", function() {
  $("#legion-video-gallery").css("display", "block");
  $("#legion-text").css("display", "block");
  $("#uldir-video-gallery").css("display", "none");
  $("#uldir-text").css("display", "none");
  $("#temp-raid-video-gallery").css("display", "none");
  $("#temp-raid-text").css("display", "none");
});

$("#temp-raid-link").on("click", function() {
  $("#temp-raid-video-gallery").css("display", "block");
  $("#temp-raid-text").css("display", "block");
  $("#legion-video-gallery").css("display", "none");
  $("#legion-text").css("display", "none");
  $("#uldir-video-gallery").css("display", "none");
  $("#uldir-text").css("display", "none");
});




// Animate Smooth Scroll for Nav
$("#scroll-arrow, #about-link").on("click", function() {
  const about = $("#about").position().top;
  $("html, body").animate({
      scrollTop: about
    },700);
});

$("#video-link").on("click", function() {
  const video = $("#videos").position().top;
  $("html, body").animate({
      scrollTop: video
    },700);
});

$("#apply-link").on("click", function() {
  const apply = $("#apply").position().top;
  $("html, body").animate({
      scrollTop: apply
    },700);
});

$("#home-link").on("click", function() {
  const home = $("#home").position().top;
  $("html, body").animate({
      scrollTop: home
    },700);
});








