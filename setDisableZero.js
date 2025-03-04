$(document).ready(function () {
  // Find all number inputs within the form
  setTimeout(function () {
    $("form input[type='number']").each(function () {
      var $input = $(this);
      var value = parseInt($input.val());
      console.log(value);

      // Check if the input value is zero
      if (value === "0" || value === 0) {
        // Find the button with name 'minusButton' near the input and disable it
        $input.siblings("button[name='minusButton']").prop("disabled", true);
      }
      if (value === "5" || value === 5) {
        // Find the button with name 'plusButton' near the input and disable it
        $input.siblings("button[name='plusButton']").prop("disabled", true);
      }
    });
  }, 0);
});
