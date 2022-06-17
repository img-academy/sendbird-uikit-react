import { a as __spreadArray } from '../tslib.es6-cee0628b.js';
import React__default, { useContext, useState, useRef, useMemo, useEffect } from 'react';
import { f as format } from '../index-54fd64c3.js';
import { u as useLocalization } from '../LocalizationContext-79eb0635.js';
import Avatar from './Avatar.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconColors, IconTypes } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import Loader from './Loader.js';
import ConnectedUserProfile from './UserProfile.js';
import { a as UserProfileContext } from '../UserProfileContext-9b9928cf.js';
import { c as checkIsByMe, g as getSenderFromMessage, s as showMenuTrigger, b as isFineResend, d as isFineDelete, h as checkIsSent, e as checkIsPending, f as checkIsFailed } from '../openChannelUtils-4a6b2e44.js';
import '../index-7e8c8e8d.js';
import '../stringSet-4614f875.js';
import '../uuid-b12b05c7.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../index-a1462526.js';
import 'react-dom';
import './SortByRow.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import '../index-775a609a.js';

var SUPPORTING_TYPES = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  UNSUPPORTED: 'UNSUPPORTED'
};
var SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
};
var getSupportingFileType = function getSupportingFileType(type) {
  if (SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0) {
    return SUPPORTING_TYPES.IMAGE;
  }

  if (SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0) {
    return SUPPORTING_TYPES.VIDEO;
  }

  return SUPPORTING_TYPES.UNSUPPORTED;
};

function OpenchannelThumbnailMessage(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      disabled = _a.disabled,
      userId = _a.userId,
      chainTop = _a.chainTop,
      _onClick = _a.onClick,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage;
  var type = message.type,
      url = message.url,
      localUrl = message.localUrl,
      thumbnails = message.thumbnails;
  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
  var thumbnailUrl = thumbnails && thumbnails.length > 0 && thumbnails[0].url || null;

  var _c = useLocalization(),
      stringSet = _c.stringSet,
      dateLocale = _c.dateLocale;

  var _d = useContext(UserProfileContext),
      disableUserProfile = _d.disableUserProfile,
      renderUserProfile = _d.renderUserProfile;

  var _e = useState(360),
      messageWidth = _e[0],
      setMessageWidth = _e[1];

  var messageRef = useRef(null);
  var contextMenuRef = useRef(null);
  var avatarRef = useRef(null);
  var memorizedThumbnailPlaceHolder = useMemo(function () {
    return function (type) {
      return function (_a) {
        var style = _a.style;
        return (
          /*#__PURE__*/
          // eslint-disable-line
          React__default.createElement("div", {
            style: style
          }, /*#__PURE__*/React__default.createElement(Icon, {
            type: type,
            fillColor: IconColors.ON_BACKGROUND_2,
            width: "56px",
            height: "56px"
          }))
        );
      };
    };
  }, []);
  var isByMe = checkIsByMe(message, userId);
  var isMessageSent = checkIsSent(status);
  var isPending = checkIsPending(status);
  var isFailed = checkIsFailed(status);
  var sender = getSenderFromMessage(message);
  useEffect(function () {
    var _a;

    var thumbnailWidth = ((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) - 80;
    setMessageWidth(thumbnailWidth > 360 ? 360 : thumbnailWidth);
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-thumbnail-message'], false).join(' '),
    ref: messageRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__left"
  }, !chainTop && /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        className: "sendbird-openchannel-thumbnail-message__left__avatar",
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
    className: "sendbird-openchannel-thumbnail-message__right"
  }, !chainTop && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__title"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-thumbnail-message__right__title__sender-name",
    type: LabelTypography.CAPTION_2,
    color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-thumbnail-message__right__title__sent-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && format(message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap",
    role: "button",
    onClick: function onClick() {
      if (isMessageSent) {
        _onClick(true);
      }
    },
    onKeyDown: function onKeyDown() {
      if (isMessageSent) {
        _onClick(true);
      }
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__overlay"
  }), (_b = {}, _b[SUPPORTING_TYPES.VIDEO] = url || localUrl ? /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video"
  }, thumbnailUrl ? /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video",
    url: thumbnailUrl,
    width: messageWidth,
    height: "270px",
    alt: "image",
    placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PLAY)
  }) : /*#__PURE__*/React__default.createElement("video", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__video"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url || localUrl,
    type: type
  })), /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__icon",
    type: IconTypes.PLAY,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  })) : /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video--icon",
    type: IconTypes.PHOTO,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b[SUPPORTING_TYPES.IMAGE] = url || localUrl ? /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image",
    url: thumbnailUrl || url || localUrl,
    alt: "image",
    width: messageWidth,
    height: "270px",
    placeHolder: memorizedThumbnailPlaceHolder(IconTypes.PHOTO)
  }) : /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image--icon",
    type: IconTypes.PHOTO,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b[SUPPORTING_TYPES.UNSUPPORTED] = /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__unknown",
    type: IconTypes.PHOTO,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b)[getSupportingFileType(type)])), (isPending || isFailed) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__tail"
  }, isPending && /*#__PURE__*/React__default.createElement(Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__tail__pending",
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-thumbnail-message__right__tail__failed",
    type: IconTypes.ERROR,
    fillColor: IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__context-menu",
    ref: contextMenuRef
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(IconButton, {
        className: "sendbird-openchannel-thumbnail-message__context-menu--icon",
        width: "32px",
        height: "32px",
        onClick: toggleDropdown
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
      }, isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        onClick: function onClick() {
          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
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

export { OpenchannelThumbnailMessage as default };
//# sourceMappingURL=OpenchannelThumbnailMessage.js.map
