isAdminById = function(userId) {
  var user = Meteor.users.findOne(userId);
  return user && isAdmin(user);
}

isAdmin = function(user) {
  if(!user || typeof user === 'undefined')
    return false;
  return !!user.isAdmin;
}

userHasShows = function() {
  if(!Meteor.user())
    return false;
  return !_.isEmpty(Meteor.user().shows);
}

userHasShow = function(showId) {
  if(!Meteor.user() || !showId || typeof showId === 'undefined')
    return false;
  return _.has(Meteor.user().shows, showId);
}