Xmarker = React.createClass({
  render: function() {
    var horizontalLine1 = {
        x1 : "10",
        y1 : "10",
        x2 : "75",
        y2 : "75",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "translate(10 10) rotate(0 0 0)"
    };

    var horizontalLine2 = {
        x1 : "10",
        y1 : "75",
        x2 : "75",
        y2 : "10",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "translate(10 10) rotate(0 0 0)"
    };
    return (
      <g>
        <Line 
          x1={horizontalLine1.x1}
          x2={horizontalLine1.x2}
          y1={horizontalLine1.y1}
          y2={horizontalLine1.y2}
          strokeWidth={horizontalLine1.strokeWidth}
          stroke={horizontalLine1.stroke}
          strokeLinecap={horizontalLine1.strokeLinecap}
          transform={horizontalLine1.transform}/>
        <Line 
          x1={horizontalLine2.x1}
          x2={horizontalLine2.x2}
          y1={horizontalLine2.y1}
          y2={horizontalLine2.y2}
          strokeWidth={horizontalLine2.strokeWidth}
          stroke={horizontalLine2.stroke}
          strokeLinecap={horizontalLine2.strokeLinecap}
          transform={horizontalLine2.transform}/>
      </g>
    );
  }
});