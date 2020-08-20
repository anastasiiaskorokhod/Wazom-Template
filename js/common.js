(function ($) {

	$(document).ready(function () {

		function promoSlider() {

			const slider = $('.promo-slider')

			if (!slider.length) return

				const prev = $('.promo-slider__prev')
				const next = $('.promo-slider__next')
				const dots = $('.promo-slider__dots')
	
				slider.slick({
					speed: 2000,
					fade: true,
					autoplay: true,
					prevArrow: prev,
					nextArrow: next,
					dots: true,
					appendDots: dots,
				})

		}

		promoSlider()

		function postsSlider() {

			const slider = $('.posts-slider')

			if (!slider.length) return

				const prev = $('.posts-slider__prev')
				const next = $('.posts-slider__next')

				console.log(prev)
	
				slider.slick({
					infinite: true,
					speed: 500,
					prevArrow: prev,
					nextArrow: next,
					slidesToShow: 3,
					slidesToScroll: 3,
				})

		}

		postsSlider()
	})

}(jQuery))