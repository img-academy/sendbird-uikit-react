'use strict';

var React = require('react');
var ui_Label = require('../index-25825fe1.js');
var ui_Icon = require('./Icon.js');
var ui_TextButton = require('./TextButton.js');
var index = require('../index-e0c5dddd.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../stringSet-435b3346.js');
require('../color-c2dc807b.js');
require('../tslib.es6-cb3f88e3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function FileMessageItemBody(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      _c = _a.isByMe,
      isByMe = _c === void 0 ? false : _c,
      _d = _a.mouseHover,
      mouseHover = _d === void 0 ? false : _d;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-file-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-file-message-item-body__file-icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: 'sendbird-file-message-item-body__file-icon__icon',
    type: {
      IMAGE: ui_Icon.IconTypes.PHOTO,
      VIDEO: ui_Icon.IconTypes.PLAY,
      AUDIO: ui_Icon.IconTypes.FILE_AUDIO,
      GIF: ui_Icon.IconTypes.GIF,
      OTHERS: ui_Icon.IconTypes.FILE_DOCUMENT
    }[index.getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)],
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_TextButton, {
    className: "sendbird-file-message-item-body__file-name",
    onClick: function onClick() {
      window.open(message === null || message === void 0 ? void 0 : message.url);
    },
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-file-message-item-body__file-name__text",
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
  }, index.truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url)))));
}

module.exports = FileMessageItemBody;
//# sourceMappingURL=FileMessageItemBody.js.map
