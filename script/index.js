// function toggleMobileMenu(menu) {
//     menu.classList.toggle('active');
//     menu.classList.toggle('open');
// }

$(function() {
  $(".toggle-menu").click(function() {
    $(this).toggleClass('active');
    $('.menu-drawer').toggleClass('open');
  });
});