import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-37cde2a8.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-79eb0635.js';
import './stringSet-4614f875.js';
import './index-7e8c8e8d.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import 'stream';
import 'prop-types';
import './const-f8c6fa59.js';
import './const-7d66ce8b.js';
import './ui/IconButton.js';
import './index-775a609a.js';
import './index-3db1006f.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-a1462526.js';
import './tslib.es6-cee0628b.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-b12b05c7.js';
import './index-9d8b78a7.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-6d919a6a.js';
import './index-54fd64c3.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendBird.js';
import './sendBirdSelectors.js';
import './topics-af18f6dc.js';
import './UserProfileContext-9b9928cf.js';
import './utils-2e4bc3dd.js';
import './openChannelUtils-4a6b2e44.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-29648548.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-2db42eac.js';
import './ui/Modal.js';
import './utils-a66b9c45.js';
import './useSendbirdStateContext.js';
import './compareIds-91189cc3.js';

var OpenChannel = function OpenChannel(props) {
  return /*#__PURE__*/React__default.createElement(OpenChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    useMessageGrouping: props === null || props === void 0 ? void 0 : props.useMessageGrouping,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default.createElement(OpenChannelUI, {
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderInput: props === null || props === void 0 ? void 0 : props.renderInput,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { OpenChannel as default };
//# sourceMappingURL=OpenChannel.js.map
