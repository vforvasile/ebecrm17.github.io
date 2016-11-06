$(document).ready(function()
{
  var carousel = $(".owl-carousel");
	if(carousel.length > 0)
	{
		var data = carousel.data();
		$(".owl-carousel").owlCarousel(data);
	}
});
