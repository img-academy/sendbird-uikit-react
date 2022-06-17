'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var UnreadCount = function UnreadCount(props) {
  var _a, _b;

  var count = props.count,
      _c = props.time,
      time = _c === void 0 ? '' : _c,
      onClick = props.onClick;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var timeArray = ((_b = (_a = time === null || time === void 0 ? void 0 : time.toString) === null || _a === void 0 ? void 0 : _a.call(time)) === null || _b === void 0 ? void 0 : _b.split(' ')) || [];
  timeArray === null || timeArray === void 0 ? void 0 : timeArray.splice(-2, 0, stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__ON);

  if (count < 1) {
    return;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-notification",
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-notification__text",
    color: ui_Label.LabelColors.ONCONTENT_1,
    type: ui_Label.LabelTypography.CAPTION_2
  }, count + " ", stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE, " " + timeArray.join(' ')), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    width: "24px",
    height: "24px",
    type: ui_Icon.IconTypes.CHEVRON_DOWN,
    fillColor: ui_Icon.IconColors.CONTENT
  }));
};

module.exports = UnreadCount;
//# sourceMappingURL=UnreadCount.js.map
