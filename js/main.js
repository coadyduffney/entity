$(document).ready(function() {
  animateNav();
  $(window).scroll(function() {
    animateNav();
  });
});

// Transition effect for navbar
function animateNav() {
  if ($(this).scrollTop() > 500) {
    $('.navbar').addClass('solid');
    $('.navbar-brand').addClass('visible');
  } else {
    $('.navbar').removeClass('solid');
    $('.navbar-brand').removeClass('visible');
  }
}

// Initialize Lightgallery
lightGallery(document.getElementById('legion-video-gallery'), {
  thumbnail: true,
  exThumbImage: 'data-exthumbimage',
  loadYoutubeThumbnail: false
});

lightGallery(document.getElementById('uldir-video-gallery'), {
  thumbnail: true,
  exThumbImage: 'data-exthumbimage',
  loadYoutubeThumbnail: false
});

lightGallery(document.getElementById('siege-of-zuldazar-video-gallery'), {
  thumbnail: true,
  exThumbImage: 'data-exthumbimage',
  loadYoutubeThumbnail: false
});

lightGallery(document.getElementById('crucible-of-storms-video-gallery'), {
  thumbnail: true,
  exThumbImage: 'data-exthumbimage',
  loadYoutubeThumbnail: false
});

// Hide & Show video galleries
$('#uldir-link').on('click', function() {
  $('#legion-video-gallery').css('display', 'none');
  $('#legion-text').css('display', 'none');
  $('#uldir-video-gallery').css('display', 'block');
  $('#uldir-text').css('display', 'block');
  $('#siege-of-zuldazar-video-gallery').css('display', 'none');
  $('#siege-of-zuldazar-text').css('display', 'none');
  $('#crucible-of-storms-video-gallery').css('display', 'none');
  $('#crucible-of-storms-text').css('display', 'none');
});

$('#antorus-link').on('click', function() {
  $('#legion-video-gallery').css('display', 'block');
  $('#legion-text').css('display', 'block');
  $('#uldir-video-gallery').css('display', 'none');
  $('#uldir-text').css('display', 'none');
  $('#siege-of-zuldazar-video-gallery').css('display', 'none');
  $('#siege-of-zuldazar-text').css('display', 'none');
  $('#crucible-of-storms-video-gallery').css('display', 'none');
  $('#crucible-of-storms-text').css('display', 'none');
});

$('#siege-of-zuldazar-link').on('click', function() {
  $('#siege-of-zuldazar-video-gallery').css('display', 'block');
  $('#siege-of-zuldazar-text').css('display', 'block');
  $('#legion-video-gallery').css('display', 'none');
  $('#legion-text').css('display', 'none');
  $('#uldir-video-gallery').css('display', 'none');
  $('#uldir-text').css('display', 'none');
  $('#crucible-of-storms-video-gallery').css('display', 'none');
  $('#crucible-of-storms-text').css('display', 'none');
});

$('#crucible-of-storms-link').on('click', function() {
  $('#crucible-of-storms-video-gallery').css('display', 'block');
  $('#crucible-of-storms-text').css('display', 'block');
  $('#siege-of-zuldazar-video-gallery').css('display', 'none');
  $('#siege-of-zuldazar-text').css('display', 'none');
  $('#legion-video-gallery').css('display', 'none');
  $('#legion-text').css('display', 'none');
  $('#uldir-video-gallery').css('display', 'none');
  $('#uldir-text').css('display', 'none');
});

// Animate Smooth Scroll for Nav
$('#scroll-arrow, #about-link').on('click', function() {
  const about = $('#about').position().top;
  $('html, body').animate(
    {
      scrollTop: about
    },
    700
  );
});

$('#video-link').on('click', function() {
  const video = $('#videos').position().top;
  $('html, body').animate(
    {
      scrollTop: video
    },
    700
  );
});

$('#apply-link').on('click', function() {
  const apply = $('#apply').position().top;
  $('html, body').animate(
    {
      scrollTop: apply
    },
    700
  );
});

$('#home-link').on('click', function() {
  const home = $('#home').position().top;
  $('html, body').animate(
    {
      scrollTop: home
    },
    700
  );
});
