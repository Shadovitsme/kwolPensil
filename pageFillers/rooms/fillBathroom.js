import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "Санузел";
  const formInput = $("form#bathroom")[0];
  const categoryArray = [
    "pooper",
    "airAway",
    "poopWasher",
    "clothWasher",
    "shower",
    "sink",
    "filter",
    "bath",
    "waterHotter",
    "poopShower",
    "defender",
    "condicioner",
    "warmFloor",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 12;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
