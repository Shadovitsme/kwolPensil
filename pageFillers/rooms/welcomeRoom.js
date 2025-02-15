import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гостиная";
  const formInput = $("form#welcomeRoom")[0];
  const categoryArray = [
    "sofa",
    "tv",
    "smallTable",
    "bookShielf",
    "centralLight",
    "wallLight",
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
