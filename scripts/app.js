$(document).ready(function() {
  console.log('First?');

  // Nav Events
  $(".top-nav").on("click", toggleNav);

  function toggleNav(event) {
    event.preventDefault();
    console.log('clicked');
    console.log($(this).parent().siblings().first());
    $(this).parent().next().toggle();
  }

  function loadOne() {
    event.preventDefault();

  }
});
