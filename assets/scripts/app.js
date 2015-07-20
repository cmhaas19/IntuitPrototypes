(function($){
	
	// Initialize the page
	$(function(){

		// Support header change on scroll
		var $window = $(window),
			$header = $("#page-header"),
			$clone = $header.clone(true),
			$slideNav = $("#slide-nav");

		$clone.addClass("clone").hide().appendTo("body");
        
        $window.on("scroll", function () {
            
            if ($window.scrollTop() < $header.height())
                $clone.fadeOut("fast");
        });

        $window.on("scrollstop", function () {

            if ($window.scrollTop() < $header.height())
                return;

            if (!$clone.is(":visible"))
                $clone.css({ top: $clone.height() * -1 }).show().animate({ top: 0 }, 400);
        });

		// Handle inter-page navigation
		$('body').on("click", "[data-nav]", function(e){
			e.preventDefault();

			var $link = $(e.currentTarget),
				$target = $($link[0].hash);

			if($target.length){
				scrollTo($target);
			}
		});

		var queue = [];

		$slideNav.find("a").on("click", function(e){
			e.preventDefault();

			var $link = $(e.currentTarget),
				$target = $($link[0].hash);

			queue.push($target);

			$slideNav.trigger("close");
		});

		// Init mobile menu
		$slideNav
			.mmenu()
			.on("closed.mm", function(){
				var $target = queue.pop();

				if($target)
					scrollTo($target);
			});

		// Ensure Copyright year is up-to-date
		$("#year").text(new Date().getFullYear().toString());

	});

	function scrollTo($target){
		var position = $target.offset().top,
			$header = $("#page-header"),
			headerHeight = $header.height();

        $("html,body").animate({
            scrollTop: position - headerHeight
        }, 400);
            
	}

})(jQuery);