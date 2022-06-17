'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-25825fe1.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../stringSet-435b3346.js');
require('../index-6f7d86a8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ConnectionStatus() {
  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-connection-status"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.TRYING_TO_CONNECT), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.DISCONNECTED,
    fillColor: ui_Icon.IconColors.SENT,
    width: "14px",
    height: "14px"
  }));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map
