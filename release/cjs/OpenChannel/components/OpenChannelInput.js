'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-8d321de2.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('stream');
require('prop-types');
require('../../const-56d42d10.js');
require('../../const-61eaa01a.js');
require('../../ui/IconButton.js');
require('../../index-8f00ec86.js');
require('../../index-25825fe1.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-e0c5dddd.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../index-e7940a94.js');
require('../../UserProfileContext-46f306ca.js');
require('../../compareIds-669db256.js');
require('../../topics-dc71c830.js');
require('../../uuid-a43dad75.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageInputWrapper = function MessageInputWrapper(props, ref) {
  var _a = OpenChannel_context.useOpenChannel(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    ref: ref,
    disabled: disabled,
    onSendMessage: function onSendMessage(_a) {
      var message = _a.message;
      handleSendMessage({
        message: message
      });
    },
    onFileUpload: handleFileUpload,
    placeholder: disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

  }));
};

var OpenChannelInput = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

module.exports = OpenChannelInput;
//# sourceMappingURL=OpenChannelInput.js.map
