angular.
	module('websiteApp').
	component('photographyList', {
		template:
			'<div ng-reapeat="photography in $ctrl.photographies">' +
				'<div class="page-header">' +
	  				'<h1> Photography <small></small></h1>' +
				'</div>' +
				'<div class="row">' +
	 				'<div class="col-xs-6 col-md-4">' +
	 	 				'<div class="hi">' +
		    				'<a href="#{{photography.name}}" class="thumbnail">' +
	      					'<img ng-src="img/photography/funyei/fun_1.png" alt="{{photography.name}}"></a>' +
	   									/*ADD GALLERY LATER*/
	  					'</div>' +
	  				'</div>' +
				'</div>' +
			'</div>',
		controller: ['$http', function PhotographyListController($http){
			var self = this;
			self.orderProp = 'data';

			$http.get('json/Photography.json').then(function(response)){
				self.Photography = response.data;
			}
		}]
	});