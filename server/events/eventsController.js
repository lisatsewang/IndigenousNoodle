var Events = require('../db/db').Events;
var db = require('../db/db.js');

var getEvents = function(req, res) {
  var city = req.params.city.toLowerCase();
  var averageRating = 0;
  var allEventsData = [];
  var eventData = {};
  
  // Events.findAll({
  //   where: { city: city },
  // }).then(function(events) {
  //     res.json(events);
  //   });


  Events.findAll({ where: { city: city }, raw:true})
    .then(function(events) {

      events.forEach(function(event, index) {
        // count numbers of review
        db.Reviews.count({ where: {eventId: event.id} })
          .then(function(c) {
            // get sum of the reviews
            db.Reviews.sum('rating', { where: {eventId: event.id} })
            .then(function(s) {
              // calculate average rating
              if (c !== 0) {
                averageRating = Math.round(s / c);
              } else {
                averageRating = 0;
              }
              // save rating to eventData and push to allEventsData
              event.rating = averageRating;
              allEventsData.push(event);
              // send res when all events info saved
              if (index === events.length - 1) {
                res.send(allEventsData);
              }
            })
          })
          .catch(function(err) {
            console.log("ERROR coutning EVENT === ", err);
            res.send(500,err);
          });

      })
    })
    .catch(function(err) {
      console.log("getEvents err === ", err);
      res.send(500,err);
    });
};

var getEvent = function(req, res){
  var eventData = {};
  var averageRating = 0;

  db.Events.findOne({ where: {id: req.body.id} })
  .then(function(ev){
    eventData = ev;

    // count numbers of review
    db.Reviews.count({ where: {eventId: req.body.id} })
      .then(function(c) {
        // get sum of the reviews
        db.Reviews.sum('rating', { where: {eventId: req.body.id} })
        .then(function(s) {
          // calculate average rating
          if (c === 0) {
            averageRating = 0;
          } else {
            averageRating = Math.round(s / c);
          }

          eventData.dataValues.rating = averageRating;
          res.send(eventData);
        })
      })
      .catch(function(err) {
        console.log("ERROR coutning EVENT === ", err);
        res.send(500,err);
      });

  }).catch(function(err){
    console.log("ERROR GETTING EVENT === ", err);
    res.send(500,err);
  });

};

module.exports = {
  getEvents: getEvents,
  getEvent: getEvent
};
