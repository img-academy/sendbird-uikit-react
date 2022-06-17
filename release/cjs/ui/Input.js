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

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-input-label",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, children);
};
InputLabel.propTypes = {
  children: PropTypes__default["default"].string.isRequired
}; // future: add validations? onChange? more props etc etc

var Input = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
  var name = props.name,
      required = props.required,
      disabled = props.disabled,
      placeHolder = props.placeHolder,
      value = props.value;

  var _useState = React.useState(value),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-input"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    className: "sendbird-input__input",
    ref: ref,
    name: name,
    required: required,
    disabled: disabled,
    value: inputValue,
    onChange: function onChange(e) {
      setInputValue(e.target.value);
    }
  }), placeHolder && !inputValue && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-input__placeholder",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, placeHolder));
});
Input.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  placeHolder: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string
};
Input.defaultProps = {
  required: false,
  disabled: false,
  placeHolder: '',
  value: ''
};

exports.InputLabel = InputLabel;
exports["default"] = Input;
//# sourceMappingURL=Input.js.map
