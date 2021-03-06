'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGalleryThumbnail', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-thumbnail.html'),
      replace: true,
      controller: function() {},
      controllerAs: 'cinemagraphThumbnailCtrl',
      bindToController: true, // only using ctrl scope
      require: '^cinemagraphGallery', // note-list has to be there as an immediate parent for this to work
      scope: {
        title: '@',
        image: '@',
        id: '@'
      },
      link: function($scope, $elem, $attribute, $controller) { // controller is taken from the require above
        $scope.cinemagraphThumbnailCtrl.changeFullsizeImage = $controller.changeFullsizeImage;
      }
    };
  });
};
