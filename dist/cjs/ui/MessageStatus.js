'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../tslib.es6-cb3f88e3.js');
var React = require('react');
var index$1 = require('../index-e7940a94.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-25825fe1.js');
var ui_Loader = require('./Loader.js');
var index = require('../index-e0c5dddd.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
require('../index-6f7d86a8.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../stringSet-435b3346.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageStatusTypes = index.getOutgoingMessageStates();
function MessageStatus(_a) {
  var _b, _c;

  var _d, _e;

  var className = _a.className,
      message = _a.message,
      channel = _a.channel;
  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var status = React.useMemo(function () {
    return index.getOutgoingMessageState(channel, message);
  }, [(_d = channel === null || channel === void 0 ? void 0 : channel.getUnreadMemberCount) === null || _d === void 0 ? void 0 : _d.call(channel, message), (_e = channel === null || channel === void 0 ? void 0 : channel.getUndeliveredMemberCount) === null || _e === void 0 ? void 0 : _e.call(channel, message)]);
  var showMessageStatusIcon = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isSuper) && !(channel === null || channel === void 0 ? void 0 : channel.isPublic) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast);
  var iconType = (_b = {}, _b[MessageStatusTypes.SENT] = ui_Icon.IconTypes.DONE, _b[MessageStatusTypes.DELIVERED] = ui_Icon.IconTypes.DONE_ALL, _b[MessageStatusTypes.READ] = ui_Icon.IconTypes.DONE_ALL, _b[MessageStatusTypes.FAILED] = ui_Icon.IconTypes.ERROR, _b);
  var iconColor = (_c = {}, _c[MessageStatusTypes.SENT] = ui_Icon.IconColors.SENT, _c[MessageStatusTypes.DELIVERED] = ui_Icon.IconColors.SENT, _c[MessageStatusTypes.READ] = ui_Icon.IconColors.READ, _c[MessageStatusTypes.FAILED] = ui_Icon.IconColors.ERROR, _c);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-status'], false).join(' ')
  }, status === MessageStatusTypes.PENDING ? /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    className: "sendbird-message-status__icon " + (showMessageStatusIcon ? '' : 'hide-icon'),
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })) : /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-message-status__icon " + (showMessageStatusIcon ? '' : 'hide-icon'),
    type: iconType[status] || ui_Icon.IconTypes.ERROR,
    fillColor: iconColor[status],
    width: "16px",
    height: "16px"
  }), index.isSentStatus(status) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-status__text",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })));
}

exports.MessageStatusTypes = MessageStatusTypes;
exports["default"] = MessageStatus;
//# sourceMappingURL=MessageStatus.js.map
