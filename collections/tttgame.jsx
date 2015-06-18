Hellos = new Mongo.Collection('helloWorld');

Meteor.publish('allHellos', function() {
  return Hellos.find({}, {limit: 25});
});

Hellos.allow({
  //allows
  insert: function(userId, doc) {
    return (doc.hello !== '');
  }
});