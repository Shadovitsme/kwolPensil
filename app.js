// Ваш скрипт на JavaScript
$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    $.ajax({
      url: "save_data.php",
      type: "POST",
      data: $(this).serialize(),
      success: function () {
        alert("Данные успешно отправлены!");
      },
    });
  });
});
