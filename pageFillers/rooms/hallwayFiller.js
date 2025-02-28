import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "прихожая";
  const formInput = $("form#hallway")[0];
  const categoryArray = [
    "шкаф_для_одежды",
    "теплый_пол",
    "зеркало",
    "сиденье",
    "обувница",
    "полки",
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
