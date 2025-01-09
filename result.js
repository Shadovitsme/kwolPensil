$(document).ready(function () {
  $.ajax({
    url: "userResult.php",
    type: "GET",
    success: function (data) {
      let arr = Object.values(JSON.parse(data));

      arr.forEach((element) => {
        $("tbody#users").append(
          "<tr><td>" +
            element.Id +
            "</td>" +
            "<td>" +
            element.FirstName +
            "</td>" +
            "<td>" +
            element.Phone +
            "</td>" +
            "<td>" +
            element.familyMembers +
            "</td>" +
            "<td>" +
            element.pets +
            "</td>" +
            "<td>" +
            element.soundless +
            "</td>" +
            "<td>" +
            element.furniture +
            "</td>" +
            "<td>" +
            element.hobbyDescription +
            "</td>" +
            "<td>" +
            element.replan +
            "</td>" +
            "<td>" +
            element.budget +
            "</td>" +
            "</tr>"
        );
      });
    },
  });
  $.ajax({
    url: "wishResult.php",
    type: "GET",
    success: function (data) {
      let arr = Object.values(JSON.parse(data));

      arr.forEach((element) => {
        $("tbody#wishes").append(
          "<tr><td>" +
            element.userId +
            "</td>" +
            "<td>" +
            element.light +
            "</td>" +
            "<td>" +
            element.warmFloor +
            "</td>" +
            "<td>" +
            element.ceiling +
            "</td>" +
            "<td>" +
            element.eachRoomBudget +
            "</td>" +
            "<td>" +
            element.condicioner +
            "</td>" +
            "<td>" +
            element.wannaSee +
            "</td>" +
            "<td>" +
            element.dontWannaSee +
            "</td>" +
            "<td>" +
            element.deadline +
            "</td>" +
            "<td>" +
            element.additional +
            "</td>" +
            "<td>" +
            element.style +
            "</td>" +
            "</tr>"
        );
      });
    },
  });
  $.ajax({
    url: "roomResult.php",
    type: "GET",
    success: function (data) {
      let arr = Object.values(JSON.parse(data));

      arr.forEach((element) => {
        $("tbody#room").append(
          "<tr><td>" +
            element.userId +
            "</td>" +
            "<td>" +
            element.room +
            "</td>" +
            "<td>" +
            element.count +
            "</td>" +
            "<td>" +
            element.other +
            "</td>" +
            "</tr>"
        );
      });
    },
  });
  $.ajax({
    url: "detailRoomResult.php",
    type: "GET",
    success: function (data) {
      let arr = Object.values(JSON.parse(data));

      arr.forEach((element) => {
        $("tbody#detailRoom").append(
          "<tr><td>" +
            element.userId +
            "</td>" +
            "<td>" +
            element.room +
            "</td>" +
            "<td>" +
            element.property +
            "</td>" +
            "<td>" +
            element.description +
            "</td>" +
            "</tr>"
        );
      });
    },
  });
});
