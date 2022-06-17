import React__default, { useContext, useRef, useState } from 'react';
import { f as format } from '../index-54fd64c3.js';
import Avatar from './Avatar.js';
import ConnectedUserProfile from './UserProfile.js';
import MessageStatus from './MessageStatus.js';
import MessageItemMenu from './MessageItemMenu.js';
import MessageItemReactionMenu from './MessageItemReactionMenu.js';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import EmojiReactions2 from './EmojiReactions.js';
import AdminMessage from './AdminMessage.js';
import TextMessageItemBody from './TextMessageItemBody.js';
import FileMessageItemBody from './FileMessageItemBody.js';
import ThumbnailMessageItemBody from './ThumbnailMessageItemBody.js';
import OGMessageItemBody from './OGMessageItemBody.js';
import UnknownMessageItemBody from './UnknownMessageItemBody.js';
import QuoteMessage from './QuoteMessage.js';
import { v as getUIKitMessageTypes, k as getClassName, w as getSenderName, x as isTextMessage, y as isOGMessage, z as getUIKitMessageType, p as isThumbnailMessage } from '../index-a1462526.js';
import { a as UserProfileContext } from '../UserProfileContext-9b9928cf.js';
import { u as useLocalization } from '../LocalizationContext-79eb0635.js';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import '../index-7e8c8e8d.js';
import '../tslib.es6-cee0628b.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import './Icon.js';
import '../uuid-b12b05c7.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import '../index-775a609a.js';
import './Loader.js';
import '../stringSet-4614f875.js';
import './IconButton.js';
import './ReactionButton.js';
import 'react-dom';
import './SortByRow.js';
import './Tooltip.js';
import './TooltipWrapper.js';
import './ReactionBadge.js';
import '../index-ce798211.js';
import './LinkLabel.js';
import './MentionLabel.js';
import './TextButton.js';
import '../color-29648548.js';

function MessageContent(_a) {
  var _b, _c, _d, _e, _f, _g;

  var className = _a.className,
      userId = _a.userId,
      channel = _a.channel,
      message = _a.message,
      _h = _a.disabled,
      disabled = _h === void 0 ? false : _h,
      _j = _a.chainTop,
      chainTop = _j === void 0 ? false : _j,
      _k = _a.chainBottom,
      chainBottom = _k === void 0 ? false : _k,
      _l = _a.useReaction,
      useReaction = _l === void 0 ? false : _l,
      replyType = _a.replyType,
      nicknamesMap = _a.nicknamesMap,
      emojiContainer = _a.emojiContainer,
      scrollToMessage = _a.scrollToMessage,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      showFileViewer = _a.showFileViewer,
      resendMessage = _a.resendMessage,
      toggleReaction = _a.toggleReaction,
      setQuoteMessage = _a.setQuoteMessage;
  var messageTypes = getUIKitMessageTypes();
  var dateLocale = useLocalization().dateLocale;
  var config = ((useSendbirdStateContext === null || useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext()) || {}).config;

  var _m = useContext(UserProfileContext),
      disableUserProfile = _m.disableUserProfile,
      renderUserProfile = _m.renderUserProfile;

  var avatarRef = useRef(null);

  var _o = useState(false),
      mouseHover = _o[0],
      setMouseHover = _o[1];

  var _p = useState(false),
      supposedHover = _p[0],
      setSupposedHover = _p[1];

  var isByMe = userId === ((_c = (_b = message) === null || _b === void 0 ? void 0 : _b.sender) === null || _c === void 0 ? void 0 : _c.userId) || message.sendingStatus === 'pending' || message.sendingStatus === 'failed';
  var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
  var chainTopClassName = chainTop ? 'chain-top' : '';
  var useReactionClassName = useReaction ? 'use-reactions' : '';
  var supposedHoverClassName = supposedHover ? 'supposed-hover' : '';
  var useReplying = !!(replyType === 'QUOTE_REPLY' && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage));
  var useReplyingClassName = useReplying ? 'use-quote' : '';

  if (((_d = message === null || message === void 0 ? void 0 : message.isAdminMessage) === null || _d === void 0 ? void 0 : _d.call(message)) || (message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
    return /*#__PURE__*/React__default.createElement(AdminMessage, {
      message: message
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-message-content', isByMeClassName]),
    onMouseOver: function onMouseOver() {
      return setMouseHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setMouseHover(false);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content__left', useReactionClassName, isByMeClassName, useReplyingClassName])
  }, !isByMe && !chainBottom &&
  /*#__PURE__*/

  /** user profile */
  React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      var _a, _b, _c;

      return /*#__PURE__*/React__default.createElement(Avatar, {
        className: "sendbird-message-content__left__avatar",
        src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
          var _a;

          return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
        })) === null || _b === void 0 ? void 0 : _b.profileUrl) || ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.profileUrl) || '' // TODO: Divide getting profileUrl logic to utils
        ,
        ref: avatarRef,
        width: "28px",
        height: "28px",
        onClick: function onClick() {
          if (!disableUserProfile) toggleDropdown();
        }
      });
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems
      /**
      * parentRef: For catching location(x, y) of MenuItems
      * parentContainRef: For toggling more options(menus & reactions)
      */
      , {
        parentRef: avatarRef,
        parentContainRef: avatarRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: message === null || message === void 0 ? void 0 : message.sender,
        close: closeDropdown
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        user: message.sender,
        onSuccess: closeDropdown
      }));
    }
  }), isByMe && /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content-menu', useReactionClassName, supposedHoverClassName, isByMeClassName])
  }, /*#__PURE__*/React__default.createElement(MessageItemMenu, {
    className: "sendbird-message-content-menu__normal-menu",
    channel: channel,
    message: message,
    isByMe: isByMe,
    replyType: replyType,
    disabled: disabled,
    showEdit: showEdit,
    showRemove: showRemove,
    resendMessage: resendMessage,
    setQuoteMessage: setQuoteMessage,
    setSupposedHover: setSupposedHover
  }), useReaction && /*#__PURE__*/React__default.createElement(MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-content__middle"
  }, !isByMe && !chainTop && !useReplying && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-content__middle__sender-name",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, ((_f = (_e = channel === null || channel === void 0 ? void 0 : channel.members) === null || _e === void 0 ? void 0 : _e.find(function (member) {
    var _a;

    return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
  })) === null || _f === void 0 ? void 0 : _f.nickname) || getSenderName(message) // TODO: Divide getting profileUrl logic to utils
  ), useReplying ? /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName])
  }, /*#__PURE__*/React__default.createElement(QuoteMessage, {
    message: message,
    userId: userId,
    isByMe: isByMe,
    onClick: function onClick() {
      var _a;

      if (((_a = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message === null || message === void 0 ? void 0 : message.parentMessageId)) {
        scrollToMessage(message.parentMessage.createdAt, message.parentMessageId);
      }
    }
  })) : null, /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content__middle__body-container'])
  }, isByMe && !chainBottom && /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content__middle__body-container__created-at', 'left', supposedHoverClassName])
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-content__middle__body-container__created-at__component-container"
  }, /*#__PURE__*/React__default.createElement(MessageStatus, {
    message: message,
    channel: channel
  }))), isTextMessage(message) && /*#__PURE__*/React__default.createElement(TextMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), isOGMessage(message) && /*#__PURE__*/React__default.createElement(OGMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), getUIKitMessageType(message) === messageTypes.FILE && /*#__PURE__*/React__default.createElement(FileMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), isThumbnailMessage(message) && /*#__PURE__*/React__default.createElement(ThumbnailMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    showFileViewer: showFileViewer
  }), getUIKitMessageType(message) === messageTypes.UNKNOWN && /*#__PURE__*/React__default.createElement(UnknownMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), useReaction && ((_g = message === null || message === void 0 ? void 0 : message.reactions) === null || _g === void 0 ? void 0 : _g.length) > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content-reactions', !isByMe || isThumbnailMessage(message) || isOGMessage(message) ? '' : 'primary', mouseHover ? 'mouse-hover' : ''])
  }, /*#__PURE__*/React__default.createElement(EmojiReactions2, {
    userId: userId,
    message: message,
    isByMe: isByMe,
    emojiContainer: emojiContainer,
    memberNicknamesMap: nicknamesMap,
    toggleReaction: toggleReaction
  })), !isByMe && !chainBottom && /*#__PURE__*/React__default.createElement(Label, {
    className: getClassName(['sendbird-message-content__middle__body-container__created-at', 'right', supposedHoverClassName]),
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content__right', chainTopClassName, useReactionClassName, useReplyingClassName])
  }, !isByMe && /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-message-content-menu', chainTopClassName, supposedHoverClassName, isByMeClassName])
  }, useReaction && /*#__PURE__*/React__default.createElement(MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }), /*#__PURE__*/React__default.createElement(MessageItemMenu, {
    className: "sendbird-message-content-menu__normal-menu",
    channel: channel,
    message: message,
    isByMe: isByMe,
    replyType: replyType,
    disabled: disabled,
    showRemove: showRemove,
    resendMessage: resendMessage,
    setQuoteMessage: setQuoteMessage,
    setSupposedHover: setSupposedHover
  }))));
}

export { MessageContent as default };
//# sourceMappingURL=MessageContent.js.map
