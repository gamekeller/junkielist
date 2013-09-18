Meteor.publish('shows', function() {
  return Shows.find();
});

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId);
});

Meteor.publish('allUsers', function() {
  if (this.userId && isAdminById(this.userId)) {
    return Meteor.users.find();
  } else {
    return Meteor.users.find({}, {fields: {
      secret_id: false,
      isAdmin: false,
      emails: false,
      notifications: false,
      'profile.email': false,
      'services.twitter.accessToken': false,
      'services.twitter.accessTokenSecret': false,
      'services.twitter.id': false,
      'services.password': false,
      'services.resume': false
    }});
  }
});