import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../index-6d919a6a.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-9d8b78a7.js';
import { u as useOpenChannel, c as compareMessagesForGrouping } from '../../OpenChannelProvider-37cde2a8.js';
import MessagOpenChannelMessageeHoc from './OpenChannelMessage.js';
import '../../index-54fd64c3.js';
import '../../index-7e8c8e8d.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../ui/Loader.js';
import '../../LocalizationContext-79eb0635.js';
import '../../stringSet-4614f875.js';
import '../../index-3db1006f.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../tslib.es6-cee0628b.js';
import '../../compareIds-91189cc3.js';
import '../../topics-af18f6dc.js';
import '../../uuid-b12b05c7.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../index-a1462526.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/IconButton.js';
import '../../ui/UserProfile.js';
import '../../sendBirdSelectors.js';
import '../../index-775a609a.js';
import '../../utils-2e4bc3dd.js';
import '../../openChannelUtils-4a6b2e44.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-29648548.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import 'stream';
import '../../const-f8c6fa59.js';
import '../../const-7d66ce8b.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/FileViewer.js';
import '../../index-2db42eac.js';
import '../../ui/Modal.js';
import '../../utils-a66b9c45.js';

function OpenchannelMessageList(props, ref) {
  var _a;

  var _b = useOpenChannel(),
      _c = _b.useMessageGrouping,
      useMessageGrouping = _c === void 0 ? true : _c,
      allMessages = _b.allMessages,
      hasMore = _b.hasMore,
      onScroll = _b.onScroll;

  var scrollRef = ref || useRef(null);

  var _d = useState(false),
      showScrollDownButton = _d[0],
      setShowScrollDownButton = _d[1];

  var handleOnScroll = function handleOnScroll(e) {
    var element = e.target;
    var scrollTop = element.scrollTop,
        scrollHeight = element.scrollHeight,
        clientHeight = element.clientHeight;

    if (scrollHeight > scrollTop + clientHeight && window.navigator.userAgent.indexOf('MSIE ') < 0 // don't show button in IE
    ) {
      setShowScrollDownButton(true);
    } else {
      setShowScrollDownButton(false);
    }

    if (!hasMore) {
      return;
    }

    if (scrollTop === 0) {
      var nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');
      var first_1 = nodes && nodes[0];
      onScroll(function () {
        try {
          first_1.scrollIntoView();
        } catch (error) {}
      });
    }
  };

  var scrollToBottom = function scrollToBottom() {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
      setShowScrollDownButton(false);
    }
  };

  var hasMessage = useMemo(function () {
    return allMessages.length > 0;
  }, [allMessages.length]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll",
    onScroll: handleOnScroll,
    ref: scrollRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__padding"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__item-container" + (hasMessage ? '' : '--no-messages')
  }, hasMessage ? allMessages.map(function (message, index) {
    var previousMessage = allMessages[index - 1];
    var nextMessage = allMessages[index - 1];
    var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
    var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

    var hasSeparator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

    var _a = useMessageGrouping ? compareMessagesForGrouping(previousMessage, message, nextMessage) : [false, false],
        chainTop = _a[0],
        chainBottom = _a[1];

    return /*#__PURE__*/React__default.createElement(MessagOpenChannelMessageeHoc, {
      key: (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId),
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom,
      hasSeparator: hasSeparator,
      renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage
    });
  }) : ((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
    className: "sendbird-openchannel-conversation-scroll__container__place-holder",
    type: PlaceHolderTypes.NO_MESSAGES
  })), showScrollDownButton && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
    onClick: scrollToBottom,
    onKeyDown: scrollToBottom,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.CONTENT
  }))));
}

var OpenChannelMessageList = /*#__PURE__*/React__default.forwardRef(OpenchannelMessageList);

export { OpenChannelMessageList as default };
//# sourceMappingURL=OpenChannelMessageList.js.map
