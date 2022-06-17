'use strict';

var React = require('react');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var withSendBird = require('../withSendBird.js');
var sendBirdSelectors = require('../sendBirdSelectors.js');
var ui_Avatar = require('./Avatar.js');
var ui_Label = require('../index-25825fe1.js');
var ui_Button = require('../index-8f00ec86.js');
require('../stringSet-435b3346.js');
require('../index-6f7d86a8.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('../topics-dc71c830.js');
require('../tslib.es6-cb3f88e3.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-a43dad75.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function UserProfile(_a) {
  var user = _a.user,
      currentUserId = _a.currentUserId,
      sdk = _a.sdk,
      logger = _a.logger,
      _b = _a.disableMessaging,
      disableMessaging = _b === void 0 ? false : _b,
      createChannel = _a.createChannel,
      onSuccess = _a.onSuccess;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile"
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    height: "80px",
    width: "80px",
    src: user === null || user === void 0 ? void 0 : user.profileUrl
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-name"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)), (user === null || user === void 0 ? void 0 : user.userId) !== currentUserId && !disableMessaging && /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-message"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    onClick: function onClick() {
      var params = new sdk.GroupChannelParams();
      params.isDistinct = true;
      params.addUserIds([user === null || user === void 0 ? void 0 : user.userId]);
      onSuccess();
      createChannel(params).then(function (groupChannel) {
        logger.info('UserProfile, channel create', groupChannel);
      });
    }
  }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile-separator"
  }), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-userId"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird__user-profile-userId--label",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird__user-profile-userId--value",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user === null || user === void 0 ? void 0 : user.userId)));
}

var mapStoreToProps = function mapStoreToProps(store) {
  return {
    sdk: sendBirdSelectors.getSdk(store),
    createChannel: sendBirdSelectors.getCreateChannel(store),
    logger: store.config.logger,
    pubsub: store.config.pubSub
  };
};

var ConnectedUserProfile = withSendBird["default"](UserProfile, mapStoreToProps);

module.exports = ConnectedUserProfile;
//# sourceMappingURL=UserProfile.js.map
