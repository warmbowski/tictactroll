var HelloWorld = React.createClass({
  mixins: [ ReactiveMixin ],

  getReactiveState: function() {
    return {
      hw: Hellos.find().fetch()
    };
  },

  render: function () {
    return (
          <ul>
          {
            this.state.hw.map(function(item) {
              return <li key={item._id}>Hello {item.hello}</li>
            })
           }
          </ul>
        ) 
/*    return <div>Hello {this.state.hw._id}</div> */
  }
});

Meteor.startup(function (argument) {
  React.render(<HelloWorld />, document.getElementById('tictactroll-game'));
});
