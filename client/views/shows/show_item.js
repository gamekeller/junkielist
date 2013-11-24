Template.showItem.events = {
  'click [data-trigger="toggleShow"]': function(e, instance) {
    e.preventDefault();

    if(!Meteor.user()) {
      Router.go('home');
      return false;
    }

    var showId = instance.data._id;

    if(userHasShow(showId))
      Meteor.call('removeShowFromUser', showId)
    else
      Meteor.call('addShowToUser', showId);
  },

  'click [data-trigger="deletion"]': function(e, instance) {
    e.preventDefault();

    if(!isAdminById(Meteor.userId())) {
      Router.go('home');
      return false;
    }

    if(confirm('Möchtest du die Serie ' + instance.data.name + ' wirklich aus der Datenbank löschen? Dieser Prozess kann nicht rückgängig gemacht werden!')) {
      Meteor.call('removeShow', instance.data._id);
      Router.go('showsList');
    }
  },

  'click .episode-next': function(e, instance) {
    e.preventDefault();

    if(!Meteor.user()) {
      Router.go('home');
      return false;
    }

    var showId = instance.data._id;

    Meteor.call('increaseWatchedEpisode', showId);
  },

  'click .episode-previous': function(e, instance) {
    e.preventDefault();

    if(!Meteor.user()) {
      Router.go('home');
      return false;
    }

    var showId = instance.data._id;

    Meteor.call('decreaseWatchedEpisode', showId);
  },

  'change select': function(e, instance) {
    e.preventDefault();

    var data = instance.data,
        id = data._id,
        val = e.target.value,
        change = e.target.getAttribute('data-change'),
        update = {};

    if(change == 'atSeason' && data.episodesInSeasons[val - 1] < data.atEpisode) {
      var newEpisode;

      for(var i = data.atEpisode; i >= data.episodesInSeasons[val - 1]; i--) {
        newEpisode = i;
      };

      update['shows.' + id + '.atEpisode'] = newEpisode;
    }

    update['shows.' + id + '.' + change] = val;

    Meteor.users.update({_id: Meteor.userId()}, { $set: update });
  }
}

Template.showItem.helpers({
  home: function() {
    if(Router.current().route.name == 'home') return true;
  },

  showPage: function() {
    if(Router.current().route.name == 'showPage') return true;
  },

  details: function() {
    if(!isAdminById(Meteor.userId()) || Router.current().route.name == 'showPage') return true;
  },

  hasShow: function() {
    return userHasShow(this._id);
  },

  onShowPage: function() {
    return (Router.current().route.name == 'showPage') ? true : false;
  },

  seasonsArray: function() {
    var seasons = [],
        atSeason = this.atSeason;

    for (var i = 1; i <= this.seasons; i++) {
      if(i == atSeason)
        seasons.push({ index: i, current: true });
      else
        seasons.push({ index: i });
    };

    return seasons;
  },

  episodesArray: function() {
    var episodes = [],
        atSeason = parseInt(this.atSeason) - 1,
        atEpisode = this.atEpisode;

    for (var i = 1; i <= this.episodesInSeasons[atSeason]; i++) {
      if(i == atEpisode)
        episodes.push({ index: i, current: true });
      else
        episodes.push({ index: i });
    };

    return episodes;
  }

});