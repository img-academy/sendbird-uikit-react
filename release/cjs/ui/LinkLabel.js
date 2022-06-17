'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-25825fe1.js');
require('../stringSet-435b3346.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var http = /https?:\/\//;
function LinkLabel(_ref) {
  var className = _ref.className,
      src = _ref.src,
      type = _ref.type,
      color = _ref.color,
      children = _ref.children;
  var url = http.test(src) ? src : "http://".concat(src);
  return /*#__PURE__*/React__default["default"].createElement("a", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-link-label', color ? ui_Label.changeColorToClassName(color) : '']).join(' '),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-link-label__label",
    type: type,
    color: color
  }, children));
}
LinkLabel.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  src: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].oneOf(Object.keys(ui_Label.LabelTypography)).isRequired,
  color: PropTypes__default["default"].oneOf(Object.keys(ui_Label.LabelColors)).isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired
};
LinkLabel.defaultProps = {
  className: ''
};
var LinkLabelTypography = ui_Label.LabelTypography;
var LinkLabelColors = ui_Label.LabelColors;

exports.LinkLabelColors = LinkLabelColors;
exports.LinkLabelTypography = LinkLabelTypography;
exports["default"] = LinkLabel;
//# sourceMappingURL=LinkLabel.js.map
