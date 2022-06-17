import { a as __spreadArray } from '../../tslib.es6-cee0628b.js';
import React__default, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { f as format } from '../../index-54fd64c3.js';
import SuggestedMentionList from './SuggestedMentionList.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useChannel, a as isDisabledBecauseFrozen } from '../../ChannelProvider-94aeef2f.js';
import { k as getClassName } from '../../index-a1462526.js';
import { M as MAX_USER_MENTION_COUNT, a as MAX_USER_SUGGESTION_COUNT } from '../../const-7d66ce8b.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import MessageInput from '../../ui/MessageInput.js';
import MessageContent from '../../ui/MessageContent.js';
import FileViewer from './FileViewer.js';
import RemoveMessage from './RemoveMessageModal.js';
import { M as MessageInputKeys } from '../../const-f8c6fa59.js';
import { u as useLocalization } from '../../LocalizationContext-79eb0635.js';
import '../../index-7e8c8e8d.js';
import '../../ui/Icon.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../withSendBird.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../topics-af18f6dc.js';
import '../../compareIds-91189cc3.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../stringSet-4614f875.js';
import '../../ui/ReactionButton.js';
import '../../color-29648548.js';
import 'stream';
import '../../ui/IconButton.js';
import '../../index-775a609a.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../ui/MessageStatus.js';
import '../../ui/Loader.js';
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
import '../../index-2db42eac.js';
import '../../ui/Modal.js';
import '../../utils-a66b9c45.js';

var Message = function Message(props) {
  var _a;

  var message = props.message,
      hasSeparator = props.hasSeparator,
      chainTop = props.chainTop,
      chainBottom = props.chainBottom,
      handleScroll = props.handleScroll,
      renderCustomSeparator = props.renderCustomSeparator,
      renderEditInput = props.renderEditInput,
      renderMessage = props.renderMessage,
      renderMessageContent = props.renderMessageContent;
  var dateLocale = useLocalization().dateLocale;
  var globalStore = useSendbirdStateContext();

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      userId = _b.userId,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || MAX_USER_MENTION_COUNT;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || MAX_USER_SUGGESTION_COUNT;

  var _c = useChannel(),
      currentGroupChannel = _c.currentGroupChannel,
      highLightedMessageId = _c.highLightedMessageId,
      setHighLightedMessageId = _c.setHighLightedMessageId,
      animatedMessageId = _c.animatedMessageId,
      setAnimatedMessageId = _c.setAnimatedMessageId,
      updateMessage = _c.updateMessage,
      scrollToMessage = _c.scrollToMessage,
      replyType = _c.replyType,
      useReaction = _c.useReaction,
      toggleReaction = _c.toggleReaction,
      emojiContainer = _c.emojiContainer,
      nicknamesMap = _c.nicknamesMap,
      setQuoteMessage = _c.setQuoteMessage,
      resendMessage = _c.resendMessage,
      renderUserMentionItem = _c.renderUserMentionItem;

  var _d = useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var _g = useState(false),
      isAnimated = _g[0],
      setIsAnimated = _g[1];

  var _h = useState(false),
      isHighlighted = _h[0],
      setIsHighlighted = _h[1];

  var _j = useState(''),
      mentionNickname = _j[0],
      setMentionNickname = _j[1];

  var _k = useState([]),
      mentionedUsers = _k[0],
      setMentionedUsers = _k[1];

  var _l = useState([]),
      mentionedUserIds = _l[0],
      setMentionedUserIds = _l[1];

  var _m = useState(null),
      messageInputEvent = _m[0],
      setMessageInputEvent = _m[1];

  var _o = useState(null),
      selectedUser = _o[0],
      setSelectedUser = _o[1];

  var _p = useState([]),
      mentionSuggestedUsers = _p[0],
      setMentionSuggestedUsers = _p[1];

  var _q = useState(true),
      ableMention = _q[0],
      setAbleMention = _q[1];

  var editMessageInputRef = useRef(null);
  var useMessageScrollRef = useRef(null);
  var displaySuggestedMentionList = isMentionEnabled && mentionNickname.length > 0;
  useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  useEffect(function () {
    setMentionedUsers(mentionedUsers.filter(function (_a) {
      var userId = _a.userId;
      var i = mentionedUserIds.indexOf(userId);

      if (i < 0) {
        return false;
      } else {
        mentionedUserIds.splice(i, 1);
        return true;
      }
    }));
  }, [mentionedUserIds]);
  useLayoutEffect(function () {
    handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
  }, [showEdit, (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length]);
  useLayoutEffect(function () {
    if (highLightedMessageId === message.messageId) {
      if (useMessageScrollRef && useMessageScrollRef.current) {
        useMessageScrollRef.current.scrollIntoView({
          block: 'center',
          inline: 'center'
        });
        setIsAnimated(false);
        setTimeout(function () {
          setIsHighlighted(true);
        }, 500);
        setTimeout(function () {
          setHighLightedMessageId(0);
        }, 1600);
      }
    } else {
      setIsHighlighted(false);
    }
  }, [highLightedMessageId, useMessageScrollRef.current, message.messageId]);
  useLayoutEffect(function () {
    if (animatedMessageId === message.messageId) {
      if (useMessageScrollRef && useMessageScrollRef.current) {
        useMessageScrollRef.current.scrollIntoView({
          block: 'center',
          inline: 'center'
        });
        setIsHighlighted(false);
        setTimeout(function () {
          setIsAnimated(true);
        }, 500);
        setTimeout(function () {
          setAnimatedMessageId(0);
        }, 1600);
      }
    } else {
      setIsAnimated(false);
    }
  }, [animatedMessageId, useMessageScrollRef.current, message.messageId]);
  var renderedMessage = useMemo(function () {
    return renderMessage === null || renderMessage === void 0 ? void 0 : renderMessage({
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom
    });
  }, [message, renderMessage]);
  var renderedCustomSeparator = useMemo(function () {
    if (renderCustomSeparator) {
      return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator();
    }

    return null;
  }, [message, renderCustomSeparator]);

  if (renderedMessage) {
    return /*#__PURE__*/React__default.createElement("div", {
      ref: useMessageScrollRef,
      className: getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : ''])
    }, // TODO: Add message instance as a function parameter
    hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, format(message.createdAt, 'MMMM dd, yyyy', {
      locale: dateLocale
    })))), renderedMessage);
  }

  if (showEdit && message.isUserMessage()) {
    return (renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, displaySuggestedMentionList && /*#__PURE__*/React__default.createElement(SuggestedMentionList, {
      targetNickname: mentionNickname,
      inputEvent: messageInputEvent,
      renderUserMentionItem: renderUserMentionItem,
      onUserItemClick: function onUserItemClick(user) {
        if (user) {
          setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
        }

        setMentionNickname('');
        setSelectedUser(user);
        setMessageInputEvent(null);
      },
      onFocusItemChange: function onFocusItemChange() {
        setMessageInputEvent(null);
      },
      onFetchUsers: function onFetchUsers(users) {
        setMentionSuggestedUsers(users);
      },
      ableAddMention: ableMention,
      maxMentionCount: maxUserMentionCount,
      maxSuggestionCount: maxUserSuggestionCount
    }), /*#__PURE__*/React__default.createElement(MessageInput, {
      isEdit: true,
      disabled: isDisabledBecauseFrozen(currentGroupChannel),
      ref: editMessageInputRef,
      mentionSelectedUser: selectedUser,
      isMentionEnabled: isMentionEnabled,
      message: message,
      onUpdateMessage: function onUpdateMessage(_a) {
        var messageId = _a.messageId,
            message = _a.message,
            mentionTemplate = _a.mentionTemplate;
        updateMessage({
          messageId: messageId,
          message: message,
          mentionedUsers: mentionedUsers,
          mentionTemplate: mentionTemplate
        });
        setShowEdit(false);
      },
      onCancelEdit: function onCancelEdit() {
        setMentionNickname('');
        setMentionedUsers([]);
        setMentionedUserIds([]);
        setMentionSuggestedUsers([]);
        setShowEdit(false);
      },
      onUserMentioned: function onUserMentioned(user) {
        if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
          setSelectedUser(null);
          setMentionNickname('');
        }
      },
      onMentionStringChange: function onMentionStringChange(mentionText) {
        setMentionNickname(mentionText);
      },
      onMentionedUserIdsUpdated: function onMentionedUserIdsUpdated(userIds) {
        setMentionedUserIds(userIds);
      },
      onKeyDown: function onKeyDown(e) {
        if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === MessageInputKeys.Enter && ableMention || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
          setMessageInputEvent(e);
          return true;
        }

        return false;
      }
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : '']),
    style: {
      marginBottom: '2px'
    },
    ref: useMessageScrollRef
  }, hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, format(message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  })))), (renderMessageContent === null || renderMessageContent === void 0 ? void 0 : renderMessageContent()) || /*#__PURE__*/React__default.createElement(MessageContent, {
    className: "sendbird-message-hoc__message-content",
    userId: userId,
    scrollToMessage: scrollToMessage,
    channel: currentGroupChannel,
    message: message,
    disabled: !isOnline,
    chainTop: chainTop,
    chainBottom: chainBottom,
    useReaction: useReaction,
    replyType: replyType,
    nicknamesMap: nicknamesMap,
    emojiContainer: emojiContainer,
    showEdit: setShowEdit,
    showRemove: setShowRemove,
    showFileViewer: setShowFileViewer,
    resendMessage: resendMessage,
    toggleReaction: toggleReaction,
    setQuoteMessage: setQuoteMessage
  }), showRemove && /*#__PURE__*/React__default.createElement(RemoveMessage, {
    message: message,
    onCancel: function onCancel() {
      return setShowRemove(false);
    }
  }), showFileViewer && /*#__PURE__*/React__default.createElement(FileViewer, {
    message: message,
    onCancel: function onCancel() {
      return setShowFileViewer(false);
    }
  }));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
