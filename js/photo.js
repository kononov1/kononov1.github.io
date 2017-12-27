var photoItems = 
{
  "photoshoot" : [
    {"id": "1",
    "img": "img/photoshoot1.jpg"},
    {"id": "2",
    "img": "img/photoshoot2.jpg"},
    {"id": "3",
    "img": "img/photoshoot3.jpg"},
    {"id": "4",
    "img": "img/photoshoot4.jpg"},
    {"id": "5",
    "img": "img/photoshoot5.jpg"},
    {"id": "6",
    "img": "img/photoshoot6.jpg"},
    {"id": "7",
    "img": "img/photoshoot7.jpg"},
    {"id": "8",
    "img": "img/photoshoot8.jpg"},
    {"id": "9",
    "img": "img/photoshoot9.jpg"},
    {"id": "10",
    "img": "img/photoshoot10.jpg"},
    {"id": "11",
    "img": "img/photoshoot11.jpg"},
    {"id": "12",
    "img": "img/photoshoot12.jpg"},
    {"id": "13",
    "img": "img/photoshoot13.jpg"},
    {"id": "14",
    "img": "img/photoshoot14.jpg"},
    {"id": "15",
    "img": "img/photoshoot15.jpg"},
    {"id": "16",
    "img": "img/photoshoot16.jpg"}
  ],
  "life" : [
    {"id": "1",
    "img": "img/live1.jpg"},
    {"id": "2",
    "img": "img/live2.jpg"},
    {"id": "3",
    "img": "img/live3.jpg"},
    {"id": "4",
    "img": "img/live4.jpg"},
    {"id": "5",
    "img": "img/live5.jpg"},
    {"id": "6",
    "img": "img/live6.jpg"},
    {"id": "7",
    "img": "img/live7.jpg"},
    {"id": "8",
    "img": "img/live8.jpg"},
    {"id": "9",
    "img": "img/live9.jpg"},
    {"id": "10",
    "img": "img/live10.jpg"},
    {"id": "11",
    "img": "img/live11.jpg"},
    {"id": "12",
    "img": "img/live12.jpg"},
    {"id": "13",
    "img": "img/live13.jpg"},
    {"id": "14",
    "img": "img/live14.jpg"},
    {"id": "15",
    "img": "img/live15.jpg"},
    {"id": "16",
    "img": "img/live16.jpg"}
  ],
  "fan_art" : [
    {"id": "1",
    "img": "img/fan1.jpg"},
    {"id": "2",
    "img": "img/fan2.jpg"},
    {"id": "3",
    "img": "img/fan3.jpeg"},
    {"id": "4",
    "img": "img/fan4.jpg"},
    {"id": "5",
    "img": "img/fan5.jpg"},
    {"id": "6",
    "img": "img/fan6.jpg"},
    {"id": "7",
    "img": "img/fan7.jpg"},
    {"id": "8",
    "img": "img/fan8.jpg"},
    {"id": "9",
    "img": "img/fan9.jpg"},
    {"id": "10",
    "img": "img/fan10.jpg"},
    {"id": "11",
    "img": "img/fan11.jpg"},
    {"id": "12",
    "img": "img/fan12.jpg"},
    {"id": "13",
    "img": "img/fan13.jpg"},
    {"id": "14",
    "img": "img/fan14.jpg"}
  ]
}

$(document).ready(function() {

var source   = document.getElementById("photo_block").innerHTML,
    template = Handlebars.compile(source),
    context = photoItems,
    html    = template(context);
$('.photo').append(html);

$('.modal').each(function() {
    var $id = $(this).attr('id'),
        $thisId = '#' + $id,
        $newId = parseInt($id.replace(/[^-0-9]/gim,''));
        $lenght = $('.modal').length;

    $($thisId).find('#close').click(function() {
                $($thisId).fadeOut();
                $('#overlay').fadeOut();
    });

    $(this).find('#arrow_right').click(function() {
        var $plusImage = '#mod' + String($newId + 1);
        $($thisId).fadeOut();
        $($plusImage).fadeIn();
        if($newId == $lenght) {
            $($thisId).fadeOut();
            $('#overlay').fadeOut();
        } else {
            return;
        }

    });

    $(this).find('#arrow_left').click(function() {
        var $plusImage = '#mod' + String($newId - 1);
        $($thisId).fadeOut();
        $($plusImage).fadeIn();
        if($newId == 1) {
            $($thisId).fadeOut();
            $('#overlay').fadeOut();
        } else {
            return;
        }
    });
});

});