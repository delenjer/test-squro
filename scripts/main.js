'use strict';
/*eslint-disable */
$(document).ready(function() {


  $('.nav__link').click(function() {
    $('.sub-menu').slideUp();
    $(this).next().slideDown( "slow" );

    $('.nav__item a').removeClass('active-link');
    $(this).addClass('active-link');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".nav__link").length) {
      $('.sub-menu').slideUp();
      $('.nav__item a').removeClass('active-link');
    }
    e.stopPropagation();
  });

  $('.entry__mobile-title').click(function() {
    $('.entry__btn').slideToggle();
  });

  $('.burger-menu').click(function() {
    $('.menu-box').toggleClass('menu-box-visible');

    $('.close-burger, .show-burger').toggleClass('hide-burger');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".burger-menu").length
        && !$(e.target).closest(".menu-box").length) {
      $('.menu-box').removeClass('menu-box-visible');
      $('.show-burger').removeClass('hide-burger');
      $('.close-burger').addClass('hide-burger');
    }
    e.stopPropagation();
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      $('.menu-box').removeClass('menu-box-visible');
      $('.show-burger').removeClass('hide-burger');
      $('.close-burger').addClass('hide-burger');
  });

  $('.select-leng').styler();
});

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

new WOW().init();
