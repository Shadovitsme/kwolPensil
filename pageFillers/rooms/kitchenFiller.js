import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кухня";
  const formInput = $("form#kitchen")[0];
  const categoryArray = [
    "waterHotter",
    "dishWasher",
    "filter",
    "smallBar",
    "multiboiler",
    "oven",
    "refrigerator",
    "trashSreder",
    "lighter",
    "steamboiler",
    "sink",
    "microwave",
    "defenser",
    "airAway",
    "warmFloor",
    "floor",
    "walls",
    "seiling",
    "other",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 14;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
