const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');
const mybutton = document.getElementById('topBtn');

let showMenu = false;

function closeMenuOnBodyClick(event) {
	const path = event.composedPath();
	const navObj = {
		'menu-btn': 0,
		'menu-btn-burger': 0,
		'menu-nav': 0,
		'menu-nav-link': 0
	};
	if (path.some(elem => navObj[elem.className] !== undefined)) {
		console.log('hello world');
		return;
	}
	closeMenu();
}

function openMenu() {
	hamburger.classList.add('open');
	nav.classList.add('open');
	menuNav.classList.add('open');
	navItems.forEach(item => item.classList.add('open'));

	showMenu = true;

	html.addEventListener('click', closeMenuOnBodyClick);
}

function closeMenu() {
	hamburger.classList.remove('open');
	nav.classList.remove('open');
	menuNav.classList.remove('open');
	navItems.forEach(item => item.classList.remove('open'));

	showMenu = false;

	html.removeEventListener('click', closeMenuOnBodyClick);
}

const toggleMenu = () => {
	if (!showMenu) {
		openMenu();
	} else {
		closeMenu();
	}
};

menuBtn.addEventListener('click', toggleMenu);

const scrollFunction = () => {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		mybutton.style.visibility = 'visible';
		mybutton.style.opacity = '1';
		mybutton.style.transitionDelay = '0s';
	} else {
		mybutton.style.visibility = 'hidden';
		mybutton.style.opacity = '0';
		mybutton.style.webkitTransition =
			'visibility 0s linear 0.5s, opacity 0.5s linear';
	}
};

const topFunction = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

window.onscroll = () => {
	scrollFunction();
};
