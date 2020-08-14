// sidebar animations
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar__close');
const sidebarNavItems = [
	...document.querySelectorAll('.sidebarNavigation__item'),
];

const showSidebar = () => {
	TweenMax.to(sidebar, 0.5, { display: 'flex', opacity: 1 });
	TweenMax.to(sidebarClose, 0.5, { y: '0', opacity: 1, delay: 0.4 });

	let delay = 0.5;
	sidebarNavItems.forEach((item) => {
		TweenMax.to(item, 0.5, { x: '0', opacity: 1, delay });
		delay += 0.1;
	});
};

const hideSidebar = () => {
	let delay = 0;
	sidebarNavItems.forEach((item) => {
		TweenMax.to(item, 0.5, { x: '-20px', opacity: 0, delay });
		delay += 0.1;
	});
	TweenMax.to(sidebarClose, 0.5, { y: '-20', opacity: 0, delay });
	TweenMax.to(sidebar, 0.5, {
		opacity: 0,
		display: 'none',
		delay: delay + 0.3,
	});
};

// options animations
const showOption = (body) => {
	TweenMax.to(body, 0.5, {
		display: 'block',
		height: 'max-content',
		opacity: 1,
	});
};
const hideOption = (body) => {
	TweenMax.to(body, 0.5, { display: 'none', height: '0', opacity: 0 });
};

export { showSidebar, hideSidebar, showOption, hideOption };
