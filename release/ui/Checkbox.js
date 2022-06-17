import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange;

  var _useState = useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setCheck = _useState2[1];

  return /*#__PURE__*/React__default.createElement("label", {
    className: "sendbird-checkbox",
    htmlFor: id
  }, /*#__PURE__*/React__default.createElement("input", {
    id: id,
    type: "checkbox",
    checked: isChecked,
    onClick: function onClick() {
      return setCheck(!isChecked);
    },
    onChange: onChange
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "sendbird-checkbox--checkmark"
  }));
}
Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
Checkbox.defaultProps = {
  id: 'sendbird-checkbox-input',
  checked: false,
  onChange: function onChange() {}
};

export { Checkbox as default };
//# sourceMappingURL=Checkbox.js.map
