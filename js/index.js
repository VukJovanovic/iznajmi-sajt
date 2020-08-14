import { showSidebar, hideSidebar, showOption, hideOption } from './animations';

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

// **************
// Options functionality
// **************
const landingOption = document.querySelector('#optionLanding');
const landingOptionBody = document.querySelector('#optionLandingBody');

if (landingOption) {
	landingOption.addEventListener('click', (e) => {
		e.preventDefault();

		if (landingOption.classList.contains('optionActive')) {
			hideOption(landingOptionBody);
			landingOption.classList.remove('optionActive');
		} else {
			showOption(landingOptionBody);
			landingOption.classList.add('optionActive');
		}
	});
}
