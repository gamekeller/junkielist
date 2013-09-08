Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};
  user.shows = {};
  // users start pending and need to be invited
  user.isVerified = false;

  // if this is the first user ever, make them an admin and verify them
  if(!Meteor.users.find().count()) {
    user.isAdmin = true;
    user.isVerified = true;
  }

  return user;
});