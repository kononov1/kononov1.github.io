var toorItems = 
{
  "toor" : [
    {"name": "IMPERIVM",
    "date": "20",
    "month": "января",
    "location": "Омск",
    "location2": "Арена Омск",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "23",
    "month": "декабря",
    "location": "Минск",
    "location2": "Дворец Спорта",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "16",
    "month": "декабря",
    "location": "Киев",
    "location2": "Дворец Спорта",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "13",
    "month": "декабря",
    "location": "Воронеж",
    "location2": "Event Hall",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "9",
    "month": "декабря",
    "location": "Краснодар",
    "location2": "ДС Олимп",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "6",
    "month": "декабря",
    "location": "Ростов на Дону",
    "location2": "КСК Экспресс",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "3",
    "month": "декабря",
    "location": "Нижний Новгород",
    "location2": "ДС Провсоюзов",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "1",
    "month": "декабря",
    "location": "Казань",
    "location2": "Баскет-Холл",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "27",
    "month": "ноября",
    "location": "Самара",
    "location2": "МТЛ Арена",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "22",
    "month": "ноября",
    "location": "Екатиринбург",
    "location2": "КРК Уралец",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "15",
    "month": "ноября",
    "location": "Новосибирск",
    "location2": "ЛДС Сибирь",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "10",
    "month": "ноября",
    "location": "Иркутск",
    "location2": "ДС Труд",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "6",
    "month": "ноября",
    "location": "Москва",
    "location2": "СК Олимпийский",
    "img": "img/toor2.jpg"},
    {"name": "IMPERIVM",
    "date": "28",
    "month": "октября",
    "location": "Санкт-Петербург",
    "location2": "Ледовый дворец",
    "img": "img/toor2.jpg"}
  ],
}

var source   = document.getElementById("toor_block").innerHTML,
    template = Handlebars.compile(source),
    context = toorItems,
    html    = template(context);
$('.toor_nav').prepend(html);
$('.toor').prepend(html);