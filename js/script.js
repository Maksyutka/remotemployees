//accordeon

function accordeonInit() {
	const accordeonItemSelector = ".services__acc-item";
	const accordeonContentSelector = ".services__acc-content";
	const accordeonBtnSelector = ".services__acc-btn";
	const accordeonHeadTitleSelector = ".services__acc-head-title";
	const accordeonAccHeadBtnClass = "services__acc-btn_active";
	const accordeonAccHeadTitleClass = "services__acc-head-title_active";

	$(accordeonContentSelector).hide();
	$(accordeonItemSelector).click(function () {
		$(this).find(accordeonContentSelector).slideToggle();
		$(this).find(accordeonBtnSelector).toggleClass(accordeonAccHeadBtnClass);
		$(this).find(accordeonHeadTitleSelector).toggleClass(accordeonAccHeadTitleClass);
	});
}

//steps slider

function sliderInit() {
	$(".steps__slider").slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1633,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 734,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
}

//shops slider

function shopsSliderInit() {
	function shopsSlider() {
		$(".shops__wrapper").slick({
			slidesToShow: 1,
			infinite: false,
			variableWidth: true,
			arrows: true,
		});
	}

	if ($(window).width() <= 768) {
		shopsSlider();
	} else {
		$(".shops__wrapper").filter(".slick-initialized").slick("unslick");
	}

	$(window).resize(function () {
		var $windowWidth = $(window).width();
		if ($windowWidth >= 768) {
			$(".shops__wrapper").filter(".slick-initialized").slick("unslick");
		} else {
			if (!$(".shops__wrapper").hasClass("slick-initialized")) {
				shopsSlider();
			}
		}
	});
}

//mobile menu

function mobileMenuInit() {
	const burderSelector = ".header__burger-wrapper";
	const burderActiveClass = "header__burger-wrapper_active";
	const mobileMenuSelector = ".mobile-menu";
	const mobileMenuActiveClass = "mobile-menu_active";
	const htmlOverflowClass = "overflow-off";
	const htmlSelectorClass = "html";

	$(burderSelector).click(function () {
		$(mobileMenuSelector).toggleClass(mobileMenuActiveClass);
		$(burderSelector).toggleClass(burderActiveClass);
		$(htmlSelectorClass).toggleClass(htmlOverflowClass);
	});
}

//validation

function validationInit() {
	$(".contact__input_tel").mask("+38 (999) 999 9999");
}

//document ready

$(document).ready(function () {
	accordeonInit();
	sliderInit();
	shopsSliderInit();
	mobileMenuInit();
	validationInit();
});
