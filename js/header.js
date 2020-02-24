document.querySelector('.header__menu-icon-wrapper').onclick = function () {
    document.querySelector('.header__menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header__menu-item').classList.toggle('header__menu-item--mobil');
    document.querySelector('.header__item-wrapper').classList.toggle('header__item-wrapper--border');
};
