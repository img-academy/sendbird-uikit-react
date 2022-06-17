import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import { a as LabelTypography, b as LabelColors, d as changeColorToClassName, L as Label } from '../index-3db1006f.js';
import '../stringSet-4614f875.js';

var http = /https?:\/\//;
function LinkLabel(_ref) {
  var className = _ref.className,
      src = _ref.src,
      type = _ref.type,
      color = _ref.color,
      children = _ref.children;
  var url = http.test(src) ? src : "http://".concat(src);
  return /*#__PURE__*/React__default.createElement("a", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-link-label', color ? changeColorToClassName(color) : '']).join(' '),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-link-label__label",
    type: type,
    color: color
  }, children));
}
LinkLabel.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(LabelTypography)).isRequired,
  color: PropTypes.oneOf(Object.keys(LabelColors)).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.element)]).isRequired
};
LinkLabel.defaultProps = {
  className: ''
};
var LinkLabelTypography = LabelTypography;
var LinkLabelColors = LabelColors;

export { LinkLabelColors, LinkLabelTypography, LinkLabel as default };
//# sourceMappingURL=LinkLabel.js.map
