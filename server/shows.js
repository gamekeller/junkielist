Meteor.methods({
  addShowToUser: function(showId, atSeason, atEpisode) {
    if(!Meteor.user()) {
      throw new Meteor.Error(401, 'Unauthorized');
      return false;
    }

    atSeason = typeof atSeason !== 'undefined' ? atSeason : 1;
    atEpisode = typeof atEpisode !== 'undefined' ? atEpisode : 1;

    var shows = Meteor.user().shows;

    if(!_.has(shows, showId) && Shows.findOne(showId))  {

      shows[showId] = {
        name: Shows.findOne(showId).name,
        atSeason: atSeason,
        atEpisode: atEpisode
      };

      Meteor.users.update({_id: Meteor.userId()}, {$set: { 'shows': shows }});

      console.log('Show ' + showId + ' (' + Shows.findOne({_id: showId}).name + ') added to user ' + Meteor.userId() + ' (' + Meteor.user().profile.name + ')');

    } else {

      return false;
    }
  },

  removeShowFromUser: function(showId) {
    if(!Meteor.user()) {
      throw new Meteor.Error(401, 'Unauthorized');
      return false;
    }

    var shows = Meteor.user().shows;

    if(_.has(shows, showId)) {

      shows = _.omit(shows, showId);

      Meteor.users.update({_id: Meteor.userId()}, {$set: { 'shows': shows }});

      console.log('Show ' + showId + ' (' + Shows.findOne({_id: showId}).name + ') removed from user ' + Meteor.userId() + ' (' + Meteor.user().profile.name + ')');

    } else {

      return false;
    }
  },

  increaseWatchedEpisode: function(showId) {
    if(!Meteor.user()) {
      throw new Meteor.Error(401, 'Unauthorized');
      return false;
    }

    var show = Meteor.user().shows[showId],
        showData = Shows.findOne({_id: showId}),
        episodesInSeasons = showData.episodesInSeasons,
        seasons = showData.seasons,
        currentSeason = show.atSeason,
        currentEpisode = show.atEpisode,
        currentHighest = episodesInSeasons[currentSeason - 1],
        newEpisode = currentEpisode + 1,
        update = {};

    if(newEpisode <= currentHighest) {

      update['shows.' + showId + '.atEpisode'] = newEpisode;

    } else if((newEpisode > currentHighest) && (currentSeason < seasons)) {

      update['shows.' + showId + '.atSeason'] = currentSeason + 1;
      update['shows.' + showId + '.atEpisode'] = 1;

    }

    Meteor.users.update({ _id: Meteor.userId() }, { $set: update });
  },

  decreaseWatchedEpisode: function(showId) {
    if(!Meteor.user()) {
      throw new Meteor.Error(401, 'Unauthorized');
      return false;
    }

    var show = Meteor.user().shows[showId],
        episodesInSeasons = Shows.findOne({_id: showId}).episodesInSeasons,
        currentSeason = show.atSeason,
        currentEpisode = show.atEpisode,
        newEpisode = currentEpisode - 1,
        update = {};

    if(newEpisode >= 1) {

      update['shows.' + showId + '.atEpisode'] = newEpisode;

    } else if(newEpisode < 1 && currentSeason > 1) {

      update['shows.' + showId + '.atSeason'] = currentSeason - 1;
      update['shows.' + showId + '.atEpisode'] = episodesInSeasons[currentSeason - 2];

    }

    Meteor.users.update({ _id: Meteor.userId() }, { $set: update });
  }
});