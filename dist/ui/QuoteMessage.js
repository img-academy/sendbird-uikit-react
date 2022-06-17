import React__default, { useContext, useState } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import ImageRenderer from './ImageRenderer.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import { M as getUIKitFileTypes, k as getClassName, u as isUserMessage, p as isThumbnailMessage, B as isVideo, N as isGif, n as isFileMessage, A as isSupportedFileView, L as getUIKitFileType, t as truncateString } from '../index-a1462526.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../stringSet-4614f875.js';
import '../index-7e8c8e8d.js';
import '../tslib.es6-cee0628b.js';

function QuoteMessage(_a) {
  var _b;

  var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

  var message = _a.message,
      _p = _a.userId,
      userId = _p === void 0 ? '' : _p,
      _q = _a.isByMe,
      isByMe = _q === void 0 ? false : _q,
      className = _a.className,
      _onClick = _a.onClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  var parentMessage = message.parentMessage;
  var parentMessageSender = (_c = parentMessage) === null || _c === void 0 ? void 0 : _c.sender;
  var parentMessageSenderNickname = userId === (parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.nickname;
  var parentMessageUrl = ((_d = parentMessage) === null || _d === void 0 ? void 0 : _d.url) || '';
  var parentMessageType = (_e = parentMessage) === null || _e === void 0 ? void 0 : _e.type;
  var currentMessageSenderNickname = userId === ((_f = message === null || message === void 0 ? void 0 : message.sender) === null || _f === void 0 ? void 0 : _f.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : (_g = message === null || message === void 0 ? void 0 : message.sender) === null || _g === void 0 ? void 0 : _g.nickname;

  var _r = useState(false),
      isThumbnailLoaded = _r[0],
      setThumbnailLoaded = _r[1];

  var uikitFileTypes = getUIKitFileTypes();
  var splitFileName = ((_h = parentMessage) === null || _h === void 0 ? void 0 : _h.name) ? parentMessage.name.split('/') : parentMessageUrl.split('/');
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-quote-message', isByMe ? 'outgoing' : 'incoming']),
    key: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId,
    onClick: function onClick() {
      if (_onClick) _onClick();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-to"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-quote-message__replied-to__icon",
    type: IconTypes.REPLY,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "12px",
    height: "12px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-to__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_3
  }, currentMessageSenderNickname + " " + stringSet.QUOTED_MESSAGE__REPLIED_TO + " " + parentMessageSenderNickname)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message"
  }, isUserMessage(parentMessage) && ((_k = (_j = parentMessage) === null || _j === void 0 ? void 0 : _j.message) === null || _k === void 0 ? void 0 : _k.length) > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__text-message"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-message__text-message__word",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_1
  }, (_l = parentMessage) === null || _l === void 0 ? void 0 : _l.message)), isThumbnailMessage(parentMessage) && parentMessageUrl && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message"
  }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-quote-message__replied-message__thumbnail-message__image",
    url: parentMessageUrl,
    alt: parentMessageType,
    width: "144px",
    height: "108px",
    onLoad: function onLoad() {
      return setThumbnailLoaded(true);
    },
    defaultComponent: /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder__icon"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: isVideo(parentMessageType) ? IconTypes.PLAY : IconTypes.PHOTO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "22px",
      height: "22px"
    })))
  }), isVideo(parentMessageType) && !(((_o = (_m = parentMessage) === null || _m === void 0 ? void 0 : _m.thumbnails) === null || _o === void 0 ? void 0 : _o.length) > 0) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("video", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__video"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: parentMessageUrl,
    type: parentMessageType
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.PLAY,
    fillColor: IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), isThumbnailLoaded && isGif(parentMessageType) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.GIF,
    fillColor: IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), isFileMessage(parentMessage) && !isSupportedFileView(parentMessage.type) && parentMessageUrl && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__file-message"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-quote-message__replied-message__file-message__type-icon",
    type: (_b = {}, _b[uikitFileTypes.IMAGE] = IconTypes.PHOTO, _b[uikitFileTypes.VIDEO] = IconTypes.PLAY, _b[uikitFileTypes.AUDIO] = IconTypes.FILE_AUDIO, _b[uikitFileTypes.GIF] = IconTypes.GIF, _b[uikitFileTypes.OTHERS] = IconTypes.FILE_DOCUMENT, _b)[getUIKitFileType(parentMessageType)],
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "16px",
    height: "16px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-message__file-message__file-name",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, truncateString(splitFileName[splitFileName.length - 1])))));
}

export { QuoteMessage as default };
//# sourceMappingURL=QuoteMessage.js.map
