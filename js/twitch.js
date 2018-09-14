var streamapi = "https://wind-bow.glitch.me/twitch-api/streams/";
var channelapi = "https://wind-bow.glitch.me/twitch-api/channels/";
var channels = [
  "Snibzy",
  "rufinusb",
  "noisez",
  "czyclub",
  "stormhawkbomberdk",
  "thrabid",
  "sphankytv"
];

function allStreamCall(streamchannel) {
  var logo, name, game, status, statusdesc, channel_link;

  var streamchannel_url = streamapi + streamchannel + "?callback=?";
  var channel_url = channelapi + streamchannel + "?callback=?";

  // call streaming channels API to see if it is streaming or not and if yes then what it is streaming
  $.getJSON(streamchannel_url, function(data) {
    if (data.status == "404") {
      // if user not found
      game = data.message;
      status = "Offline";
      statusdesc = "";
    } else if (data.status == "422") {
      // if user unavailable or closed their account
      game = data.message;
      status = "Offline";
      statusdesc = "";
    } else {
      data = data.stream;
      if (data === null) {
        // user is offline
        game = "Offline";
        status = "Offline";
        statusdesc = "";
        logo =
          "http://www.gravatar.com/avatar/3c069b221c94e08e84aafdefb3228346?s=47&d=http%3A%2F%2Fwww.techrepublic.com%2Fbundles%2Ftechrepubliccore%2Fimages%2Ficons%2Fstandard%2Ficon-user-default.png";
      } else {
        game = data.channel.game;
        status = "online";
        statusdesc = " - " + data.channel.status;
      }
    }

    // call channels api to get channel informations like channel display name, logo and link url etc.
    $.getJSON(channel_url, function(data) {
      name = data.display_name;
      logo = data.logo;
      channel_link = data.url;
      if (data.status == "404") {
        // if channel not found
        name = streamchannel;
        channel_link = "#";
        logo =
          "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      } else if (data.status == "422") {
        // if channel unavailable or closed their account
        name = streamchannel;
        channel_link = "#";
        logo =
          "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      } else if (logo === null) {
        // if channel does not have a logo then show the following logo
        logo =
          "https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png";
      }

      // prepare a row for the result in html
      let new_result = `
            <a href="${channel_link}" target="_blank">

            <div class="row" id="'${status}'">

                <div class="col-md-4 col-xs-4">

                    <span class='logo'><img class='img rounded-circle' src='${logo}'></span>

                        <span class='name text-center'>${name}</span>

                </div>

                <div class='col-md-8 col-xs-8 text-center' id='statusdescription'>
                    <span class="status">${game}</span>
                    <span class="status">${statusdesc}</span>
                </div>
            </div>       
            </div></a>
        `;

      if (status == "offline") $(".res").append(new_result);
      else $(".res").prepend(new_result);
    });
  });
}

$(document).ready(function() {
  // Calling allStreamCall function on every channel
  channels.forEach(function(channel) {
    allStreamCall(channel);
  });

  // Show all channels when clicked on All button
  $("#all").click(function() {
    var all = $(".res .row");
    all.each(function(index) {
      $(this).css({ display: "block" });
    });
  });

  // Show Only online streaming channels and hide the offline ones.
  $("#online").click(function() {
    var online = $(".res .row");
    online.each(function(index) {
      var toggle = $(this).attr("id");
      if (toggle == "online") {
        $(this).css({ display: "block" });
      } else if (toggle == "offline") {
        $(this).css({ display: "none" });
      }
    });
  });

  // Show Only offline channels
  $("#offline").click(function() {
    var offline = $(".res .row");
    offline.each(function(index) {
      var toggle = $(this).attr("id");
      if (toggle == "online") {
        $(this).css({ display: "none" });
      } else if (toggle == "offline") {
        $(this).css({ display: "block" });
      }
    });
  });
});


$("#reload").click(function() {
    location.reload();
});