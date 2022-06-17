'use strict';

var React = require('react');
var ChannelSettings_components_ChannelSettingsUI = require('./ChannelSettings/components/ChannelSettingsUI.js');
var ChannelSettings_context = require('./ChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-77e2b7af.js');
require('./index-bbdcdf62.js');
require('prop-types');
require('./ui/Icon.js');
require('./ui/Loader.js');
require('./LocalizationContext-60feae29.js');
require('./stringSet-435b3346.js');
require('./index-6f7d86a8.js');
require('./index-25825fe1.js');
require('./ui/IconButton.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-cb3f88e3.js');
require('./ui/ImageRenderer.js');
require('./uuid-a43dad75.js');
require('./utils-f418bdf3.js');
require('./ui/TextButton.js');
require('./color-c2dc807b.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-94591769.js');
require('./index-8f00ec86.js');
require('./utils-81069a8c.js');
require('./ui/Input.js');
require('./ChannelSettings/components/AdminPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./context-aef520dd.js');
require('./ui/Badge.js');
require('./ui/ContextMenu.js');
require('./index-e0c5dddd.js');
require('./ui/SortByRow.js');
require('./ChannelSettings/components/UserListItem.js');
require('./UserProfileContext-46f306ca.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendBirdSelectors.js');
require('./topics-dc71c830.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./MemberList-475ddc8c.js');
require('./ChannelSettings/components/LeaveChannel.js');
require('./ChannelSettings/components/UserPanel.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelSettings = function ChannelSettings(props) {
  return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_context.ChannelSettingsProvider, {
    channelUrl: props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile
  }, /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_ChannelSettingsUI, {
    renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError,
    renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile,
    renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel,
    renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel
  }));
};

module.exports = ChannelSettings;
//# sourceMappingURL=ChannelSettings.js.map
