// Ваш скрипт на JavaScript
$(document).ready(function () {
  $("input").attr("maxlength", 50);
  $("textarea").attr("maxlength", 260);
  // ajax page2
  $("form#page2").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let familyMembers = $(this)[0][0].value;
    let pets = $(this)[0][1].value;
    let soundless = $(this)[0][2].checked;
    let furniture = $(this)[0][4].checked;
    let hobby;
    let ID = localStorage.getItem("userId");
    localStorage.setItem("familyMembers", familyMembers);
    localStorage.setItem("pets", pets);
    localStorage.setItem("soundless", soundless);
    localStorage.setItem("furniture", furniture);

    if (!$(this)[0][6].checked) {
      hobby = $(this)[0][6].value;
    } else {
      hobby = "0";
    }
    localStorage.setItem("hobby", hobby);

    let replane = $(this)[0][7].checked;
    localStorage.setItem("replane", replane);

    let visitors;
    if ($(this)[0][9].checked) {
      visitors = $(this)[0][9].value;
    } else if ($(this)[0][10].checked) {
      visitors = $(this)[0][10].value;
    } else {
      visitors = $(this)[0][11].value;
    }
    localStorage.setItem("visitors", visitors);
    let location = window.location.href;

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
        location: location,
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
    let ID = localStorage.getItem("userId");
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
    let location = window.location.href;

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
          location: location,
        },
        success: function (data) {
          localStorage.setItem("прихожая", hallway);
          localStorage.setItem("детская", childRoom);
          localStorage.setItem("кухня", kitchen);

          localStorage.setItem("гостиная", welcomeroom);
          localStorage.setItem("спальня", bedroom);

          localStorage.setItem("гардеробная", clotheRoom);
          localStorage.setItem("балкон", balcone);
          localStorage.setItem("столовая", dinnerRoom);

          localStorage.setItem("кладовая", storageRoom);
          localStorage.setItem("санузел", bathroom);
          localStorage.setItem("кабинет", cabinet);

          localStorage.setItem("гостевой санузел", welcomeBathroom);
          localStorage.setItem("другое", otherRooms);

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
    localStorage.setItem("light", light);

    let warmFloor = $(this)[0][1].value;
    localStorage.setItem("warmFloor", warmFloor);

    let ceiling = $(this)[0][2].value;
    localStorage.setItem("ceiling", ceiling);

    let floor = $(this)[0][3].value;
    localStorage.setItem("floor", floor);

    let deadline = $(this)[0][4].value;
    localStorage.setItem("deadline", deadline);

    let condicioner = $(this)[0][5].value;
    localStorage.setItem("condicioner", condicioner);

    let style = $(this)[0][6].value;
    localStorage.setItem("style", style);

    let wannaSee = $(this)[0][7].value;
    localStorage.setItem("wannaSee", wannaSee);

    let dontWannaSee = $(this)[0][8].value;
    localStorage.setItem("dontWannaSee", dontWannaSee);

    let additional = $(this)[0][9].value;
    localStorage.setItem("additional", additional);
    let location = window.location.href;

    let ID = localStorage.getItem("userId");
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addWishes",
        userId: ID,
        light: light,
        warmFloor: warmFloor,
        ceiling: ceiling,
        floor: floor,
        deadline: deadline,
        condicioner: condicioner,
        style: style,
        wannaSee: wannaSee,
        dontWannaSee: dontWannaSee,
        additional: additional,
        location: location,
      },

      success: function (data) {
        console.log(data);
        if (localStorage.getItem("прихожая") != "0") {
          window.location.replace("./rooms/hallWay.html");
        } else if (localStorage.getItem("детская") != "0") {
          window.location.replace("./rooms/childRoom.html");
        } else if (localStorage.getItem("кухня") != "0") {
          window.location.replace("./rooms/kitchen.html");
        } else if (localStorage.getItem("гостиная") != "0") {
          window.location.replace("./rooms/welcomeRoom.html");
        } else if (localStorage.getItem("спальня") != "0") {
          window.location.replace("./rooms/bedroom.html");
        } else if (localStorage.getItem("гардеробная") != "0") {
          window.location.replace("./rooms/dressingRoom.html");
        } else if (localStorage.getItem("балкон") != "0") {
          window.location.replace("./rooms/balcony.html");
        } else if (localStorage.getItem("столовая") != "0") {
          window.location.replace("./rooms/eatingRoom.html");
        } else if (localStorage.getItem("кладовая") != "0") {
          window.location.replace("./rooms/sclad.html");
        } else if (localStorage.getItem("Санузел") != "0") {
          window.location.replace("./rooms/bathroom.html");
        } else if (localStorage.getItem("кабинет") != "0") {
          window.location.replace("./rooms/office.html");
        } else if (localStorage.getItem("гостевой_санузел") != "0") {
          window.location.replace("./rooms/welcomeBath.html");
        } else {
          window.location.replace("/");
        }
      },
    });
  });

  $("button[name='plusButton']").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) + 1;
    count = count >= 5 ? 5 : count;

    $input.val(count);
    if (count > 0) {
      $input.siblings("button[name='minusButton']").prop("disabled", false);
    }
    if (count >= 5) {
      $input.siblings("button[name='plusButton']").prop("disabled", true);
    }
    $input.change();

    return false;
  });

  $("button[name='minusButton']").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;

    count = count <= 0 ? 0 : count;
    $input.val(count);
    if (count == 0) {
      $input.siblings("button[name='minusButton']").prop("disabled", true);
    }
    if (count < 5) {
      $input.siblings("button[name='plusButton']").prop("disabled", false);
    }
    $input.change();
    return false;
  });
});
