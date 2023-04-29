const React = require("react");
function TensorflowLogoIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "aria-hidden": "true",
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "#E55B2D",
    d: "M11.332 3.077v3.077l5.33 3.077V6.154l-5.33-3.077zM.674 6.154V9.23l2.664 1.538V7.692L.674 6.154zm7.993 1.538L6.003 9.231v9.23L8.667 20v-6.154l2.665 1.539v-3.077l-2.665-1.539V7.692z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ED8E24",
    d: "M11.332 3.077L3.338 7.692v3.077l5.33-3.077v3.077l2.664-1.538V3.077zm7.994 1.538l-2.665 1.539V9.23l2.665-1.539V4.615zm-5.33 6.154l-2.664 1.539v3.077l2.665-1.539V10.77zm-2.664 4.616l-2.665-1.539V20l2.665-1.538v-3.077z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F8BF3C",
    d: "M11.332 0L.674 6.154l2.664 1.538 7.994-4.615 5.33 3.077 2.665-1.539L11.331 0zm0 9.23l-2.665 1.54 2.665 1.538 2.665-1.539-2.665-1.538z"
  }));
}
const ForwardRef = React.forwardRef(TensorflowLogoIcon);
module.exports = ForwardRef;