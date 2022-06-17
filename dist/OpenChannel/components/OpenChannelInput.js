import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannel } from '../../OpenChannelProvider-37cde2a8.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'stream';
import 'prop-types';
import '../../const-f8c6fa59.js';
import '../../const-7d66ce8b.js';
import '../../ui/IconButton.js';
import '../../index-775a609a.js';
import '../../index-3db1006f.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-a1462526.js';
import '../../tslib.es6-cee0628b.js';
import '../../index-54fd64c3.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../compareIds-91189cc3.js';
import '../../topics-af18f6dc.js';
import '../../uuid-b12b05c7.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';

var MessageInputWrapper = function MessageInputWrapper(props, ref) {
  var _a = useOpenChannel(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default.createElement(MessageInput, {
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

var OpenChannelInput = /*#__PURE__*/React__default.forwardRef(MessageInputWrapper);

export { OpenChannelInput as default };
//# sourceMappingURL=OpenChannelInput.js.map
