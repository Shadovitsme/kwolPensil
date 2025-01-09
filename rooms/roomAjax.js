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
        if (getCookie("детская")) {
          window.location.replace("./childRoom.html");
        } else if (getCookie("кухня")) {
          window.location.replace("./kitchen.html");
        } else if (getCookie("гостиная")) {
          window.location.replace("./welcomeRoom.html");
        } else if (getCookie("спальня")) {
          window.location.replace("./bedroom.html");
        } else if (getCookie("гардеробная")) {
          window.location.replace("./dressingRoom.html");
        } else if (getCookie("балкон")) {
          window.location.replace("./balcony.html");
        } else if (getCookie("столовая")) {
          window.location.replace("./eatingRoom.html");
        } else if (getCookie("кладовая")) {
          window.location.replace("./sclad.html");
        } else if (getCookie("ванная")) {
          window.location.replace("./bathroom.html");
        } else if (getCookie("кабинет")) {
          window.location.replace("./office.html");
        } else if (getCookie("гостевой_санузел")) {
          window.location.replace("./welcomeBath.html");
        }
      },
    });
  });

  $("form#childRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("кухня")) {
      window.location.replace("./kitchen.html");
    } else if (getCookie("гостиная")) {
      window.location.replace("./welcomeRoom.html");
    } else if (getCookie("спальня")) {
      window.location.replace("./bedroom.html");
    } else if (getCookie("гардеробная")) {
      window.location.replace("./dressingRoom.html");
    } else if (getCookie("балкон")) {
      window.location.replace("./balcony.html");
    } else if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#kitchen").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("гостиная")) {
      window.location.replace("./welcomeRoom.html");
    } else if (getCookie("спальня")) {
      window.location.replace("./bedroom.html");
    } else if (getCookie("гардеробная")) {
      window.location.replace("./dressingRoom.html");
    } else if (getCookie("балкон")) {
      window.location.replace("./balcony.html");
    } else if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#welcomeRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("спальня")) {
      window.location.replace("./bedroom.html");
    } else if (getCookie("гардеробная")) {
      window.location.replace("./dressingRoom.html");
    } else if (getCookie("балкон")) {
      window.location.replace("./balcony.html");
    } else if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#bedroom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("гардеробная")) {
      window.location.replace("./dressingRoom.html");
    } else if (getCookie("балкон")) {
      window.location.replace("./balcony.html");
    } else if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#dressingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("балкон")) {
      window.location.replace("./balcony.html");
    } else if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#balcony").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("столовая")) {
      window.location.replace("./eatingRoom.html");
    } else if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#eatingRoom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("кладовая")) {
      window.location.replace("./sclad.html");
    } else if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#sclad").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("ванная")) {
      window.location.replace("./bathroom.html");
    } else if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#bathroom").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

    if (getCookie("кабинет")) {
      window.location.replace("./office.html");
    } else if (getCookie("гостевой_санузел")) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#office").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы

console.log(getCookie("гостевой_санузел"));

    if (getCookie("гостевой_санузел") > 0) {
      window.location.replace("./welcomeBath.html");
    }
  });

  $("form#welcomeBath").on("submit", function (e) {
    e.preventDefault();

    window.location.replace("/index.html");
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
});
