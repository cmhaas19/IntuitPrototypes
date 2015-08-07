
(function (module) {

    var fullHeight = function () {
        
        return {
            link: function (scope, element, attrs) {

        		var $footer = $(".prototype-footer"),
        			$window = $(window);

    			var setHeight = function(){
					var footerHeight = $footer.height(),
						windowHeight = $window.height();

					element.height(windowHeight - footerHeight);
    			};

    			$window.on("resize", setHeight);

    			setHeight();
	        }
        }        
    };

    module.directive("fullHeight", fullHeight);

}(angular.module("intuit.Directives")));