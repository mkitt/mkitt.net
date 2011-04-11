
(function($) {
  var path = window.location.pathname;
  var nav = $('#header_nav li a');
  nav.each(function (item) {
    var link = nav[item];
    if (link.pathname === path) {
      $(link).addClass('active');
    }
  });
}(jQuery));

