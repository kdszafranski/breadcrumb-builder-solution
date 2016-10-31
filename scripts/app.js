$(document).ready(function() {
  // our string of crumbs
  var trail = "";

  // Nav Events
  $(".expand-nav").on("click", toggleNav);

  // Toggles visibility of top-level navigation items
  function toggleNav(event) {
    event.preventDefault();

    // Reset all navs
    if($(this).hasClass("top-level")) {
      $("#breadcrumbs").empty();
      hideTopNavs();
      hideSubNavs();
    }

    // open this top level
    $(this).parent().show();
    // open this sub nav
    $(this).parent().next().show();

    // grab element text
    trail = $(this).text();

    // add dept string at end of breadcrumbs
    $("#breadcrumbs").append('<li>' + trail + '</li>');

    // Update department Heading
    $("#department").text(trail);
  }

  function hideTopNavs() {
    $(".top-level").children().first().hide();
  }

  function hideSubNavs() {
    $(".sub-nav").hide();
  }

});
