import universalRoomFiller from "./universalRoomFiller.js";
$(document).ready(function () {
  const roomName = "гостиная";
  const formInput = $("form#welcomeRoom")[0];
  const categoryArray = [
    "диван",
    "тв",
    "журнал столик",
    "стеллажи для книг и декора",
    "центральное освещение",
    "настенные светильники",
    "кондиционер",
    "полы",
    "стены",
    "потолки",
    "другое",
  ];
  //   кол-во категорий до пожеланий по напольному покрытию
  const numberCategoryCount = 6;

  universalRoomFiller(roomName, numberCategoryCount, categoryArray, formInput);
});
