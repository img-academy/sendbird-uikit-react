import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettings } from '../context.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import EditDetails from './EditDetailsModal.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../UserProfileContext-9b9928cf.js';
import 'prop-types';
import '../../uuid-b12b05c7.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../utils-bfbe8356.js';
import '../../color-29648548.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../index-775a609a.js';
import '../../utils-a66b9c45.js';
import '../../ui/Input.js';

var ChannelProfile = function ChannelProfile() {
  var _a, _b, _c;

  var state = useSendbirdStateContext();
  var channelSettingStore = useChannelSettings();
  var stringSet = useContext(LocalizationContext).stringSet;

  var _d = useState(false),
      showModal = _d[0],
      setShowModal = _d[1];

  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = ((_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;
  var disabled = !isOnline;
  var channel = channelSettingStore.channel;

  var getChannelName = function getChannelName() {
    if ((channel === null || channel === void 0 ? void 0 : channel.name) && (channel === null || channel === void 0 ? void 0 : channel.name) !== 'Group Channel') {
      return channel.name;
    }

    if ((channel === null || channel === void 0 ? void 0 : channel.name) === 'Group Channel' || !(channel === null || channel === void 0 ? void 0 : channel.name)) {
      return channel.members.map(function (member) {
        return member.nickname || stringSet.NO_NAME;
      }).join(', ');
    }

    return stringSet.NO_TITLE;
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile--inner"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile__avatar"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme,
    width: 80,
    height: 80
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-profile__title",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, getChannelName()), /*#__PURE__*/React__default.createElement(TextButton, {
    disabled: disabled,
    className: "sendbird-channel-profile__edit",
    onClick: function onClick() {
      if (disabled) {
        return;
      }

      setShowModal(true);
    },
    notUnderline: true
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY
  }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)), showModal && /*#__PURE__*/React__default.createElement(EditDetails, {
    onCancel: function onCancel() {
      return setShowModal(false);
    },
    onSubmit: function onSubmit() {
      return setShowModal(false);
    }
  })));
};

export { ChannelProfile as default };
//# sourceMappingURL=ChannelProfile.js.map
