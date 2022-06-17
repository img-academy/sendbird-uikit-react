'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-8f00ec86.js');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var Channel_context = require('../../ChannelProvider-2848c6e0.js');
require('prop-types');
require('react-dom');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../ui/Icon.js');
require('../../index-25825fe1.js');
require('../../stringSet-435b3346.js');
require('../../utils-81069a8c.js');
require('../../index-6f7d86a8.js');
require('../../UserProfileContext-46f306ca.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../index-e7940a94.js');
require('../../topics-dc71c830.js');
require('../../index-e0c5dddd.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../compareIds-669db256.js');
require('../../const-61eaa01a.js');
require('../../uuid-a43dad75.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RemoveMessage = function RemoveMessage(props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var deleteMessage = Channel_context.useChannel().deleteMessage;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    type: ui_Button.ButtonTypes.DANGER,
    disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0,
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      deleteMessage(message).then(function () {
        onCancel();
      });
    },
    submitText: stringSet.MESSAGE_MENU__DELETE,
    titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
  });
};

module.exports = RemoveMessage;
//# sourceMappingURL=RemoveMessageModal.js.map
