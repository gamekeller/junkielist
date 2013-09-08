Meteor.Router.add({
  '/': { as: 'home', to: function() {

    Session.set('showSearchBar', (Meteor.user() && Meteor.user().isVerified && !_.isEmpty(Meteor.user().shows)) ? true : false);
    return 'home';

  }},

  '/shows': { as: 'shows', to: function() {

    Session.set('showSearchBar', true);
    return 'showsList';

  }},

  '/shows/add': { as: 'shows', to: function() {

    Session.set('showSearchBar', false);
    return (isAdminById(Meteor.userId())) ? 'showsAdd' : 'notFound';

  }},

  '/shows/:id': { as: 'shows', to: function(id) {

    Session.set('selectedShowId', id);
    Session.set('showSearchBar', false);

    return (isAdminById(Meteor.userId()) && Shows.findOne({_id: id})) ? 'showPage' : 'notFound';

  }},

  '/users': { as: 'users', to: function() {

    Session.set('showSearchBar', true);
    return (isAdminById(Meteor.userId())) ? 'usersList' : 'notFound';

  }},

  '*': 'notFound'
});

Meteor.Router.filters({
  requireVerification: function(page) {
    if(Meteor.loggingIn()) {
      return 'loading';
    } else if(Meteor.user()) {

      if(Meteor.user().isVerified) {
        return page;
      } else {
        return 'requireVerification';
      }
    } else {
      return 'welcome';
    }
  }
});

Meteor.Router.filter('requireVerification');