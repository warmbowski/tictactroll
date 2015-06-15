var HelloWorld = React.createClass({
  render: function () {
    return <div>Hello world!</div>;
  }
});

Meteor.startup(function (argument) {
  React.render(<HelloWorld />, document.getElementById('tictactroll-game'));
});
