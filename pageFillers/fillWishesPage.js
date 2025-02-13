$(document).ready(function () {
  let formInput = $("form#wishPage")[0];
  formInput[0].value = localStorage.getItem("light");
  formInput[1].value = localStorage.getItem("warmFloor");
  formInput[2].value = localStorage.getItem("ceiling");
  formInput[3].value = localStorage.getItem("floor");
  formInput[4].value = localStorage.getItem("deadline");
  formInput[5].value = localStorage.getItem("condicioner");
  formInput[6].value = localStorage.getItem("style");
  formInput[7].value = localStorage.getItem("wannaSee");
  formInput[8].value = localStorage.getItem("dontWannaSee");
  formInput[9].value = localStorage.getItem("additional");
});
