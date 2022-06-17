import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import IconButton from '../../ui/IconButton.js';
import Avatar from '../../ui/Avatar.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../uuid-b12b05c7.js';

var ChannelListHeader = function ChannelListHeader(_a) {
  var _b;

  var renderHeader = _a.renderHeader,
      renderIconButton = _a.renderIconButton,
      onEdit = _a.onEdit,
      allowProfileEdit = _a.allowProfileEdit;
  var sbState = useSendbirdStateContext();
  var user = ((_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore).user;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-channel-header', allowProfileEdit ? 'sendbird-channel-header--allow-edit' : ''].join(' ')
  }, renderHeader ? renderHeader() : /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-header__title",
    role: "button",
    onClick: function onClick() {
      onEdit();
    },
    onKeyDown: function onKeyDown() {
      onEdit();
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-header__title__left"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    width: "32px",
    height: "32px",
    src: user.profileUrl,
    alt: user.nickname
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-header__title__right"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-header__title__right__name",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-header__title__right__user-id",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_2
  }, user.userId))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-header__right-icon"
  }, renderIconButton() || /*#__PURE__*/React__default.createElement(IconButton, null)));
};

export { ChannelListHeader as default };
//# sourceMappingURL=ChannelListHeader.js.map
