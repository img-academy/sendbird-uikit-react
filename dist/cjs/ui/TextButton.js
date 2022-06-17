'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var color = require('../color-c2dc807b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function TextButton(_ref) {
  var className = _ref.className,
      color$1 = _ref.color,
      disabled = _ref.disabled,
      notUnderline = _ref.notUnderline,
      onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), [color.changeColorToClassName(color$1), notUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton', disabled ? 'sendbird-textbutton--disabled' : '']).join(' '),
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: onClick
  }, children);
}
TextButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  color: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool,
  notUnderline: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired
};
TextButton.defaultProps = {
  className: '',
  color: color.Colors.ONBACKGROUND_1,
  disabled: false,
  notUnderline: false,
  onClick: function onClick() {}
};

module.exports = TextButton;
//# sourceMappingURL=TextButton.js.map
