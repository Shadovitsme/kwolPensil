$(document).ready(function () {
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
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        navigate(0);
      },
    });
  });

  $("form#childRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    let pedestal = $(this)[0][1].value;
    let wardrobe = $(this)[0][4].value;
    let mirror = $(this)[0][7].value;
    let topLight = $(this)[0][10].value;
    let nightLight = $(this)[0][13].value;
    let warmFloor = $(this)[0][16].value;
    let condicioner = $(this)[0][19].value;
    let floor = $(this)[0][21].value;
    let walls = $(this)[0][22].value;
    let seiling = $(this)[0][23].value;
    let other = $(this)[0][24].value;
    $m = 26;

    let arr = [];

    for (let i = 0; i < getCookie("детская"); i++) {
      arr.push([
        `детская${i}`,
        ["детская мебель", pedestal],
        ["игровая зона", wardrobe],
        ["организация места для игрушек", mirror],
        ["подсветка/ночник/мягкий свет", topLight],
        ["системы защиты", nightLight],
        ["теплый пол", warmFloor],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      console.log(arr);
      if (i == getCookie("детская") - 1) {
        break;
      }
      pedestal = $(this)[0][$m].value;
      $m += 3;
      wardrobe = $(this)[0][$m].value;
      $m += 3;
      mirror = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
      $m += 3;
      nightLight = $(this)[0][$m].value;
      $m += 3;
      warmFloor = $(this)[0][$m].value;
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
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        console.log(data);
        // navigate(1);
      },
    });
  });

  $("form#kitchen").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(2);
  });

  $("form#welcomeRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(3);
  });

  $("form#bedroom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let pedestal = $(this)[0][1].value;
    let wardrobe = $(this)[0][4].value;
    let mirror = $(this)[0][7].value;
    let topLight = $(this)[0][10].value;
    let nightLight = $(this)[0][13].value;
    let warmFloor = $(this)[0][16].value;
    let condicioner = $(this)[0][19].value;
    let floor = $(this)[0][21].value;
    let walls = $(this)[0][22].value;
    let seiling = $(this)[0][23].value;
    let other = $(this)[0][24].value;
    $m = 26;

    let arr = [];

    for (let i = 0; i < getCookie("спальня"); i++) {
      arr.push([
        `cпальня${i}`,
        ["тумбочки", pedestal],
        ["гардероб или шкаф", wardrobe],
        ["зеркало", mirror],
        ["центральное освещение", topLight],
        ["ночники", nightLight],
        ["теплый пол", warmFloor],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      if (i == getCookie("спальня") - 1) {
        break;
      }
      pedestal = $(this)[0][$m].value;
      $m += 3;
      wardrobe = $(this)[0][$m].value;
      $m += 3;
      mirror = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
      $m += 3;
      nightLight = $(this)[0][$m].value;
      $m += 3;
      warmFloor = $(this)[0][$m].value;
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
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        console.log(data);
        navigate(0);
      },
    });
  });

  $("form#dressingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(5);
  });

  $("form#balcony").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    let arr = [];
    let m = 4;

    let one = $(this)[0][0];
    let two = $(this)[0][1];
    let three = $(this)[0][2];

    let type;

    if (one.checked) {
      type = one.value;
    }
    if (two.checked) {
      type = two.value;
    }

    if (three.checked) {
      type = three.value;
    }

    let description = $(this)[0][3].value;

    for (let i = 0; i < getCookie("балкон"); i++) {
      arr.push([
        `балкон${i}`,
        ["тип балкона", type],
        ["Описание", description],
      ]);
      if (i == getCookie("балкон") - 1) {
        break;
      }

      m = 4;

      one = $(this)[0][m];
      m++;
      two = $(this)[0][m];
      m++;
      three = $(this)[0][m];
      m++;

      if (one.checked) {
        type = one.value;
      }
      if (two.checked) {
        type = two.value;
      }

      if (three.checked) {
        type = three.value;
      }

      description = $(this)[0][m].value;
      m++;
    }
    console.log(arr);
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        navigate(6);
      },
    });
  });

  $("form#eatingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(7);
  });

  $("form#sclad").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(8);
  });

  $("form#bathroom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let pooper = $(this)[0][1].value;
    let airAway = $(this)[0][4].value;
    let poopWasher = $(this)[0][7].value;
    let clothWasher = $(this)[0][10].value;
    let shower = $(this)[0][13].value;
    let sink = $(this)[0][16].value;
    let filter = $(this)[0][19].value;
    let bath = $(this)[0][22].value;
    let waterHotter = $(this)[0][25].value;
    let poopShower = $(this)[0][28].value;
    let defender = $(this)[0][31].value;
    let condicioner = $(this)[0][34].value;
    let warmFloor = $(this)[0][37].value;

    let floor = $(this)[0][39].value;
    let walls = $(this)[0][40].value;
    let seiling = $(this)[0][41].value;
    let other = $(this)[0][42].value;
    $m = 44;
    let arr = [];

    for (let i = 0; i < getCookie("прихожая"); i++) {
      arr.push([
        `ванная${i}`,
        ["Унитаз", pooper],
        ["вытяжка", airAway],
        ["биду", poopWasher],
        ["стиральная машина", clothWasher],
        ["душевая", shower],
        ["раковина", sink],
        ["фильтр для воды", filter],
        ["ванна", bath],
        ["водонагреватель", waterHotter],
        ["гигиенический душ", poopShower],
        ["система защины", defender],
        ["кондиционер", condicioner],
        ["теплый_пол", warmFloor],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      if (i == getCookie("прихожая") - 1) {
        break;
      }
      pooper = $(this)[0][$m].value;
      $m += 3;
      airAway = $(this)[0][$m].value;
      $m += 3;
      poopWasher = $(this)[0][$m].value;
      $m += 3;
      clothWasher = $(this)[0][$m].value;
      $m += 3;
      shower = $(this)[0][$m].value;
      $m += 3;
      sink = $(this)[0][$m].value;
      $m += 3;
      filter = $(this)[0][$m].value;
      $m += 3;
      bath = $(this)[0][$m].value;
      $m += 3;
      waterHotter = $(this)[0][$m].value;
      $m += 3;
      poopShower = $(this)[0][$m].value;
      $m += 3;
      defender = $(this)[0][$m].value;
      $m += 3;
      condicioner = $(this)[0][$m].value;
      $m += 3;
      warmFloor = $(this)[0][$m].value;
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
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        console.log(data);
        navigate(9);
      },
    });
  });

  $("form#office").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    navigate(10);
  });

  $("form#welcomeBath").on("submit", function (e) {
    e.preventDefault();

    window.location.replace("/index.html");
  });

  function navigate(num) {
    let arrRooms = [
      "детская",
      "кухня",
      "гостиная",
      "спальня",
      "гардеробная",
      "балкон",
      "столовая",
      "кладовая",
      "ванная",
      "кабинет",
      "гостевой_санузел",
    ];
    let pathArray = [
      "./childRoom.html",
      "./kitchen.html",
      "./welcomeRoom.html",
      "./bedroom.html",
      "./dressingRoom.html",
      "./balcony.html",
      "./eatingRoom.html",
      "./sclad.html",
      "./bathroom.html",
      "./office.html",
      "./welcomeBath.html",
    ];

    let len = arrRooms.length + 1;
    for (let index = num; index < len; index++) {
      if (getCookie(arrRooms[index])) {
        window.location.replace(pathArray[index]);
        break;
      }
    }
  }
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
});
