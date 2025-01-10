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

  welcomeRoomTemplate = $("div#welcomeRoom0");
  welcomeRoomCount = getCookie("гостиная");

  bedroomTemplate = $("div#bedroom0");
  bedroomCount = getCookie("спальня");

  dressingRoomTemplate = $("div#dressingRoom0");
  dressingRoomCount = getCookie("гардеробная");

  balconyTemplate = $("div#balcony0");
  balconyCount = getCookie("балкон");

  eatingRoomTemplate = $("div#eatingRoom0");
  eatingRoomCount = getCookie("столовая");

  scladTemplate = $("div#sclad0");
  scladCount = getCookie("кладовая");

  bathroomTemplate = $("div#bathroom0");
  bathroomCount = getCookie("ванная");

  officeTemplate = $("div#office0");
  officeCount = getCookie("кабинет");

  welcomeBathTemplate = $("div#welcomeBath0");
  welcomeBathCount = getCookie("ванная");

  divider = $("<hr>", { class: "bg-white my-5" });

  // kitchen
  for (var i = 1; i < kitchenCount; i++)
    kitchenTemplate
      .parent()
      .append(kitchenTemplate.clone().attr("id", `kitchen${i}`))
      .append(divider.clone());

  // hallway
  for (var i = 1; i < hallwayCount; i++)
    hallwayTemplate
      .parent()
      .append(hallwayTemplate.clone().attr("id", `hallway${i}`))
      .append(divider.clone());

  // childRoom
  for (var i = 1; i < childRoomCount; i++)
    childRoomTemplate
      .parent()
      .append(childRoomTemplate.clone().attr("id", `childRoom${i}`))
      .append(divider.clone());

  // welcomeRoom
  for (var i = 1; i < welcomeRoomCount; i++)
    welcomeRoomTemplate
      .parent()
      .append(welcomeRoomTemplate.clone().attr("id", `welcomeRoom${i}`))
      .append(divider.clone());

  // bedroom
  // TODO понять почему на размножается
  for (var i = 1; i < bedroomCount; i++)
    bedroomTemplate
      .parent()
      .append(welcomeRoomTemplate.clone().attr("id", `bedroom${i}`))
      .append(divider.clone());

  // dressingRoom
  for (var i = 1; i < dressingRoomCount; i++)
    dressingRoomTemplate
      .parent()
      .append(dressingRoomTemplate.clone().attr("id", `dressingRoom${i}`))
      .append(divider.clone());

  // balcone
  for (var i = 1; i < balconyCount; i++)
    balconyTemplate
      .parent()
      .append(balconyTemplate.clone().attr("id", `balcony${i}`))
      .append(divider.clone());

  // eatingRoom
  for (var i = 1; i < eatingRoomCount; i++)
    eatingRoomTemplate
      .parent()
      .append(eatingRoomTemplate.clone().attr("id", `eatingRoom${i}`))
      .append(divider.clone());

  // sklad
  for (var i = 1; i < scladCount; i++)
    scladTemplate
      .parent()
      .append(scladTemplate.clone().attr("id", `sclad${i}`))
      .append(divider.clone());

  // TODO переделать это в функцию
  // bathroom
  for (var i = 1; i < bathroomCount; i++)
    bathroomTemplate
      .parent()
      .append(bathroomTemplate.clone().attr("id", `bathroom${i}`))
      .append(divider.clone());

  // office
  for (var i = 1; i < officeCount; i++)
    officeTemplate
      .parent()
      .append(officeTemplate.clone().attr("id", `office${i}`))
      .append(divider.clone());

  // welcomeBath
  for (var i = 1; i < welcomeBathCount; i++)
    welcomeBathTemplate
      .parent()
      .append(welcomeBathTemplate.clone().attr("id", `welcomeBath${i}`))
      .append(divider.clone());
});
