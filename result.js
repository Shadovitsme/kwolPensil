$(document).ready(function () {
  $.ajax({
    url: "resultPage.php",
    type: "GET",
    success: function (data) {
      console.log(data);
      $("tbody").append(data);
    },
  });
});
