'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
var OpenChannelSettings_context = require('../context.js');
var OpenChannelSettings_components_OpenChannelProfile = require('./OpenChannelProfile.js');
var ui_Modal = require('../../ui/Modal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_components_ParticipantUI = require('./ParticipantUI.js');
var ui_Accordion = require('../../ui/Accordion.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../UserProfileContext-46f306ca.js');
require('../../withSendBird.js');
require('../../ui/TextButton.js');
require('../../color-c2dc807b.js');
require('../../ui/OpenChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../utils-f418bdf3.js');
require('./EditDetailsModal.js');
require('../../ui/Input.js');
require('../../index-8f00ec86.js');
require('react-dom');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../utils-81069a8c.js');
require('../../context-aef520dd.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('../../ui/SortByRow.js');
require('../../ui/AccordionGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DeleteChannel() {
  var _a, _b;

  var _c = React.useState(false),
      showDeleteChannelModal = _c[0],
      setShowDeleteChannelModal = _c[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var globalState = useSendbirdStateContext();
  var isOnline = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.logger;

  var _d = OpenChannelSettings_context.useOpenChannelSettings(),
      channel = _d.channel,
      onDeleteChannel = _d.onDeleteChannel;

  var deleteChannel = function deleteChannel() {
    channel === null || channel === void 0 ? void 0 : channel.delete(function (response, error) {
      if (error) {
        logger.warning('OpenChannelSettings: Delete channel failed', error);
        return;
      }

      logger.info('OpenChannelSettings: Delete channel success', response);

      if (onDeleteChannel) {
        onDeleteChannel(channel);
      }
    });
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__panel-item\n          sendbird-openchannel-settings__delete-channel\n            " + (!isOnline ? 'sendbird-openchannel-settings__panel-item__disabled' : ''),
    role: "button",
    tabIndex: 0,
    onKeyDown: function onKeyDown() {
      if (!isOnline) {
        return;
      }

      setShowDeleteChannelModal(true);
    },
    onClick: function onClick() {
      if (!isOnline) {
        return;
      }

      setShowDeleteChannelModal(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.DELETE,
    className: ['sendbird-openchannel-settings__panel-icon-left', 'sendbird-openchannel-settings__panel-icon__delete'].join(' '),
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)), showDeleteChannelModal && /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    onCancel: function onCancel() {
      setShowDeleteChannelModal(false);
    },
    onSubmit: function onSubmit() {
      deleteChannel();
    },
    submitText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT,
    titleText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE
  }));
}

var copyToClipboard = function copyToClipboard(text) {
  // @ts-ignore: Unreachable code error
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    // @ts-ignore: Unreachable code error
    return window.clipboardData.setData('Text', text);
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return false;
};
var OperatorUI = function OperatorUI(_a) {
  var renderChannelProfile = _a.renderChannelProfile;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _b = OpenChannelSettings_context.useOpenChannelSettings(),
      onCloseClick = _b.onCloseClick,
      channel = _b.channel;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-settings__close-icon",
    type: ui_Icon.IconTypes.CLOSE,
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__profile"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_OpenChannelProfile, null)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__url"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-settings__copy-icon",
    type: ui_Icon.IconTypes.COPY,
    height: "22px",
    width: "22px",
    onClick: function onClick() {
      copyToClipboard(channel === null || channel === void 0 ? void 0 : channel.url);
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-settings__url-label",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-settings__url-value",
    type: ui_Label.LabelTypography.SUBTITLE_2
  }, channel === null || channel === void 0 ? void 0 : channel.url)), /*#__PURE__*/React__default["default"].createElement(ui_Accordion.AccordionGroup, null, /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_ParticipantUI, null)), /*#__PURE__*/React__default["default"].createElement(DeleteChannel, null));
};

exports.OperatorUI = OperatorUI;
exports.copyToClipboard = copyToClipboard;
exports["default"] = OperatorUI;
//# sourceMappingURL=OperatorUI.js.map
