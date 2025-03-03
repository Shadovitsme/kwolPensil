$(document).ready(function () {
  kitchenTemplate = $("div#kitchen0");
  kitchenCount = localStorage.getItem("кухня");

  hallwayTemplate = $("div#hallway0");
  hallwayCount = localStorage.getItem("прихожая");

  childRoomTemplate = $("div#childRoom0");
  childRoomCount = localStorage.getItem("детская");

  welcomeRoomTemplate = $("div#welcomeRoom0");
  welcomeRoomCount = localStorage.getItem("гостиная");

  bedroomTemplate = $("div#bedroom0");
  bedroomCount = localStorage.getItem("спальня");

  dressingRoomTemplate = $("div#dressingRoom0");
  dressingRoomCount = localStorage.getItem("гардеробная");

  balconyTemplate = $("div#balcony0");
  balconyCount = localStorage.getItem("балкон");

  eatingRoomTemplate = $("div#eatingRoom0");
  eatingRoomCount = localStorage.getItem("столовая");

  scladTemplate = $("div#sclad0");
  scladCount = localStorage.getItem("кладовая");

  bathroomTemplate = $("div#bathroom0");
  bathroomCount = localStorage.getItem("Санузел");

  officeTemplate = $("div#office0");
  officeCount = localStorage.getItem("кабинет");

  welcomeBathTemplate = $("div#welcomeBath0");
  welcomeBathCount = localStorage.getItem("гостевой санузел");

  divider = $("<hr>", {
    class: "bg-white mt-[64px] mb-[96px] w-full max-w-[1720px]",
  });

  // kitchen
  for (var i = 1; i < kitchenCount; i++)
    kitchenTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Кухня ${i + 1}</h1>`)

      .append(kitchenTemplate.clone().attr("id", `kitchen${i}`));

  // hallway
  for (var i = 1; i < hallwayCount; i++) {
    hallwayTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Прихожая ${i + 1}</h1>`)
      .append(hallwayTemplate.clone().attr("id", `hallway${i}`));
  }

  // childRoom
  for (var i = 1; i < childRoomCount; i++)
    childRoomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Детская ${i + 1}</h1>`)

      .append(childRoomTemplate.clone().attr("id", `childRoom${i}`));

  // welcomeRoom
  for (var i = 1; i < welcomeRoomCount; i++)
    welcomeRoomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Гостиная ${i + 1}</h1>`)

      .append(welcomeRoomTemplate.clone().attr("id", `welcomeRoom${i}`));

  // bedroom
  for (var i = 1; i < bedroomCount; i++)
    bedroomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Спальня ${i + 1}</h1>`)

      .append(bedroomTemplate.clone().attr("id", `bedroom${i}`));

  // dressingRoom
  for (var i = 1; i < dressingRoomCount; i++)
    dressingRoomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Гардеробная ${i + 1}</h1>`)

      .append(dressingRoomTemplate.clone().attr("id", `dressingRoom${i}`));

  // eatingRoom

  for (var i = 1; i < eatingRoomCount; i++) {
    eatingRoomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Столовая ${i + 1}</h1>`)
      .append(eatingRoomTemplate.clone().attr("id", `eatingRoom${i}`));
  }

  // sklad
  for (var i = 1; i < scladCount; i++)
    scladTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Кладовая ${i + 1}</h1>`)

      .append(scladTemplate.clone().attr("id", `sclad${i}`));

  // bathroom
  for (var i = 1; i < bathroomCount; i++)
    bathroomTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Санузел ${i + 1}</h1>`)

      .append(bathroomTemplate.clone().attr("id", `bathroom${i}`));

  // office
  for (var i = 1; i < officeCount; i++)
    officeTemplate
      .parent()
      .append(divider.clone())
      .append(`<h1 class="H1 Text mb-10 uppercase">Кабинет ${i + 1}</h1>`)

      .append(officeTemplate.clone().attr("id", `office${i}`));

  // welcomeBath
  for (var i = 1; i < welcomeBathCount; i++)
    welcomeBathTemplate
      .parent()
      .append(divider.clone())
      .append(
        `<h1 class="H1 Text mb-10 uppercase">Гостевой санузел ${i + 1}</h1>`
      )

      .append(welcomeBathTemplate.clone().attr("id", `welcomeBath${i}`));
});
