import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import './index-9d8b78a7.js';
import 'prop-types';
import './ui/Icon.js';
import './ui/Loader.js';
import './LocalizationContext-79eb0635.js';
import './stringSet-4614f875.js';
import './index-7e8c8e8d.js';
import './index-3db1006f.js';
import './ui/IconButton.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-cee0628b.js';
import './ui/ImageRenderer.js';
import './uuid-b12b05c7.js';
import './utils-bfbe8356.js';
import './ui/TextButton.js';
import './color-29648548.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-2db42eac.js';
import './index-775a609a.js';
import './utils-a66b9c45.js';
import './ui/Input.js';
import './ChannelSettings/components/AdminPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-b0bb3e69.js';
import './ui/Badge.js';
import './ui/ContextMenu.js';
import './index-a1462526.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './UserProfileContext-9b9928cf.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './topics-af18f6dc.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './MemberList-05fb4b87.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';

var ChannelSettings = function ChannelSettings(props) {
  return /*#__PURE__*/React__default.createElement(ChannelSettingsProvider, {
    channelUrl: props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile
  }, /*#__PURE__*/React__default.createElement(ChannelSettingsUI, {
    renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError,
    renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile,
    renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel,
    renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel
  }));
};

export { ChannelSettings as default };
//# sourceMappingURL=ChannelSettings.js.map
