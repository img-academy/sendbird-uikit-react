import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import Icon, { IconTypes } from './Icon.js';

function Loader(_ref) {
  var className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-loader']).join(' '),
    style: {
      width: typeof width === 'string' ? width : "".concat(width, "px"),
      height: typeof height === 'string' ? height : "".concat(height, "px")
    }
  }, children);
}
Loader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element
};
Loader.defaultProps = {
  className: '',
  width: '26px',
  height: '26px',
  children: /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SPINNER,
    width: "26px",
    height: "26px"
  })
};

export { Loader as default };
//# sourceMappingURL=Loader.js.map
