import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гостевой_санузел";
  const formInput = $("form#welcomeBath")[0];
  const categoryArray = [
    "Унитаз",
    "полотенцесушитель",
    "биде",
    "душевая",
    "стиральная машина",
    "раковина",
    "мебель",
    "Санузел",
    "фильтр для воды",
    "гигиенический душ",
    "водонагреватель",
    "теплый_пол",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 11;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
гостевой_санузел;
