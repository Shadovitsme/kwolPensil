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

  function checkLocalstorageData(storageKey) {
    return localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey)
      : 0;
  }

  let indexCounter = 1;

  for (let i = 0; i < localStorage.getItem(roomName); i++) {
    for (let j = 0; j < numberCategoryCount; j++) {
      formInput[indexCounter].value = checkLocalstorageData(
        roomName + i + categoryArray[j]
      );
      indexCounter += 3;
    }
    formInput[indexCounter].value = checkLocalstorageData(
      roomName + i + categoryArray[numberCategoryCount]
    );
    indexCounter += 2;
    for (let r = numberCategoryCount + 1; r < categoryArray.length; r++) {
      formInput[indexCounter].value = localStorage.getItem(
        roomName + i + categoryArray[r]
      );
      indexCounter++;
    }
    indexCounter++;
  }
});
