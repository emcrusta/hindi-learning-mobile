const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');
const mybutton = document.getElementById('topBtn');

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

const scrollFunction = () => {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
};

const topFunction = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

window.onscroll = () => {
	scrollFunction();
};
