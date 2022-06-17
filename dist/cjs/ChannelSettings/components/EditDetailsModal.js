'use strict';

var React = require('react');
var ChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Modal = require('../../ui/Modal.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Button = require('../../index-8f00ec86.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var uuid = require('../../uuid-a43dad75.js');
require('../../UserProfileContext-46f306ca.js');
require('prop-types');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('react-dom');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../utils-81069a8c.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../color-c2dc807b.js');
require('../../utils-f418bdf3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditDetails = function EditDetails(props) {
  var _a, _b, _c;

  var _onSubmit = props.onSubmit,
      onCancel = props.onCancel;

  var _d = ChannelSettings_context.useChannelSettings(),
      channel = _d.channel,
      onChannelModified = _d.onChannelModified,
      onBeforeUpdateChannel = _d.onBeforeUpdateChannel,
      setChannelUpdateId = _d.setChannelUpdateId;

  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  var state = useSendbirdStateContext();
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
  var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
  var inputRef = React.useRef(null);
  var formRef = React.useRef(null);
  var hiddenInputRef = React.useRef(null);

  var _e = React.useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

  var _f = React.useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
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
          setChannelUpdateId(uuid.uuidv4());

          _onSubmit();
        });
      } else {
        logger.info('ChannelSettings: normal');
        channel.updateChannel(currentTitle, currentImg, channel.data, function (groupChannel) {
          logger.info('ChannelSettings: Channel information updated', groupChannel);
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuid.uuidv4());

          _onSubmit();
        });
      }
    },
    type: ui_Button.Type.PRIMARY
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    className: "channel-profile-form",
    ref: formRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__img-section"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__avatar"
  }, currentImg ? /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    height: "80px",
    width: "80px",
    src: currentImg
  }) : /*#__PURE__*/React__default["default"].createElement(ui_ChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default["default"].createElement("input", {
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
  }), /*#__PURE__*/React__default["default"].createElement(ui_TextButton, {
    className: "channel-profile-form__avatar-button",
    onClick: function onClick() {
      return hiddenInputRef.current.click();
    },
    notUnderline: true
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.PRIMARY
  }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__name-section"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default["default"].createElement(ui_Input["default"], {
    required: title !== '',
    name: "channel-profile-form__name",
    ref: inputRef,
    value: title,
    placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
  }))));
};

module.exports = EditDetails;
//# sourceMappingURL=EditDetailsModal.js.map
