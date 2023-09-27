const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: true,
  //centerMode: true,
  autoplay: true,
  arrows: true,
  rows: 1,
  //lazyLoad: progressive,
  autoplaySpeed: 9000,
  responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          rows: 1,
        }
      },

      {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            rows: 1,
          }
        },
  ]
};

export default settings;