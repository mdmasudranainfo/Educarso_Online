const Collapse = document.getElementById("Collapse");

const menuUL = document.getElementById("menuUL");

Collapse.addEventListener("click", () => {
  menuUL.classList.toggle("hidden");
});

$(window).scroll(function () {
  $("nav").toggleClass("addBg", $(this).scrollTop() > 50);
});
