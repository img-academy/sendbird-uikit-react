'use strict';

var tslib_es6 = require('../tslib.es6-cb3f88e3.js');
var React = require('react');
var index = require('../index-e7940a94.js');
var ui_Avatar = require('./Avatar.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-25825fe1.js');
var ui_Loader = require('./Loader.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_TextButton = require('./TextButton.js');
var ui_UserProfile = require('./UserProfile.js');
var UserProfileContext = require('../UserProfileContext-46f306ca.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var openChannelUtils = require('../openChannelUtils-416eb4e3.js');
require('../index-6f7d86a8.js');
require('./ImageRenderer.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../uuid-a43dad75.js');
require('../index-e0c5dddd.js');
require('react-dom');
require('./SortByRow.js');
require('../stringSet-435b3346.js');
require('../color-c2dc807b.js');
require('../withSendBird.js');
require('../sendBirdSelectors.js');
require('../topics-dc71c830.js');
require('../index-8f00ec86.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var checkFileType = function checkFileType(fileUrl) {
  var audioFile = /(\.mp3)$/i;
  var gifFile = /(\.gif)$/i;

  if (audioFile.test(fileUrl)) {
    return ui_Icon.IconTypes.FILE_AUDIO;
  }

  if (gifFile.test(fileUrl)) {
    return ui_Icon.IconTypes.GIF;
  }

  return ui_Icon.IconTypes.FILE_DOCUMENT;
};
var truncate = function truncate(fullStr, strLen) {
  if (fullStr === null || fullStr === undefined) return '';
  if (fullStr.length <= strLen) return fullStr;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = strLen - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

function OpenchannelFileMessage(_a) {
  var className = _a.className,
      message = _a.message,
      userId = _a.userId,
      disabled = _a.disabled,
      chainTop = _a.chainTop,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage;
  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;

  var _b = LocalizationContext.useLocalization(),
      dateLocale = _b.dateLocale,
      stringSet = _b.stringSet;

  var contextMenuRef = React.useRef(null);
  var avatarRef = React.useRef(null);

  var _c = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _c.disableUserProfile,
      renderUserProfile = _c.renderUserProfile;

  var openFileUrl = function openFileUrl() {
    window.open(message.url);
  };

  var isByMe = openChannelUtils.checkIsByMe(message, userId);
  var isPending = openChannelUtils.checkIsPending(status);
  var isFailed = openChannelUtils.checkIsFailed(status);
  var sender = openChannelUtils.getSenderFromMessage(message);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-file-message'], false).join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__left"
  }, !chainTop && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        className: "sendbird-openchannel-file-message__left__avatar",
        src: sender.profileUrl || '',
        ref: avatarRef,
        width: "28px",
        height: "28px",
        onClick: function onClick() {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        }
      });
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        parentRef: avatarRef,
        parentContainRef: avatarRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: sender,
        close: closeDropdown
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        user: sender,
        onSuccess: closeDropdown,
        disableMessaging: true
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__right"
  }, !chainTop && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__right__title"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-file-message__right__title__sender-name",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: isByMe ? ui_Label.LabelColors.SECONDARY_3 : ui_Label.LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-file-message__right__title__sent-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && index.format(message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__right__body"
  }, checkFileType(message.url) && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-file-message__right__body__icon",
    type: checkFileType(message.url),
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "48px",
    height: "48px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_TextButton, {
    className: "sendbird-openchannel-file-message__right__body__file-name",
    onClick: openFileUrl
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, truncate(message.name || message.url, 40)))), (isPending || isFailed) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__right__tail"
  }, isPending && /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-file-message__right__tail__pending",
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-file-message__right__tail__failed",
    type: ui_Icon.IconTypes.ERROR,
    fillColor: ui_Icon.IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-file-message__context-menu",
    ref: contextMenuRef
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return openChannelUtils.showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
        className: "sendbird-openchannel-file-message__context-menu__icon",
        width: "32px",
        height: "32px",
        onClick: toggleDropdown
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MORE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        parentRef: contextMenuRef,
        parentContainRef: contextMenuRef,
        closeDropdown: closeDropdown,
        openLeft: true
      }, openChannelUtils.isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), openChannelUtils.isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          showRemove(true);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
    }
  })));
}

module.exports = OpenchannelFileMessage;
//# sourceMappingURL=OpenchannelFileMessage.js.map
