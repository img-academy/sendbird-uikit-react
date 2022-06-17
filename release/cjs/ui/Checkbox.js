'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Checkbox(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange;

  var _useState = React.useState(checked),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setCheck = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("label", {
    className: "sendbird-checkbox",
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    id: id,
    type: "checkbox",
    checked: isChecked,
    onClick: function onClick() {
      return setCheck(!isChecked);
    },
    onChange: onChange
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sendbird-checkbox--checkmark"
  }));
}
Checkbox.propTypes = {
  id: PropTypes__default["default"].string,
  checked: PropTypes__default["default"].bool,
  onChange: PropTypes__default["default"].func
};
Checkbox.defaultProps = {
  id: 'sendbird-checkbox-input',
  checked: false,
  onChange: function onChange() {}
};

module.exports = Checkbox;
//# sourceMappingURL=Checkbox.js.map
