import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кабинет";
  const formInput = $("form#office")[0];
  const categoryArray = [
    "Рабочик стол",
    "кресло",
    "книжные полки",
    "полки для документов",
    "лампа",
    "центральный свет",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 5;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
