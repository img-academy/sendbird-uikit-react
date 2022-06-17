'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-85461864.js');
require('./CreateChannel/components/InviteMembers.js');
require('./tslib.es6-cb3f88e3.js');
require('./LocalizationContext-60feae29.js');
require('./stringSet-435b3346.js');
require('./index-6f7d86a8.js');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-77e2b7af.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-94591769.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-8f00ec86.js');
require('./index-25825fe1.js');
require('./utils-81069a8c.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-46f306ca.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-a43dad75.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendBirdSelectors.js');
require('./topics-dc71c830.js');
require('./ui/ContextMenu.js');
require('./index-e0c5dddd.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function CreateChannel(props) {
  var onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery,
      onCreateChannel = props.onCreateChannel,
      onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  return /*#__PURE__*/React__default["default"].createElement(CreateChannel_context.CreateChannelProvider, {
    onBeforeCreateChannel: onBeforeCreateChannel,
    userListQuery: userListQuery,
    onCreateChannel: onCreateChannel
  }, /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_CreateChannelUI, {
    renderStepOne: renderStepOne,
    onCancel: onCancel
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannel.js.map
