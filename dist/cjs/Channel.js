'use strict';

var React = require('react');
var Channel_context = require('./ChannelProvider-2848c6e0.js');
var Channel_components_ChannelUI = require('./Channel/components/ChannelUI.js');
require('./UserProfileContext-46f306ca.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-77e2b7af.js');
require('./index-e7940a94.js');
require('./index-6f7d86a8.js');
require('./topics-dc71c830.js');
require('./index-e0c5dddd.js');
require('./tslib.es6-cb3f88e3.js');
require('./compareIds-669db256.js');
require('./const-61eaa01a.js');
require('./uuid-a43dad75.js');
require('./ui/ContextMenu.js');
require('./index-25825fe1.js');
require('./stringSet-435b3346.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/ReactionButton.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./index-bbdcdf62.js');
require('./ui/Loader.js');
require('./LocalizationContext-60feae29.js');
require('./ui/ConnectionStatus.js');
require('./Channel/components/ChannelHeader.js');
require('./ui/IconButton.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./utils-f418bdf3.js');
require('./Channel/components/MessageList.js');
require('./index-f13da671.js');
require('./Channel/components/Message.js');
require('./Channel/components/SuggestedMentionList.js');
require('./const-56d42d10.js');
require('./ui/DateSeparator.js');
require('./color-c2dc807b.js');
require('./ui/MessageInput.js');
require('stream');
require('./index-8f00ec86.js');
require('./ui/MentionUserLabel.js');
require('./ui/MessageContent.js');
require('./ui/UserProfile.js');
require('./sendBirdSelectors.js');
require('./ui/MessageStatus.js');
require('./ui/MessageItemMenu.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/EmojiReactions.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./ui/ReactionBadge.js');
require('./ui/AdminMessage.js');
require('./ui/TextMessageItemBody.js');
require('./index-1ff82a8f.js');
require('./ui/LinkLabel.js');
require('./ui/MentionLabel.js');
require('./ui/FileMessageItemBody.js');
require('./ui/TextButton.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/OGMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/QuoteMessage.js');
require('./Channel/components/FileViewer.js');
require('./index-94591769.js');
require('./Channel/components/RemoveMessageModal.js');
require('./ui/Modal.js');
require('./utils-81069a8c.js');
require('./Channel/components/TypingIndicator.js');
require('./Channel/components/FrozenNotification.js');
require('./Channel/components/UnreadCount.js');
require('./Channel/components/MessageInput.js');
require('./ui/QuoteMessageInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Channel = function Channel(props) {
  return /*#__PURE__*/React__default["default"].createElement(Channel_context.ChannelProvider, {
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
  }, /*#__PURE__*/React__default["default"].createElement(Channel_components_ChannelUI, {
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

module.exports = Channel;
//# sourceMappingURL=Channel.js.map
