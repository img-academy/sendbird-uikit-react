import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-775a609a.js';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { u as useChannel } from '../../ChannelProvider-94aeef2f.js';
import 'prop-types';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../ui/Icon.js';
import '../../index-3db1006f.js';
import '../../stringSet-4614f875.js';
import '../../utils-a66b9c45.js';
import '../../index-7e8c8e8d.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../index-54fd64c3.js';
import '../../topics-af18f6dc.js';
import '../../index-a1462526.js';
import '../../tslib.es6-cee0628b.js';
import '../../compareIds-91189cc3.js';
import '../../const-7d66ce8b.js';
import '../../uuid-b12b05c7.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';

var RemoveMessage = function RemoveMessage(props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = useContext(LocalizationContext).stringSet;
  var deleteMessage = useChannel().deleteMessage;
  return /*#__PURE__*/React__default.createElement(Modal, {
    type: ButtonTypes.DANGER,
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

export { RemoveMessage as default };
//# sourceMappingURL=RemoveMessageModal.js.map
