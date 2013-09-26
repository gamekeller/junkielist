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
    this.stop();
  }
});