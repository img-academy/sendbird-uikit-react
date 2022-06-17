import React__default from 'react';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import Badge from '../../ui/Badge.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { c as LabelStringSet, L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import { i as isToday, a as isYesterday, f as formatRelative } from '../../index-d4c08fec.js';
import { f as format } from '../../index-54fd64c3.js';
import { t as truncateString, e as isEditedMessage } from '../../index-a1462526.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../LocalizationContext-79eb0635.js';
import MentionUserLabel from '../../ui/MentionUserLabel.js';
import { u as useChannelListContext } from '../../ChannelListProvider-23f83387.js';
import { TypingIndicatorText } from '../../Channel/components/TypingIndicator.js';
import MessageStatus from '../../ui/MessageStatus.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../uuid-b12b05c7.js';
import '../../utils-bfbe8356.js';
import '../../stringSet-4614f875.js';
import '../../index-6d919a6a.js';
import '../../index-7e8c8e8d.js';
import '../../withSendBird.js';
import '../../topics-af18f6dc.js';
import '../../utils-a66b9c45.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../ChannelProvider-94aeef2f.js';
import '../../compareIds-91189cc3.js';
import '../../const-7d66ce8b.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/Loader.js';

var getChannelTitle = function getChannelTitle() {
  var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentUserId = arguments.length > 1 ? arguments[1] : undefined;
  var stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LabelStringSet;

  if (!channel || !channel.name && !channel.members) {
    return stringSet.NO_TITLE;
  }

  if (channel.name && channel.name !== 'Group Channel') {
    return channel.name;
  }

  if (channel.members.length === 1) {
    return stringSet.NO_MEMBERS;
  }

  return channel.members.filter(function (_ref) {
    var userId = _ref.userId;
    return userId !== currentUserId;
  }).map(function (_ref2) {
    var nickname = _ref2.nickname;
    return nickname || stringSet.NO_NAME;
  }).join(', ');
};
var getLastMessageCreatedAt = function getLastMessageCreatedAt(channel, locale) {
  var _channel$lastMessage;

  var createdAt = channel === null || channel === void 0 ? void 0 : (_channel$lastMessage = channel.lastMessage) === null || _channel$lastMessage === void 0 ? void 0 : _channel$lastMessage.createdAt;
  var optionalParam = locale ? {
    locale: locale
  } : null;

  if (!createdAt) {
    return '';
  }

  if (isToday(createdAt)) {
    return format(createdAt, 'p', optionalParam);
  }

  if (isYesterday(createdAt)) {
    return formatRelative(createdAt, new Date(), optionalParam);
  }

  return format(createdAt, 'MMM dd', optionalParam);
};
var getTotalMembers = function getTotalMembers(channel) {
  return channel && channel.memberCount ? channel.memberCount : 0;
};

var getPrettyLastMessage = function getPrettyLastMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var MAXLEN = 30;
  var messageType = message.messageType,
      name = message.name;

  if (messageType === 'file') {
    return truncateString(name, MAXLEN);
  }

  return message.message;
};

var getLastMessage = function getLastMessage(channel) {
  return channel && channel.lastMessage ? getPrettyLastMessage(channel.lastMessage) : '';
};
var getChannelUnreadMessageCount = function getChannelUnreadMessageCount(channel) {
  return channel && channel.unreadMessageCount ? channel.unreadMessageCount : 0;
};

var ChannelPreview = function ChannelPreview(_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k;

  var channel = _a.channel,
      _l = _a.isActive,
      isActive = _l === void 0 ? false : _l,
      _m = _a.isTyping,
      isTyping = _m === void 0 ? false : _m,
      renderChannelAction = _a.renderChannelAction,
      onClick = _a.onClick,
      tabIndex = _a.tabIndex;
  var sbState = useSendbirdStateContext();

  var _o = useChannelListContext(),
      _p = _o.isTypingIndicatorEnabled,
      isTypingIndicatorEnabled = _p === void 0 ? false : _p,
      _q = _o.isMessageReceiptStatusEnabled,
      isMessageReceiptStatusEnabled = _q === void 0 ? false : _q;

  var _r = useLocalization(),
      dateLocale = _r.dateLocale,
      stringSet = _r.stringSet;

  var userId = (_d = (_c = (_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
  var theme = (_e = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _e === void 0 ? void 0 : _e.theme;
  var isMentionEnabled = (_f = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _f === void 0 ? void 0 : _f.isMentionEnabled;
  var isBroadcast = channel.isBroadcast,
      isFrozen = channel.isFrozen;
  var isChannelTyping = isTypingIndicatorEnabled && isTyping;
  var isMessageStatusEnabled = isMessageReceiptStatusEnabled && (((_g = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _g === void 0 ? void 0 : _g.messageType) === 'user' || ((_h = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _h === void 0 ? void 0 : _h.messageType) === 'file') && ((_k = (_j = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _j === void 0 ? void 0 : _j.sender) === null || _k === void 0 ? void 0 : _k.userId) === userId;
  return /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-channel-preview', isActive ? 'sendbird-channel-preview--active' : ''].join(' '),
    role: "link",
    onClick: onClick,
    onKeyPress: onClick,
    tabIndex: tabIndex
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__avatar"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper__header"
  }, isBroadcast && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper__header__broadcast-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.BROADCAST,
    fillColor: IconColors.SECONDARY,
    height: "16px",
    width: "16px"
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__header__channel-name",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, getChannelTitle(channel, userId, stringSet)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__header__total-members",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, getTotalMembers(channel)), isFrozen && /*#__PURE__*/React__default.createElement("div", {
    title: "Frozen",
    className: "sendbird-channel-preview__content__upper__header__frozen-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.FREEZE,
    fillColor: IconColors.PRIMARY,
    height: 12,
    width: 12
  }))), isMessageStatusEnabled ? /*#__PURE__*/React__default.createElement(MessageStatus, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    channel: channel,
    message: channel === null || channel === void 0 ? void 0 : channel.lastMessage
  }) : /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, isChannelTyping && /*#__PURE__*/React__default.createElement(TypingIndicatorText, {
    members: channel === null || channel === void 0 ? void 0 : channel.getTypingMembers()
  }), !isChannelTyping && getLastMessage(channel) + (isEditedMessage(channel === null || channel === void 0 ? void 0 : channel.lastMessage) ? " " + stringSet.MESSAGE_EDITED : '')), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, isMentionEnabled && (channel === null || channel === void 0 ? void 0 : channel.unreadMentionCount) > 0 ? /*#__PURE__*/React__default.createElement(MentionUserLabel, {
    className: "sendbird-channel-preview__content__lower__unread-message-count__mention",
    color: "purple"
  }, '@') : null, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default.createElement(Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__action"
  }, renderChannelAction({
    channel: channel
  })));
};

export { ChannelPreview as default };
//# sourceMappingURL=ChannelPreview.js.map
