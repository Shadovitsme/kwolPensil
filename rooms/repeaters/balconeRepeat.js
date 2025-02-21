$(document).ready(function () {
  // balcone
  balconyTemplate = $("div#balcony0");
  balconyCount = localStorage.getItem("балкон");
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
      element.attr("name", `howMuchVisitors${i}`);
      for (let m = 0; m < 5; m++) {
        element[m].id = `radio${m}${i}`;
        element[m + 1].setAttribute("for", `radio${m}${i}`);
        m++;
      }
    });

    balconyTemplate
      .parent()
      .append(`<h1 class="H1 Text mb-10 mt-10 uppercase">Балкон ${i}</h1>`)
      .append(balcony);
  }
});
