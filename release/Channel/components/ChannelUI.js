import React__default, { useState, useEffect } from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useChannel, M as MARK_AS_READ } from '../../ChannelProvider-94aeef2f.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-9d8b78a7.js';
import ConnectionStatus from '../../ui/ConnectionStatus.js';
import ChatHeader from './ChannelHeader.js';
import MessageList from './MessageList.js';
import TypingIndicator from './TypingIndicator.js';
import FrozenNotification from './FrozenNotification.js';
import UnreadCount from './UnreadCount.js';
import MessageInputWrapper from './MessageInput.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../UserProfileContext-9b9928cf.js';
import 'prop-types';
import '../../index-54fd64c3.js';
import '../../index-7e8c8e8d.js';
import '../../topics-af18f6dc.js';
import '../../index-a1462526.js';
import '../../tslib.es6-cee0628b.js';
import '../../compareIds-91189cc3.js';
import '../../const-7d66ce8b.js';
import '../../uuid-b12b05c7.js';
import '../../ui/ContextMenu.js';
import '../../index-3db1006f.js';
import '../../stringSet-4614f875.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../ui/Loader.js';
import '../../LocalizationContext-79eb0635.js';
import '../../ui/IconButton.js';
import '../../ui/ChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../utils-bfbe8356.js';
import '../../index-6d919a6a.js';
import './Message.js';
import './SuggestedMentionList.js';
import '../../const-f8c6fa59.js';
import '../../ui/DateSeparator.js';
import '../../color-29648548.js';
import '../../ui/MessageInput.js';
import 'stream';
import '../../index-775a609a.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/MessageContent.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../ui/MessageStatus.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/EmojiReactions.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../ui/ReactionBadge.js';
import '../../ui/AdminMessage.js';
import '../../ui/TextMessageItemBody.js';
import '../../index-ce798211.js';
import '../../ui/LinkLabel.js';
import '../../ui/MentionLabel.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/QuoteMessage.js';
import './FileViewer.js';
import '../../index-2db42eac.js';
import './RemoveMessageModal.js';
import '../../ui/Modal.js';
import '../../utils-a66b9c45.js';
import '../../ui/QuoteMessageInput.js';

var ChannelUI = function ChannelUI(_a) {
  var _b, _c, _d, _e;

  var renderPlaceholderLoader = _a.renderPlaceholderLoader,
      renderPlaceholderInvalid = _a.renderPlaceholderInvalid,
      renderPlaceholderEmpty = _a.renderPlaceholderEmpty,
      renderChannelHeader = _a.renderChannelHeader,
      renderMessage = _a.renderMessage,
      renderMessageInput = _a.renderMessageInput,
      renderTypingIndicator = _a.renderTypingIndicator,
      renderCustomSeparator = _a.renderCustomSeparator;

  var _f = useChannel(),
      currentGroupChannel = _f.currentGroupChannel,
      channelUrl = _f.channelUrl,
      isInvalid = _f.isInvalid,
      unreadSince = _f.unreadSince,
      loading = _f.loading,
      setInitialTimeStamp = _f.setInitialTimeStamp,
      setAnimatedMessageId = _f.setAnimatedMessageId,
      setHighLightedMessageId = _f.setHighLightedMessageId,
      scrollRef = _f.scrollRef,
      messagesDispatcher = _f.messagesDispatcher;

  var _g = useState(0),
      unreadCount = _g[0],
      setUnreadCount = _g[1];

  useEffect(function () {
    setUnreadCount(currentGroupChannel.unreadMessageCount);
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount]);
  var globalStore = useSendbirdStateContext();
  var sdkError = (_c = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.error;
  var logger = (_d = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _d === void 0 ? void 0 : _d.logger;
  var isOnline = (_e = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _e === void 0 ? void 0 : _e.isOnline;

  if (!channelUrl) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (isInvalid) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.WRONG
    }));
  }

  if (sdkError) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.WRONG,
      retryToConnect: function retryToConnect() {
        logger.info('Channel: reconnecting'); // reconnect();
      }
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation"
  }, (renderChannelHeader === null || renderChannelHeader === void 0 ? void 0 : renderChannelHeader()) || /*#__PURE__*/React__default.createElement(ChatHeader, null), (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && /*#__PURE__*/React__default.createElement(FrozenNotification, null), unreadCount > 0 && /*#__PURE__*/React__default.createElement(UnreadCount, {
    count: unreadCount,
    time: unreadSince,
    onClick: function onClick() {
      var _a, _b, _c;

      setUnreadCount(0);

      if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) {
        scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
      } // currentGroupChannel?.markAsRead();


      messagesDispatcher({
        type: MARK_AS_READ,
        payload: {
          channel: currentGroupChannel
        }
      });
      setInitialTimeStamp(null);
      setAnimatedMessageId(null);
      setHighLightedMessageId(null);
    }
  }), loading ? /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation"
  }, (renderPlaceholderLoader === null || renderPlaceholderLoader === void 0 ? void 0 : renderPlaceholderLoader()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.LOADING
  })) : /*#__PURE__*/React__default.createElement(MessageList, {
    renderMessage: renderMessage,
    renderPlaceholderEmpty: renderPlaceholderEmpty,
    renderCustomSeparator: renderCustomSeparator
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__footer"
  }, (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || /*#__PURE__*/React__default.createElement(MessageInputWrapper, null), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-conversation__footer__typing-indicator"
  }, (renderTypingIndicator === null || renderTypingIndicator === void 0 ? void 0 : renderTypingIndicator()) || /*#__PURE__*/React__default.createElement(TypingIndicator, null), !isOnline && /*#__PURE__*/React__default.createElement(ConnectionStatus, null))));
};

export { ChannelUI as default };
//# sourceMappingURL=ChannelUI.js.map
