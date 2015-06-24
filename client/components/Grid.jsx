Grid = React.createClass({

  getInitialState: function() {
    return {
      square: null
    };
  },

  handleClick: function(value) {
    var square = value;
    this.setState({
      square: square
    });
    
  },

  render: function() {
    return (
      <div>
        <InvisibleGrid handleClick={this.handleClick} square={this.state.square} />
        <Svg className="grid" height="300" width="300">
        <Lines />
        <Xmarker />
        <Omarker />
        </Svg>
      </div>
    );
  }
});