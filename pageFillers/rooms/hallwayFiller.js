import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "прихожая";
  const formInput = $("form#hallway")[0];
  const categoryArray = [
    "wodrop",
    "warmFloor",
    "mirror",
    "sitting",
    "shoes",
    "shelf",
    "condicioner",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 6;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
