Template.usersList.users = function() {
  return Meteor.users.find();
};

Template.usersList.namail = function() {
  if(this.profile.name) return this.profile.name;
  if(this.emails.length) return this.emails[0].address;

  return "NaN";
};

Template.usersList.isVerified = function() {
  return (this.isVerified) ? "Ja" : "Nein";
};

Template.usersList.userIsVerified = function() {
  return this.isVerified;
};

Template.usersList.namailSearchable = function() {
  if(this.profile.name) return this.profile.name.toLowerCase();
  if(this.emails.length) return this.emails[0].address.toLowerCase();

  return "NaN".toLowerCase();
};

Template.usersList.isAdmin = function() {
  return (this.isAdmin && isAdminById(this._id)) ? 'Ja' : 'Nein';
};

Template.usersList.userIsAdmin = function() {
  return this.isAdmin;
}

Template.usersList.events({
  'click .make-admin': function(e, template) {
    Meteor.users.update({_id: this._id}, {$set: { isAdmin: true, isVerified: true }});
  },

  'click .verify': function(e, template) {
    Meteor.users.update({_id: this._id}, {$set: { isVerified: true }});
  },

  'click .unverify': function(e, template) {
    Meteor.users.update({_id: this._id}, {$set: { isVerified: false }});
  }
});