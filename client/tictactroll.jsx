var HelloWorld = React.createClass({
  mixins: [ ReactiveMixin ],

  getReactiveState: function() {
    return {
      hw: Hellos.find().fetch()
    };
  },

  render: function() {
    var listItems = this.state.hw.map(function(item) {
      return <li key={item._id}>Hello {item.hello}</li>;
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
});

var InputList = React.createClass({
  getInitialState: function() {
    return {userInput: ''};
    },

  handleChange: function(evt){
    this.setState({userInput: evt.target.value});
  },

  handleInput: function(evt) {
    if(evt.keyCode == 13) {
      if (this.state.userInput) {
        Hellos.insert({hello: this.state.userInput});
        this.setState({userInput: ''});
      }
    }
  },

  render: function() {
    return (
      <section>
        <input id='new-world' type='text' value={this.state.userInput} onChange={this.handleChange} onKeyUp={this.handleInput} />
        <HelloWorld />
      </section>
    );
  }
});


Meteor.startup(function (argument) {
  React.render(<InputList />, document.getElementById('tictactroll-game'));
});
