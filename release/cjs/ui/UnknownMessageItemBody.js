'use strict';

var React = require('react');
var ui_Label = require('../index-25825fe1.js');
var index = require('../index-e0c5dddd.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../stringSet-435b3346.js');
require('../tslib.es6-cb3f88e3.js');
require('../index-6f7d86a8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function UnknownMessageItemBody(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      _c = _a.isByMe,
      isByMe = _c === void 0 ? false : _c,
      _d = _a.mouseHover,
      mouseHover = _d === void 0 ? false : _d;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-unknown-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-unknown-message-item-body__header",
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-unknown-message-item-body__description",
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE));
}

module.exports = UnknownMessageItemBody;
//# sourceMappingURL=UnknownMessageItemBody.js.map
