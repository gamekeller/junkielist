Template.notFound.events({
  'click #backHome': function(e) {
    e.preventDefault();
    Meteor.Router.to('/');
  }
});