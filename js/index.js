var newsItems = 
{
  "item" : [
    {"desc": "Oxxxymiron — IMPERIVM (стадионный тур 2017)",
    "img": "img/news1.jpg",
    "url": "news1.html"},
    {"desc": "KOTD - Oxxxymiron (RU) vs Dizaster (USA) | World Domination VII",
    "img": "img/news2.jpg",
    "url": "news2.html"},
    {"desc": "VERSUS X #SLOVOSPB: Oxxxymiron VS Слава КПСС (Гнойный)", 
    "img": "img/news3.jpg",
    "url": "news3.html"},
    {"desc": "Oxxxymiron сыграет Митру в фильме Empire V (Анонс 2017)",
    "img": "img/news4.jpg",
    "url": "news4.html"},
    {"desc": "Би-2 feat. Oxxxymiron - Пора возвращаться домой",
    "img": "img/news5.jpg",
    "url": "news5.html"},
    {"desc": "Markul feat Oxxxymiron - Fata morgana ",
    "img": "img/news6.jpg",
    "url": "news6.html"},
    {"desc": "Oxxxyshop x Parallel Comics - Горгород",
    "img": "img/news7.jpg",
    "url": "news7.html"},
    {"desc": "Оксимирон возглавил Booking Machine",
    "img": "img/news8.jpg",
    "url": "news8.html"}
  ],
}

var source   = document.getElementById("news_block").innerHTML,
    template = Handlebars.compile(source),
    context = newsItems,
    html    = template(context);
$('.news').prepend(html);