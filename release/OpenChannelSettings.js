import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import './UserProfileContext-9b9928cf.js';
import 'prop-types';
import './LocalizationContext-79eb0635.js';
import './stringSet-4614f875.js';
import './index-7e8c8e8d.js';
import './index-3db1006f.js';
import './ui/Icon.js';
import './index-9d8b78a7.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './color-29648548.js';
import './ui/OpenChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-cee0628b.js';
import './ui/ImageRenderer.js';
import './uuid-b12b05c7.js';
import './utils-bfbe8356.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-2db42eac.js';
import './ui/IconButton.js';
import './index-775a609a.js';
import './utils-a66b9c45.js';
import './ui/Input.js';
import './OpenChannelSettings/components/ParticipantUI.js';
import './context-b0bb3e69.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './topics-af18f6dc.js';
import './ui/ContextMenu.js';
import './index-a1462526.js';
import './ui/SortByRow.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';

var OpenChannelSetting = function OpenChannelSetting(props) {
  return /*#__PURE__*/React__default.createElement(OpenChannelSettingsProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default.createElement(OpenChannelUI, {
    renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI,
    renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList
  }));
};

export { OpenChannelSetting as default };
//# sourceMappingURL=OpenChannelSettings.js.map
