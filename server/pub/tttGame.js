Meteor.publish('myGame', function() {
  return TTTGames.find();
});

TTTGames.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, a, b ) {
    return true;
  },

  remove: function(userId, doc) {
    return true;
  }
});
