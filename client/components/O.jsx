Omarker = React.createClass({
  getDefaultProps: function() {
    return {
      translateX: '10',
      translateY: '10'
    };
  },

  render: function() {
    var circle = {
      cx: "40",
      cy: "40",
      r: "40"
    };

    var translate = "translate(" + this.props.translateX + " " + this.props.translateY + ")";

    return (
      <g stroke="black" fill="white" strokeWidth="5" transform={translate}>
        <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
      </g>
    );
  }
});