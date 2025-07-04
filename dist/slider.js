var slider = tns({
  container: ".testimonials__slider",
  items: 3,

  autoplay: true,
  navPosition: "bottom",
  speed: 200,
  autoplayButtonOutput: false,
  nav: true,
  controls: false,
  responsive: {
    12500: {
      items: 3,
    },
    200:{
        items:1
    }
  },
});
