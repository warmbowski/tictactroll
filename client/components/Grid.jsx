Grid = React.createClass({

  render: function() {
    return (
      <div>
        <Svg className="grid" height="300" width="300">
        <Lines />
        <Xmarker />
        <Omarker />
        </Svg>
      </div>
    );
  }
});