'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-25825fe1.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var index = require('../index-e0c5dddd.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../stringSet-435b3346.js');
require('../index-6f7d86a8.js');
require('../tslib.es6-cb3f88e3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var parentMessage = message.parentMessage;
  var parentMessageSender = (_c = parentMessage) === null || _c === void 0 ? void 0 : _c.sender;
  var parentMessageSenderNickname = userId === (parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.nickname;
  var parentMessageUrl = ((_d = parentMessage) === null || _d === void 0 ? void 0 : _d.url) || '';
  var parentMessageType = (_e = parentMessage) === null || _e === void 0 ? void 0 : _e.type;
  var currentMessageSenderNickname = userId === ((_f = message === null || message === void 0 ? void 0 : message.sender) === null || _f === void 0 ? void 0 : _f.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : (_g = message === null || message === void 0 ? void 0 : message.sender) === null || _g === void 0 ? void 0 : _g.nickname;

  var _r = React.useState(false),
      isThumbnailLoaded = _r[0],
      setThumbnailLoaded = _r[1];

  var uikitFileTypes = index.getUIKitFileTypes();
  var splitFileName = ((_h = parentMessage) === null || _h === void 0 ? void 0 : _h.name) ? parentMessage.name.split('/') : parentMessageUrl.split('/');
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-quote-message', isByMe ? 'outgoing' : 'incoming']),
    key: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId,
    onClick: function onClick() {
      if (_onClick) _onClick();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-to"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-quote-message__replied-to__icon",
    type: ui_Icon.IconTypes.REPLY,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "12px",
    height: "12px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-quote-message__replied-to__text",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, currentMessageSenderNickname + " " + stringSet.QUOTED_MESSAGE__REPLIED_TO + " " + parentMessageSenderNickname)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message"
  }, index.isUserMessage(parentMessage) && ((_k = (_j = parentMessage) === null || _j === void 0 ? void 0 : _j.message) === null || _k === void 0 ? void 0 : _k.length) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__text-message"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-quote-message__replied-message__text-message__word",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, (_l = parentMessage) === null || _l === void 0 ? void 0 : _l.message)), index.isThumbnailMessage(parentMessage) && parentMessageUrl && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message"
  }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-quote-message__replied-message__thumbnail-message__image",
    url: parentMessageUrl,
    alt: parentMessageType,
    width: "144px",
    height: "108px",
    onLoad: function onLoad() {
      return setThumbnailLoaded(true);
    },
    defaultComponent: /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder__icon"
    }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
      type: index.isVideo(parentMessageType) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.PHOTO,
      fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
      width: "22px",
      height: "22px"
    })))
  }), index.isVideo(parentMessageType) && !(((_o = (_m = parentMessage) === null || _m === void 0 ? void 0 : _m.thumbnails) === null || _o === void 0 ? void 0 : _o.length) > 0) && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("video", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: parentMessageUrl,
    type: parentMessageType
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.PLAY,
    fillColor: ui_Icon.IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), isThumbnailLoaded && index.isGif(parentMessageType) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.GIF,
    fillColor: ui_Icon.IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), index.isFileMessage(parentMessage) && !index.isSupportedFileView(parentMessage.type) && parentMessageUrl && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-quote-message__replied-message__file-message"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-quote-message__replied-message__file-message__type-icon",
    type: (_b = {}, _b[uikitFileTypes.IMAGE] = ui_Icon.IconTypes.PHOTO, _b[uikitFileTypes.VIDEO] = ui_Icon.IconTypes.PLAY, _b[uikitFileTypes.AUDIO] = ui_Icon.IconTypes.FILE_AUDIO, _b[uikitFileTypes.GIF] = ui_Icon.IconTypes.GIF, _b[uikitFileTypes.OTHERS] = ui_Icon.IconTypes.FILE_DOCUMENT, _b)[index.getUIKitFileType(parentMessageType)],
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "16px",
    height: "16px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-quote-message__replied-message__file-message__file-name",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, index.truncateString(splitFileName[splitFileName.length - 1])))));
}

module.exports = QuoteMessage;
//# sourceMappingURL=QuoteMessage.js.map
