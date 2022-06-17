import React__default, { useContext } from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useOpenChannelSettings } from '../context.js';
import { U as UserProfileProvider } from '../../UserProfileContext-9b9928cf.js';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { P as PlaceHolder, b as PlaceHolderTypes } from '../../index-9d8b78a7.js';
import { OperatorUI } from './OperatorUI.js';
import ParticipantsList from './ParticipantUI.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../ui/Loader.js';
import './OpenChannelProfile.js';
import '../../ui/TextButton.js';
import '../../color-29648548.js';
import '../../ui/OpenChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../utils-bfbe8356.js';
import './EditDetailsModal.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../index-775a609a.js';
import '../../utils-a66b9c45.js';
import '../../ui/Input.js';
import '../../ui/Accordion.js';
import '../../ui/AccordionGroup.js';
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

function InvalidChannel(_a) {
  var onCloseClick = _a.onCloseClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__placeholder"
  }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.WRONG
  })));
}

var OpenChannelUI = function OpenChannelUI(_a) {
  var _b, _c, _d;

  var renderOperatorUI = _a.renderOperatorUI,
      renderParticipantList = _a.renderParticipantList;

  var _e = useOpenChannelSettings(),
      channel = _e.channel,
      _onCloseClick = _e.onCloseClick;

  var globalStore = useSendbirdStateContext();
  var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
  var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;

  if (!channel) {
    return /*#__PURE__*/React__default.createElement(InvalidChannel, {
      onCloseClick: function onCloseClick() {
        logger.info('OpenChannelSettings: Click close');

        if (_onCloseClick) {
          _onCloseClick();
        }
      }
    });
  }

  return /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    className: "sendbird-openchannel-settings"
  }, (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || /*#__PURE__*/React__default.createElement(OperatorUI, null)), !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || /*#__PURE__*/React__default.createElement(ParticipantsList, null)));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelSettingsUI.js.map
