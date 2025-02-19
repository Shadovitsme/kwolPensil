function checkCountInput(event) {
  if (event.target.value > 5) {
    event.target.value = 5;
  } else if (e.target.value < 0) {
    event.target.value = 0;
  }
}
