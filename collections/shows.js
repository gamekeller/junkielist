Shows = new Meteor.Collection2('shows', {
  schema: {
    name: {
      type: String,
      label: "Name",
      max: 200
    },
    picture: {
      type: String,
      label: "Thumbnail",
      regEx: /((data:image\/[\w]+;base64,.*)|(placeholder))/
    },
    seasons: {
      type: Number,
      label: "Staffeln",
      max: 200,
      min: 1
    },
    episodesInSeasons: {
      type: [Number],
      label: "Episoden pro Staffel"
    }
  },
  virtualFields: {
    episodes: function(show) {
      var count = 0;

      _.each(show.episodesInSeasons, function(eps, season) {
        count += eps;
      });

      return count;
    }
  }
});

Shows.allow({
  insert: function(userId, doc) {
    return isAdminById(userId);
  },

  update: function(userId, doc, fields, modifier) {
    return isAdminById(userId);
  },

  remove: function(userId, doc){
    return isAdminById(userId);
  }
});

Shows.beforeUpdate = function(id, doc) {
  var eps = doc.$set.episodesInSeasons.split(',');

  _.each(eps, function(val, index) { eps[index] = parseInt(val); });

  doc.$set.episodesInSeasons = eps;

  return doc;
}

Shows.callbacks({
  insert: function(error, result) {
    if (error)
      console.log("Insert Error:", error);
    else
      Meteor.Router.to('/shows/' + result);
  },
  update: function(error, doc) {
    if (error) {
      console.log("Update Error:", error);
    }
  },
  remove: function(error) {
    if(error)
      console.log("Remove Error:", error);
    else
      Meteor.Router.to('/');
  }
});