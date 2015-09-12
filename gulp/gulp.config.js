module.exports = {
  build_dir: 'build',

  app_files: {
    js: ['public/**/*.js', 'public/**/*.html', 'public/**/*.css', 'server/**/*.js', '!public/lib/**/*'],
    tpl_src: ['./build/public/lib/socket.io-client/socket.io.js',
      './build/public/lib/jquery/dist/jquery.min.js',
      './build/public/lib/angular/angular.min.js',
      './build/public/lib/angular-simple-logger/dist/index.js',
      './build/public/lib/angular-mocks/angular-mocks.js',
      './build/public/lib/angular-aria/angular-aria.min.js',
      './build/public/lib/angular-animate/angular-animate.min.js',
      './build/public/lib/angular-material/angular-material.min.js',
      './build/public/lib/webcomponentsjs/webcomponents-lite.min.js',
      './build/public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      './build/public/lib/angular-ui-router/release/angular-ui-router.min.js',
      './build/public/lib/lodash/lodash.min.js',
      './build/public/lib/angular-google-maps/dist/angular-google-maps.min.js',
      './build/public/lib/gm.datepicker-multi-select/dist/gm.datepickerMultiSelect.min.js',
      './build/public/signupLogin/signupLoginController.js',
      './build/public/factories/factories.js',
      './build/public/app.js',
      './build/public/services/data.service.js',
      './build/public/services/attachTokenService.js',
      './build/public/services/eventsService.js',
      './build/public/services/signupLoginService.js',
      './build/public/services/usersAndEventsService.js',
      './build/public/services/usersService.js',
      './build/public/services/reviewService.js',
      './build/public/services/googleMapService.js',
      './build/public/services/filteredService.js',
      './build/public/services/messagesService.js',
      './build/public/components/navBar/navBarDirective.js',
      './build/public/homepage/homepageController.js',
      './build/public/eventDetailPage/eventDetailController.js',
      './build/public/eventsDisplayPage/eventsDisplayController.js',
      './build/public/eventsDisplayPage/eventListController.js',
      './build/public/createEventPage/createEventController.js',
      './build/public/eventManager/eventManagerController.js',
      './build/public/profilePage/profilePageController.js',
      './build/public/eventManager/eventManagerJoinedController.js',
      './build/public/eventManager/eventManagerHostedController.js',
      './build/public/eventManager/eventReviewController.js',
      './build/public/userProfile/userProfileController.js',
      './build/public/messagePage/messageController.js',
      './build/public/eventsDisplayPage/mapsController.js',
      './build/public/messageListPage/messageListController.js',
      './build/public/lib/iron-icons/iron-icons.html',
      './build/public/lib/iron-icon/iron-icon.html',
      './build/public/lib/paper-button/paper-button.html',
      './build/public/lib/paper-icon-button/paper-icon-button.html',
      './build/public/lib/paper-input/all-imports.html',
      './build/public/lib/iron-input/iron-input.html',
      './build/public/lib/polymer/polymer.html',
      './build/public/lib/angular-material/angular-material.min.css',
      './build/public/assets/css/**/*.css',
      './build/public/lib/fontawesome/css/font-awesome.min.css', 
      './build/public/lib/bootstrap/dist/css/bootstrap.min.css']
  }
};