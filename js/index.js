//swiper
const screenWidth = window.screen.width;

new Swiper('.slider__left', {
    loop: true,
    direction: (screenWidth <= 1540)? "horizontal" : "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 5000,
    allowTouchMove: false,
});
new Swiper('.slider__right', {
    loop: true,
    direction: (screenWidth <= 1540)? "horizontal" : "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 3000,
    allowTouchMove: false,
});
new Swiper('.slider__middle', {
    loop: true,
    direction: (screenWidth <= 1540)? "horizontal" : "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 5000,
    allowTouchMove: false,
});
//header full header
const onChangeLanguage = document.querySelector('.header__options_btn-language');
const langText = document.querySelector('.header__options_btn-language .language');
const languages = document.querySelector('.header__options_languages');
const chooseLang = document.querySelectorAll('.header__options_languages ul li');

onChangeLanguage.addEventListener('click', () => {
    languages.classList.add('header__options_languages-active')
})
chooseLang.forEach(btn => {
    btn.addEventListener('click', () => {
        chooseLang.forEach(btn => {
            btn.style.backgroundColor = '#110A1D'
        })
        btn.style.backgroundColor = '#478BF9'
        languages.classList.remove('header__options_languages-active');
        langText.innerHTML = btn.getAttribute('lang');
    })
})
//minimize header
const onChangeBurgerLang = document.querySelector('.burgerMenu__language');
const burgerLanguages = document.querySelector('.burgerMenu__language_list')
const chooseLangBurger = document.querySelectorAll('.burgerMenu__language_list ul li');

onChangeBurgerLang.addEventListener('click', () => {
    burgerLanguages.classList.add('burgerMenu__language_list-active')
})

chooseLangBurger.forEach(btn => {
    btn.addEventListener('click', () => {
        chooseLangBurger.forEach(btn => {
            btn.style.backgroundColor = '#110A1D'
        })
        btn.style.backgroundColor = '#478BF9'
        burgerLanguages.classList.remove('burgerMenu__language_list-active');
    })
})
//burgerMenu
const openMenu = document.querySelector('.burgerMenu__burger');
const burgerMenu = document.querySelector('.burgerMenu__nav');
const burgerNavItems = document.querySelectorAll('.burgerMenu__nav_item');

openMenu.addEventListener('click', () => {
    if(burgerMenu.classList.contains('burgerMenu__nav-active')){
        openMenu.classList.remove('burgerMenu__burger-open')
        burgerMenu.classList.remove('burgerMenu__nav-active')
    }else {
        burgerMenu.classList.add('burgerMenu__nav-active')
        openMenu.classList.add('burgerMenu__burger-open')
    }
})
burgerNavItems.forEach(btn => {
    btn.addEventListener('click', () => {
        openMenu.classList.remove('burgerMenu__burger-open')
        burgerMenu.classList.remove('burgerMenu__nav-active')
    })
})