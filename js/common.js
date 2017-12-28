$('#overlay').hide();
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  		items: 1,
  		autoplay: true
  });
  /* Форма */

	$('.item_content').each(function() {
  	$(this).hover(
  		function() {
  			$(this).prepend('<div class="item_icon"><i class="fa fa-search" aria-hidden="true"></i></div>');
  		},
  		function() {
  			$('.item_content .item_icon').remove();
  		}
  	);
  });

  /* Модальные окна */
$('.item_modal').each(function () {
    var $mod = "#" + String($(this).attr("id")),
        $modal = "#mod" + String($(this).attr("id"));
    $($mod).click(function() {
        $('#overlay').fadeIn();
        $($modal).fadeIn();
        $($modal).find('#close').click(function() {
            $($modal).fadeOut();
            $('#overlay').fadeOut();
        });
    });
});

$('.menu_item').each(function () {
  $(this).find('.menu_name').click(function() {
    $(this).next('ul').slideToggle();
  });
});

});


