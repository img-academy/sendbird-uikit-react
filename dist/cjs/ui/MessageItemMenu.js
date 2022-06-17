'use strict';

var React = require('react');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var index = require('../index-e0c5dddd.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../index-25825fe1.js');
require('../stringSet-435b3346.js');
require('react-dom');
require('./SortByRow.js');
require('../tslib.es6-cb3f88e3.js');
require('../index-6f7d86a8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MessageItemMenu(_a) {
  var _b, _c;

  var className = _a.className,
      message = _a.message,
      channel = _a.channel,
      _d = _a.isByMe,
      isByMe = _d === void 0 ? false : _d,
      _e = _a.disabled,
      disabled = _e === void 0 ? false : _e,
      replyType = _a.replyType,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage,
      setQuoteMessage = _a.setQuoteMessage,
      setSupposedHover = _a.setSupposedHover;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var triggerRef = React.useRef(null);
  var containerRef = React.useRef(null);
  var showMenuItemCopy = index.isUserMessage(message);
  var showMenuItemEdit = index.isUserMessage(message) && index.isSentMessage(message) && isByMe;
  var showMenuItemResend = index.isFailedMessage(message) && ((_b = message === null || message === void 0 ? void 0 : message.isResendable) === null || _b === void 0 ? void 0 : _b.call(message)) && isByMe;
  var showMenuItemDelete = !index.isPendingMessage(message) && isByMe;
  /**
   * TODO: Manage timing issue
   * User delete pending message -> Sending message success
   */

  var showMenuItemReply = replyType === 'QUOTE_REPLY' && !index.isFailedMessage(message) && !index.isPendingMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !((_c = channel) === null || _c === void 0 ? void 0 : _c.isBroadcast);

  if (!(showMenuItemCopy || showMenuItemReply || showMenuItemEdit || showMenuItemResend || showMenuItemDelete)) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-message-item-menu']),
    ref: containerRef
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
        className: "sendbird-message-item-menu__trigger",
        ref: triggerRef,
        width: "32px",
        height: "32px",
        onClick: function onClick() {
          toggleDropdown();
          setSupposedHover(true);
        },
        onBlur: function onBlur() {
          setSupposedHover(false);
        }
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        className: "sendbird-message-item-menu__trigger__icon",
        type: ui_Icon.IconTypes.MORE,
        fillColor: ui_Icon.IconColors.CONTENT_INVERSE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function menuItems(close) {
      var _a;

      var closeDropdown = function closeDropdown() {
        close();
        setSupposedHover(false);
      };

      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        className: "sendbird-message-item-menu__list",
        parentRef: triggerRef,
        parentContainRef: containerRef,
        closeDropdown: closeDropdown,
        openLeft: isByMe
      }, showMenuItemCopy && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-copy",
        onClick: function onClick() {
          var _a;

          index.copyToClipboard((_a = message) === null || _a === void 0 ? void 0 : _a.message);
          closeDropdown();
        }
      }, stringSet.MESSAGE_MENU__COPY), showMenuItemReply && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-reply",
        onClick: function onClick() {
          setQuoteMessage(message);
          closeDropdown();
        },
        disable: (message === null || message === void 0 ? void 0 : message.parentMessageId) > 0
      }, stringSet.MESSAGE_MENU__REPLY), showMenuItemEdit && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-edit",
        onClick: function onClick() {
          if (!disabled) {
            showEdit(true);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__EDIT), showMenuItemResend && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-resend",
        onClick: function onClick() {
          if (!disabled) {
            resendMessage(message);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__RESEND), showMenuItemDelete && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-delete",
        onClick: function onClick() {
          if (!disabled) {
            showRemove(true);
            closeDropdown();
          }
        },
        disable: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0
      }, stringSet.MESSAGE_MENU__DELETE));
    }
  }));
}

module.exports = MessageItemMenu;
//# sourceMappingURL=MessageItemMenu.js.map
