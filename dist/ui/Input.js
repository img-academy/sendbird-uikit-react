import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useState } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import '../stringSet-4614f875.js';

var InputLabel = function InputLabel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-input-label",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_1
  }, children);
};
InputLabel.propTypes = {
  children: PropTypes.string.isRequired
}; // future: add validations? onChange? more props etc etc

var Input = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var name = props.name,
      required = props.required,
      disabled = props.disabled,
      placeHolder = props.placeHolder,
      value = props.value;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-input"
  }, /*#__PURE__*/React__default.createElement("input", {
    className: "sendbird-input__input",
    ref: ref,
    name: name,
    required: required,
    disabled: disabled,
    value: inputValue,
    onChange: function onChange(e) {
      setInputValue(e.target.value);
    }
  }), placeHolder && !inputValue && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-input__placeholder",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_3
  }, placeHolder));
});
Input.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  value: PropTypes.string
};
Input.defaultProps = {
  required: false,
  disabled: false,
  placeHolder: '',
  value: ''
};

export { InputLabel, Input as default };
//# sourceMappingURL=Input.js.map
