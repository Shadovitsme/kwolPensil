function checkLocalstorageData(storageKey) {
  return localStorage.getItem(storageKey)
    ? localStorage.getItem(storageKey)
    : 0;
}
$(document).ready(function () {
  const roomName = "балкон";
  let type;
  let radioItem;
  for (let i = 0; i < localStorage.getItem(roomName); i++) {
    let item = $(`#balcony${i}`);
    type = localStorage.getItem("балкон" + i + "type");
    radioItem = $(`#radioBalcony${i}`);
    radioItem.find('input[type="radio"]').each(function () {
      if (type == undefined) {
        this.checked == true;
        return 0;
      }
      this.checked = this.value == type;
    });

    item.find("textarea").each(function () {
      this.value = localStorage.getItem("балкон" + i + "description");
    });
  }
});
