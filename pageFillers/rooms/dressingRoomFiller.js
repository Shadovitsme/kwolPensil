import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гардеробная";
  const formInput = $("form#dressingRoom")[0];
  const categoryArray = [
    "shielf",
    "mirror",
    "shoes",
    "topLight",
    "wardrobeLight",
    "condicioner",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 5;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
