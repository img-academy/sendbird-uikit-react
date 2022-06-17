'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var index = require('../index-e0c5dddd.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../tslib.es6-cb3f88e3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ThumbnailMessageItemBody(_a) {
  var _b, _c;

  var className = _a.className,
      message = _a.message,
      _d = _a.isByMe,
      isByMe = _d === void 0 ? false : _d,
      _e = _a.mouseHover,
      mouseHover = _e === void 0 ? false : _e,
      showFileViewer = _a.showFileViewer;
  var _f = message.thumbnails,
      thumbnails = _f === void 0 ? [] : _f;
  var thumbnailUrl = thumbnails.length > 0 ? (_b = thumbnails[0]) === null || _b === void 0 ? void 0 : _b.url : '';

  var _g = React.useState(false),
      imageRendered = _g[0],
      setImageRendered = _g[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-thumbnail-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length) > 0 ? 'reactions' : '']),
    onClick: function onClick() {
      if (index.isSentMessage(message)) {
        showFileViewer(true);
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-thumbnail-message-item-body__thumbnail",
    url: thumbnailUrl || (message === null || message === void 0 ? void 0 : message.url),
    alt: message === null || message === void 0 ? void 0 : message.type,
    width: "360px",
    height: "270px",
    onLoad: function onLoad() {
      setImageRendered(true);
    },
    placeHolder: function placeHolder(style) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-thumbnail-message-item-body__placeholder",
        style: style
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-thumbnail-message-item-body__placeholder__icon"
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: index.isVideoMessage(message) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.PHOTO,
        fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
        width: "34px",
        height: "34px"
      })));
    }
  }), index.isVideoMessage(message) && !thumbnailUrl && !imageRendered && /*#__PURE__*/React__default["default"].createElement("video", {
    className: "sendbird-thumbnail-message-item-body__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: message === null || message === void 0 ? void 0 : message.url,
    type: message === null || message === void 0 ? void 0 : message.type
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-thumbnail-message-item-body__image-cover"
  }), (index.isVideoMessage(message) || index.isGifMessage(message)) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-thumbnail-message-item-body__icon-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-thumbnail-message-item-body__icon-wrapper__icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: index.isVideoMessage(message) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.GIF,
    fillColor: ui_Icon.IconColors.GRAY,
    width: "34px",
    height: "34px"
  }))));
}

module.exports = ThumbnailMessageItemBody;
//# sourceMappingURL=ThumbnailMessageItemBody.js.map
