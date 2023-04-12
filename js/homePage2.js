// slick slider testimonial start

$(".testimonial").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,

  // appendDots: $(".custom-dots"),
  // customPaging: function (slider, i) {
  //   return '<a href="#" class="dot">' + (i + 1) + "</a>";
  // },
});
// slick slider testimonial end

const Collapse = document.getElementById("Collapse");

const menuUL = document.getElementById("menuUL");

Collapse.addEventListener("click", () => {
  menuUL.classList.toggle("hidden");
});

//

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
    box2.slideUp("30000");
    box5.slideUp("30000");
  });
  $("#btn4").click(function () {
    slideUpAll();
    box5.slideUp("10000");
    box1.slideUp("10000");
    box3.slideUp("10000");
  });
});
