import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "Санузел";
  const formInput = $("form#bathroom")[0];
  const categoryArray = [
    "Унитаз",
    "вытяжка",
    "биде",
    "стиральная машина",
    "душевая",
    "раковина",
    "фильтр для воды",
    "Ванна",
    "водонагреватель",
    "гигиенический душ",
    "система защиты",
    "кондиционер",
    "теплый_пол",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 12;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
