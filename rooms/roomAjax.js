$(document).ready(function () {
  $("input").attr("maxlength", 50);
  $("textarea").attr("maxlength", 800);

  function ajaxAddDetailRoom(navigateVariable, arr) {
    let location = window.location.href;

    let ID = localStorage.getItem("userId");
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        userId: ID,
        funk: "addDetailRoom",
        arr,
        location: location,
      },

      success: function (data) {
        console.log(data);
        navigate(navigateVariable);
      },
    });
  }

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

    for (let i = 0; i < localStorage.getItem("прихожая"); i++) {
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
      localStorage.setItem("прихожая" + i + "шкаф_для_одежды", wodrop);
      localStorage.setItem("прихожая" + i + "теплый_пол", warmFloor);
      localStorage.setItem("прихожая" + i + "зеркало", mirror);
      localStorage.setItem("прихожая" + i + "сиденье", sitting);
      localStorage.setItem("прихожая" + i + "обувница", shoes);
      localStorage.setItem("прихожая" + i + "полки", shelf);
      localStorage.setItem("прихожая" + i + "кондиционер", condicioner);
      localStorage.setItem("прихожая" + i + "полы", floor);
      localStorage.setItem("прихожая" + i + "walстеныls", walls);
      localStorage.setItem("прихожая" + i + "потолки", seiling);
      localStorage.setItem("прихожая" + i + "другое", other);
      if (i == localStorage.getItem("прихожая") - 1) {
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

    ajaxAddDetailRoom(0, arr);
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

    for (let i = 0; i < localStorage.getItem("детская"); i++) {
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

      localStorage.setItem("детская" + i + "детская мебель", pedestal);
      localStorage.setItem("детская" + i + "игровая зона", wardrobe);
      localStorage.setItem(
        "детская" + i + "организация места для игрушек",
        mirror
      );
      localStorage.setItem(
        "детская" + i + "подсветка/ночник/мягкий свет",
        topLight
      );
      localStorage.setItem("детская" + i + "системы защиты", nightLight);
      localStorage.setItem("детская" + i + "теплый пол", warmFloor);
      localStorage.setItem("детская" + i + "кондиционер", condicioner);
      localStorage.setItem("детская" + i + "полы", floor);
      localStorage.setItem("детская" + i + "стены", walls);
      localStorage.setItem("детская" + i + "потолки", seiling);
      localStorage.setItem("детская" + i + "другое", other);

      if (i == localStorage.getItem("детская") - 1) {
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
    ajaxAddDetailRoom(1, arr);
  });

  $("form#kitchen").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let waterHotter = $(this)[0][1].value;
    let dishWasher = $(this)[0][4].value;
    let filter = $(this)[0][7].value;
    let smallBar = $(this)[0][10].value;
    let multiboiler = $(this)[0][13].value;
    let oven = $(this)[0][16].value;
    let refrigerator = $(this)[0][19].value;
    let trashSreder = $(this)[0][22].value;
    let lighter = $(this)[0][25].value;
    let steamboiler = $(this)[0][28].value;
    let sink = $(this)[0][31].value;
    let microwave = $(this)[0][34].value;
    let defenser = $(this)[0][37].value;
    let airAway = $(this)[0][40].value;
    let warmFloor = $(this)[0][43].value;

    let floor = $(this)[0][45].value;
    let walls = $(this)[0][46].value;
    let seiling = $(this)[0][47].value;
    let other = $(this)[0][48].value;
    $m = 50;
    let arr = [];

    for (let i = 0; i < localStorage.getItem("кухня"); i++) {
      arr.push([
        `кухня${i}`,
        ["водонагреватель", waterHotter],
        ["посудомойка", dishWasher],
        ["фильтр", filter],
        ["мини бар", smallBar],
        ["мультиварка", multiboiler],
        ["духовка", oven],
        ["холодильник", refrigerator],
        ["измельчитель отходов", trashSreder],
        ["подсветка", lighter],
        ["пароварка", steamboiler],
        ["мойка", sink],
        ["микроволновка", microwave],
        ["защита от протечек", defenser],
        ["вытяжка", airAway],
        ["теплый_пол", warmFloor],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      let roomName = "кухня" + i;

      localStorage.setItem(roomName + "водонагреватель", waterHotter);
      localStorage.setItem(roomName + "посудомойка", dishWasher);
      localStorage.setItem(roomName + "фильтр", filter);
      localStorage.setItem(roomName + "мини бар", smallBar);
      localStorage.setItem(roomName + "мультиварка", multiboiler);
      localStorage.setItem(roomName + "духовка", oven);
      localStorage.setItem(roomName + "холодильник", refrigerator);
      localStorage.setItem(roomName + "измельчитель отходов", trashSreder);
      localStorage.setItem(roomName + "подсветка", lighter);
      localStorage.setItem(roomName + "пароварка", steamboiler);
      localStorage.setItem(roomName + "мойка", sink);
      localStorage.setItem(roomName + "микроволновка", microwave);
      localStorage.setItem(roomName + "защита от протечек", defenser);
      localStorage.setItem(roomName + "вытяжка", airAway);
      localStorage.setItem(roomName + "теплый_пол", warmFloor);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "потолки", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("кухня") - 1) {
        break;
      }
      waterHotter = $(this)[0][$m].value;
      $m += 3;
      dishWasher = $(this)[0][$m].value;
      $m += 3;
      filter = $(this)[0][$m].value;
      $m += 3;
      smallBar = $(this)[0][$m].value;
      $m += 3;
      multiboiler = $(this)[0][$m].value;
      $m += 3;
      oven = $(this)[0][$m].value;
      $m += 3;
      refrigerator = $(this)[0][$m].value;
      $m += 3;
      trashSreder = $(this)[0][$m].value;
      $m += 3;
      lighter = $(this)[0][$m].value;
      $m += 3;
      steamboiler = $(this)[0][$m].value;
      $m += 3;
      sink = $(this)[0][$m].value;
      $m += 3;
      microwave = $(this)[0][$m].value;
      $m += 3;
      defenser = $(this)[0][$m].value;
      $m += 3;
      airAway = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(2, arr);
  });

  $("form#welcomeRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let sofa = $(this)[0][1].value;
    let tv = $(this)[0][4].value;
    let smallTable = $(this)[0][7].value;
    let bookShielf = $(this)[0][10].value;
    let centralLight = $(this)[0][13].value;
    let wallLight = $(this)[0][16].value;
    let condicioner = $(this)[0][19].value;
    let floor = $(this)[0][21].value;
    let walls = $(this)[0][22].value;
    let seiling = $(this)[0][23].value;
    let other = $(this)[0][24].value;
    $m = 26;

    let arr = [];

    for (let i = 0; i < localStorage.getItem("гостиная"); i++) {
      arr.push([
        `гостиная${i}`,
        ["диван", sofa],
        ["тв", tv],
        ["журнал столик", smallTable],
        ["стеллажи для книг и декора", bookShielf],
        ["центральное освещение", centralLight],
        ["настенные светильники", wallLight],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);

      let roomName = "гостиная" + i;

      localStorage.setItem(roomName + "диван", sofa);
      localStorage.setItem(roomName + "тв", tv);
      localStorage.setItem(roomName + "журнал столик", smallTable);
      localStorage.setItem(roomName + "стеллажи для книг и декора", bookShielf);
      localStorage.setItem(roomName + "центральное освещение", centralLight);
      localStorage.setItem(roomName + "настенные светильники", wallLight);
      localStorage.setItem(roomName + "кондиционер", condicioner);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "seiпотолкиling", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("гостиная") - 1) {
        break;
      }
      sofa = $(this)[0][$m].value;
      $m += 3;
      tv = $(this)[0][$m].value;
      $m += 3;
      smallTable = $(this)[0][$m].value;
      $m += 3;
      bookShielf = $(this)[0][$m].value;
      $m += 3;
      centralLight = $(this)[0][$m].value;
      $m += 3;
      tv = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(3, arr);
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

    for (let i = 0; i < localStorage.getItem("спальня"); i++) {
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
      localStorage.setItem("спальня" + i + "тумбочки", pedestal);
      localStorage.setItem("спальня" + i + "гардероб или шкаф", wardrobe);
      localStorage.setItem("спальня" + i + "зеркало", mirror);
      localStorage.setItem("спальня" + i + "центральное освещение", topLight);
      localStorage.setItem("спальня" + i + "ночники", nightLight);
      localStorage.setItem("спальня" + i + "теплый пол", warmFloor);
      localStorage.setItem("спальня" + i + "кондиционер", condicioner);
      localStorage.setItem("спальня" + i + "полы", floor);
      localStorage.setItem("спальня" + i + "стены", walls);
      localStorage.setItem("спальня" + i + "потолки", seiling);
      localStorage.setItem("спальня" + i + "другое", other);

      if (i == localStorage.getItem("спальня") - 1) {
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
    ajaxAddDetailRoom(4, arr);
  });

  $("form#dressingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let shielf = $(this)[0][1].value;
    let mirror = $(this)[0][4].value;
    let shoes = $(this)[0][7].value;
    let topLight = $(this)[0][10].value;
    let wardrobeLight = $(this)[0][13].value;
    let condicioner = $(this)[0][16].value;
    let floor = $(this)[0][18].value;
    let walls = $(this)[0][19].value;
    let seiling = $(this)[0][20].value;
    let other = $(this)[0][21].value;
    $m = 23;

    let arr = [];

    for (let i = 0; i < localStorage.getItem("гардеробная"); i++) {
      arr.push([
        `гардеробная${i}`,
        ["полки и ящики", shielf],
        ["зеркало", mirror],
        ["организация обуви", shoes],
        ["ценральное освещение", topLight],
        ["подсветка в шкафах", wardrobeLight],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      let roomName = "гардеробная" + i;
      localStorage.setItem(roomName + "полки и ящики", shielf);
      localStorage.setItem(roomName + "зеркало", mirror);
      localStorage.setItem(roomName + "организация обуви", shoes);
      localStorage.setItem(roomName + "ценральное освещение", topLight);
      localStorage.setItem(roomName + "подсветка в шкафах", wardrobeLight);
      localStorage.setItem(roomName + "кондиционер", condicioner);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "потолки", seiling);
      localStorage.setItem(roomName + "другое", other);
      if (i == localStorage.getItem("гардеробная") - 1) {
        break;
      }
      shielf = $(this)[0][$m].value;
      $m += 3;
      mirror = $(this)[0][$m].value;
      $m += 3;
      shoes = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
      $m += 3;
      wardrobeLight = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(5, arr);
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

    for (let i = 0; i < localStorage.getItem("балкон"); i++) {
      arr.push([
        `балкон${i}`,
        ["тип балкона", type],
        ["Описание", description],
      ]);

      localStorage.setItem("балкон" + i + "тип балкона", type);
      localStorage.setItem("балкон" + i + "Описание", description);

      if (i == localStorage.getItem("балкон") - 1) {
        break;
      }

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
    ajaxAddDetailRoom(6, arr);
  });

  $("form#eatingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let table = $(this)[0][1].value;
    let chairs = $(this)[0][4].value;
    let topLight = $(this)[0][7].value;
    let tableLight = $(this)[0][10].value;
    let barTable = $(this)[0][13].value;
    let warmFloor = $(this)[0][16].value;
    let condicioner = $(this)[0][19].value;
    let floor = $(this)[0][21].value;
    let walls = $(this)[0][22].value;
    let seiling = $(this)[0][23].value;
    let other = $(this)[0][24].value;
    $m = 26;

    let arr = [];

    for (let i = 0; i < localStorage.getItem("столовая"); i++) {
      arr.push([
        `столовая${i}`,
        ["стол", table],
        ["стулья", chairs],
        ["центральное освещение", topLight],
        ["подсветка стола", tableLight],
        ["барная стойка", barTable],
        ["теплый пол", warmFloor],
        ["кондиционер", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);

      let roomName = "столовая" + i;
      localStorage.setItem(roomName + "стол", table);
      localStorage.setItem(roomName + "стулья", chairs);
      localStorage.setItem(roomName + "центральное освещение", topLight);
      localStorage.setItem(roomName + "подсветка стола", tableLight);
      localStorage.setItem(roomName + "барная стойка", barTable);
      localStorage.setItem(roomName + "теплый пол", warmFloor);
      localStorage.setItem(roomName + "кондиционер", condicioner);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "потолки", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("столовая") - 1) {
        break;
      }
      table = $(this)[0][$m].value;
      $m += 3;
      chairs = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
      $m += 3;
      barTable = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(7, arr);
  });

  $("form#sclad").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let shelf = $(this)[0][1].value;
    let storage = $(this)[0][4].value;
    let airAway = $(this)[0][7].value;
    let condicioner = $(this)[0][10].value;
    let floor = $(this)[0][12].value;
    let walls = $(this)[0][13].value;
    let seiling = $(this)[0][14].value;
    let other = $(this)[0][15].value;
    $m = 17;

    let arr = [];

    for (let i = 0; i < localStorage.getItem("кладовая"); i++) {
      arr.push([
        `кладовая${i}`,
        ["полки", shelf],
        ["хранение", storage],
        ["вентиляция", airAway],
        ["кондиционирование", condicioner],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);

      let roomName = "кладовая" + i;
      localStorage.setItem(roomName + "полки", shelf);
      localStorage.setItem(roomName + "хранение", storage);
      localStorage.setItem(roomName + "вентиляция", airAway);
      localStorage.setItem(roomName + "кондиционирование", condicioner);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "потолки", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("кладовая") - 1) {
        break;
      }
      shelf = $(this)[0][$m].value;
      $m += 3;
      storage = $(this)[0][$m].value;
      $m += 3;
      airAway = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(8, arr);
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

    // TODO набор штук в санузле не по фигме, поправить
    for (let i = 0; i < localStorage.getItem("Санузел"); i++) {
      arr.push([
        `Санузел${i}`,
        ["Унитаз", pooper],
        ["вытяжка", airAway],
        ["биде", poopWasher],
        ["стиральная машина", clothWasher],
        ["душевая", shower],
        ["раковина", sink],
        ["фильтр для воды", filter],
        ["Ванна", bath],
        ["водонагреватель", waterHotter],
        ["гигиенический душ", poopShower],
        ["система защиты", defender],
        ["кондиционер", condicioner],
        ["теплый_пол", warmFloor],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      localStorage.setItem("Санузел" + i + "Унитаз", pooper);
      localStorage.setItem("Санузел" + i + "вытяжка", airAway);
      localStorage.setItem("Санузел" + i + "биде", poopWasher);
      localStorage.setItem("Санузел" + i + "стиральная машина", clothWasher);
      localStorage.setItem("Санузел" + i + "душевая", shower);
      localStorage.setItem("Санузел" + i + "раковина", sink);
      localStorage.setItem("Санузел" + i + "фильтр для воды", filter);
      localStorage.setItem("Санузел" + i + "Ванна", bath);
      localStorage.setItem("Санузел" + i + "водонагреватель", waterHotter);
      localStorage.setItem("Санузел" + i + "гигиенический душ", poopShower);
      localStorage.setItem("Санузел" + i + "система защиты", defender);
      localStorage.setItem("Санузел" + i + "кондиционер", condicioner);
      localStorage.setItem("Санузел" + i + "теплый_пол", warmFloor);
      localStorage.setItem("Санузел" + i + "полы", floor);
      localStorage.setItem("Санузел" + i + "стены", walls);
      localStorage.setItem("Санузел" + i + "потолки", seiling);
      localStorage.setItem("Санузел" + i + "другое", other);

      if (i == localStorage.getItem("Санузел") - 1) {
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
    ajaxAddDetailRoom(9, arr);
  });

  $("form#office").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    let table = $(this)[0][1].value;
    let chair = $(this)[0][4].value;
    let bookShielf = $(this)[0][7].value;
    let docsShielf = $(this)[0][10].value;
    let light = $(this)[0][13].value;
    let topLight = $(this)[0][16].value;
    let floor = $(this)[0][18].value;
    let walls = $(this)[0][19].value;
    let seiling = $(this)[0][20].value;
    let other = $(this)[0][21].value;
    $m = 23;

    let arr = [];

    for (let i = 0; i < localStorage.getItem("кабинет"); i++) {
      arr.push([
        `кабинет${i}`,
        ["Рабочик стол", table],
        ["кресло", chair],
        ["книжные полки", bookShielf],
        ["полки для документов", docsShielf],
        ["лампа", light],
        ["центральный свет", topLight],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);

      let roomName = "кабинет" + i;
      localStorage.setItem(roomName + "Рабочик стол", table);
      localStorage.setItem(roomName + "кресло", chair);
      localStorage.setItem(roomName + "книжные полки", bookShielf);
      localStorage.setItem(roomName + "полки для документов", docsShielf);
      localStorage.setItem(roomName + "лампа", light);
      localStorage.setItem(roomName + "центральный свет", topLight);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "потолки", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("кабинет") - 1) {
        break;
      }
      table = $(this)[0][$m].value;
      $m += 3;
      chair = $(this)[0][$m].value;
      $m += 3;
      bookShielf = $(this)[0][$m].value;
      $m += 3;
      docsShielf = $(this)[0][$m].value;
      $m += 3;
      light = $(this)[0][$m].value;
      $m += 3;
      topLight = $(this)[0][$m].value;
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
    ajaxAddDetailRoom(10, arr);
  });

  $("form#welcomeBath").on("submit", function (e) {
    e.preventDefault();
    let pooper = $(this)[0][1].value;
    let airAway = $(this)[0][4].value;
    let poopWasher = $(this)[0][7].value;
    let shower = $(this)[0][10].value;
    let clothWasher = $(this)[0][13].value;
    let sink = $(this)[0][16].value;
    let furniture = $(this)[0][19].value;
    let bath = $(this)[0][22].value;
    let filter = $(this)[0][25].value;
    let poopShower = $(this)[0][28].value;
    let waterHotter = $(this)[0][31].value;
    let warmFloor = $(this)[0][34].value;

    let floor = $(this)[0][36].value;
    let walls = $(this)[0][37].value;
    let seiling = $(this)[0][38].value;
    let other = $(this)[0][39].value;
    $m = 41;
    let arr = [];
    for (let i = 0; i < localStorage.getItem("гостевой_санузел"); i++) {
      arr.push([
        `гостевой_санузел${i}`,
        ["Унитаз", pooper],
        ["полотенцесушитель", airAway],
        ["биде", poopWasher],
        ["душевая", shower],
        ["стиральная машина", clothWasher],
        ["раковина", sink],
        ["мебель", furniture],
        ["Санузел", bath],
        ["фильтр для воды", filter],
        ["гигиенический душ", poopShower],
        ["водонагреватель", waterHotter],
        ["теплый_пол", warmFloor],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);

      let roomName = "гостевой_санузел" + i;

      localStorage.setItem(roomName + "Унитаз", pooper);
      localStorage.setItem(roomName + "полотенцесушитель", airAway);
      localStorage.setItem(roomName + "биде", poopWasher);
      localStorage.setItem(roomName + "душевая", shower);
      localStorage.setItem(roomName + "стиральная машина", clothWasher);
      localStorage.setItem(roomName + "раковина", sink);
      localStorage.setItem(roomName + "мебель", furniture);
      localStorage.setItem(roomName + "Санузел", bath);
      localStorage.setItem(roomName + "фильтр для воды", filter);
      localStorage.setItem(roomName + "гигиенический душ", poopShower);
      localStorage.setItem(roomName + "водонагреватель", waterHotter);
      localStorage.setItem(roomName + "теплый_пол", warmFloor);
      localStorage.setItem(roomName + "полы", floor);
      localStorage.setItem(roomName + "стены", walls);
      localStorage.setItem(roomName + "sпотолкиeiling", seiling);
      localStorage.setItem(roomName + "другое", other);

      if (i == localStorage.getItem("гостевой_санузел") - 1) {
        break;
      }
      pooper = $(this)[0][$m].value;
      $m += 3;
      airAway = $(this)[0][$m].value;
      $m += 3;
      poopWasher = $(this)[0][$m].value;
      $m += 3;
      shower = $(this)[0][$m].value;
      $m += 3;
      clothWasher = $(this)[0][$m].value;
      $m += 3;
      sink = $(this)[0][$m].value;
      $m += 3;
      furniture = $(this)[0][$m].value;
      $m += 3;
      bath = $(this)[0][$m].value;
      $m += 3;
      filter = $(this)[0][$m].value;
      $m += 3;
      poopShower = $(this)[0][$m].value;
      $m += 3;
      waterHotter = $(this)[0][$m].value;
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
    let ID = localStorage.getItem("userId");
    $.ajax({
      url: "../save_data.php",
      type: "POST",
      data: {
        userId: ID,
        funk: "addDetailRoom",
        arr,
      },

      success: function (data) {
        console.log(data);
        let currentUrl = window.location.href;
        let lastSegment = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
        let serializedData = new URLSearchParams(lastSegment).toString();
        window.location.replace(
          `https://karandash.pro/referencePage?${serializedData}`
        );
      },
    });
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
      "Санузел",
      "кабинет",
      "гостевой_санузел",
    ];
    let pathArray = [
      "childRoom.html",
      "kitchen.html",
      "welcomeRoom.html",
      "bedroom.html",
      "dressingRoom.html",
      "balcony.html",
      "eatingRoom.html",
      "sclad.html",
      "bathroom.html",
      "office.html",
      "welcomeBath.html",
    ];

    let len = arrRooms.length;
    for (let index = num; index < len; index++) {
      let currentUrl = window.location.href;
      let lastSegment = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
      let serializedData = new URLSearchParams(lastSegment).toString();
      if (
        Number(localStorage.getItem(arrRooms[index])) !== 0 &&
        localStorage.getItem(arrRooms[index]) !== undefined
      ) {
        window.location.replace("./" + pathArray[index]);
        return 0;
      }
      window.location.replace(
        `https://karandash.pro/referencePage?${serializedData}`
      );
    }
  }
});
