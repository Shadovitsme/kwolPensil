$(document).ready(function () {
  let formInput = $("form#page3")[0];
  formInput[1].value = Number(localStorage.getItem("прихожая"));
  formInput[4].value = Number(localStorage.getItem("детская"));
  formInput[7].value = Number(localStorage.getItem("кухня"));
  formInput[10].value = Number(localStorage.getItem("гостиная"));
  formInput[13].value = Number(localStorage.getItem("спальня"));
  formInput[16].value = Number(localStorage.getItem("гардеробная"));
  formInput[19].value = Number(localStorage.getItem("балкон"));
  formInput[22].value = Number(localStorage.getItem("столовая"));
  formInput[25].value = Number(localStorage.getItem("кладовая"));
  formInput[28].value = Number(localStorage.getItem("Санузел"));
  formInput[31].value = Number(localStorage.getItem("кабинет"));
  formInput[34].value = Number(localStorage.getItem("гостевой_санузел"));
  formInput[36].value = localStorage.getItem("другое");
});
