'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-85461864.js');
var CreateChannel_components_InviteMembers = require('./InviteMembers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../LocalizationContext-60feae29.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-8f00ec86.js');
require('../../index-25825fe1.js');
require('../../utils-81069a8c.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-46f306ca.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function CreateChannel(props) {
  var _onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = CreateChannel_context.useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_SelectChannelType, {
    onCancel: _onCancel
  })), step === 1 && /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_InviteMembers, {
    onCancel: function onCancel() {
      setStep(0);

      _onCancel();
    }
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map
