function backButtonScript(num) {
  let arrRooms = [
    "прихожая",
    "детская",
    "кухня",
    "гостиная",
    "спальня",
    "гардеробная",
    "балкон",
    "столовая",
    "кладовая",
    "Санузел",
    "кабинет",
    "гостевой_санузел",
  ];
  let pathArray = [
    "../wishesPage.html",
    "./hallWay.html",
    "./childRoom.html",
    "./kitchen.html",
    "./welcomeRoom.html",
    "./bedroom.html",
    "./dressingRoom.html",
    "./balcony.html",
    "./eatingRoom.html",
    "./sclad.html",
    "./bathroom.html",
    "./office.html",
    "./welcomeBath.html",
  ];

  let len = arrRooms.length;
  for (let index = num; index < len; index++) {
    if (
      Number(localStorage.getItem(arrRooms[index])) !== 0 &&
      localStorage.getItem(arrRooms[index]) !== undefined
    ) {
      window.location.replace(pathArray[index]);
      break;
    }
  }
}
