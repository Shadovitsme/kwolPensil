import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "спальня";
  const formInput = $("form#bedroom")[0];
  const categoryArray = [
    "pedestal",
    "wardrobe",
    "mirror",
    "topLight",
    "nightLight",
    "warmFloor",
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
