import React__default from 'react';
import { C as ChannelProvider } from './ChannelProvider-94aeef2f.js';
import ChannelUI from './Channel/components/ChannelUI.js';
import './UserProfileContext-9b9928cf.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendBird.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import './index-54fd64c3.js';
import './index-7e8c8e8d.js';
import './topics-af18f6dc.js';
import './index-a1462526.js';
import './tslib.es6-cee0628b.js';
import './compareIds-91189cc3.js';
import './const-7d66ce8b.js';
import './uuid-b12b05c7.js';
import './ui/ContextMenu.js';
import './index-3db1006f.js';
import './stringSet-4614f875.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/ReactionButton.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './index-9d8b78a7.js';
import './ui/Loader.js';
import './LocalizationContext-79eb0635.js';
import './ui/ConnectionStatus.js';
import './Channel/components/ChannelHeader.js';
import './ui/IconButton.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './utils-bfbe8356.js';
import './Channel/components/MessageList.js';
import './index-6d919a6a.js';
import './Channel/components/Message.js';
import './Channel/components/SuggestedMentionList.js';
import './const-f8c6fa59.js';
import './ui/DateSeparator.js';
import './color-29648548.js';
import './ui/MessageInput.js';
import 'stream';
import './index-775a609a.js';
import './ui/MentionUserLabel.js';
import './ui/MessageContent.js';
import './ui/UserProfile.js';
import './sendBirdSelectors.js';
import './ui/MessageStatus.js';
import './ui/MessageItemMenu.js';
import './ui/MessageItemReactionMenu.js';
import './ui/EmojiReactions.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './ui/ReactionBadge.js';
import './ui/AdminMessage.js';
import './ui/TextMessageItemBody.js';
import './index-ce798211.js';
import './ui/LinkLabel.js';
import './ui/MentionLabel.js';
import './ui/FileMessageItemBody.js';
import './ui/TextButton.js';
import './ui/ThumbnailMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/UnknownMessageItemBody.js';
import './ui/QuoteMessage.js';
import './Channel/components/FileViewer.js';
import './index-2db42eac.js';
import './Channel/components/RemoveMessageModal.js';
import './ui/Modal.js';
import './utils-a66b9c45.js';
import './Channel/components/TypingIndicator.js';
import './Channel/components/FrozenNotification.js';
import './Channel/components/UnreadCount.js';
import './Channel/components/MessageInput.js';
import './ui/QuoteMessageInput.js';

var Channel = function Channel(props) {
  return /*#__PURE__*/React__default.createElement(ChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    useMessageGrouping: props === null || props === void 0 ? void 0 : props.useMessageGrouping,
    useReaction: props === null || props === void 0 ? void 0 : props.useReaction,
    showSearchIcon: props === null || props === void 0 ? void 0 : props.showSearchIcon,
    highlightedMessage: props === null || props === void 0 ? void 0 : props.highlightedMessage,
    startingPoint: props === null || props === void 0 ? void 0 : props.startingPoint,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onBeforeUpdateUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeUpdateUserMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    onSearchClick: props === null || props === void 0 ? void 0 : props.onSearchClick,
    replyType: props === null || props === void 0 ? void 0 : props.replyType,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default.createElement(ChannelUI, {
    renderPlaceholderLoader: props === null || props === void 0 ? void 0 : props.renderPlaceholderLoader,
    renderPlaceholderInvalid: props === null || props === void 0 ? void 0 : props.renderPlaceholderInvalid,
    renderPlaceholderEmpty: props === null || props === void 0 ? void 0 : props.renderPlaceholderEmpty,
    renderChannelHeader: props === null || props === void 0 ? void 0 : props.renderChannelHeader,
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput,
    renderTypingIndicator: props === null || props === void 0 ? void 0 : props.renderTypingIndicator,
    renderCustomSeparator: props === null || props === void 0 ? void 0 : props.renderCustomSeparator
  }));
};

export { Channel as default };
//# sourceMappingURL=Channel.js.map
