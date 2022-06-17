import React__default, { useContext, useRef } from 'react';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import { u as isUserMessage, D as isSentMessage, E as isFailedMessage, F as isPendingMessage, k as getClassName, G as copyToClipboard } from '../index-a1462526.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../index-3db1006f.js';
import '../stringSet-4614f875.js';
import 'react-dom';
import './SortByRow.js';
import '../tslib.es6-cee0628b.js';
import '../index-7e8c8e8d.js';

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
  var stringSet = useContext(LocalizationContext).stringSet;
  var triggerRef = useRef(null);
  var containerRef = useRef(null);
  var showMenuItemCopy = isUserMessage(message);
  var showMenuItemEdit = isUserMessage(message) && isSentMessage(message) && isByMe;
  var showMenuItemResend = isFailedMessage(message) && ((_b = message === null || message === void 0 ? void 0 : message.isResendable) === null || _b === void 0 ? void 0 : _b.call(message)) && isByMe;
  var showMenuItemDelete = !isPendingMessage(message) && isByMe;
  /**
   * TODO: Manage timing issue
   * User delete pending message -> Sending message success
   */

  var showMenuItemReply = replyType === 'QUOTE_REPLY' && !isFailedMessage(message) && !isPendingMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !((_c = channel) === null || _c === void 0 ? void 0 : _c.isBroadcast);

  if (!(showMenuItemCopy || showMenuItemReply || showMenuItemEdit || showMenuItemResend || showMenuItemDelete)) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-message-item-menu']),
    ref: containerRef
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(IconButton, {
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
      }, /*#__PURE__*/React__default.createElement(Icon, {
        className: "sendbird-message-item-menu__trigger__icon",
        type: IconTypes.MORE,
        fillColor: IconColors.CONTENT_INVERSE,
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

      return /*#__PURE__*/React__default.createElement(MenuItems, {
        className: "sendbird-message-item-menu__list",
        parentRef: triggerRef,
        parentContainRef: containerRef,
        closeDropdown: closeDropdown,
        openLeft: isByMe
      }, showMenuItemCopy && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-copy",
        onClick: function onClick() {
          var _a;

          copyToClipboard((_a = message) === null || _a === void 0 ? void 0 : _a.message);
          closeDropdown();
        }
      }, stringSet.MESSAGE_MENU__COPY), showMenuItemReply && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-reply",
        onClick: function onClick() {
          setQuoteMessage(message);
          closeDropdown();
        },
        disable: (message === null || message === void 0 ? void 0 : message.parentMessageId) > 0
      }, stringSet.MESSAGE_MENU__REPLY), showMenuItemEdit && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-edit",
        onClick: function onClick() {
          if (!disabled) {
            showEdit(true);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__EDIT), showMenuItemResend && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-resend",
        onClick: function onClick() {
          if (!disabled) {
            resendMessage(message);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__RESEND), showMenuItemDelete && /*#__PURE__*/React__default.createElement(MenuItem, {
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

export { MessageItemMenu as default };
//# sourceMappingURL=MessageItemMenu.js.map
