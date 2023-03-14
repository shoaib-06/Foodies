console.log("Hello World!");

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: "true",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// < !--Count -->

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 500, 1000)
  counter("count2", 0, 1000, 1000)
  counter("count3", 0, 2000, 500)
  counter("count4", 0, 2175, 500)
});

// < !--Active Nav -->

let nav = document.querySelector(".nav-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}

// < !-- Close Nav -->
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})