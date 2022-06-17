import React__default, { useRef, useState, useContext } from 'react';
import { useChannelSettings } from '../context.js';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import Modal from '../../ui/Modal.js';
import Input, { InputLabel } from '../../ui/Input.js';
import Avatar from '../../ui/Avatar.js';
import { T as Type } from '../../index-775a609a.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import { u as uuidv4 } from '../../uuid-b12b05c7.js';
import '../../UserProfileContext-9b9928cf.js';
import 'prop-types';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../utils-a66b9c45.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../color-29648548.js';
import '../../utils-bfbe8356.js';

var EditDetails = function EditDetails(props) {
  var _a, _b, _c;

  var _onSubmit = props.onSubmit,
      onCancel = props.onCancel;

  var _d = useChannelSettings(),
      channel = _d.channel,
      onChannelModified = _d.onChannelModified,
      onBeforeUpdateChannel = _d.onBeforeUpdateChannel,
      setChannelUpdateId = _d.setChannelUpdateId;

  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  var state = useSendbirdStateContext();
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
  var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
  var inputRef = useRef(null);
  var formRef = useRef(null);
  var hiddenInputRef = useRef(null);

  var _e = useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

  var _f = useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement(Modal, {
    titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE,
    submitText: stringSet.BUTTON__SAVE,
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      if (title !== '' && !inputRef.current.value) {
        if (formRef.current.reportValidity) {
          // might not work in explorer
          formRef.current.reportValidity();
        }

        return;
      }

      var currentTitle = inputRef.current.value;
      var currentImg = newFile;
      logger.info('ChannelSettings: Channel information being updated', {
        currentTitle: currentTitle,
        currentImg: currentImg
      });

      if (onBeforeUpdateChannel) {
        logger.info('ChannelSettings: onBeforeUpdateChannel');
        var params = onBeforeUpdateChannel(currentTitle, currentImg, channel.data);
        channel.updateChannel(params, function (groupChannel) {
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuidv4());

          _onSubmit();
        });
      } else {
        logger.info('ChannelSettings: normal');
        channel.updateChannel(currentTitle, currentImg, channel.data, function (groupChannel) {
          logger.info('ChannelSettings: Channel information updated', groupChannel);
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuidv4());

          _onSubmit();
        });
      }
    },
    type: Type.PRIMARY
  }, /*#__PURE__*/React__default.createElement("form", {
    className: "channel-profile-form",
    ref: formRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__img-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__avatar"
  }, currentImg ? /*#__PURE__*/React__default.createElement(Avatar, {
    height: "80px",
    width: "80px",
    src: currentImg
  }) : /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default.createElement("input", {
    ref: hiddenInputRef,
    type: "file",
    accept: "image/gif, image/jpeg, image/png",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      setCurrentImg(URL.createObjectURL(e.target.files[0]));
      setNewFile(e.target.files[0]);
      hiddenInputRef.current.value = '';
    }
  }), /*#__PURE__*/React__default.createElement(TextButton, {
    className: "channel-profile-form__avatar-button",
    onClick: function onClick() {
      return hiddenInputRef.current.click();
    },
    notUnderline: true
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: LabelColors.PRIMARY
  }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__name-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default.createElement(Input, {
    required: title !== '',
    name: "channel-profile-form__name",
    ref: inputRef,
    value: title,
    placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
  }))));
};

export { EditDetails as default };
//# sourceMappingURL=EditDetailsModal.js.map
