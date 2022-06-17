'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../MemberList-475ddc8c.js');
var ChannelSettings_context = require('../context.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../index-8f00ec86.js');
require('../../ui/IconButton.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('../../tslib.es6-cb3f88e3.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('./UserListItem.js');
require('../../UserProfileContext-46f306ca.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../withSendBird.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../ui/Modal.js');
require('../../index-94591769.js');
require('../../utils-81069a8c.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../useSendbirdStateContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var kFormatter = function kFormatter(num) {
  return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "K" : num;
};

var UserPanel = function UserPanel() {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _a = React.useState(false),
      showAccordion = _a[0],
      setShowAccordion = _a[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__members'].join(' '),
    role: "switch",
    "aria-checked": showAccordion,
    onKeyDown: function onKeyDown() {
      return setShowAccordion(!showAccordion);
    },
    onClick: function onClick() {
      return setShowAccordion(!showAccordion);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-channel-settings__panel-icon-left",
    type: ui_Icon.IconTypes.MEMBERS,
    fillColor: ui_Icon.IconColors.PRIMARY,
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE, /*#__PURE__*/React__default["default"].createElement(ui_Badge, {
    count: kFormatter(channel.memberCount)
  })), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: ['sendbird-channel-settings__panel-icon-right', 'sendbird-channel-settings__panel-icon--chevron', showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''].join(' '),
    type: ui_Icon.IconTypes.CHEVRON_RIGHT,
    height: "24px",
    width: "24px"
  })), showAccordion && /*#__PURE__*/React__default["default"].createElement(MemberList.MemberList, null));
};

module.exports = UserPanel;
//# sourceMappingURL=UserPanel.js.map
