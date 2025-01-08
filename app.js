// Ваш скрипт на JavaScript
$(document).ready(function () {
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
    let workPlace = $(this)[0][34].value;
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
        рабочее_место: workPlace,
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
        console.log(data);
        // window.location.replace("./wishesPage.html");
      },
    });
  });

  $("form#hallway").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let wodrop = $(this)[0][1].value;
    let warmFloor = $(this)[0][4].value;
    let mirror = $(this)[0][7].value;
    let sitting = $(this)[0][10].value;
    let shoes = $(this)[0][13].value;
    let shelf = $(this)[0][16].value;
    let condicioner = $(this)[0][19].value;
    let floor = $(this)[0][21].value;
    let walls = $(this)[0][22].value;
    let seiling = $(this)[0][23].value;
    let other = $(this)[0][24].value;
    $m = 26;

    let arr = [];
    for (let i = 0; i < getCookie("прихожая"); i++) {
      arr.push([
        `прихожая${i}`,
        ["шкаф_для_одежды", wodrop],
        ["теплый_пол", warmFloor],
        ["зеркало", mirror],
        ["сиденье", sitting],
        ["обувница", shoes],
        ["полки", shelf],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      if (i == getCookie("прихожая") - 1) {
        break;
      }
      wodrop = $(this)[0][$m].value;
      $m += 3;
      warmFloor = $(this)[0][$m].value;
      $m += 3;
      mirror = $(this)[0][$m].value;
      $m += 3;
      sitting = $(this)[0][$m].value;
      $m += 3;
      shoes = $(this)[0][$m].value;
      $m += 3;
      shelf = $(this)[0][$m].value;
      $m += 3;
      condicioner = $(this)[0][$m].value;
      $m += 2;
      floor = $(this)[0][$m].value;
      $m++;
      walls = $(this)[0][$m].value;
      $m++;
      seiling = $(this)[0][$m].value;
      $m++;
      other = $(this)[0][$m].value;
      $m += 2;
    }
    console.log(arr);
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        console.log(data);
        // window.location.replace("./wishesPage.html");
      },
    });
  });

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
