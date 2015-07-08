Grid = React.createClass({

  handleClick: function(value) {
    var square = _.clone(value.target.id);
    console.log('handleClick', value, value.target);
    this.handleSquare(square);
  },

  handleSquare: function(square) {
    var gridPosition = square - 1;
    var positions = [
      {x: '10',   y: '10'},    //square 1
      {x: '110',  y: '10'},    //square 2
      {x: '210',  y: '10'},    //square 3
      {x: '10',   y: '110'},   //square 4
      {x: '110',  y: '110'},   //square 5
      {x: '210',  y: '110'},   //square 6
      {x: '10',   y: '210'},   //square 7
      {x: '110',  y: '210'},   //square 8
      {x: '210',  y: '210'}    //square 9
    ];

    console.log('grid positions', positions[gridPosition].x, positions[gridPosition].y);
    return (<Xmarker translateX={positions[gridPosition].x} translateY={positions[gridPosition].y} />);
  },

  render: function() {
    
    return (
      <div>
        <InvisibleGrid handleClick={this.handleClick} />
        <Svg className="grid" height="300" width="300">
        <Lines />
        <Omarker />
        </Svg>
      </div>
    );
  }
});