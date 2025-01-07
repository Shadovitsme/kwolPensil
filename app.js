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
        window.location.replace("./secondPage.html");
      },
    });

    window.location.replace("./thirdPage.html");
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

