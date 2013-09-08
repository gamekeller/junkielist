Router.configure({
  layout: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',

  before: function() {
    var routeName = this.context.route.name;

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

  this.route('home', { path: '/' });

  this.route('showsList', { path: '/shows' });

  this.route('showsAdd', { path: '/shows/add' });

  this.route('showPage', {
    path: '/shows/:_id',
    data: function() { return Shows.findOne(this.params._id); }
    //, waitOn: [showsSub, currentUserSub]
  });

  this.route('usersList', {
    path: '/users',
    data: function() { return Meteor.users.find(); }
    //, waitOn: allUsersSub
  });

  this.route('notFound', { path: '/*' });

});