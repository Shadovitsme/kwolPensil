import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кабинет";
  const formInput = $("form#office")[0];
  const categoryArray = [
    "table",
    "chair",
    "bookShielf",
    "docsShielf",
    "light",
    "topLight",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 5;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
