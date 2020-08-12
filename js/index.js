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
