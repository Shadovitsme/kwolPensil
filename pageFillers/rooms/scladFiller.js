import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кладовая";
  const formInput = $("form#sclad")[0];
  const categoryArray = [
    "shelf",
    "storage",
    "airAway",
    "condicioner",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 3;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
