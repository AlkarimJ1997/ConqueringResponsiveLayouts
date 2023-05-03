const button = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

button.addEventListener('click', () => {
	navList.classList.toggle('nav__list--visible');
});
