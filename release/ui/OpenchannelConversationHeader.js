import React__default, { useContext } from 'react';
import Avatar from './Avatar.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import '../tslib.es6-cee0628b.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../uuid-b12b05c7.js';
import '../stringSet-4614f875.js';
import '../index-7e8c8e8d.js';

function OpenchannelConversationHeader(_a) {
  var coverImage = _a.coverImage,
      title = _a.title,
      subTitle = _a.subTitle,
      amIOperator = _a.amIOperator,
      onActionClick = _a.onActionClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__left"
  }, coverImage ? /*#__PURE__*/React__default.createElement(Avatar, {
    className: "sendbird-openchannel-conversation-header__left__cover-image",
    src: coverImage,
    alt: "channel cover image",
    width: "32px",
    height: "32px"
  }) : /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__left__cover-image--icon",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CHANNELS,
    fillColor: IconColors.CONTENT,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-conversation-header__left__title",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, title || stringSet.NO_TITLE), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-conversation-header__left__sub-title",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_2
  }, subTitle || stringSet.NO_TITLE)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__right"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-openchannel-conversation-header__right__trigger",
    width: "32px",
    height: "32px",
    onClick: onActionClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: amIOperator ? IconTypes.INFO : IconTypes.MEMBERS,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
}

export { OpenchannelConversationHeader as default };
//# sourceMappingURL=OpenchannelConversationHeader.js.map
