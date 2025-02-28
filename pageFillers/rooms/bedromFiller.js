import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "спальня";
  const formInput = $("form#bedroom")[0];
  const categoryArray = [
    "тумбочки",
    "гардероб или шкаф",
    "зеркало",
    "центральное освещение",
    "ночники",
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
