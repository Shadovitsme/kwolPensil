document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы с id="phone"
  var inputs = document.querySelectorAll("#phone");

  // Добавляем обработчики событий для каждого из них
  inputs.forEach(function (input) {
    input.addEventListener("input", mask);
    input.addEventListener("focus", mask);
    input.addEventListener("blur", mask);
  });

  function mask(event) {
    var blank = "8 (___) ___ __ __"; // Маска с 8 в начале

    var i = 0;
    var val = this.value.replace(/\D/g, ""); // Убираем все нецифровые символы

    // Логика для замены 7, +7 и 9
    if (val.startsWith("7")) {
      val = "8" + val.slice(1); // Заменяем 7 на 8
    } else if (val.startsWith("9")) {
      val = "89" + val.slice(1); // Заменяем 9 на 89
    } else if (val.startsWith("+7")) {
      val = "8" + val.slice(2); // Заменяем +7 на 8
    }

    // Применяем маску
    this.value = blank.replace(/./g, function (char) {
      if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);

      return i >= val.length ? "" : char;
    });

    // Если событие blur (потеря фокуса), очищаем поле, если введено только 2 символа
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else {
      setCursorPosition(this, this.value.length); // Устанавливаем курсор в конец
    }
  }

  function setCursorPosition(elem, pos) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
      return;
    }

    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
      return;
    }
  }
});
