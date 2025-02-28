$(document).ready(function () {
  let formInput = $("form#page2")[0];
  formInput[0].value = localStorage.getItem("familyMembers");
  formInput[1].value = localStorage.getItem("pets");

  let soundless =
    localStorage.getItem("soundless") == "true" ||
    localStorage.getItem("soundless") == undefined;
  formInput[2].checked = soundless;
  formInput[3].checked = !soundless;

  let furniture =
    localStorage.getItem("furniture") == "true" ||
    localStorage.getItem("furniture") == undefined;
  formInput[4].checked = furniture;
  formInput[5].checked = !furniture;

  formInput[6].value = localStorage.getItem("hobby");

  let replane =
    localStorage.getItem("replane") == "true" ||
    localStorage.getItem("replane") == undefined;
  formInput[7].checked = replane;
  formInput[8].checked = !replane;

  let visitors = localStorage.getItem("visitors");
  formInput[visitors].checked = true;
});
