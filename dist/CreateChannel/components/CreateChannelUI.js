import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-33c5276e.js';
import InviteMembers from './InviteMembers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendBirdSelectors.js';
import '../../topics-af18f6dc.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../tslib.es6-cee0628b.js';
import '../../LocalizationContext-79eb0635.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-775a609a.js';
import '../../index-3db1006f.js';
import '../../utils-a66b9c45.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-a1462526.js';
import '../../ui/SortByRow.js';

var CreateChannel = function CreateChannel(props) {
  var _onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default.createElement(SelectChannelType, {
    onCancel: _onCancel
  })), step === 1 && /*#__PURE__*/React__default.createElement(InviteMembers, {
    onCancel: function onCancel() {
      setStep(0);

      _onCancel();
    }
  }));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannelUI.js.map
