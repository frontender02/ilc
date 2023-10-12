import mobileNav from './modules/mobile-nav.js';
import showTabs from './modules/tabs.js';
import ScrollReveal from 'scrollreveal';

// Header mobile
mobileNav();

// Tabs rates
showTabs('.tabs-rates__btn', '.tabs-rates__body');

// Scroll animation
ScrollReveal({
    distance: '50px',
    duration: 1000,
    // reset: true
})

ScrollReveal().reveal(`.advantages, .item-become-partners`, {
	origin: 'top',
})
ScrollReveal().reveal(
	`.home__content, .online-team__content, .service__help, .forecasts__title`,
	{
		origin: 'left',
	}
)
ScrollReveal().reveal(
	`.footer, .service__list, .online-team__list, .service__content`,
	{
		origin: 'bottom',
	}
)

ScrollReveal().reveal(`.title-section, .forecasts__list`, {
	distance: '0px',
	opacity: 0,
	scale: 0.85,
	reset: true
})