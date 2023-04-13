// slick start

$(".page3Testimonial").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// slick end

const Collapse = document.getElementById("Collapse");

const menuUL = document.getElementById("menuUL");

Collapse.addEventListener("click", () => {
  menuUL.classList.toggle("hidden");
});
