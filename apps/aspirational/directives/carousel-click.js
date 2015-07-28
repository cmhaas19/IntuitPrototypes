
(function (module) {

    var carouselClick = function ($timeout) {
        
        return {
            link: function (scope, element, attrs, controllers) {

            	var $document = $(document);

            	$timeout(function(){

        			var carousel = element.find('.carousel')[0];
	         		var carouselCtrl = angular.element(carousel).isolateScope();

	         		$document.on("keydown", function(e){
		            	console.log(e.which);
	            		if(e.which == 37)
			            	carouselCtrl.prev();

			            if(e.which == 39)
			            	carouselCtrl.next();
		            });

            	}, 500);
            	
	            
	            /*
	            var ctrl = controllers[0];
	            //console.log(ctrl);

	            $(document).on("keydown", function(e){
	            	//console.log(e.which);
            		if(e.which == 37 || e.which == 39){
		            	e.preventDefault();

		            	var index = ctrl.indexOfSlide(ctrl.currentSlide);

		            	if(index == (ctrl.slides.length - 1)){
		            		index = 0;
		            	} else {
		            		index++;
		            	}

		            	console.log("current slide is " + index);

		            	ctrl.select(ctrl.slides[index]);
		            }
	            });
				*/
	        }
        }        
    };

    module.directive("carouselClick", ['$timeout', carouselClick]);

}(angular.module("intuit.Directives")));