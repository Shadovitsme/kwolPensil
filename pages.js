$(document).ready(function () {
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  for (var i = 0; i < getCookie("прихожая"); i++)
    $("div#hallway").append(`
                <div id="hallway${i}" class="w-full flex">
          <div class="w-[652px] mr-[64px]">
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">Шкаф для одежды</p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-5 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">Теплый пол</p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">Зеркало</p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">
                  Место для сидения (скамья или пуфик)
                </p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">
                  Организация места для хранения обуви
                </p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">
                  Полки для аксессуаров (ключи, зонты)
                </p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
            <div class="flex h-[58px] mb-[32px]">
              <div class="labelWrapper mr-8 w-[460px] flex my-auto">
                <p class="p3 Text my-auto">Кондиционирование</p>
              </div>
              <button
                name="minusButton"
                type="button"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundminus.png" />
              </button>
              <input class="input h-14 my-auto w-[52px] mx-3" value="0" />
              <button
                type="button"
                name="plusButton"
                class="disabled:opacity-50 h-[48px] w-[48px] my-auto"
              >
                <img src="../images/roundPlus.png" />
              </button>
            </div>
          </div>
          <div class="w-[1004px]">
            <p class="p4 Text mb-2">Пожелания по напольному покрытию</p>
            <textarea
              class="input w-full mb-3 h-[140px]"
              placeholder="Укажите тип покрытия для пола (плитка, ламинат и т. д.) "
            ></textarea>
            <p class="p4 Text mb-2">Пожелания по отделке стен</p>
            <textarea
              class="input mb-3 h-[140px]"
              placeholder="Укажите предпочтения по материалам и цвету. Если нужен декоративный элемент, уточните."
            ></textarea>
            <p class="p4 Text mb-2">Пожелания по отделке потолков</p>
            <textarea
              class="input mb-3 h-[140px]"
              placeholder="Опишите предпочтения по отделке потолков (натяжной, подвесной, многоуровневый, или просто окрашенный.) Укажите предпочтения по материалам и цвету. Если нужен декоративный элемент (карнизы, лепнина, балки), уточните."
            ></textarea>
            <p class="p4 Text mb-2">Другое</p>
            <textarea
              class="input h-[140px]"
              placeholder="Если есть другие пожелания, опишите их здесь"
            ></textarea>
          </div>   
      </div>
      <hr class="bg-white my-5"   />
 
`);
});
