// Ваш скрипт на JavaScript
$(document).ready(function () {
  $("form#page1").on("submit", function (e) {
    e.preventDefault();
    console.log($(this)[0][0].value); // предотвращаем стандартное поведение формы
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: {
        funk: "addNamePhone",
        name: $(this)[0][0].value,
        phone: $(this)[0][1].value,
      },

      success: function (data) {
        console.log(data);
        // window.location.replace("./secondPage.html");
      },
    });
  });
  $("form#page2").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    // window.location.replace("./thirdPage.html");
  });
});
