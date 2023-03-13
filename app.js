console.log("Hello World!");

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: "true",
  },
});