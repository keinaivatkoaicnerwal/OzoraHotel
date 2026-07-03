var swiper1 = new Swiper(".mySwiper1", {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

  var swiper2 = new Swiper(".mySwiper2", {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 70,
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper4 = new Swiper(".mySwiper4", {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 70,
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination4",
      clickable: true,
    },
  });

      var swiper5 = new Swiper(".mySwiper5", {
        direction: "vertical",
        spaceBetween: 20,
        autoplay: {
          delay: 2100,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination5",
          clickable: true,
        },
      });