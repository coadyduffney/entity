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

// Form Submit
$('#application-form').on('submit', function(e) {
  e.preventDefault();
  const webhook_url =
    'https://discordapp.com/api/webhooks/493794019386720256/hItRwV3lcDQ-eEn5c7M0hJMqso0torKLfth_pYbIYuwWfQ_Kue37khHvgV8-0cV73ZT7';

  // Get Form Values
  const app = {
    charName: $('#charName').val(),
    class: $('#class').val(),
    main_spec: $('#main-spec').val(),
    off_spec: $('#off-spec').val(),
    armory: $('#armory').val(),
    prev_guild: $('#prev-guild').val(),
    prev_exp: $('#prev-exp').val(),
    logs: $('#logs').val(),
    about: $('#about-yourself').val(),
    btag: $('#btag').val(),
    referal: $('#referal').val(),
    vouch: $('#vouch').val()
  };
  console.log(app);

  // Send POST request to discord webhook
  $.ajax({
    type: 'POST',
    // The webhook URL.
    url: webhook_url,
    // Message data.
    data: JSON.stringify({
      // The username to be displayed.
      username: 'Entity Applictions',
      // The avatar to be displayed.
      avatar_url:
        'https://github.com/coadyduffney/entity/blob/master/img/entity-logo.PNG?raw=true',
      // Contents of the message to be sent.
      content: 'NEW GUILD APPLICATION <@&159326941025927168>',
      // Embeds to be sent.
      embeds: [
        {
          // Embed title - link on 2nd row.
          title: app.armory,
          // Embed description - text on 3rd row.
          description: app.about,
          // Decimal number colour of the side of the embed.
          color: 2989885,
          // Embed author - icon next to text at top (text is a link).
          author: {
            name: app.charName,
            icon_url:
              'https://github.com/coadyduffney/snibzy-bot/blob/master/img/wow-logo.png?raw=true'
          },
          // Custom embed fields with a bold title/name, and normal content/value below title - located below description, above image.
          fields: [
            {
              name: 'Btag',
              value: `**${app.btag}**`
            },
            {
              name: 'Class',
              value: `**${app.class}**`,
              inline: true
            },
            {
              name: 'Main Spec',
              value: `**${app.main_spec}**`,
              inline: true
            },
            {
              name: 'Off Spec',
              value: `**${app.off_spec}**`,
              inline: true
            },
            {
              name: 'Prev Guild',
              value: app.prev_guild
            },
            {
              name: 'Prev Exp',
              value: app.prev_exp
            },
            {
              name: 'How did you hear about us?',
              value: app.referal
            },
            {
              name: 'Logs',
              value: app.logs
            }
          ],
          timestamp: new Date(),
          // Embed footer - icon next to text at bottom.
          footer: {
            text: 'Guild Application',
            icon_url:
              'https://github.com/coadyduffney/snibzy-bot/blob/master/img/wow-logo.png?raw=true'
          }
        }
      ]
    }),
    // Content type.
    contentType: 'application/json',
    // Success callback.
    success: function(data) {
      alert(
        'Application Submitted.\nThank you for your interest in our guild!'
      );
    },
    // Error callback.
    error: function(data) {
      alert('Error submitted application.');
      console.log(data.responseText);
    }
  });
});

// Fills form fields for quick testing
// $('#fill').on('click', function(e) {
//   $('#charName').val('Snibzy');
//   $('#class').val('Shaman');
//   $('#main-spec').val('Elemental :(');
//   $('#off-spec').val('Resto');
//   $('#armory').val('https://worldofwarcraft.com/en-us/character/zuljin/snibzy');
//   $('#prev-guild').val(
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt, adipisci eos libero excepturi sunt perspiciatis eius dicta cupiditate id.'
//   );
//   $('#prev-exp').val(
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt, adipisci eos libero excepturi sunt perspiciatis eius dicta cupiditate id. Dipisci eos libero excepturi'
//   );
//   $('#logs').val('https://www.warcraftlogs.com/character/id/7295914');
//   $('#about-yourself').val(
//     ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quae asperiores maiores excepturi soluta nihil.'
//   );
//   $('#btag').val('Snibzy#1995');
//   $('#referal').val(
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, maiores!'
//   );
//   $('#vouch').val('Nutos');
// });
