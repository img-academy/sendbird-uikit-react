'use strict';

var React = require('react');
var index$1 = require('../index-e7940a94.js');
var ui_Avatar = require('./Avatar.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_MessageStatus = require('./MessageStatus.js');
var ui_MessageItemMenu = require('./MessageItemMenu.js');
var ui_MessageItemReactionMenu = require('./MessageItemReactionMenu.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-25825fe1.js');
var ui_EmojiReactions = require('./EmojiReactions.js');
var ui_AdminMessage = require('./AdminMessage.js');
var ui_TextMessageItemBody = require('./TextMessageItemBody.js');
var ui_FileMessageItemBody = require('./FileMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('./ThumbnailMessageItemBody.js');
var ui_OGMessageItemBody = require('./OGMessageItemBody.js');
var ui_UnknownMessageItemBody = require('./UnknownMessageItemBody.js');
var ui_QuoteMessage = require('./QuoteMessage.js');
var index = require('../index-e0c5dddd.js');
var UserProfileContext = require('../UserProfileContext-46f306ca.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../index-6f7d86a8.js');
require('../tslib.es6-cb3f88e3.js');
require('./ImageRenderer.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('./Icon.js');
require('../uuid-a43dad75.js');
require('../withSendBird.js');
require('../sendBirdSelectors.js');
require('../topics-dc71c830.js');
require('../index-8f00ec86.js');
require('./Loader.js');
require('../stringSet-435b3346.js');
require('./IconButton.js');
require('./ReactionButton.js');
require('react-dom');
require('./SortByRow.js');
require('./Tooltip.js');
require('./TooltipWrapper.js');
require('./ReactionBadge.js');
require('../index-1ff82a8f.js');
require('./LinkLabel.js');
require('./MentionLabel.js');
require('./TextButton.js');
require('../color-c2dc807b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  var messageTypes = index.getUIKitMessageTypes();
  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var config = ((useSendbirdStateContext === null || useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext()) || {}).config;

  var _m = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _m.disableUserProfile,
      renderUserProfile = _m.renderUserProfile;

  var avatarRef = React.useRef(null);

  var _o = React.useState(false),
      mouseHover = _o[0],
      setMouseHover = _o[1];

  var _p = React.useState(false),
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
    return /*#__PURE__*/React__default["default"].createElement(ui_AdminMessage, {
      message: message
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-message-content', isByMeClassName]),
    onMouseOver: function onMouseOver() {
      return setMouseHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setMouseHover(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__left', useReactionClassName, isByMeClassName, useReplyingClassName])
  }, !isByMe && !chainBottom &&
  /*#__PURE__*/

  /** user profile */
  React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      var _a, _b, _c;

      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
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
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems
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
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        user: message.sender,
        onSuccess: closeDropdown
      }));
    }
  }), isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-menu', useReactionClassName, supposedHoverClassName, isByMeClassName])
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageItemMenu, {
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
  }), useReaction && /*#__PURE__*/React__default["default"].createElement(ui_MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-content__middle"
  }, !isByMe && !chainTop && !useReplying && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-content__middle__sender-name",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, ((_f = (_e = channel === null || channel === void 0 ? void 0 : channel.members) === null || _e === void 0 ? void 0 : _e.find(function (member) {
    var _a;

    return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
  })) === null || _f === void 0 ? void 0 : _f.nickname) || index.getSenderName(message) // TODO: Divide getting profileUrl logic to utils
  ), useReplying ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName])
  }, /*#__PURE__*/React__default["default"].createElement(ui_QuoteMessage, {
    message: message,
    userId: userId,
    isByMe: isByMe,
    onClick: function onClick() {
      var _a;

      if (((_a = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message === null || message === void 0 ? void 0 : message.parentMessageId)) {
        scrollToMessage(message.parentMessage.createdAt, message.parentMessageId);
      }
    }
  })) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__body-container'])
  }, isByMe && !chainBottom && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__body-container__created-at', 'left', supposedHoverClassName])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-content__middle__body-container__created-at__component-container"
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageStatus["default"], {
    message: message,
    channel: channel
  }))), index.isTextMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_TextMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), index.isOGMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_OGMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), index.getUIKitMessageType(message) === messageTypes.FILE && /*#__PURE__*/React__default["default"].createElement(ui_FileMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), index.isThumbnailMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_ThumbnailMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    showFileViewer: showFileViewer
  }), index.getUIKitMessageType(message) === messageTypes.UNKNOWN && /*#__PURE__*/React__default["default"].createElement(ui_UnknownMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), useReaction && ((_g = message === null || message === void 0 ? void 0 : message.reactions) === null || _g === void 0 ? void 0 : _g.length) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-reactions', !isByMe || index.isThumbnailMessage(message) || index.isOGMessage(message) ? '' : 'primary', mouseHover ? 'mouse-hover' : ''])
  }, /*#__PURE__*/React__default["default"].createElement(ui_EmojiReactions, {
    userId: userId,
    message: message,
    isByMe: isByMe,
    emojiContainer: emojiContainer,
    memberNicknamesMap: nicknamesMap,
    toggleReaction: toggleReaction
  })), !isByMe && !chainBottom && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: index.getClassName(['sendbird-message-content__middle__body-container__created-at', 'right', supposedHoverClassName]),
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__right', chainTopClassName, useReactionClassName, useReplyingClassName])
  }, !isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-menu', chainTopClassName, supposedHoverClassName, isByMeClassName])
  }, useReaction && /*#__PURE__*/React__default["default"].createElement(ui_MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }), /*#__PURE__*/React__default["default"].createElement(ui_MessageItemMenu, {
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

module.exports = MessageContent;
//# sourceMappingURL=MessageContent.js.map
