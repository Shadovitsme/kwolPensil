$(document).ready(function () {
  // balcone
  const balconyTemplate = $("div#balcony0");
  const balconyCount = localStorage.getItem("балкон");

  for (let i = 1; i < balconyCount; i++) {
    const newBalcony = balconyTemplate.clone().attr("id", `balcony${i}`);
    const radioGroup = newBalcony
      .find("div#radioBalcony0")
      .attr("id", `radioBalcony${i}`);
    const radioInputs = radioGroup.find("input.radio");

    radioInputs.each(function (index) {
      $(this).attr("name", `howMuchVisitors${i}`);
      $(this).attr("id", `radio${index}${i}`);
      $(this).next("label").attr("for", `radio${index}${i}`);
    });

    balconyTemplate
      .parent()
      .append(`<h1 class="H1 Text mb-10 mt-10 uppercase">Балкон ${i}</h1>`)
      .append(newBalcony);
  }
});
