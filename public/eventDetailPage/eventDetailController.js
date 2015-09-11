(function(){

  angular.module("app.eventDetail", [])
    .controller('eventDetailController', eventDetailController);
  eventDetailController.$inject = ['$state', 'eventsService', 'getEvent'];

  function eventDetailController($state, eventsService, getEvent){

    var vm = this;
    vm.join = join;

    vm.details = getEvent.data;


    function join(time){

      var eventData = vm.details;
      eventData.time = time;
      eventsService.joinEvent(eventData)
      .then(function(data){
        // if (!data.data === 'joiningOwnEvent') {
          $state.go("homepage");
        // }
      }, function(err){
        console.log("ERROR === ", err);
      });
    }

    
  }

})();
