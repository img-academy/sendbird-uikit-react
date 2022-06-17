import React__default, { useState } from 'react';
import { getCreateChannel } from './sendBirdSelectors.js';
import useSendbirdStateContext from './useSendbirdStateContext.js';

var CHANNEL_TYPE;

(function (CHANNEL_TYPE) {
  CHANNEL_TYPE["GROUP"] = "group";
  CHANNEL_TYPE["SUPERGROUP"] = "supergroup";
  CHANNEL_TYPE["BROADCAST"] = "broadcast";
})(CHANNEL_TYPE || (CHANNEL_TYPE = {}));

var CreateChannelContext = /*#__PURE__*/React__default.createContext(undefined);

var CreateChannelProvider = function CreateChannelProvider(props) {
  var _a;

  var children = props.children,
      onCreateChannel = props.onCreateChannel,
      onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery;
  var store = useSendbirdStateContext();
  var userListQuery_ = (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.userListQuery;
  var createChannel = getCreateChannel(store);

  var _b = useState(0),
      step = _b[0],
      setStep = _b[1];

  var _c = useState(CHANNEL_TYPE.GROUP),
      type = _c[0],
      setType = _c[1];

  return /*#__PURE__*/React__default.createElement(CreateChannelContext.Provider, {
    value: {
      onBeforeCreateChannel: onBeforeCreateChannel,
      createChannel: createChannel,
      onCreateChannel: onCreateChannel,
      userListQuery: userListQuery || userListQuery_,
      step: step,
      setStep: setStep,
      type: type,
      setType: setType
    }
  }, children);
};

var useCreateChannelContext = function useCreateChannelContext() {
  return React__default.useContext(CreateChannelContext);
};

export { CreateChannelProvider as C, CHANNEL_TYPE as a, useCreateChannelContext as u };
//# sourceMappingURL=CreateChannelProvider-33c5276e.js.map
