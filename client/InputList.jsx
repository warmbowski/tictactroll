InputList = React.createClass({
  getInitialState: function() {
    return {userInput: ''};
    },

  handleChange: function(evt){
    this.setState({userInput: evt.target.value});
  },

  handleInput: function(evt) {
    if(evt.keyCode == 13) {
      if (this.state.userInput) {
        Hellos.insert({hello: this.state.userInput, createdAt: new Date().valueOf()});
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
