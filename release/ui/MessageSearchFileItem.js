import { a as __spreadArray } from '../tslib.es6-cee0628b.js';
import React__default from 'react';
import Avatar from './Avatar.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { u as useLocalization } from '../LocalizationContext-79eb0635.js';
import { f as format } from '../index-54fd64c3.js';
import { i as isToday, a as isYesterday, f as formatRelative } from '../index-d4c08fec.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../uuid-b12b05c7.js';
import '../stringSet-4614f875.js';
import '../index-7e8c8e8d.js';
import '../index-6d919a6a.js';

function getCreatedAt(createdAt, locale) {
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
}
function getIconOfFileType(message) {
  var url = message.url;
  var fileMessageUrl = url;
  var fileExtension = fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/)[1];

  if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
    return IconTypes.PHOTO;
  } else if (/mp4$/i.test(fileExtension)) {
    return IconTypes.PLAY;
  } else if (/mp3/i.test(fileExtension)) {
    return IconTypes.FILE_AUDIO;
  } else if (/gif/i.test(fileExtension)) {
    return IconTypes.GIF;
  } else {
    return IconTypes.FILE_DOCUMENT;
  }
}
function truncate(fullText, textLimit) {
  if (fullText.length <= textLimit) return fullText;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = textLimit - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullText.substr(0, frontChars) + separator + fullText.substr(fullText.length - backChars);
}

function MessageSearchFileItem(props) {
  var className = props.className,
      message = props.message,
      selected = props.selected,
      _onClick = props.onClick;
  var createdAt = message.createdAt,
      url = message.url,
      name = message.name;
  var fileMessageUrl = url;
  var sender = message.sender || message._sender;
  var profileUrl = sender.profileUrl,
      nickname = sender.nickname;

  var _a = useLocalization(),
      stringSet = _a.stringSet,
      dateLocale = _a.dateLocale;

  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-search-file-item', selected ? 'sendbird-message-search-file-item--selected' : ''], false).join(' '),
    onClick: function onClick(e) {
      e.stopPropagation();

      _onClick(message);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-file-item__left"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    className: "sendbird-message-search-file-item__left__sender-avatar",
    src: profileUrl,
    alt: "profile image",
    width: "56px",
    height: "56px"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-file-item__right"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-file-item__right__sender-name",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-file-item__right__content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-file-item__right__content__type-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: getIconOfFileType(message),
    fillColor: IconColors.PRIMARY,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-file-item__right__content__url",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_1
  }, truncate(name || fileMessageUrl, 28)))), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-file-item__message-created-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, getCreatedAt(createdAt, dateLocale)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-file-item__right-footer"
  }));
}

export { MessageSearchFileItem as default };
//# sourceMappingURL=MessageSearchFileItem.js.map
