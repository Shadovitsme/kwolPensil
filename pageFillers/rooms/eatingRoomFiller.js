import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "столовая";
  const formInput = $("form#eatingRoom")[0];
  const categoryArray = [
    "table",
    "chairs",
    "topLight",
    "tableLight",
    "barTable",
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
