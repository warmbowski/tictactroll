Lines = React.createClass({
  render: function() {
    var horizontalLine1 = {
        x1 : "10",
        y1 : "100",
        x2 : "290",
        y2 : "100",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "rotate(0 0 0)"
    };

    var horizontalLine2 = {
        x1 : "10",
        y1 : "200",
        x2 : "290",
        y2 : "200",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "rotate(0 0 0)"
    };

    var verticalLine1 = {
        x1 : "100",
        y1 : "10",
        x2 : "100",
        y2 : "290",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "rotate(0 0 0)"
    };

     var verticalLine2 = {
        x1 : "200",
        y1 : "10",
        x2 : "200",
        y2 : "290",
        strokeWidth : "6",
        stroke : "black",
        strokeLinecap: "round",
        transform: "rotate(0 0 0)"
    };
    return(
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
        <Line 
          x1={verticalLine1.x1}
          x2={verticalLine1.x2}
          y1={verticalLine1.y1}
          y2={verticalLine1.y2}
          strokeWidth={verticalLine1.strokeWidth}
          stroke={verticalLine1.stroke}
          strokeLinecap={verticalLine1.strokeLinecap}
          transform={verticalLine1.transform}/>
        <Line 
          x1={verticalLine2.x1}
          x2={verticalLine2.x2}
          y1={verticalLine2.y1}
          y2={verticalLine2.y2}
          strokeWidth={verticalLine2.strokeWidth}
          stroke={verticalLine2.stroke}
          strokeLinecap={verticalLine2.strokeLinecap}
          transform={verticalLine2.transform}/>
      </g>
    );
  }
});