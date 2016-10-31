$(document).ready(function() {
  // our string of crumbs
  var trail = "";

  // Nav Events
  $(".expand-nav").on("click", toggleNav);

  // Toggles visibility of top-level navigation items
  function toggleNav(event) {
    event.preventDefault();

    $(this).parent().next().toggle();

    trail = $(this).text();
    $("#breadcrumbs").append('<li>' + trail + '</li>');

    // Update department Heading
    $("#department").text(trail);
  }

  function loadOne() {
    event.preventDefault();
  }

});
