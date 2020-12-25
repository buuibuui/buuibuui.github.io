// const windowSize = window.innerWidth;

// const breakpPointA = 768;
// const breakpPointB = 1024;

// const isMobileSize = windowSize < breakpPointA;
// const isTabletSize = windowSize >= breakpPointA && windowSize < breakpPointB;
// const isPcSize =  windowSize <= breakpPointB;

var mySwiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: true,
	keyboard: true,
	speed: 1000,

	// Navigation arrows
	navigation: {
		nextEl: '.next1',
		prevEl: '.prev1',
	},

	//Page nation
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},

	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	}
})

var mySwiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	keyboard: true,
	speed: 1000,
	centeredSlides: true,
	slidesPerView: 1.5,
	spaceBetween: 40,

	// Navigation arrows
	navigation: {
		nextEl: '.next2',
		prevEl: '.prev2',
	},

	// autoplay: {
	// 	delay: 3000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: true,
	// }
})


// if (isPcSize) {
// 	spaceBetween: 60
// } else {
// 	spaceBetween: 40
// }