export function setIsAjaxLoading(val) {
  document.getElementsByClassName("preloader")[0].style.display = val?"block":"none";
}

function createObjectFromArray(arr) {
  var obj = {};

  arr.map(function (x) {
    obj[x] = (x+"").replace("_", "");
  });

  return obj;
}

export function getCountries() {
  return {
    aze: "Азербайджан",
    arm: "Армения",
    blr: "Беларусь",
    gha: "Гана",
    geo: "Грузия",
    kaz: "Казахстан",
    kgz: "Киргизия",
    civ: "Кот-д’Ивуар",
    lva: "Латвия",
    ltu: "Литва",
    mda: "Молдавия",
    rus: "Россия",
    srb: "Сербия",
    tjk: "Таджикистан",
    uzb: "Узбекистан",
    ukr: "Украина",
    est: "Эстония"
  }
}

export function getCarColors() {
  return createObjectFromArray([
    "Бежевый",
    "Белый",
    "Голубой",
    "Желтый",
    "Зеленый",
    "Коричневый",
    "Красный",
    "Оранжевый",
    "Розовый",
    "Серый",
    "Синий",
    "Фиолетовый",
    "Черный"
  ])
}
