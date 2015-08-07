
(function (module) {

    var fullHeight = function () {
        
        return {
            link: function (scope, element, attrs) {

        		var $footer = $(".prototype-footer"),
        			$window = $(window),
                    currentWindowHeight = 0;

    			var setHeight = function(){
					var footerHeight = $footer.height(),
						windowHeight = $window.height();

                    if(currentWindowHeight == windowHeight)
                        return;

                    currentWindowHeight = windowHeight;

					element.height(windowHeight - footerHeight);
    			};

    			$window.on("resize.fh", setHeight);

    			setHeight();

                scope.$on('$destroy', function () {
                    $window.off("resize.fh");
                });
	        }
        }        
    };

    module.directive("fullHeight", fullHeight);

}(angular.module("intuit.Directives")));