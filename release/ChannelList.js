import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-23f83387.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-cee0628b.js';
import './topics-af18f6dc.js';
import './uuid-b12b05c7.js';
import './utils-a66b9c45.js';
import './UserProfileContext-9b9928cf.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import './index-a1462526.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-79eb0635.js';
import './stringSet-4614f875.js';
import './index-7e8c8e8d.js';
import './index-3db1006f.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-33c5276e.js';
import './sendBirdSelectors.js';
import './CreateChannel/components/InviteMembers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-2db42eac.js';
import './index-775a609a.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-bfbe8356.js';
import './ui/Badge.js';
import './index-d4c08fec.js';
import './index-6d919a6a.js';
import './index-54fd64c3.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-94aeef2f.js';
import './compareIds-91189cc3.js';
import './const-7d66ce8b.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-1d08abd2.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-29648548.js';
import './actionTypes-9995a4fe.js';
import './index-9d8b78a7.js';

var ChannelList = function ChannelList(props) {
  return /*#__PURE__*/React__default.createElement(ChannelListProvider, {
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit,
    onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel,
    onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange,
    onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess,
    onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect,
    sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect,
    isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled,
    isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled
  }, /*#__PURE__*/React__default.createElement(ChannelListUI, {
    renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { ChannelList as default };
//# sourceMappingURL=ChannelList.js.map
