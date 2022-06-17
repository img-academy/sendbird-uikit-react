import React__default, { useContext } from 'react';
import { W as Word } from '../index-ce798211.js';
import ImageRenderer from './ImageRenderer.js';
import Icon, { IconTypes } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { u as uuidv4 } from '../uuid-b12b05c7.js';
import { k as getClassName, e as isEditedMessage } from '../index-a1462526.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import './LinkLabel.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import './MentionLabel.js';
import './ContextMenu.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-4614f875.js';
import '../tslib.es6-cee0628b.js';
import './UserProfile.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import './Avatar.js';
import '../index-775a609a.js';
import '../index-7e8c8e8d.js';
import '../useSendbirdStateContext.js';

function OGMessageItemBody(_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

  var className = _a.className,
      message = _a.message,
      _m = _a.isByMe,
      isByMe = _m === void 0 ? false : _m,
      _o = _a.mouseHover,
      mouseHover = _o === void 0 ? false : _o,
      _p = _a.isMentionEnabled,
      isMentionEnabled = _p === void 0 ? false : _p;
  var stringSet = useContext(LocalizationContext).stringSet;

  var openOGUrl = function openOGUrl() {
    var _a, _b;

    if ((_a = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _a === void 0 ? void 0 : _a.url) window.open((_b = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _b === void 0 ? void 0 : _b.url);
  };

  var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-og-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default.createElement(Label, {
    key: uuidv4(),
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "sendbird-og-message-item-body__text-bubble"
  }, isMessageMentioned ? message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate.split(' ').map(function (word) {
    return /*#__PURE__*/React__default.createElement(Word, {
      key: uuidv4(),
      word: word,
      message: message,
      isByMe: isByMe
    });
  }) : message === null || message === void 0 ? void 0 : message.message.split(' ').map(function (word) {
    return /*#__PURE__*/React__default.createElement(Word, {
      key: uuidv4(),
      word: word,
      message: message,
      isByMe: isByMe
    });
  }), isEditedMessage(message) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-og-message-item-body__text-bubble__message",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2
  }, " " + stringSet.MESSAGE_EDITED + " "))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-og-message-item-body__og-thumbnail",
    onClick: openOGUrl
  }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-og-message-item-body__og-thumbnail__image",
    url: ((_f = (_e = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _e === void 0 ? void 0 : _e.defaultImage) === null || _f === void 0 ? void 0 : _f.url) || '',
    alt: (_h = (_g = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _g === void 0 ? void 0 : _g.defaultImage) === null || _h === void 0 ? void 0 : _h.alt // TODO: Change fixing width and height lengths
    ,
    width: "320px",
    height: "180px",
    defaultComponent: /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-og-message-item-body__og-thumbnail__place-holder"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      className: "sendbird-og-message-item-body__og-thumbnail__place-holder__icon",
      type: IconTypes.THUMBNAIL_NONE,
      width: "56px",
      height: "56px"
    }))
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-og-message-item-body__description",
    onClick: openOGUrl
  }, ((_j = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _j === void 0 ? void 0 : _j.title) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-og-message-item-body__description__title",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, message.ogMetaData.title), ((_k = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _k === void 0 ? void 0 : _k.description) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-og-message-item-body__description__description",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_1
  }, message.ogMetaData.description), ((_l = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _l === void 0 ? void 0 : _l.url) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-og-message-item-body__description__url",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, message.ogMetaData.url)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-og-message-item-body__cover"
  }));
}

export { OGMessageItemBody as default };
//# sourceMappingURL=OGMessageItemBody.js.map
