import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гостевой_санузел";
  const formInput = $("form#welcomeBath")[0];
  const categoryArray = [
    "pooper",
    "airAway",
    "poopWasher",
    "shower",
    "clothWasher",
    "sink",
    "furniture",
    "bath",
    "filter",
    "poopShower",
    "waterHotter",
    "warmFloor",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 11;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
гостевой_санузел;
