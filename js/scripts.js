/* 

This is a email masking script to prevent spam. It's implemented like this:

href="javascript:sendMailTo('booking','haymaker','tv')" 

*/
function sendMailTo(name, company, domain) {
  locationstring = 'mai' + 'lto:' + name + '@' + company + '.' + domain;
  window.location.replace(locationstring);
}



function fadeinElements() {
    /* Check the location of each desired element */
    $('.fadeinElement').each(function(i) {

        var height_of_object = $(this).outerHeight();
        var bottom_of_object = $(this).offset().top + height_of_object;
        var middle_of_object = bottom_of_object - (height_of_object/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > middle_of_object) {

            $(this).addClass("visible");

        }
        else {
        	//$(this).removeClass("visible");
        }

    });
}



$(function(){

	//parallax();
	fadeinElements();

	scroll_window.bind('scroll', function(){
		//parallax();
		fadeinElements();
	});

    // Init Skrollr
    skrollr.init({
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        forceHeight: false
    });




})




