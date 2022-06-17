'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Avatar = require('../../ui/Avatar.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../uuid-a43dad75.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelListHeader = function ChannelListHeader(_a) {
  var _b;

  var renderHeader = _a.renderHeader,
      renderIconButton = _a.renderIconButton,
      onEdit = _a.onEdit,
      allowProfileEdit = _a.allowProfileEdit;
  var sbState = useSendbirdStateContext();
  var user = ((_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore).user;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-header', allowProfileEdit ? 'sendbird-channel-header--allow-edit' : ''].join(' ')
  }, renderHeader ? renderHeader() : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title",
    role: "button",
    onClick: function onClick() {
      onEdit();
    },
    onKeyDown: function onKeyDown() {
      onEdit();
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__left"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    width: "32px",
    height: "32px",
    src: user.profileUrl,
    alt: user.nickname
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-header__title__right__name",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-header__title__right__user-id",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__right-icon"
  }, renderIconButton() || /*#__PURE__*/React__default["default"].createElement(ui_IconButton, null)));
};

module.exports = ChannelListHeader;
//# sourceMappingURL=ChannelListHeader.js.map
