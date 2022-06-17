import React__default, { useContext, useState, useEffect } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { u as uuidv4 } from '../../uuid-b12b05c7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import { u as useChannel } from '../../ChannelProvider-94aeef2f.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../UserProfileContext-9b9928cf.js';
import '../../index-54fd64c3.js';
import '../../topics-af18f6dc.js';
import '../../index-a1462526.js';
import '../../tslib.es6-cee0628b.js';
import '../../compareIds-91189cc3.js';
import '../../const-7d66ce8b.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../withSendBird.js';

var TypingIndicatorText = function TypingIndicatorText(_a) {
  var members = _a.members;
  var stringSet = useContext(LocalizationContext).stringSet;

  if (!members || members.length === 0) {
    return '';
  }

  if (members && members.length === 1) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__IS_TYPING;
  }

  if (members && members.length === 2) {
    return members[0].nickname + " " + stringSet.TYPING_INDICATOR__AND + " " + members[1].nickname + " " + stringSet.TYPING_INDICATOR__ARE_TYPING;
  }

  return stringSet.TYPING_INDICATOR__MULTIPLE_TYPING;
};

var TypingIndicator = function TypingIndicator() {
  var _a, _b, _c;

  var channelUrl = useChannel().channelUrl;
  var globalStore = useSendbirdStateContext();
  var sb = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = useState(uuidv4()),
      handlerId = _d[0],
      setHandlerId = _d[1];

  var _e = useState([]),
      typingMembers = _e[0],
      setTypingMembers = _e[1];

  useEffect(function () {
    if (sb && sb.ChannelHandler) {
      sb.removeChannelHandler(handlerId);
      var newHandlerId = uuidv4();
      var handler = new sb.ChannelHandler(); // there is a possible warning in here - setState called after unmount

      handler.onTypingStatusUpdated = function (groupChannel) {
        logger.info('Channel > Typing Indicator: onTypingStatusUpdated', groupChannel);

        if (groupChannel.url === channelUrl) {
          var members = groupChannel.getTypingMembers();
          setTypingMembers(members);
        }
      };

      sb.addChannelHandler(newHandlerId, handler);
      setHandlerId(newHandlerId);
    }

    return function () {
      setTypingMembers([]);

      if (sb && sb.removeChannelHandler) {
        sb.removeChannelHandler(handlerId);
      }
    };
  }, [channelUrl]);
  return /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-conversation__footer__typing-indicator__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, /*#__PURE__*/React__default.createElement(TypingIndicatorText, {
    members: typingMembers
  }));
};

export { TypingIndicatorText, TypingIndicator as default };
//# sourceMappingURL=TypingIndicator.js.map
