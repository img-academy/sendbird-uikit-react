'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var IconButton = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      disabled = props.disabled,
      width = props.width,
      height = props.height,
      type = props.type,
      _onClick = props.onClick,
      _onBlur = props.onBlur,
      style = props.style;

  var _useState = React.useState(''),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      pressed = _useState2[0],
      setPressed = _useState2[1];

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default["default"].createElement("button", {
      className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-iconbutton', pressed]).join(' '),
      disabled: disabled,
      ref: ref,
      type: type // eslint-disable-line react/button-has-type
      ,
      style: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, style), {}, {
        height: height,
        width: width
      }),
      onClick: function onClick(e) {
        if (disabled) {
          return;
        }

        setPressed('sendbird-iconbutton--pressed');

        _onClick(e);
      },
      onBlur: function onBlur(e) {
        setPressed('');

        _onBlur(e);
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sendbird-iconbutton__inner"
    }, children))
  );
});
IconButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  disabled: PropTypes__default["default"].bool,
  width: PropTypes__default["default"].string,
  height: PropTypes__default["default"].string,
  type: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  style: PropTypes__default["default"].shape({})
};
IconButton.defaultProps = {
  className: '',
  disabled: false,
  width: '56px',
  height: '56px',
  type: 'button',
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  style: {}
};

module.exports = IconButton;
//# sourceMappingURL=IconButton.js.map
