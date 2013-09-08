Template.home.shows = function() {
  if(!Meteor.user()) {
    throw new Meteor.Error(401, 'Unauthorized');
    return false;
  }

  var shows = [];

  _.each(Meteor.user().shows, function(val, key, list) {

    shows.push(_.extend(list[key], Shows.findOne({_id: key})));

  });

  return shows;
};

Template.home.searchableName = function() {
  return this.name.toLowerCase();
};

Template.home.helpers({
  hasShows: function() {
    return !_.isEmpty(Meteor.user().shows);
  }
});