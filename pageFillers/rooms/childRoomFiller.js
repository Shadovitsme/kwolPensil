import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "детская";
  const formInput = $("form#childRoom")[0];
  const categoryArray = [
    "детская мебель",
    "игровая зона",
    "организация места для игрушек",
    "подсветка/ночник/мягкий свет",
    "системы защиты",
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
