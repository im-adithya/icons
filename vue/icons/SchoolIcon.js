const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    "aria-hidden": "true",
    viewBox: "0 0 20 20"
  }, [
    _createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.364"
    }, [
      _createElementVNode("path", {
        "stroke-linejoin": "round",
        d: "M.91 14.09a.91.91 0 01.908-.908h2.727V10L10 6.364 15.454 10v3.182h2.728a.909.909 0 01.909.909v4.09a.909.909 0 01-.91.91H.91v-5z"
      }),
      _createElementVNode("path", {
        "stroke-linecap": "round",
        d: "M10 1.818v4.546"
      }),
      _createElementVNode("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M11.818 19.09v-5.908H8.182v5.909m-.91 0h5.455m2.727-14.546V1.818s-.681 1.364-2.727 0c-2.045-1.363-2.727 0-2.727 0v2.727s.682-1.363 2.727 0c2.046 1.364 2.727 0 2.727 0z"
      })
    ])
  ]))
}