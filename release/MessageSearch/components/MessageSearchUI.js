import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { useMessageSearch } from '../context.js';
import MessageSearchItem from '../../ui/MessageSearchItem.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-9d8b78a7.js';
import MessageSearchFileItem from '../../ui/MessageSearchFileItem.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import '../../tslib.es6-cee0628b.js';
import '../../index-54fd64c3.js';
import '../../index-d4c08fec.js';
import '../../index-6d919a6a.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import 'prop-types';
import '../../ui/Icon.js';
import '../../uuid-b12b05c7.js';
import '../../index-3db1006f.js';
import '../../ui/Loader.js';

var COMPONENT_CLASS_NAME = 'sendbird-message-search';
var MessageSearchUI = function MessageSearchUI(_a) {
  var renderPlaceHolderError = _a.renderPlaceHolderError,
      renderPlaceHolderLoading = _a.renderPlaceHolderLoading,
      renderPlaceHolderNoString = _a.renderPlaceHolderNoString,
      renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList,
      renderSearchItem = _a.renderSearchItem;

  var _b = useMessageSearch(),
      isInvalid = _b.isInvalid,
      searchString = _b.searchString,
      requestString = _b.requestString,
      currentChannel = _b.currentChannel,
      retryCount = _b.retryCount,
      setRetryCount = _b.setRetryCount,
      loading = _b.loading,
      scrollRef = _b.scrollRef,
      hasMoreResult = _b.hasMoreResult,
      onScroll = _b.onScroll,
      allMessages = _b.allMessages,
      onResultClick = _b.onResultClick,
      selectedMessageId = _b.selectedMessageId,
      setSelectedMessageId = _b.setSelectedMessageId;

  var stringSet = useContext(LocalizationContext).stringSet;

  var handleRetryToConnect = function handleRetryToConnect() {
    setRetryCount(retryCount + 1);
  };

  var handleOnScroll = function handleOnScroll(e) {
    var scrollElement = e.target;
    var scrollTop = scrollElement.scrollTop,
        scrollHeight = scrollElement.scrollHeight,
        clientHeight = scrollElement.clientHeight;

    if (!hasMoreResult) {
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      onScroll(function () {// after load more searched messages
      });
    }
  };

  var getChannelName = function getChannelName() {
    if (currentChannel && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) !== 'Group Channel') {
      return currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name;
    }

    if (currentChannel && ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) === 'Group Channel' || !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name))) {
      return currentChannel.members.map(function (member) {
        return member.nickname || stringSet.NO_NAME;
      }).join(', ');
    }

    return stringSet.NO_TITLE;
  };

  if (isInvalid && searchString && requestString) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.WRONG,
      retryToConnect: handleRetryToConnect
    }));
  }

  if (loading && searchString && requestString) {
    return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.SEARCHING
    }));
  }

  if (!searchString) {
    return (renderPlaceHolderNoString === null || renderPlaceHolderNoString === void 0 ? void 0 : renderPlaceHolderNoString()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.SEARCH_IN,
      searchInString: getChannelName()
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME,
    onScroll: handleOnScroll,
    ref: scrollRef
  }, allMessages.length > 0 ? allMessages.map(function (message) {
    if (renderSearchItem) {
      return renderSearchItem({
        message: message,
        onResultClick: onResultClick
      });
    }

    if (message.messageType === 'file') {
      return /*#__PURE__*/React__default.createElement(MessageSearchFileItem, {
        className: COMPONENT_CLASS_NAME + "__message-search-item",
        message: message,
        key: message.messageId,
        selected: selectedMessageId === message.messageId,
        onClick: function onClick() {
          onResultClick(message);
          setSelectedMessageId(message.messageId);
        }
      });
    }

    return /*#__PURE__*/React__default.createElement(MessageSearchItem, {
      className: COMPONENT_CLASS_NAME + "__message-search-item",
      message: message,
      key: message.messageId,
      selected: selectedMessageId === message.messageId,
      onClick: function onClick() {
        onResultClick(message);
        setSelectedMessageId(message.messageId);
      }
    });
  }) : (renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList()) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.NO_RESULTS
  }));
};

export { MessageSearchUI, MessageSearchUI as default };
//# sourceMappingURL=MessageSearchUI.js.map
