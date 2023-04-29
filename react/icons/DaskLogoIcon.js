const React = require("react");
function DaskLogoIcon({
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
    fill: "#FFC11E",
    fillRule: "evenodd",
    d: "M5.383 6.332l5.094-2.902a.158.158 0 00.082-.137V1.551a.822.822 0 00-.317-.668.819.819 0 00-.898-.059L2.219 4.883a.801.801 0 00-.406.691l-.004 9.164c0 .258.109.512.316.668.27.203.613.223.898.059l1.512-.856a.17.17 0 00.078-.14l.004-6.828c0-.543.293-1.04.766-1.309zm0 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EF1161",
    fillRule: "evenodd",
    d: "M17.594 5.016a.826.826 0 00-.809 0L9.656 9.074a.8.8 0 00-.402.692l-.004 9.199c0 .289.152.547.406.691a.808.808 0 00.809 0l7.125-4.058a.796.796 0 00.406-.692L18 5.711c0-.29-.152-.55-.406-.695zm0 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FC6E6B",
    fillRule: "evenodd",
    d: "M9.297 8.457L14 5.781a.16.16 0 00.082-.14l.004-2.024a.828.828 0 00-.316-.668.805.805 0 00-.899-.058L10.918 4 5.742 6.945a.807.807 0 00-.406.696v6.921l-.004 2.243c0 .254.11.511.316.668a.82.82 0 00.899.058l1.902-1.082a.164.164 0 00.082-.14V9.766c.004-.54.293-1.04.766-1.309zm0 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(DaskLogoIcon);
module.exports = ForwardRef;