import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "столовая";
  const formInput = $("form#eatingRoom")[0];
  const categoryArray = [
    "стол",
    "стулья",
    "центральное освещение",
    "подсветка стола",
    "барная стойка",
    "теплый пол",
    "кондиционер",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 6;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
