curPath=function(){var c=window.location.pathname;var b=c.slice(0,-1);var a=c.slice(-1);if(b==""){return"/"}else{if(a=="/"){return b}else{return c}}};

Handlebars.registerHelper('navLink', function(path, name) {
  var ret = "<li ";

  if(curPath() == path) ret += "class='active'";

  ret += "><a href='" + path + "'>" + name + "</a></li>";

  return new Handlebars.SafeString(ret);
});

Handlebars.registerHelper('loggedIn', function() {
  return (Meteor.user()) ? true: false;
});

Handlebars.registerHelper('isVerified', function() {
  if(!Meteor.user()) return false;

  return Meteor.user().isVerified;
});

Handlebars.registerHelper('arrayify', function(obj) {
  result = [];
  for (var key in obj) result.push({ key: key, value: obj[key] });
  return result;
});

Handlebars.registerHelper('epsInSeasons', function(obj) {
  result = [];
  for (var key in obj) result.push({ key: parseInt(key) + 1, value: obj[key], index: key });
  return result;
});

Handlebars.registerHelper('showItemPicture', function() {
  if(this.picture === "placeholder")
    return "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAgACAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiq95cm1gMgiaTHocAfU0XNy9uCywl0VSzNuwAP6mgCxRVJ9QCyECIlF27mJwRu6YHerbSRoyq7qpboCcZoAdRTVkR496MHXsVOc1Xiu2lhmcQNujcrsyMnp/jQBaoqkb8hWDQ4lEgj2huMkZ61PbTi4i37dpDFSM55Hv3oAmooooAKKKKACiiigAooooAq6gkktk8cUZdn4xkDHvzUV2k88kINu7QgbnUMvLdgee1X6KAMye0mluzII8lihRyw/dgdRU+oQPcxLCidTkvn7mP8AHpVyigCO33C3QNH5TAYKA5xVOIXUcF2VgKyu5ZAWXvgevbFaFFAGZ9lkNksQgYbZA7q7DMvr3q3ZRPDbbHG35iQuc7QTwKsUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z"
  else
    return this.picture;
});

Handlebars.registerHelper('showSearchBar', function() {
  return Session.get('showSearchBar');
});

Handlebars.registerHelper('isAdmin', function() {
  return isAdminById(Meteor.userId());
});

Handlebars.registerHelper('hasShows', function() {
  return userHasShows();
});