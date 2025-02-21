$(document).ready(function () {
  $("input").attr("maxlength", 50);
  $("textarea").attr("maxlength", 800);

  function ajaxAddDetailRoom(navigateVariable, arr) {
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
      localStorage.setItem("прихожая" + i + "wodrop", wodrop);
      localStorage.setItem("прихожая" + i + "warmFloor", warmFloor);
      localStorage.setItem("прихожая" + i + "mirror", mirror);
      localStorage.setItem("прихожая" + i + "sitting", sitting);
      localStorage.setItem("прихожая" + i + "shoes", shoes);
      localStorage.setItem("прихожая" + i + "shelf", shelf);
      localStorage.setItem("прихожая" + i + "condicioner", condicioner);
      localStorage.setItem("прихожая" + i + "floor", floor);
      localStorage.setItem("прихожая" + i + "walls", walls);
      localStorage.setItem("прихожая" + i + "seiling", seiling);
      localStorage.setItem("прихожая" + i + "other", other);
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

      localStorage.setItem("детская" + i + "pedestal", pedestal);
      localStorage.setItem("детская" + i + "wardrobe", wardrobe);
      localStorage.setItem("детская" + i + "mirror", mirror);
      localStorage.setItem("детская" + i + "topLight", topLight);
      localStorage.setItem("детская" + i + "nightLight", nightLight);
      localStorage.setItem("детская" + i + "warmFloor", warmFloor);
      localStorage.setItem("детская" + i + "condicioner", condicioner);
      localStorage.setItem("детская" + i + "floor", floor);
      localStorage.setItem("детская" + i + "walls", walls);
      localStorage.setItem("детская" + i + "seiling", seiling);
      localStorage.setItem("детская" + i + "other", other);

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

      localStorage.setItem(roomName + "waterHotter", waterHotter);
      localStorage.setItem(roomName + "dishWasher", dishWasher);
      localStorage.setItem(roomName + "smallBar", smallBar);
      localStorage.setItem(roomName + "multiboiler", multiboiler);
      localStorage.setItem(roomName + "oven", oven);
      localStorage.setItem(roomName + "refrigerator", refrigerator);
      localStorage.setItem(roomName + "trashSreder", trashSreder);
      localStorage.setItem(roomName + "lighter", lighter);
      localStorage.setItem(roomName + "steamboiler", steamboiler);
      localStorage.setItem(roomName + "sink", sink);
      localStorage.setItem(roomName + "microwave", microwave);
      localStorage.setItem(roomName + "defenser", defenser);
      localStorage.setItem(roomName + "airAway", airAway);
      localStorage.setItem(roomName + "warmFloor", warmFloor);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "other", other);

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

      localStorage.setItem(roomName + "sofa", sofa);
      localStorage.setItem(roomName + "tv", tv);
      localStorage.setItem(roomName + "smallTable", smallTable);
      localStorage.setItem(roomName + "bookShielf", bookShielf);
      localStorage.setItem(roomName + "centralLight", centralLight);
      localStorage.setItem(roomName + "wallLight", wallLight);
      localStorage.setItem(roomName + "condicioner", condicioner);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);

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
      localStorage.setItem("спальня" + i + "pedestal", pedestal);
      localStorage.setItem("спальня" + i + "wardrobe", wardrobe);
      localStorage.setItem("спальня" + i + "mirror", mirror);
      localStorage.setItem("спальня" + i + "topLight", topLight);
      localStorage.setItem("спальня" + i + "nightLight", nightLight);
      localStorage.setItem("спальня" + i + "warmFloor", warmFloor);
      localStorage.setItem("спальня" + i + "warmFloor", warmFloor);
      localStorage.setItem("спальня" + i + "condicioner", condicioner);
      localStorage.setItem("спальня" + i + "floor", floor);
      localStorage.setItem("спальня" + i + "walls", walls);
      localStorage.setItem("спальня" + i + "seiling", seiling);
      localStorage.setItem("спальня" + i + "other", other);

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
      localStorage.setItem(roomName + "shielf", shielf);
      localStorage.setItem(roomName + "mirror", mirror);
      localStorage.setItem(roomName + "shoes", shoes);
      localStorage.setItem(roomName + "topLight", topLight);
      localStorage.setItem(roomName + "wardrobeLight", wardrobeLight);
      localStorage.setItem(roomName + "condicioner", condicioner);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);
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

      localStorage.setItem("балкон" + i + "type", type);
      localStorage.setItem("балкон" + i + "description", description);

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
      localStorage.setItem(roomName + "table", table);
      localStorage.setItem(roomName + "chairs", chairs);
      localStorage.setItem(roomName + "topLight", topLight);
      localStorage.setItem(roomName + "tableLight", tableLight);
      localStorage.setItem(roomName + "barTable", barTable);
      localStorage.setItem(roomName + "warmFloor", warmFloor);
      localStorage.setItem(roomName + "condicioner", condicioner);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);

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
      localStorage.setItem(roomName + "shelf", shelf);
      localStorage.setItem(roomName + "storage", storage);
      localStorage.setItem(roomName + "airAway", airAway);
      localStorage.setItem(roomName + "condicioner", condicioner);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);

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
        ["система защины", defender],
        ["кондиционер", condicioner],
        ["теплый_пол", warmFloor],
        ["полы", floor],
        ["стены", walls],
        ["потолки", seiling],
        ["другое", other],
      ]);
      localStorage.setItem("Санузел" + i + "pooper", pooper);
      localStorage.setItem("Санузел" + i + "airAway", airAway);
      localStorage.setItem("Санузел" + i + "poopWasher", poopWasher);
      localStorage.setItem("Санузел" + i + "clothWasher", clothWasher);
      localStorage.setItem("Санузел" + i + "shower", shower);
      localStorage.setItem("Санузел" + i + "sink", sink);
      localStorage.setItem("Санузел" + i + "filter", filter);
      localStorage.setItem("Санузел" + i + "bath", bath);
      localStorage.setItem("Санузел" + i + "waterHotter", waterHotter);
      localStorage.setItem("Санузел" + i + "poopShower", poopShower);
      localStorage.setItem("Санузел" + i + "defender", defender);
      localStorage.setItem("Санузел" + i + "condicioner", condicioner);
      localStorage.setItem("Санузел" + i + "floor", floor);
      localStorage.setItem("Санузел" + i + "walls", walls);
      localStorage.setItem("Санузел" + i + "seiling", seiling);
      localStorage.setItem("Санузел" + i + "other", other);

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
      localStorage.setItem(roomName + "table", table);
      localStorage.setItem(roomName + "chair", chair);
      localStorage.setItem(roomName + "bookShielf", bookShielf);
      localStorage.setItem(roomName + "docsShielf", docsShielf);
      localStorage.setItem(roomName + "light", light);
      localStorage.setItem(roomName + "topLight", topLight);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);

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

      localStorage.setItem(roomName + "pooper", pooper);
      localStorage.setItem(roomName + "airAway", airAway);
      localStorage.setItem(roomName + "poopWasher", poopWasher);
      localStorage.setItem(roomName + "shower", shower);
      localStorage.setItem(roomName + "clothWasher", clothWasher);
      localStorage.setItem(roomName + "sink", sink);
      localStorage.setItem(roomName + "furniture", furniture);
      localStorage.setItem(roomName + "bath", bath);
      localStorage.setItem(roomName + "filter", filter);
      localStorage.setItem(roomName + "poopShower", poopShower);
      localStorage.setItem(roomName + "waterHotter", waterHotter);
      localStorage.setItem(roomName + "warmFloor", warmFloor);
      localStorage.setItem(roomName + "floor", floor);
      localStorage.setItem(roomName + "walls", walls);
      localStorage.setItem(roomName + "seiling", seiling);
      localStorage.setItem(roomName + "other", other);

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
        window.location.replace("https://karandash.pro/referencePage");
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
      "/childRoom.html",
      "/kitchen.html",
      "/welcomeRoom.html",
      "/bedroom.html",
      "/dressingRoom.html",
      "/balcony.html",
      "/eatingRoom.html",
      "/sclad.html",
      "/bathroom.html",
      "/office.html",
      "/welcomeBath.html",
    ];

    let len = arrRooms.length;
    for (let index = num; index < len; index++) {
      if (
        Number(localStorage.getItem(arrRooms[index])) !== 0 &&
        localStorage.getItem(arrRooms[index]) !== undefined
      ) {
        localStorage.setItem(
          "backLink",
          "https://karandash.pro/brief/rooms" + pathArray[index]
        );

        window.location.replace("." + pathArray[index]);
        break;
      }
      window.location.replace("https://karandash.pro/referencePage");
    }
  }
});
