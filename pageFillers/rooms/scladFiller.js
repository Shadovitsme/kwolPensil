import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кладовая";
  const formInput = $("form#sclad")[0];
  const categoryArray = [
    "полки",
    "хранение",
    "вентиляция",
    "кондиционирование",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 3;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
