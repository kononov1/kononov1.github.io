$(document).ready(function() {

c='className'
l=t=>t[c]=t[c]=='a'?p.pause():(a[c]=c,a=t,p.src=t.title,p.play(),'a')
s.onclick=e=>l(e.target)

$('.menu_item').each(function () {
	$(this).find('.menu_name').click(function() {
		$(this).next('ul').slideToggle();
	});
});

});