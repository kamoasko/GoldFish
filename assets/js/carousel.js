"use strict";

//Header slider

$(".header__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  variableWidth: true,
  prevArrow: ".prev__btn",
  nextArrow: ".next__btn",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: "",
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "",
        nextArrow: "",
        dots: true,
      },
    },
  ],
});

// Sale sllider

$(".sale__content").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 800,
  prevArrow: ".prev",
  nextArrow: ".next",

  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 875,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Offer slider

$(".offer__content").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 800,
  prevArrow: ".offer__prev",
  nextArrow: ".offer__next",
  responsive: [
    {
      breakpoint: 1164,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//events slider

$(".events__content").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 900,
  arrows: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
      },
    },
  ],
});
