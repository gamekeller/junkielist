Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};
  user.shows = {};

  // if this is the first user ever, make them an admin
  if(!Meteor.users.find().count())
    user.isAdmin = true;

  return user;
});