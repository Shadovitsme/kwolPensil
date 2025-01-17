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
  welcomeBathCount = getCookie("гостевой_санузел");

  divider = $("<hr>", { class: "bg-white my-5 max-w-[1920px]" });

  // kitchen
  for (var i = 1; i < kitchenCount; i++)
    kitchenTemplate
      .parent()
      .append(divider.clone())

      .append(kitchenTemplate.clone().attr("id", `kitchen${i}`));

  // hallway
  for (var i = 1; i < hallwayCount; i++)
    hallwayTemplate
      .parent()
      .append(divider.clone())

      .append(hallwayTemplate.clone().attr("id", `hallway${i}`));

  // childRoom
  for (var i = 1; i < childRoomCount; i++)
    childRoomTemplate
      .parent()
      .append(divider.clone())
      .append(childRoomTemplate.clone().attr("id", `childRoom${i}`));

  // welcomeRoom
  for (var i = 1; i < welcomeRoomCount; i++)
    welcomeRoomTemplate
      .parent()
      .append(divider.clone())
      .append(welcomeRoomTemplate.clone().attr("id", `welcomeRoom${i}`));

  // bedroom
  for (var i = 1; i < bedroomCount; i++)
    bedroomTemplate
      .parent()
      .append(divider.clone())
      .append(bedroomTemplate.clone().attr("id", `bedroom${i}`));

  // dressingRoom
  for (var i = 1; i < dressingRoomCount; i++)
    dressingRoomTemplate
      .parent()
      .append(divider.clone())
      .append(dressingRoomTemplate.clone().attr("id", `dressingRoom${i}`));

  // balcone
  for (var i = 1; i < balconyCount; i++) {
    balcony = balconyTemplate.clone().attr("id", `balcony${i}`);
    let arr = [];
    arr.push(
      balcony
        .children($("div#radioBalcony0").attr("id", `radioBalcony${i}`))
        .children()
        .children($("input.radio"))
    );
    arr.forEach((element) => {
      console.log(element[0]);
      element.attr("name", `howMuchVisitors${i}`);
    });
    balconyTemplate.parent().append(divider.clone()).append(balcony);
  }

  // eatingRoom
  for (var i = 1; i < eatingRoomCount; i++)
    eatingRoomTemplate
      .parent()
      .append(divider.clone())
      .append(eatingRoomTemplate.clone().attr("id", `eatingRoom${i}`));

  // sklad
  for (var i = 1; i < scladCount; i++)
    scladTemplate
      .parent()
      .append(divider.clone())
      .append(scladTemplate.clone().attr("id", `sclad${i}`));

  // bathroom
  for (var i = 1; i < bathroomCount; i++)
    bathroomTemplate
      .parent()
      .append(divider.clone())
      .append(bathroomTemplate.clone().attr("id", `bathroom${i}`));

  // office
  for (var i = 1; i < officeCount; i++)
    officeTemplate
      .parent()
      .append(divider.clone())
      .append(officeTemplate.clone().attr("id", `office${i}`));

  // welcomeBath
  for (var i = 1; i < welcomeBathCount; i++)
    welcomeBathTemplate
      .parent()
      .append(divider.clone())
      .append(welcomeBathTemplate.clone().attr("id", `welcomeBath${i}`));
});
