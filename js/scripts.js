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

    $(".video_box").on("click",function(){
    	var video = $(this).find("video").get(0);

    	if (!$(this).hasClass("playing")) {
    		video.play();
    		$(this).addClass("playing");
    	}


    	// if (video.paused) {
    	// 	video.play();
    	// 	$(this).addClass("playing");
    	// }
    	// else {
    	// 	video.pause();
    	// 	$(this).removeClass("playing");
    	// }

    });


})
