// Ваш скрипт на JavaScript
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

  // ajax page 1
  $("form#page1").on("submit", function (e) {
    e.preventDefault();
    let name = $(this)[0][0].value;
    let phone = $(this)[0][1].value;
    let town = $(this)[0][2].value;
    let userArray;
    let sawYouBefore;

    if ((name, phone, town)) {
      // get all user data and find number
      $.ajax({
        url: "https://karandash.pro/brief/userResult.php",
        type: "GET",
      })
        .then(function (data) {
          userArray = Object.values(JSON.parse(data));
          if (userArray.find((element) => element["Phone"] == phone)) {
            sawYouBefore = true;
          } else {
            sawYouBefore = false;
          }
          return sawYouBefore;
        })
        .done((sawYouBefore) => {
          if (sawYouBefore) {
            alert("kogo i see");
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
                window.location.replace("./secondPage.html");
              },
            });
          }
        });
    } else {
      alert("Не все поля заполнены!!!");
    }
  });
  // ajax page2
  $("form#page2").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let familyMembers = $(this)[0][0].value; // предотвращаем стандартное поведение формы
    let pets = $(this)[0][1].value;
    let soundless = $(this)[0][2].checked;
    let furniture = $(this)[0][4].checked;
    let hobby;
    let ID = getCookie("userId");

    if (!$(this)[0][6].checked) {
      hobby = $(this)[0][6].value;
    } else {
      hobby = "0";
    }
    let replane = $(this)[0][7].checked;
    let visitors;
    if ($(this)[0][9].checked) {
      visitors = $(this)[0][9].value;
    } else if ($(this)[0][10].checked) {
      visitors = $(this)[0][10].value;
    } else {
      visitors = $(this)[0][11].value;
    }

    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addCommonData",
        userId: ID,
        familyMembers: familyMembers,
        pets: pets,
        soundless: soundless,
        furniture: furniture,
        hobby: hobby,
        replane: replane,
        visitors: visitors,
        actvitySphere: null,
        area: null,
        zones: null,
        workPlaces: null,
      },

      success: function (data) {
        console.log(data);
        window.location.replace("./thirdPage.html");
      },
    });
  });

  // ajax page3
  $("form#page3").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let ID = getCookie("userId");
    let hallway = $(this)[0][1].value;
    let childRoom = $(this)[0][4].value;
    let kitchen = $(this)[0][7].value;
    let welcomeroom = $(this)[0][10].value;
    let bedroom = $(this)[0][13].value;
    let clotheRoom = $(this)[0][16].value;
    let balcone = $(this)[0][19].value;
    let dinnerRoom = $(this)[0][22].value;
    let storageRoom = $(this)[0][25].value;
    let bathroom = $(this)[0][28].value;
    let cabinet = $(this)[0][31].value;
    let welcomeBathroom = $(this)[0][34].value;
    let otherRooms = $(this)[0][36].value;
    if (
      (hallway !== null &&
        hallway !== undefined &&
        hallway !== "" &&
        hallway !== "0") ||
      (childRoom !== null &&
        childRoom !== undefined &&
        childRoom !== "" &&
        childRoom !== "0") ||
      (kitchen !== null &&
        kitchen !== undefined &&
        kitchen !== "" &&
        kitchen !== "0") ||
      (welcomeroom !== null &&
        welcomeroom !== undefined &&
        welcomeroom !== "" &&
        welcomeroom !== "0") ||
      (bedroom !== null &&
        bedroom !== undefined &&
        bedroom !== "" &&
        bedroom !== "0") ||
      (clotheRoom !== null &&
        clotheRoom !== undefined &&
        clotheRoom !== "" &&
        clotheRoom !== "0") ||
      (balcone !== null &&
        balcone !== undefined &&
        balcone !== "" &&
        balcone !== "0") ||
      (dinnerRoom !== null &&
        dinnerRoom !== undefined &&
        dinnerRoom !== "" &&
        dinnerRoom !== "0") ||
      (storageRoom !== null &&
        storageRoom !== undefined &&
        storageRoom !== "" &&
        storageRoom !== "0") ||
      (bathroom !== null &&
        bathroom !== undefined &&
        bathroom !== "" &&
        bathroom !== "0") ||
      (cabinet !== null &&
        cabinet !== undefined &&
        cabinet !== "" &&
        cabinet !== "0") ||
      (welcomeBathroom !== null &&
        welcomeBathroom !== undefined &&
        welcomeBathroom !== "" &&
        welcomeBathroom !== "0") ||
      (otherRooms !== null &&
        otherRooms !== undefined &&
        otherRooms !== "" &&
        otherRooms !== "0")
    ) {
      $.ajax({
        url: "save_data.php",
        type: "POST",
        data: {
          funk: "addRoomCount",
          userId: ID,
          прихожая: hallway,
          детская: childRoom,
          кухня: kitchen,
          гостиная: welcomeroom,
          спальня: bedroom,
          гардеробная: clotheRoom,
          балкон: balcone,
          столовая: dinnerRoom,
          кладовая: storageRoom,
          Санузел: bathroom,
          кабинет: cabinet,
          гостевой_санузел: welcomeBathroom,
          другое: otherRooms,
        },
        success: function (data) {
          window.location.replace("./wishesPage.html");
        },
      });
    } else {
      showErrorMessage();
    }
  });

  function showErrorMessage() {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.classList.remove("hidden");

    // Hide the error message after 3 seconds
    setTimeout(function () {
      errorMessage.classList.add("hidden");
    }, 3000);
  }

  $("form#wishPage").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let light = $(this)[0][0].value;
    let condicioner = $(this)[0][1].value;
    let warmFloor = $(this)[0][2].value;
    let style = $(this)[0][3].value;
    let ceiling = $(this)[0][4].value;
    let wannaSee = $(this)[0][5].value;
    let floor = $(this)[0][6].value;
    let dontWannaSee = $(this)[0][7].value;
    let additional = $(this)[0][8].value;
    let deadline = $(this)[0][9].value;
    let ID = getCookie("userId");

    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addWishes",
        userId: ID,
        light: light,
        condicioner: condicioner,
        warmFloor: warmFloor,
        style: style,
        ceiling: ceiling,
        wannaSee: wannaSee,
        additional: additional,
        deadline: deadline,
        floor: floor,
        dontWannaSee: dontWannaSee,
      },

      success: function (data) {
        if (getCookie("прихожая")) {
          window.location.replace("./rooms/hallWay.html");
        } else if (getCookie("детская")) {
          window.location.replace("./rooms/childRoom.html");
        } else if (getCookie("кухня")) {
          window.location.replace("./rooms/kitchen.html");
        } else if (getCookie("гостиная")) {
          window.location.replace("./rooms/welcomeRoom.html");
        } else if (getCookie("спальня")) {
          window.location.replace("./rooms/bedroom.html");
        } else if (getCookie("гардеробная")) {
          window.location.replace("./rooms/dressingRoom.html");
        } else if (getCookie("балкон")) {
          window.location.replace("./rooms/balcony.html");
        } else if (getCookie("столовая")) {
          window.location.replace("./rooms/eatingRoom.html");
        } else if (getCookie("кладовая")) {
          window.location.replace("./rooms/sclad.html");
        } else if (getCookie("Санузел")) {
          window.location.replace("./rooms/bathroom.html");
        } else if (getCookie("кабинет")) {
          window.location.replace("./rooms/office.html");
        } else if (getCookie("гостевой_санузел")) {
          window.location.replace("./rooms/welcomeBath.html");
        } else {
          window.location.replace("/");
        }
      },
    });
  });

  $("button[name='plusButton']").click(function (e) {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) + 1;
    count = count >= 5 ? 5 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $("button[name='minusButton']").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count <= 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
});
