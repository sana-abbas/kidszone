
	$(document).ready(function(){
			$('.slider-container').slick({
				dots: false,
				arrows:false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000
			});
			$('.why-row').slick({
				dots: false,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay:true,
				autoplaySpeed:2000
				
			});
			$('.comment-container').slick({
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplay: true,
			});
			$( "#accordion" ).accordion();
			$('.quote-slider').slick({
  					infinite: true,
  					autoplay: true,
  					arrows: false,
  					autoplaySpeed: 2000,
  					fade: true,
  					cssEase: 'linear'
			});
		});