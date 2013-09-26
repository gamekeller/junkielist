var Subscriptions = {
  currentUser: Meteor.subscribe('currentUser'),
  shows: Meteor.subscribe('shows'),
  allUsers: Meteor.subscribe('allUsers')
};

Router.configure({
  layout: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',

  waitOn: function() {
    if(Meteor.user() && isAdminById(Meteor.userId())) {
      return [Subscriptions.shows, Subscriptions.currentUser, Subscriptions.allUsers];
    } else if(Meteor.user() && Meteor.user().isVerified) {
      return [Subscriptions.shows, Subscriptions.currentUser];
    } else {
      return Subscriptions.currentUser;
    }
  },

  before: function() {
    var routeName = this.context.route.name;

    Session.set('showSearchBar', false);

    if(!Meteor.user()) {
      this.render(Meteor.loggingIn() ? this.loadingTemplate : 'welcome');
      return this.stop();
    } else if(!Meteor.user().isVerified) {
      this.render(Meteor.loggingIn() ? this.loadingTemplate : 'requireVerification');
      return this.stop();
    } else if(_.contains(['usersList', 'showsAdd'], routeName) && !isAdminById(Meteor.userId())) {
      this.render(Meteor.loggingIn() ? this.loadingTemplate : 'notFound');
      return this.stop();
    }
  }
});

Router.map(function() {

  this.route('home', {
    path: '/',
    onAfterRun: function() { Session.set('showSearchBar', true); }
  });

  this.route('showsList', {
    path: '/shows',
    data: function() { return Shows.find({}, { sort: { name: 1 } }); },
    onAfterRun: function() { Session.set('showSearchBar', true); }
  });

  this.route('showsAdd', { path: '/shows/add' });

  this.route('showPage', {
    path: '/shows/:_id',
    data: function() { return Shows.findOne(this.params._id); },
    onBeforeRun: function() { Session.set('selectedShowId', this.params._id); }
  });

  this.route('usersList', {
    path: '/users',
    data: function() { return Meteor.users.find(); }
  });

  this.route('notFound', { path: '/*' });

});