Meteor.startup(function (argument) {
  if (!(localStorage.getItem('tttId'))) {
    var newId = new Meteor.Collection.ObjectID();
    localStorage.setItem('tttId', newId._str);
  }
  var myId = localStorage.getItem('tttId');
  Session.set('tttId', myId);
  Meteor.call('setUserId', myId);
  
  React.render(<Grid />, document.getElementById('tictactroll-game'));
});
