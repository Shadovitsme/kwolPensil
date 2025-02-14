export default function universalRoomFiller(
  roomName,
  numberCategoryCount,
  categoryArray,
  formInput
) {
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
}
function checkLocalstorageData(storageKey) {
  return localStorage.getItem(storageKey)
    ? localStorage.getItem(storageKey)
    : 0;
}
