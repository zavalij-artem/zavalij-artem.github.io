$('.intro .btn-more').click(function(e) {
	e.preventDefault();
	$('.intro').addClass('active');
	$('.intro .text').css({
		height: $('.intro .text .frame').height() + 'px',
	});
});
$('.intro .btn-less').click(function(e) {
	e.preventDefault();
	$('.intro').removeClass('active');
	$('.intro .text').css({
		height: '',
	});
});

$('.main-nav-opener').click(function(e) {
	e.preventDefault();
	$('body').addClass('nav-active');
	$('.main-nav-box').css({
		height: $('.main-nav-holder').height() + 'px',
	});
});
$('.main-nav-closer').click(function(e) {
	e.preventDefault();
	$('body').removeClass('nav-active');
	$('.main-nav-box').css({
		height: '',
	});
});