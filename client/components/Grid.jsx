Grid = React.createClass({

  handleClick: function(value) {
    var square = _.clone(value);
    console.log('handleClick', square);
  },

  render: function() {
    return (
      <div>
        <InvisibleGrid handleClick={this.handleClick} />
        <Svg className="grid" height="300" width="300">
        <Lines />
        <Xmarker />
        <Omarker />
        </Svg>
      </div>
    );
  }
});