Line = React.createClass({
  getDefaultProps: function() {
    return {
      x1: "20",
      y1: "100",
      x2: "100",
      y2: "100",
      strokeWidth: "2",
      stroke: "black",
      strokeLinecap: "round",
      transform: ""
    };
  },

  render: function() {
    var x1 = this.props.x1,
        y1 = this.props.y1,
        x2 = this.props.x2,
        y2 = this.props.y2,
        strokeWidth = this.props.strokeWidth,
        stroke = this.props.stroke,
        strokeLinecap = this.props.strokeLinecap,
        transform = this.props.transform;
    return (
        <line x1={x1} 
              y1={y1} 
              x2={x2} 
              y2={y2} 
              strokeWidth={strokeWidth} 
              stroke={stroke} 
              strokeLinecap={strokeLinecap} 
              transform={this.props.transform}/>
    );
  }
});