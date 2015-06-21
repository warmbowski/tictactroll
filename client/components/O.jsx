Omarker = React.createClass({
  render: function() {
    var circle = {
      cx: "150",
      cy: "150",
      r: "40"
    };
    return (
      <g stroke="black" fill="white" strokeWidth="5">
        <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
      </g>
    );
  }
});