/* 

This is a email masking script to prevent spam. It's implemented like this:

href="javascript:sendMailTo('booking','haymaker','tv')" 

*/
function sendMailTo(name, company, domain) {
  locationstring = 'mai' + 'lto:' + name + '@' + company + '.' + domain;
  window.location.replace(locationstring);
}

$(function(){

    $(".better_together .block").addClass("visible");

    // Init Skrollr
    skrollr.init({
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        forceHeight: false
    });


})
