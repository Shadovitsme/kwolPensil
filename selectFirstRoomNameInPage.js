$(document).ready(function () {
  let roomName = $("h1[name='firstItem']").text();
  if (localStorage.getItem(roomName.toLowerCase()) > 1) {
    $("h1[name='firstItem']").text(roomName + " 1");
  }
});
