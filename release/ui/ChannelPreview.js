import React__default from 'react';
import PropTypes from 'prop-types';
import ChannelAvatar from './ChannelAvatar.js';
import Badge from './Badge.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { c as LabelStringSet, L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { u as useLocalization } from '../LocalizationContext-79eb0635.js';
import { i as isToday, a as isYesterday, f as formatRelative } from '../index-d4c08fec.js';
import { f as format } from '../index-54fd64c3.js';
import { t as truncateString } from '../index-a1462526.js';
import './Avatar.js';
import '../tslib.es6-cee0628b.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import '../uuid-b12b05c7.js';
import '../utils-bfbe8356.js';
import '../stringSet-4614f875.js';
import '../index-7e8c8e8d.js';
import '../index-6d919a6a.js';

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

function ChannelPreview(_ref) {
  var channel = _ref.channel,
      currentUser = _ref.currentUser,
      isActive = _ref.isActive,
      ChannelAction = _ref.ChannelAction,
      theme = _ref.theme,
      onClick = _ref.onClick,
      tabIndex = _ref.tabIndex;
  var userId = currentUser.userId;
  var isBroadcast = channel.isBroadcast,
      isFrozen = channel.isFrozen;

  var _useLocalization = useLocalization(),
      dateLocale = _useLocalization.dateLocale,
      stringSet = _useLocalization.stringSet;

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
  }))), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, getLastMessage(channel)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default.createElement(Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__action"
  }, ChannelAction));
}
ChannelPreview.propTypes = {
  channel: PropTypes.shape({
    members: PropTypes.arrayOf(PropTypes.shape({})),
    coverUrl: PropTypes.string,
    isBroadcast: PropTypes.bool,
    isFrozen: PropTypes.bool
  }),
  currentUser: PropTypes.shape({
    userId: PropTypes.string
  }),
  isActive: PropTypes.bool,
  ChannelAction: PropTypes.element.isRequired,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number
};
ChannelPreview.defaultProps = {
  channel: {},
  currentUser: {},
  isActive: false,
  theme: 'light',
  onClick: function onClick() {},
  tabIndex: 0
};

export { ChannelPreview as default };
//# sourceMappingURL=ChannelPreview.js.map
