'use strict';

var tslib_es6 = require('../../tslib.es6-cb3f88e3.js');
var React = require('react');
var Channel_context = require('../../ChannelProvider-2848c6e0.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var ui_QuoteMessageInput = require('../../ui/QuoteMessageInput.js');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_components_SuggestedMentionList = require('./SuggestedMentionList.js');
var _const = require('../../const-56d42d10.js');
require('../../UserProfileContext-46f306ca.js');
require('prop-types');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../index-e7940a94.js');
require('../../index-6f7d86a8.js');
require('../../topics-dc71c830.js');
require('../../index-e0c5dddd.js');
require('../../compareIds-669db256.js');
require('../../const-61eaa01a.js');
require('../../uuid-a43dad75.js');
require('../../ui/ContextMenu.js');
require('../../index-25825fe1.js');
require('../../stringSet-435b3346.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('stream');
require('../../ui/IconButton.js');
require('../../index-8f00ec86.js');
require('../../ui/MentionUserLabel.js');
require('../../withSendBird.js');
require('../../ui/Avatar.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageInputWrapper = function MessageInputWrapper() {
  var _a = Channel_context.useChannel(),
      currentGroupChannel = _a.currentGroupChannel,
      initialized = _a.initialized,
      quoteMessage = _a.quoteMessage,
      sendMessage = _a.sendMessage,
      sendFileMessage = _a.sendFileMessage,
      setQuoteMessage = _a.setQuoteMessage,
      messageInputRef = _a.messageInputRef,
      renderUserMentionItem = _a.renderUserMentionItem;

  var globalStore = useSendbirdStateContext();
  var channel = currentGroupChannel;

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _c = React.useState(''),
      mentionNickname = _c[0],
      setMentionNickname = _c[1];

  var _d = React.useState([]),
      mentionedUsers = _d[0],
      setMentionedUsers = _d[1];

  var _e = React.useState([]),
      mentionedUserIds = _e[0],
      setMentionedUserIds = _e[1];

  var _f = React.useState(null),
      selectedUser = _f[0],
      setSelectedUser = _f[1];

  var _g = React.useState([]),
      mentionSuggestedUsers = _g[0],
      setMentionSuggestedUsers = _g[1];

  var _h = React.useState(true),
      ableMention = _h[0],
      setAbleMention = _h[1];

  var _j = React.useState(null),
      messageInputEvent = _j[0],
      setMessageInputEvent = _j[1];

  var disabled = !initialized || Channel_context.isDisabledBecauseFrozen(channel) || Channel_context.isDisabledBecauseMuted(channel) || !isOnline;
  var isOperator = Channel_context.isOperator(channel);
  var isBroadcast = channel.isBroadcast;
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !Channel_context.isDisabledBecauseFrozen(channel) && !Channel_context.isDisabledBecauseMuted(channel); // Reset when channel changes

  React.useEffect(function () {
    setMentionNickname('');
    setMentionedUsers([]);
    setMentionedUserIds([]);
    setSelectedUser(null);
    setMentionSuggestedUsers([]);
    setAbleMention(true);
    setMessageInputEvent(null);
  }, [channel === null || channel === void 0 ? void 0 : channel.url]);
  React.useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  React.useEffect(function () {
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
  }, [mentionedUserIds]); // broadcast channel + not operator

  if (isBroadcast && !isOperator) {
    return null;
  } // other conditions


  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper"
  }, displaySuggestedMentionList && /*#__PURE__*/React__default["default"].createElement(Channel_components_SuggestedMentionList, {
    targetNickname: mentionNickname,
    inputEvent: messageInputEvent,
    renderUserMentionItem: renderUserMentionItem,
    onUserItemClick: function onUserItemClick(user) {
      if (user) {
        setMentionedUsers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], mentionedUsers, true), [user], false));
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
  }), quoteMessage && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper__quote-message-input"
  }, /*#__PURE__*/React__default["default"].createElement(ui_QuoteMessageInput, {
    replyingMessage: quoteMessage,
    onClose: function onClose() {
      return setQuoteMessage(null);
    }
  })), /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    className: "sendbird-message-input-wrapper__message-input",
    channelUrl: channel === null || channel === void 0 ? void 0 : channel.url,
    mentionSelectedUser: selectedUser,
    isMentionEnabled: isMentionEnabled,
    placeholder: quoteMessage && stringSet.MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER || Channel_context.isDisabledBecauseFrozen(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED || Channel_context.isDisabledBecauseMuted(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED,
    ref: messageInputRef,
    disabled: disabled,
    onStartTyping: function onStartTyping() {
      channel === null || channel === void 0 ? void 0 : channel.startTyping();
    },
    onInputEmpty: function onInputEmpty() {
      channel === null || channel === void 0 ? void 0 : channel.endTyping();
    },
    onSendMessage: function onSendMessage(_a) {
      var message = _a.message,
          mentionTemplate = _a.mentionTemplate;
      sendMessage({
        message: message,
        quoteMessage: quoteMessage,
        mentionedUsers: mentionedUsers,
        mentionTemplate: mentionTemplate
      });
      setMentionNickname('');
      setMentionedUsers([]);
      setQuoteMessage(null);
      channel === null || channel === void 0 ? void 0 : channel.endTyping();
    },
    onFileUpload: function onFileUpload(file) {
      sendFileMessage(file, quoteMessage);
      setQuoteMessage(null);
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
      if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === _const.MessageInputKeys.Enter && ableMention || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
        setMessageInputEvent(e);
        return true;
      }

      return false;
    }
  }));
};

var MessageInputWrapper$1 = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

module.exports = MessageInputWrapper$1;
//# sourceMappingURL=MessageInput.js.map
