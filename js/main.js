let burger = document.querySelector('.header__burger');
let aside = document.querySelector('.aside');
let close =document.querySelector('.aside__close')
burger.addEventListener('click', function(){
	aside.classList.add('active');
	close.addEventListener('click', function(){
		aside.classList.remove('active');
	});
});