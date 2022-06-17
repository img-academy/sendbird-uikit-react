import React__default, { useState, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { useOpenChannelSettings } from '../context.js';
import ChannelProfile from './OpenChannelProfile.js';
import Modal from '../../ui/Modal.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import ParticipantsList from './ParticipantUI.js';
import { AccordionGroup } from '../../ui/Accordion.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../UserProfileContext-9b9928cf.js';
import '../../withSendBird.js';
import '../../ui/TextButton.js';
import '../../color-29648548.js';
import '../../ui/OpenChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../utils-bfbe8356.js';
import './EditDetailsModal.js';
import '../../ui/Input.js';
import '../../index-775a609a.js';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../utils-a66b9c45.js';
import '../../context-b0bb3e69.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../topics-af18f6dc.js';
import '../../ui/ContextMenu.js';
import '../../index-a1462526.js';
import '../../ui/SortByRow.js';
import '../../ui/AccordionGroup.js';

function DeleteChannel() {
  var _a, _b;

  var _c = useState(false),
      showDeleteChannelModal = _c[0],
      setShowDeleteChannelModal = _c[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var globalState = useSendbirdStateContext();
  var isOnline = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.logger;

  var _d = useOpenChannelSettings(),
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

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
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
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DELETE,
    className: ['sendbird-openchannel-settings__panel-icon-left', 'sendbird-openchannel-settings__panel-icon__delete'].join(' '),
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)), showDeleteChannelModal && /*#__PURE__*/React__default.createElement(Modal, {
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
  var stringSet = useContext(LocalizationContext).stringSet;

  var _b = useOpenChannelSettings(),
      onCloseClick = _b.onCloseClick,
      channel = _b.channel;

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-settings__close-icon",
    type: IconTypes.CLOSE,
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__profile"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default.createElement(ChannelProfile, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__url"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-settings__copy-icon",
    type: IconTypes.COPY,
    height: "22px",
    width: "22px",
    onClick: function onClick() {
      copyToClipboard(channel === null || channel === void 0 ? void 0 : channel.url);
    }
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-settings__url-label",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-settings__url-value",
    type: LabelTypography.SUBTITLE_2
  }, channel === null || channel === void 0 ? void 0 : channel.url)), /*#__PURE__*/React__default.createElement(AccordionGroup, null, /*#__PURE__*/React__default.createElement(ParticipantsList, null)), /*#__PURE__*/React__default.createElement(DeleteChannel, null));
};

export { OperatorUI, copyToClipboard, OperatorUI as default };
//# sourceMappingURL=OperatorUI.js.map
