'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MutedAvatarOverlay(props) {
  var _a = props.height,
      height = _a === void 0 ? 24 : _a,
      _b = props.width,
      width = _b === void 0 ? 24 : _b;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-muted-avatar",
    style: {
      height: height + "px",
      width: width + "px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-muted-avatar__icon"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-muted-avatar__bg",
    style: {
      height: height + "px",
      width: width + "px"
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.MUTE,
    fillColor: ui_Icon.IconColors.WHITE,
    width: height - 8 + "px",
    height: width - 8 + "px"
  })));
}

module.exports = MutedAvatarOverlay;
//# sourceMappingURL=MutedAvatarOverlay.js.map
