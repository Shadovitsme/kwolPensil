function checkCountInput(event) {
  if (event.target.value > 5) {
    event.target.value = 5;
  } else if (
    event.target.value.startsWith("0") &&
    event.target.value.length > 1
  ) {
    event.target.value = event.target.value.slice(1);
  } else if (event.target.value < 0) {
    event.target.value = 0;
  } else if (event.target.value == "" || event.target.value == undefined) {
    event.target.value = 0;
  }
}
