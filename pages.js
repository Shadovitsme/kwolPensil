$(document).ready(function () {
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  kitchenTemplate = $("div#kitchen0");
  kitchenCount = getCookie("кухня");

  hallwayTemplate = $("div#hallway0");
  hallwayCount = getCookie("прихожая");

  childRoomTemplate = $("div#childRoom0");
  childRoomCount = getCookie("детская");

  divider = $("<hr>", {class: "bg-white my-5"});

  // kitchen
  for (var i = 1; i < kitchenCount; i++)
    kitchenTemplate.parent().append(kitchenTemplate.clone().attr("id",`kitchen${i}`)).append(divider.clone());

  // hallway
  for (var i = 1; i < hallwayCount; i++)
    hallwayTemplate.parent().append(hallwayTemplate.clone().attr("id",`hallway${i}`)).append(divider.clone());

  // childRoom
  for (var i = 1; i < childRoomCount; i++)
    childRoomTemplate.parent().append(childRoomTemplate.clone().attr("id",`childRoom${i}`)).append(divider.clone());
});
