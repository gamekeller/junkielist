Template.showsList.shows = function() {
  return Shows.find({}, { sort: { name: 1 } });
};

Template.showsList.searchableTitle = function() {
  return this.name.toLowerCase();
};