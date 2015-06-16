Meteor.startup(function() {
  if (Hellos.find().count() === 0) {
    var hellos = ['world', 'there', 'goodbye'];
    for (var i=0; i<hellos.length; i++) {
      Hellos.insert({hello: hellos[i], createdAt: new Date().valueOf()});
    }
  }
  console.log(Hellos.find().count());
});
