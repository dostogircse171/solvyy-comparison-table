
$("ul").on("click", "li", function () {
  var pos = $(this).index() + 2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child(' + pos + ')').css('display', 'table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});
// Initialize the media query
var mediaQuery = window.matchMedia('(min-width: 640px)');
// Add a listen event
mediaQuery.addListener(doSomething);

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $('.sep').attr('colspan', 5);
  } else {
    $('.sep').attr('colspan', 2);
  }
}
// On load
doSomething(mediaQuery);