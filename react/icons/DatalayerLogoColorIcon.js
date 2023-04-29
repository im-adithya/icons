const React = require("react");
function DatalayerLogoColorIcon({
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
    fill: "#E26D6D",
    d: "M0 0h20v4H0zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F9CB07",
    d: "M0 8h20v4H0zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#49B3D9",
    d: "M0 16h20v4H0zm0 0"
  }));
}
const ForwardRef = React.forwardRef(DatalayerLogoColorIcon);
module.exports = ForwardRef;