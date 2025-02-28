import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гардеробная";
  const formInput = $("form#dressingRoom")[0];
  const categoryArray = [
    "полки и ящики",
    "зеркало",
    "организация обуви",
    "ценральное освещение",
    "подсветка в шкафах",
    "кондиционер",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 5;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
