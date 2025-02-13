$(document).ready(function () {
  let formInput = $("form#page2")[0];
  formInput[0].value = localStorage.getItem("familyMembers");
  formInput[1].value = localStorage.getItem("pets");
  formInput[2].value = localStorage.getItem("soundless");
  formInput[4].value = localStorage.getItem("furniture");
  formInput[6].value = localStorage.getItem("hobby");
  formInput[7].value = localStorage.getItem("replane");
  let visitors = localStorage.getItem("visitors");
  console.log(visitors);
  formInput[visitors].checked = true;
});
