// Ваш скрипт на JavaScript
$(document).ready(function () {
  $("form#page1").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: $(this).serialize(),
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
