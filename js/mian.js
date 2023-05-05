// slick slider start

$(".categorySlider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
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

// slick slider end

$(".Review").slick({
  arrows: false,
  dots: true,
});

// make  mixitup start

const box1 = $("#box1");
const box2 = $("#box2");
const box3 = $("#box3");
const box4 = $("#box4");
const box5 = $("#box5");
const box6 = $("#box6");

function slideUpAll() {
  box1.slideDown("1000");
  box2.slideDown("1000");
  box3.slideDown("1000");
  box4.slideDown("1000");
  box5.slideDown("1000");
  box6.slideDown("1000");
}
$(document).ready(function () {
  $("#btn1").click(function () {
    slideUpAll();
  });
  $("#btn2").click(function () {
    slideUpAll();
    box1.slideUp("10000");
    box3.slideUp("10000");
    box6.slideUp("10000");
    box4.slideUp("10000");
  });

  $("#btn3").click(function () {
    slideUpAll();
    box2.slideUp("10000");
    box5.slideUp("10000");
  });
  $("#btn4").click(function () {
    slideUpAll();
    box5.slideUp("10000");
    box1.slideUp("10000");
    box3.slideUp("10000");
  });
});
// make  mixitup end

//
//
//
//

const Collapse = document.getElementById("Collapse");

const menuUL = document.getElementById("menuUL");

Collapse.addEventListener("click", () => {
  menuUL.classList.toggle("hidden");
});

// scroll background color
$(window).scroll(function () {
  $("nav").toggleClass("addBg", $(this).scrollTop() > 50);
});

document.getElementById("accordion").addEventListener("click", () => {
  const OffOn = document.getElementById("OffOn");
  OffOn.classList.toggle("hidden");
  // OffOn.classList.toggle("opacity-0");
});
