function checkLocalstorageData(storageKey) {
  return localStorage.getItem(storageKey)
    ? localStorage.getItem(storageKey)
    : 0;
}
$(document).ready(function () {
  const formInput = $("form#balcony")[0];
  const roomName = "балкон";

  let m = 0;

  for (let i = 0; i < localStorage.getItem(roomName); i++) {
    let type = localStorage.getItem("балкон" + i + "type");

    formInput[m].checked = type == formInput[m].value;
    m++;
    two = formInput[m].checked = type == formInput[m].value;
    m++;
    three = formInput[m].checked = type == formInput[m].value;
    m++;
    formInput[m].value = localStorage.getItem("балкон" + i + "description");
    m++;
  }
});
