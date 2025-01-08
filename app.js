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
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addNamePhone",
        name: $(this)[0][0].value,
        phone: $(this)[0][1].value,
      },

      success: function (data) {
        window.location.replace("./secondPage.html");
      },
    });
  });
  // ajax page2
  $("form#page2").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let familyMembers = $(this)[0][0].value; // предотвращаем стандартное поведение формы
    let pets = $(this)[0][1].value;
    let soundless = $(this)[0][2].checked;
    let furniture = $(this)[0][4].checked;
    let hobby;
    if (!$(this)[0][7].checked) {
      hobby = $(this)[0][6].value;
    } else {
      hobby = "0";
    }
    let replane = $(this)[0][8].checked;
    let visitors;
    if ($(this)[0][10].checked) {
      visitors = $(this)[0][10].value;
    } else if ($(this)[0][11].checked) {
      visitors = $(this)[0][11].value;
    } else {
      visitors = $(this)[0][12].value;
    }
    let budget = $(this)[0][13].value;

    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addCommonData",
        familyMembers: familyMembers,
        pets: pets,
        soundless: soundless,
        furniture: furniture,
        hobby: hobby,
        replane: replane,
        visitors: visitors,
        budget: budget,
      },

      success: function (data) {
        window.location.replace("./thirdPage.html");
      },
    });
  });

  // ajax page3
  $("form#page3").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
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
    let welcomeBathroom = $(this)[0][37].value;
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addRoomCount",
        прихожая: hallway,
        детская: childRoom,
        кухня: kitchen,
        гостиная: welcomeroom,
        спальня: bedroom,
        гардеробная: clotheRoom,
        балкон: balcone,
        столовая: dinnerRoom,
        кладовая: storageRoom,
        ванная: bathroom,
        кабинет: cabinet,
        гостевой_санузел: welcomeBathroom,
        другое: $(this)[0][39].value,
      },

      success: function (data) {
        window.location.replace("./wishesPage.html");
      },
    });
  });

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
    let budget = $(this)[0][8].value;
    let additional = $(this)[0][9].value;
    let deadline = $(this)[0][10].value;

    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addWishes",
        light: light,
        condicioner: condicioner,
        warmFloor: warmFloor,
        style: style,
        ceiling: ceiling,
        wannaSee: wannaSee,
        budget: budget,
        additional: additional,
        deadline: deadline,
        floor: floor,
        dontWannaSee: dontWannaSee,
      },

      success: function (data) {
        if (getCookie("прихожая") > 0) {
          window.location.replace("./rooms/hallWay.html");
        }
        if (getCookie("детская") > 0) {
          window.location.replace("./rooms/childRoom.html");
        }
        if (getCookie("кухня") > 0) {
          window.location.replace("./rooms/kitchen.html");
        }
        if (getCookie("гостиная") > 0) {
          window.location.replace("./rooms/welcomeRoom.html");
        }
        if (getCookie("спальня") > 0) {
          window.location.replace("./rooms/bedroom.html");
        }
        if (getCookie("гардеробная") > 0) {
          window.location.replace("./rooms/dressingRoom.html");
        }
        if (getCookie("балкон") > 0) {
          window.location.replace("./rooms/balcony.html");
        }
        if (getCookie("столовая") > 0) {
          window.location.replace("./rooms/eatingRoom.html");
        }
        if (getCookie("кладовая") > 0) {
          window.location.replace("./rooms/sclad.html");
        }
        if (getCookie("ванная") > 0) {
          window.location.replace("./rooms/bathroom.html");
        }
        if (getCookie("кабинет") > 0) {
          window.location.replace("./rooms/office.html");
        }

        if (getCookie("гостевой_санузел") > 0) {
          window.location.replace("./rooms/welcomeBath.html");
        }
      },
    });
  });


  $("button[name='plusButton']").click(function (e) {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
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
