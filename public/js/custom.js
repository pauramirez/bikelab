//Active menu item on menu click
$(document).ready(function() {
	// get current URL path
	var pathname = window.location.pathname;
  // change to get href name
  if (pathname.length!==1){
    pathname = pathname.substring(1,pathname.length);
    console.log(pathname);
  }
  // add active class to current item
	$('.navbar-nav li a[href="'+pathname+'"]').parent().addClass('active');
})
