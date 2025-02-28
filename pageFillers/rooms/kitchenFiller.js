import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "кухня";
  const formInput = $("form#kitchen")[0];
  const categoryArray = [
    "водонагреватель",
    "посудомойка",
    "фильтр",
    "мини бар",
    "мультиварка",
    "духовка",
    "холодильник",
    "измельчитель отходов",
    "подсветка",
    "пароварка",
    "мойка",
    "микроволновка",
    "защита от протечек",
    "вытяжка",
    "теплый_пол",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 14;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
