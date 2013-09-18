Meteor.startup(function() {
  // if(Meteor.user() && Session.get('shows_loaded')) {
  //   var userShows = Meteor.user().shows;

  //   _.each(userShows, function(val, key) {
  //     //if(!Shows.findOne(key)) Meteor.users.update({_id: Meteor.userId()}, {$});

  //     console.log(val.name + ', ' + key);

  //     var showById = Shows.findOne(key),
  //         name = val.name.toString(),
  //         showByName = Shows.findOne({name: ""});

  //     console.log(showById);
  //     console.log(name);
  //     console.log(Shows.findOne({name: "Doctor Who (2005)"}));

  //     if(!showById && showByName) {
  //       // @TODO convertion code
  //     } else if(!showById) {
  //       Meteor.users.update({_id: Meteor.userId()}, {$set: {'shows': _.omit(userShows, key) }});
  //     }
  //   });
  // }
});

Meteor.Spinner.options.top = '20px';