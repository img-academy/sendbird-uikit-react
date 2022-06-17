'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
var UserProfileContext = require('../../UserProfileContext-46f306ca.js');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../index-bbdcdf62.js');
var OpenChannelSettings_components_OperatorUI = require('./OperatorUI.js');
var OpenChannelSettings_components_ParticipantUI = require('./ParticipantUI.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../ui/Loader.js');
require('./OpenChannelProfile.js');
require('../../ui/TextButton.js');
require('../../color-c2dc807b.js');
require('../../ui/OpenChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../utils-f418bdf3.js');
require('./EditDetailsModal.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../index-8f00ec86.js');
require('../../utils-81069a8c.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../context-aef520dd.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InvalidChannel(_a) {
  var onCloseClick = _a.onCloseClick;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__placeholder"
  }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes$1.WRONG
  })));
}

var OpenChannelUI = function OpenChannelUI(_a) {
  var _b, _c, _d;

  var renderOperatorUI = _a.renderOperatorUI,
      renderParticipantList = _a.renderParticipantList;

  var _e = OpenChannelSettings_context.useOpenChannelSettings(),
      channel = _e.channel,
      _onCloseClick = _e.onCloseClick;

  var globalStore = useSendbirdStateContext();
  var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
  var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;

  if (!channel) {
    return /*#__PURE__*/React__default["default"].createElement(InvalidChannel, {
      onCloseClick: function onCloseClick() {
        logger.info('OpenChannelSettings: Click close');

        if (_onCloseClick) {
          _onCloseClick();
        }
      }
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(UserProfileContext.UserProfileProvider, {
    className: "sendbird-openchannel-settings"
  }, (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_OperatorUI.OperatorUI, null)), !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_ParticipantUI, null)));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelSettingsUI.js.map
