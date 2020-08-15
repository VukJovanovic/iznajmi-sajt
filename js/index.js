import _ from 'underscore';
import jump from 'jump.js';
import { showSidebar, hideSidebar } from './animations';

// Mobile navigation
const burgerButton = document.querySelector('.header__burger');
const sidebarCloseBtn = document.querySelector('.sidebar__close');

if (burgerButton) {
	burgerButton.addEventListener('click', (e) => {
		e.preventDefault();
		showSidebar();
	});
}

if (sidebarCloseBtn) {
	sidebarCloseBtn.addEventListener('click', (e) => {
		e.preventDefault();
		hideSidebar();
	});
}

// scroll top button functionality
const floatingBtn = document.querySelector('.floatingButton');
const checkScroll = _.throttle(() => {
	// Detect scroll position
	let scrollPosition = Math.round(window.scrollY);

	// Show button that scrolls on top of the page when you click it
	if (scrollPosition > 50) {
		floatingBtn.classList.add('floatingButtonShow');
	} else {
		floatingBtn.classList.remove('floatingButtonShow');
	}
}, 300);

window.addEventListener('scroll', checkScroll);

if (floatingBtn) {
	floatingBtn.addEventListener('click', (e) => {
		e.preventDefault();
		jump('.container');
	});
}
