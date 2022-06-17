import { a as __spreadArray } from '../tslib.es6-cee0628b.js';
import React__default, { useContext, useState, useRef, useMemo, useEffect } from 'react';
import { f as format } from '../index-54fd64c3.js';
import Avatar from './Avatar.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import LinkLabel from './LinkLabel.js';
import { a as LabelTypography, b as LabelColors, L as Label } from '../index-3db1006f.js';
import Loader from './Loader.js';
import ConnectedUserProfile from './UserProfile.js';
import { a as UserProfileContext } from '../UserProfileContext-9b9928cf.js';
import { u as uuidv4 } from '../uuid-b12b05c7.js';
import { c as copyToClipboard } from '../utils-2e4bc3dd.js';
import { u as useLocalization } from '../LocalizationContext-79eb0635.js';
import { c as checkIsByMe, g as getSenderFromMessage, s as showMenuTrigger, i as isFineCopy, a as isFineEdit, b as isFineResend, d as isFineDelete, e as checkIsPending, f as checkIsFailed } from '../openChannelUtils-4a6b2e44.js';
import '../index-7e8c8e8d.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../index-a1462526.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-4614f875.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import '../index-775a609a.js';

var URL_REG = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var createUrlTester = function createUrlTester(regexp) {
  return function (text) {
    return regexp.test(text);
  };
};
var checkOGIsEnalbed = function checkOGIsEnalbed(message) {
  var ogMetaData = message.ogMetaData;

  if (!ogMetaData) {
    return false;
  }

  var url = ogMetaData.url;

  if (!url) {
    return false;
  }

  return true;
};

function OpenchannelOGMessage(_a) {
  var message = _a.message,
      className = _a.className,
      disabled = _a.disabled,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage,
      chainTop = _a.chainTop,
      userId = _a.userId;

  if (!message || message.messageType !== 'user') {
    return null;
  }

  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
  var ogMetaData = message.ogMetaData;
  var defaultImage = ogMetaData.defaultImage;

  var _b = useLocalization(),
      stringSet = _b.stringSet,
      dateLocale = _b.dateLocale;

  var _c = useContext(UserProfileContext),
      disableUserProfile = _c.disableUserProfile,
      renderUserProfile = _c.renderUserProfile;

  var _d = useState({}),
      contextStyle = _d[0],
      setContextStyle = _d[1];

  var messageComponentRef = useRef(null);
  var contextMenuRef = useRef(null);
  var avatarRef = useRef(null);
  var isUrl = createUrlTester(URL_REG);
  var isByMe = checkIsByMe(message, userId);
  var isPending = checkIsPending(status);
  var isFailed = checkIsFailed(status);
  var sender = getSenderFromMessage(message);
  var MemoizedMessageText = useMemo(function () {
    return function () {
      var wordClassName = 'sendbird-openchannel-og-message--word';
      var splitMessage = message.message.split(' ');
      var matchedMessage = splitMessage.map(function (word) {
        return isUrl(word) ? /*#__PURE__*/React__default.createElement(LinkLabel, {
          key: uuidv4(),
          className: [wordClassName, 'sendbird-openchannel-og-message--word--link'],
          src: word,
          type: LabelTypography.BODY_1,
          color: LabelColors.PRIMARY
        }, word) : /*#__PURE__*/React__default.createElement(Label, {
          key: uuidv4(),
          className: wordClassName,
          type: LabelTypography.BODY_1,
          color: LabelColors.ONBACKGROUND_1
        }, word);
      });

      if (message.updatedAt > 0) {
        matchedMessage.push( /*#__PURE__*/React__default.createElement(Label, {
          key: uuidv4(),
          className: wordClassName,
          type: LabelTypography.BODY_1,
          color: LabelColors.ONBACKGROUND_2
        }, stringSet.MESSAGE_EDITED));
      }

      return matchedMessage;
    };
  }, [message, message.updatedAt]);

  var openLink = function openLink() {
    if (checkOGIsEnalbed(message)) {
      var url = ogMetaData.url;
      window.open(url);
    }
  }; // place conxt menu top depending clientHeight of message component


  useEffect(function () {
    var _a;

    if (((_a = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) > 36) {
      setContextStyle({
        top: '8px '
      });
    } else {
      setContextStyle({
        top: '2px'
      });
    }
  }, [window.innerWidth]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-og-message'], false).join(' '),
    ref: messageComponentRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__left"
  }, !chainTop && /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        className: "sendbird-openchannel-og-message__top__left__avatar",
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
      return /*#__PURE__*/React__default.createElement(MenuItems, {
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
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        user: sender,
        onSuccess: closeDropdown,
        disableMessaging: true
      }));
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__right"
  }, !chainTop && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__right__title"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-og-message__top__right__title__sender-name",
    type: LabelTypography.CAPTION_2,
    color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-og-message__top__right__title__sent-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && format(message === null || message === void 0 ? void 0 : message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__right__description"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-og-message__top__right__description__message",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_1
  }, MemoizedMessageText()))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__context-menu",
    ref: contextMenuRef,
    style: contextStyle
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(IconButton, {
        className: "sendbird-openchannel-og-message__top__context-menu--icon",
        width: "32px",
        height: "32px",
        onClick: function onClick() {
          toggleDropdown();
        }
      }, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MORE,
        fillColor: IconColors.CONTENT_INVERSE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems, {
        parentRef: contextMenuRef,
        parentContainRef: contextMenuRef,
        closeDropdown: closeDropdown,
        openLeft: true
      }, isFineCopy({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-og-message__top__context-menu__copy",
        onClick: function onClick() {
          copyToClipboard(message.message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isFineEdit({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-og-message__top__context-menu__edit",
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          showEdit(true);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-og-message__top__context-menu__resend",
        onClick: function onClick() {
          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-og-message__top__context-menu__delete",
        onClick: function onClick() {
          if (disabled) {
            return;
          }

          showRemove(true);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__bottom"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__bottom__og-tag"
  }, ogMetaData.url && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-og-message__bottom__og-tag__url",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, ogMetaData.url), ogMetaData.title && /*#__PURE__*/React__default.createElement(LinkLabel, {
    className: "sendbird-openchannel-og-message__bottom__og-tag__title",
    src: ogMetaData.url,
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.PRIMARY
  }, ogMetaData.title), ogMetaData.description && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-og-message__bottom__og-tag__description",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_1
  }, ogMetaData.description), ogMetaData.url && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail",
    role: "button",
    onClick: openLink,
    onKeyDown: openLink,
    tabIndex: 0
  }, defaultImage && /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image",
    url: defaultImage.url || '',
    alt: defaultImage.alt || '',
    height: "189px",
    defaultComponent: /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image--placeholder"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: IconTypes.THUMBNAIL_NONE,
      width: "56px",
      height: "56px"
    }))
  }))), (isPending || isFailed) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-og-message__top__right__tail"
  }, isPending && /*#__PURE__*/React__default.createElement(Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-og-message__top__right__tail__pending",
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-og-message__top__right__tail__failed",
    type: IconTypes.ERROR,
    fillColor: IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))));
}

export { OpenchannelOGMessage as default };
//# sourceMappingURL=OpenchannelOGMessage.js.map
