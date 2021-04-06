const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');
const dropdown = document.querySelector('#lessons-dropdown');

let showMenu = false;

const toggleMenu = () => {
	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		navItems.forEach(item => item.classList.add('open'));

		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach(item => item.classList.remove('open'));

		showMenu = false;
	}
	console.log(showMenu, hamburger.classList);
};

menuBtn.addEventListener('click', toggleMenu);

let showDropdown = false;

const toggleDropdown = () => {
	if (!showDropdown) {
		dropdown.classList.add('dropdown-open');
		showDropdown = true;
	} else {
		dropdown.classList.remove('dropdown-open');
		showDropdown = false;
	}
	console.log(showDropdown, dropdown.classList);
};

dropdown.addEventListener('click', toggleDropdown);
