$(document).ready(function () {
  const $menuToggle = $(".menu-toggle");
  const $mobileNav = $(".mobile-nav");
  const $icon = $menuToggle.find("i");

  $menuToggle.click(function () {
    $mobileNav.toggleClass("active");
    $icon.toggleClass("fa-bars fa-xmark");
  });

  // Close the mobile nav when a link is clicked
  $mobileNav.find("li").click(function () {
    $mobileNav.removeClass("active");
    $icon.removeClass("fa-xmark").addClass("fa-bars");
  });
});
