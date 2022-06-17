'use strict';

var React = require('react');
var index = require('../../index-f13da671.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../index-bbdcdf62.js');
var OpenChannel_context = require('../../OpenChannelProvider-8d321de2.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
require('../../index-e7940a94.js');
require('../../index-6f7d86a8.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../ui/Loader.js');
require('../../LocalizationContext-60feae29.js');
require('../../stringSet-435b3346.js');
require('../../index-25825fe1.js');
require('../../UserProfileContext-46f306ca.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../compareIds-669db256.js');
require('../../topics-dc71c830.js');
require('../../uuid-a43dad75.js');
require('../../useSendbirdStateContext.js');
require('../../withSendBird.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/IconButton.js');
require('../../ui/UserProfile.js');
require('../../sendBirdSelectors.js');
require('../../index-8f00ec86.js');
require('../../utils-3e10834b.js');
require('../../openChannelUtils-416eb4e3.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../color-c2dc807b.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('stream');
require('../../const-56d42d10.js');
require('../../const-61eaa01a.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/FileViewer.js');
require('../../index-94591769.js');
require('../../ui/Modal.js');
require('../../utils-81069a8c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenchannelMessageList(props, ref) {
  var _a;

  var _b = OpenChannel_context.useOpenChannel(),
      _c = _b.useMessageGrouping,
      useMessageGrouping = _c === void 0 ? true : _c,
      allMessages = _b.allMessages,
      hasMore = _b.hasMore,
      onScroll = _b.onScroll;

  var scrollRef = ref || React.useRef(null);

  var _d = React.useState(false),
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

  var hasMessage = React.useMemo(function () {
    return allMessages.length > 0;
  }, [allMessages.length]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll",
    onScroll: handleOnScroll,
    ref: scrollRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__padding"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__item-container" + (hasMessage ? '' : '--no-messages')
  }, hasMessage ? allMessages.map(function (message, index$1) {
    var previousMessage = allMessages[index$1 - 1];
    var nextMessage = allMessages[index$1 - 1];
    var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
    var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

    var hasSeparator = !(previousMessageCreatedAt && index.isSameDay(currentCreatedAt, previousMessageCreatedAt));

    var _a = useMessageGrouping ? OpenChannel_context.compareMessagesForGrouping(previousMessage, message, nextMessage) : [false, false],
        chainTop = _a[0],
        chainBottom = _a[1];

    return /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelMessage, {
      key: (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId),
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom,
      hasSeparator: hasSeparator,
      renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage
    });
  }) : ((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    className: "sendbird-openchannel-conversation-scroll__container__place-holder",
    type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES
  })), showScrollDownButton && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
    onClick: scrollToBottom,
    onKeyDown: scrollToBottom,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    width: "24px",
    height: "24px",
    type: ui_Icon.IconTypes.CHEVRON_DOWN,
    fillColor: ui_Icon.IconColors.CONTENT
  }))));
}

var OpenChannelMessageList = /*#__PURE__*/React__default["default"].forwardRef(OpenchannelMessageList);

module.exports = OpenChannelMessageList;
//# sourceMappingURL=OpenChannelMessageList.js.map
