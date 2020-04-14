'use strict';

// eslint-disable-next-line no-unused-vars,no-undef
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuShow = () => {
  const showMenu = document.querySelector('.show-menu');
  const hideMenu = document.querySelector('.close-menu');
  const nav = document.querySelector('.nav');
  const navItem = document.querySelector('.nav__list');

  showMenu.addEventListener('click', () => {
    nav.classList.add('show-nav');
    nav.classList.remove('hide-nav');
  });

  hideMenu.addEventListener('click', () => {
    nav.classList.add('hide-nav');
    nav.classList.remove('show-nav');
  });

  hideMenu.addEventListener('click', () => {
    nav.classList.add('hide-nav');
    nav.classList.remove('show-nav');
  });

  navItem.addEventListener('click', () => {
    nav.classList.remove('show-nav');
    nav.classList.add('hide-nav');
  });
};

menuShow();
