$(document).ready(function () {
  // ajax page 1
  $("input").attr("maxlength", 50);
  $("textarea").attr("maxlength", 800);
  localStorage.clear();

  const defaultStyle = "mb-6 input";
  const errorStyle = "inputError mb-6 ";

  $("form#page1").on("submit", function (e) {
    e.preventDefault();
    let name = $(this)[0][0].value;
    let phone = $(this)[0][1].value;
    let town = $(this)[0][2].value;

    if (!(name, phone, town) || phone.length < 11) {
      if (!name) {
        $(this[0]).addClass(errorStyle).removeClass(defaultStyle);
      } else {
        $(this[0]).addClass(defaultStyle).removeClass(errorStyle);
      }
      if (!town) {
        $(this[2]).addClass(errorStyle).removeClass(defaultStyle);
      } else {
        $(this[2]).addClass(defaultStyle).removeClass(errorStyle);
      }
      if (phone.length < 11) {
        $(this[1]).addClass(errorStyle).removeClass(defaultStyle);
      } else {
        $(this[1]).addClass(defaultStyle).removeClass(errorStyle);
      }
    } else {
      $(this[0]).addClass(defaultStyle).removeClass(errorStyle);
      $(this[1]).addClass(defaultStyle).removeClass(errorStyle);
      $(this[2]).addClass(defaultStyle).removeClass(errorStyle);

      $.ajax({
        url: "sawYouBefore.php",
        data: { phone: phone },
        type: "GET",
      })
        .then(function (data) {
          let userArray = Object.values(JSON.parse(data));
          let sawYouBefore = userArray[0]["Phone"] == phone;
          sawYouBefore ? addToLocalStorage(userArray[0]) : "";
          return sawYouBefore;
        })
        .done((sawYouBefore) => {
          if (sawYouBefore) {
          } else {
            $.ajax({
              url: "save_data.php",
              type: "POST",
              data: {
                funk: "addNamePhone",
                name: name,
                phone: phone,
                town: town,
              },
              success: function (data) {
                console.log(data);
                localStorage.setItem("userId", data);
                window.location.replace("./secondPage.html");
              },
            });
          }
        });
    }
  });
});

function addToLocalStorage(userData) {
  localStorage.setItem("userId", userData["Id"]);
  localStorage.setItem("pets", userData["Pets"]);
  localStorage.setItem("familyMembers", userData["familyMembers"]);
  localStorage.setItem("furniture", userData["furniture"]);
  localStorage.setItem("hobby", userData["hobbyDescription"]);
  localStorage.setItem("replan", userData["replan"]);
  localStorage.setItem("soundless", userData["soundless"]);
  localStorage.setItem("visitors", userData["visitors"]);

  if (userData["rooms"] && Array.isArray(userData["rooms"])) {
    userData["rooms"].forEach((element) => {
      localStorage.setItem(element["room"], element["count"]);
    });
  }

  if (
    userData["wishes"] &&
    Array.isArray(userData["wishes"]) &&
    userData["wishes"][0]
  ) {
    Object.keys(userData["wishes"][0]).forEach((key) => {
      if (!Number(key) && Number(key) != 0) {
        localStorage.setItem(key, userData["wishes"][0][key]);
      }
    });
  }

  if (userData["detailRoom"] && Array.isArray(userData["detailRoom"])) {
    userData["detailRoom"].forEach((element) => {
      localStorage.setItem(
        element["room"] + element["property"],
        element["description"]
      );
    });
  }

  console.log("a");
  window.location.replace([userData["location"]]);
}
