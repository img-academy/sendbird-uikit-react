import React__default, { useEffect, useCallback, useRef, useMemo, useState, useReducer } from 'react';
import { U as UserProfileProvider } from './UserProfileContext-9b9928cf.js';
import useSendbirdStateContext from './useSendbirdStateContext.js';
import { b as _toConsumableArray, _ as _objectSpread2, a as _slicedToArray } from './_rollupPluginBabelHelpers-0ec97672.js';
import { f as format } from './index-54fd64c3.js';
import { S as SEND_USER_MESSAGE, b as SEND_MESSAGE_START, a as SEND_FILE_MESSAGE, U as UPDATE_USER_MESSAGE, D as DELETE_MESSAGE } from './topics-af18f6dc.js';
import { a as getOutgoingMessageStates, b as getSendingMessageStatus, c as isReadMessage, d as filterMessageListParams } from './index-a1462526.js';
import { c as compareIds } from './compareIds-91189cc3.js';
import { N as NEXT_RESULT_SIZE, P as PREV_RESULT_SIZE } from './const-7d66ce8b.js';
import { u as uuidv4 } from './uuid-b12b05c7.js';
import { EmojiListItems } from './ui/ContextMenu.js';
import ReactionButton from './ui/ReactionButton.js';
import ImageRenderer from './ui/ImageRenderer.js';
import Icon, { IconTypes } from './ui/Icon.js';

var RESET_MESSAGES = 'RESET_MESSAGES';
var FETCH_INITIAL_MESSAGES_START = 'FETCH_INITIAL_MESSAGES_START';
var FETCH_INITIAL_MESSAGES_SUCCESS = 'FETCH_INITIAL_MESSAGES_SUCCESS';
var FETCH_INITIAL_MESSAGES_FAILURE = 'FETCH_INITIAL_MESSAGES_FAILURE';
var FETCH_PREV_MESSAGES_SUCCESS = 'FETCH_PREV_MESSAGES_SUCCESS';
var FETCH_PREV_MESSAGES_FAILURE = 'FETCH_PREV_MESSAGES_FAILURE';
var FETCH_NEXT_MESSAGES_SUCCESS = 'FETCH_NEXT_MESSAGES_SUCCESS';
var FETCH_NEXT_MESSAGES_FAILURE = 'FETCH_NEXT_MESSAGES_FAILURE';
var SEND_MESSAGEGE_START = 'SEND_MESSAGEGE_START';
var SEND_MESSAGEGE_SUCESS = 'SEND_MESSAGEGE_SUCESS';
var SEND_MESSAGEGE_FAILURE = 'SEND_MESSAGEGE_FAILURE';
var RESEND_MESSAGEGE_START = 'RESEND_MESSAGEGE_START';
var ON_MESSAGE_RECEIVED = 'ON_MESSAGE_RECEIVED';
var ON_MESSAGE_UPDATED = 'ON_MESSAGE_UPDATED';
var ON_MESSAGE_THREAD_INFO_UPDATED = 'ON_MESSAGE_THREAD_INFO_UPDATED';
var ON_MESSAGE_DELETED = 'ON_MESSAGE_DELETED';
var ON_MESSAGE_DELETED_BY_REQ_ID = 'ON_MESSAGE_DELETED_BY_REQ_ID';
var SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
var SET_CHANNEL_INVALID = 'SET_CHANNEL_INVALID';
var MARK_AS_READ = 'MARK_AS_READ';
var ON_REACTION_UPDATED = 'ON_REACTION_UPDATED';
var SET_EMOJI_CONTAINER = 'SET_EMOJI_CONTAINER';
var MESSAGE_LIST_PARAMS_CHANGED = 'MESSAGE_LIST_PARAMS_CHANGED';

var messageActionTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RESET_MESSAGES: RESET_MESSAGES,
  FETCH_INITIAL_MESSAGES_START: FETCH_INITIAL_MESSAGES_START,
  FETCH_INITIAL_MESSAGES_SUCCESS: FETCH_INITIAL_MESSAGES_SUCCESS,
  FETCH_INITIAL_MESSAGES_FAILURE: FETCH_INITIAL_MESSAGES_FAILURE,
  FETCH_PREV_MESSAGES_SUCCESS: FETCH_PREV_MESSAGES_SUCCESS,
  FETCH_PREV_MESSAGES_FAILURE: FETCH_PREV_MESSAGES_FAILURE,
  FETCH_NEXT_MESSAGES_SUCCESS: FETCH_NEXT_MESSAGES_SUCCESS,
  FETCH_NEXT_MESSAGES_FAILURE: FETCH_NEXT_MESSAGES_FAILURE,
  SEND_MESSAGEGE_START: SEND_MESSAGEGE_START,
  SEND_MESSAGEGE_SUCESS: SEND_MESSAGEGE_SUCESS,
  SEND_MESSAGEGE_FAILURE: SEND_MESSAGEGE_FAILURE,
  RESEND_MESSAGEGE_START: RESEND_MESSAGEGE_START,
  ON_MESSAGE_RECEIVED: ON_MESSAGE_RECEIVED,
  ON_MESSAGE_UPDATED: ON_MESSAGE_UPDATED,
  ON_MESSAGE_THREAD_INFO_UPDATED: ON_MESSAGE_THREAD_INFO_UPDATED,
  ON_MESSAGE_DELETED: ON_MESSAGE_DELETED,
  ON_MESSAGE_DELETED_BY_REQ_ID: ON_MESSAGE_DELETED_BY_REQ_ID,
  SET_CURRENT_CHANNEL: SET_CURRENT_CHANNEL,
  SET_CHANNEL_INVALID: SET_CHANNEL_INVALID,
  MARK_AS_READ: MARK_AS_READ,
  ON_REACTION_UPDATED: ON_REACTION_UPDATED,
  SET_EMOJI_CONTAINER: SET_EMOJI_CONTAINER,
  MESSAGE_LIST_PARAMS_CHANGED: MESSAGE_LIST_PARAMS_CHANGED
});

getOutgoingMessageStates();
var UNDEFINED = 'undefined';

var _getSendingMessageSta$1 = getSendingMessageStatus(),
    SUCCEEDED$1 = _getSendingMessageSta$1.SUCCEEDED;
    _getSendingMessageSta$1.FAILED;
    var PENDING$1 = _getSendingMessageSta$1.PENDING;

var scrollIntoLast = function scrollIntoLast() {
  var intialTry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var MAX_TRIES = 10;
  var currentTry = intialTry;

  if (currentTry > MAX_TRIES) {
    return;
  }

  try {
    var scrollDOM = document.querySelector('.sendbird-conversation__messages-padding'); // eslint-disable-next-line no-multi-assign

    scrollDOM.scrollTop = scrollDOM.scrollHeight;
  } catch (error) {
    setTimeout(function () {
      scrollIntoLast(currentTry + 1);
    }, 500 * currentTry);
  }
};
var pubSubHandleRemover = function pubSubHandleRemover(subscriber) {
  subscriber.forEach(function (s) {
    try {
      s.remove();
    } catch (_unused) {//
    }
  });
};
var pubSubHandler = function pubSubHandler(channelUrl, pubSub, dispatcher) {
  var subscriber = new Map();
  if (!pubSub || !pubSub.subscribe) return subscriber;
  subscriber.set(SEND_USER_MESSAGE, pubSub.subscribe(SEND_USER_MESSAGE, function (msg) {
    var channel = msg.channel,
        message = msg.message;
    scrollIntoLast();

    if (channel && channelUrl === channel.url) {
      dispatcher({
        type: SEND_MESSAGEGE_SUCESS,
        payload: message
      });
    }
  }));
  subscriber.set(SEND_MESSAGE_START, pubSub.subscribe(SEND_MESSAGE_START, function (msg) {
    var channel = msg.channel,
        message = msg.message;

    if (channel && channelUrl === channel.url) {
      dispatcher({
        type: SEND_MESSAGEGE_START,
        payload: message
      });
    }
  }));
  subscriber.set(SEND_FILE_MESSAGE, pubSub.subscribe(SEND_FILE_MESSAGE, function (msg) {
    var channel = msg.channel,
        message = msg.message;
    scrollIntoLast();

    if (channel && channelUrl === channel.url) {
      dispatcher({
        type: SEND_MESSAGEGE_SUCESS,
        payload: message
      });
    }
  }));
  subscriber.set(UPDATE_USER_MESSAGE, pubSub.subscribe(UPDATE_USER_MESSAGE, function (msg) {
    var channel = msg.channel,
        message = msg.message,
        fromSelector = msg.fromSelector;

    if (fromSelector && channel && channelUrl === channel.url) {
      dispatcher({
        type: ON_MESSAGE_UPDATED,
        payload: {
          channel: channel,
          message: message
        }
      });
    }
  }));
  subscriber.set(DELETE_MESSAGE, pubSub.subscribe(DELETE_MESSAGE, function (msg) {
    var channel = msg.channel,
        messageId = msg.messageId;

    if (channel && channelUrl === channel.url) {
      dispatcher({
        type: ON_MESSAGE_DELETED,
        payload: messageId
      });
    }
  }));
  return subscriber;
};
var isOperator = function isOperator() {
  var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var myRole = groupChannel.myRole;
  return myRole === 'operator';
};
var isDisabledBecauseFrozen = function isDisabledBecauseFrozen() {
  var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isFrozen = groupChannel.isFrozen;
  return isFrozen && !isOperator(groupChannel);
};
var isDisabledBecauseMuted = function isDisabledBecauseMuted() {
  var groupChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var myMutedState = groupChannel.myMutedState;
  return myMutedState === 'muted';
};
var getAllEmojisFromEmojiContainer = function getAllEmojisFromEmojiContainer() {
  var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _emojiContainer$emoji = emojiContainer.emojiCategories,
      emojiCategories = _emojiContainer$emoji === void 0 ? [] : _emojiContainer$emoji;
  var allEmojis = [];

  for (var categoryIndex = 0; categoryIndex < emojiCategories.length; categoryIndex += 1) {
    var emojis = emojiCategories[categoryIndex].emojis;

    for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex += 1) {
      allEmojis.push(emojis[emojiIndex]);
    }
  }

  return allEmojis;
};
var getAllEmojisMapFromEmojiContainer = function getAllEmojisMapFromEmojiContainer() {
  var emojiContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _emojiContainer$emoji2 = emojiContainer.emojiCategories,
      emojiCategories = _emojiContainer$emoji2 === void 0 ? [] : _emojiContainer$emoji2;
  var allEmojisMap = new Map();

  for (var categoryIndex = 0; categoryIndex < emojiCategories.length; categoryIndex += 1) {
    var emojis = emojiCategories[categoryIndex].emojis;

    for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex += 1) {
      var _emojis$emojiIndex = emojis[emojiIndex],
          key = _emojis$emojiIndex.key,
          url = _emojis$emojiIndex.url;
      allEmojisMap.set(key, url);
    }
  }

  return allEmojisMap;
};
var getNicknamesMapFromMembers = function getNicknamesMapFromMembers() {
  var members = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var nicknamesMap = new Map();

  for (var memberIndex = 0; memberIndex < members.length; memberIndex += 1) {
    var _members$memberIndex = members[memberIndex],
        userId = _members$memberIndex.userId,
        nickname = _members$memberIndex.nickname;
    nicknamesMap.set(userId, nickname);
  }

  return nicknamesMap;
};
var getMessageCreatedAt = function getMessageCreatedAt(message) {
  return format(message.createdAt, 'p');
};
var isSameGroup = function isSameGroup(message, comparingMessage, currentChannel) {
  var _message$sender, _comparingMessage$sen, _message$sender2, _comparingMessage$sen2;

  if (!(message && comparingMessage && (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin' && (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.messageType) !== 'admin' && message !== null && message !== void 0 && message.sender && comparingMessage !== null && comparingMessage !== void 0 && comparingMessage.sender && message !== null && message !== void 0 && message.createdAt && comparingMessage !== null && comparingMessage !== void 0 && comparingMessage.createdAt && message !== null && message !== void 0 && (_message$sender = message.sender) !== null && _message$sender !== void 0 && _message$sender.userId && comparingMessage !== null && comparingMessage !== void 0 && (_comparingMessage$sen = comparingMessage.sender) !== null && _comparingMessage$sen !== void 0 && _comparingMessage$sen.userId)) {
    return false;
  }

  return (message === null || message === void 0 ? void 0 : message.sendingStatus) === (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sendingStatus) && (message === null || message === void 0 ? void 0 : (_message$sender2 = message.sender) === null || _message$sender2 === void 0 ? void 0 : _message$sender2.userId) === (comparingMessage === null || comparingMessage === void 0 ? void 0 : (_comparingMessage$sen2 = comparingMessage.sender) === null || _comparingMessage$sen2 === void 0 ? void 0 : _comparingMessage$sen2.userId) && getMessageCreatedAt(message) === getMessageCreatedAt(comparingMessage) && isReadMessage(currentChannel, message) === isReadMessage(currentChannel, comparingMessage);
};
var compareMessagesForGrouping = function compareMessagesForGrouping(prevMessage, currMessage, nextMessage, currentChannel) {
  var sendingStatus = (currMessage === null || currMessage === void 0 ? void 0 : currMessage.sendingStatus) || '';
  var isAcceptable = sendingStatus !== 'pending' && sendingStatus !== 'failed';
  return [isSameGroup(prevMessage, currMessage, currentChannel) && isAcceptable, isSameGroup(currMessage, nextMessage, currentChannel) && isAcceptable];
};
var passUnsuccessfullMessages = function passUnsuccessfullMessages(allMessages, newMessage) {
  var _newMessage$sendingSt = newMessage.sendingStatus,
      sendingStatus = _newMessage$sendingSt === void 0 ? UNDEFINED : _newMessage$sendingSt;

  if (sendingStatus === SUCCEEDED$1 || sendingStatus === PENDING$1) {
    var lastIndexOfSucceededMessage = allMessages.map(function (message) {
      return message.sendingStatus || (message.isAdminMessage && message.isAdminMessage() ? SUCCEEDED$1 : UNDEFINED);
    }).lastIndexOf(SUCCEEDED$1);

    if (lastIndexOfSucceededMessage + 1 < allMessages.length) {
      var messages = _toConsumableArray(allMessages);

      messages.splice(lastIndexOfSucceededMessage + 1, 0, newMessage);
      return messages;
    }
  }

  return [].concat(_toConsumableArray(allMessages), [newMessage]);
};
var pxToNumber = function pxToNumber(px) {
  if (typeof px === 'number') {
    return px;
  }

  if (typeof px === 'string') {
    var parsed = Number.parseFloat(px);

    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return null;
};
var isAboutSame = function isAboutSame(a, b, px) {
  return Math.abs(a - b) <= px;
};

var messagesInitialState = {
  initialized: false,
  loading: false,
  allMessages: [],
  currentGroupChannel: {
    members: []
  },
  // for scrollup
  hasMorePrev: false,
  oldestMessageTimeStamp: 0,
  // for scroll down
  // onScrollDownCallback is added for navigation to different timestamps on messageSearch
  // hasMorePrev, onScrollCallback -> scroll up(default behavior)
  // hasMoreNext, onScrollDownCallback -> scroll down
  hasMoreNext: false,
  latestMessageTimeStamp: 0,
  emojiContainer: {},
  unreadSince: null,
  isInvalid: false,
  messageListParams: null
};

var _getSendingMessageSta = getSendingMessageStatus(),
    SUCCEEDED = _getSendingMessageSta.SUCCEEDED,
    FAILED = _getSendingMessageSta.FAILED,
    PENDING = _getSendingMessageSta.PENDING;

var getOldestMessageTimeStamp = function getOldestMessageTimeStamp() {
  var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var oldestMessage = messages[0];
  return oldestMessage && oldestMessage.createdAt || null;
};

var getLatestMessageTimeStamp = function getLatestMessageTimeStamp() {
  var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var latestMessage = messages[messages.length - 1];
  return latestMessage && latestMessage.createdAt || null;
};

function reducer(state, action) {
  var _state$currentGroupCh6, _action$payload7, _action$payload7$chan;

  switch (action.type) {
    case RESET_MESSAGES:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        // when user switches channel, if the previous channel `hasMorePrev`
        // the onScroll gets called twice, setting hasMorePrev false prevents this
        hasMorePrev: false,
        hasMoreNext: false,
        allMessages: []
      });

    case FETCH_INITIAL_MESSAGES_START:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          loading: true,
          allMessages: _toConsumableArray(state.allMessages.filter(function (m) {
            return m.sendingStatus !== SUCCEEDED;
          }))
        });
      }

    case FETCH_INITIAL_MESSAGES_SUCCESS:
      {
        var _state$currentGroupCh;

        var _action$payload = action.payload,
            currentGroupChannel = _action$payload.currentGroupChannel,
            messages = _action$payload.messages;

        if (!((currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url) === ((_state$currentGroupCh = state.currentGroupChannel) === null || _state$currentGroupCh === void 0 ? void 0 : _state$currentGroupCh.url))) {
          return state;
        }

        var oldestMessageTimeStamp = getOldestMessageTimeStamp(messages);
        var latestMessageTimeStamp = getLatestMessageTimeStamp(messages);
        return _objectSpread2(_objectSpread2({}, state), {}, {
          loading: false,
          initialized: true,
          hasMorePrev: true,
          hasMoreNext: true,
          oldestMessageTimeStamp: oldestMessageTimeStamp,
          latestMessageTimeStamp: latestMessageTimeStamp,
          allMessages: _toConsumableArray(messages)
        });
      }

    case FETCH_PREV_MESSAGES_SUCCESS:
      {
        var _state$currentGroupCh2;

        var _action$payload2 = action.payload,
            _currentGroupChannel = _action$payload2.currentGroupChannel,
            _messages = _action$payload2.messages;

        if (!((_currentGroupChannel === null || _currentGroupChannel === void 0 ? void 0 : _currentGroupChannel.url) === ((_state$currentGroupCh2 = state.currentGroupChannel) === null || _state$currentGroupCh2 === void 0 ? void 0 : _state$currentGroupCh2.url))) {
          return state;
        }

        var hasMorePrev = _messages && _messages.length === PREV_RESULT_SIZE + 1;

        var _oldestMessageTimeStamp = getOldestMessageTimeStamp(_messages); // Remove duplicated messages


        var duplicatedMessageIds = [];
        var updatedOldMessages = state.allMessages.map(function (msg) {
          var duplicatedMessage = _messages.find(function (_ref) {
            var messageId = _ref.messageId;
            return compareIds(messageId, msg.messageId);
          });

          if (!duplicatedMessage) {
            return msg;
          }

          duplicatedMessageIds.push(duplicatedMessage.messageId);
          return duplicatedMessage.updatedAt > msg.updatedAt ? duplicatedMessage : msg;
        });
        var filteredNewMessages = duplicatedMessageIds.length > 0 ? _messages.filter(function (msg) {
          return !duplicatedMessageIds.find(function (messageId) {
            return compareIds(messageId, msg.messageId);
          });
        }) : _messages;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          hasMorePrev: hasMorePrev,
          oldestMessageTimeStamp: _oldestMessageTimeStamp,
          allMessages: [].concat(_toConsumableArray(filteredNewMessages), _toConsumableArray(updatedOldMessages))
        });
      }

    case FETCH_NEXT_MESSAGES_SUCCESS:
      {
        var _state$currentGroupCh3;

        var _action$payload3 = action.payload,
            _currentGroupChannel2 = _action$payload3.currentGroupChannel,
            _messages2 = _action$payload3.messages;

        if (!((_currentGroupChannel2 === null || _currentGroupChannel2 === void 0 ? void 0 : _currentGroupChannel2.url) === ((_state$currentGroupCh3 = state.currentGroupChannel) === null || _state$currentGroupCh3 === void 0 ? void 0 : _state$currentGroupCh3.url))) {
          return state;
        }

        var hasMoreNext = _messages2 && _messages2.length === NEXT_RESULT_SIZE + 1;

        var _latestMessageTimeStamp = getLatestMessageTimeStamp(_messages2); // Remove duplicated messages


        var _duplicatedMessageIds = [];

        var _updatedOldMessages = state.allMessages.map(function (msg) {
          var duplicatedMessage = _messages2.find(function (_ref2) {
            var messageId = _ref2.messageId;
            return compareIds(messageId, msg.messageId);
          });

          if (!duplicatedMessage) {
            return msg;
          }

          _duplicatedMessageIds.push(duplicatedMessage.messageId);

          return duplicatedMessage.updatedAt > msg.updatedAt ? duplicatedMessage : msg;
        });

        var _filteredNewMessages = _duplicatedMessageIds.length > 0 ? _messages2.filter(function (msg) {
          return !_duplicatedMessageIds.find(function (messageId) {
            return compareIds(messageId, msg.messageId);
          });
        }) : _messages2;

        return _objectSpread2(_objectSpread2({}, state), {}, {
          hasMoreNext: hasMoreNext,
          latestMessageTimeStamp: _latestMessageTimeStamp,
          allMessages: [].concat(_toConsumableArray(_updatedOldMessages), _toConsumableArray(_filteredNewMessages))
        });
      }

    case FETCH_INITIAL_MESSAGES_FAILURE:
    case FETCH_PREV_MESSAGES_FAILURE:
    case FETCH_NEXT_MESSAGES_FAILURE:
      {
        var _state$currentGroupCh4;

        var _currentGroupChannel3 = action.payload.currentGroupChannel;

        if ((_currentGroupChannel3 === null || _currentGroupChannel3 === void 0 ? void 0 : _currentGroupChannel3.url) !== (state === null || state === void 0 ? void 0 : (_state$currentGroupCh4 = state.currentGroupChannel) === null || _state$currentGroupCh4 === void 0 ? void 0 : _state$currentGroupCh4.url)) {
          return state;
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          loading: false,
          initialized: false,
          allMessages: [],
          hasMorePrev: false,
          hasMoreNext: false,
          oldestMessageTimeStamp: null,
          latestMessageTimeStamp: null
        });
      }

    case SEND_MESSAGEGE_START:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        allMessages: [].concat(_toConsumableArray(state.allMessages), [_objectSpread2({}, action.payload)])
      });

    case SEND_MESSAGEGE_SUCESS:
      {
        var newMessages = state.allMessages.map(function (m) {
          return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
        });

        _toConsumableArray(newMessages).sort(function (a, b) {
          return a.sendingStatus && b.sendingStatus && a.sendingStatus === SUCCEEDED && (b.sendingStatus === PENDING || b.sendingStatus === FAILED) ? -1 : 1;
        });

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: newMessages
        });
      }

    case SEND_MESSAGEGE_FAILURE:
      {
        // eslint-disable-next-line no-param-reassign
        action.payload.failed = true;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.map(function (m) {
            return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
          })
        });
      }

    case SET_CURRENT_CHANNEL:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          currentGroupChannel: action.payload,
          isInvalid: false
        });
      }

    case SET_CHANNEL_INVALID:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isInvalid: true
        });
      }

    case ON_MESSAGE_RECEIVED:
      {
        var _action$payload4 = action.payload,
            channel = _action$payload4.channel,
            message = _action$payload4.message;
        var members = channel.members;
        var sender = message.sender;

        var _state$currentGroupCh5 = state.currentGroupChannel,
            _currentGroupChannel4 = _state$currentGroupCh5 === void 0 ? {} : _state$currentGroupCh5,
            unreadSince = state.unreadSince;

        var currentGroupChannelUrl = _currentGroupChannel4.url;

        if (!compareIds(channel.url, currentGroupChannelUrl)) {
          return state;
        } // Excluded overlapping messages


        if (state.allMessages.some(function (msg) {
          return msg.messageId === message.messageId;
        })) {
          return state;
        } // Filter by userFilledQuery


        if (state.messageListParams && !filterMessageListParams(state.messageListParams, message)) {
          return state;
        }

        if (message.isAdminMessage && message.isAdminMessage()) {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: passUnsuccessfullMessages(state.allMessages, message)
          });
        } // Update members when sender profileUrl, nickname, friendName has been changed


        var senderMember = members === null || members === void 0 ? void 0 : members.find(function (m) {
          return (m === null || m === void 0 ? void 0 : m.userId) === (sender === null || sender === void 0 ? void 0 : sender.userId);
        });

        if ((senderMember === null || senderMember === void 0 ? void 0 : senderMember.profileUrl) !== (sender === null || sender === void 0 ? void 0 : sender.profileUrl) || (senderMember === null || senderMember === void 0 ? void 0 : senderMember.friendName) !== (sender === null || sender === void 0 ? void 0 : sender.friendName) || (senderMember === null || senderMember === void 0 ? void 0 : senderMember.nickname) !== (sender === null || sender === void 0 ? void 0 : sender.nickname)) {
          channel.members = members.map(function (member) {
            if (member.userId === sender.userId) {
              return sender;
            }

            return member;
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          currentGroupChannel: channel,
          unreadSince: state !== null && state !== void 0 && state.unreadSince ? unreadSince : format(new Date(), 'p MMM dd'),
          allMessages: passUnsuccessfullMessages(state.allMessages, message)
        });
      }

    case ON_MESSAGE_UPDATED:
      {
        var _action$payload5 = action.payload,
            _channel = _action$payload5.channel,
            _message = _action$payload5.message;

        var _currentGroupChannelUrl = state.currentGroupChannel && state.currentGroupChannel.url || '';

        if (!compareIds(_channel.url, _currentGroupChannelUrl)) {
          return state; // Ignore event when it is not for the current channel
        }

        if (state.messageListParams && !filterMessageListParams(state.messageListParams, _message)) {
          // Delete the message if it doesn't match to the params anymore
          return _objectSpread2(_objectSpread2({}, state), {}, {
            allMessages: state.allMessages.filter(function (m) {
              return !compareIds(m.messageId, _message === null || _message === void 0 ? void 0 : _message.messageId);
            })
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.map(function (m) {
            return compareIds(m.messageId, action.payload.message.messageId) ? action.payload.message : m;
          })
        });
      }

    case ON_MESSAGE_THREAD_INFO_UPDATED:
      {
        var _action$payload6 = action.payload,
            _channel2 = _action$payload6.channel,
            event = _action$payload6.event;
        var channelUrl = event.channelUrl,
            threadInfo = event.threadInfo,
            targetMessageId = event.targetMessageId;

        var _currentGroupChannelUrl2 = state.currentGroupChannel && state.currentGroupChannel.url || '';

        if (!compareIds(_channel2.url, _currentGroupChannelUrl2) || !compareIds(_channel2.url, channelUrl)) {
          return state; // Ignore event when it is not for the current channel
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.map(function (m) {
            if (compareIds(m.messageId, targetMessageId)) {
              // eslint-disable-next-line no-param-reassign
              m.threadInfo = threadInfo; // Upsert threadInfo to the target message
            }

            return m;
          })
        });
      }

    case RESEND_MESSAGEGE_START:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        allMessages: state.allMessages.map(function (m) {
          return compareIds(m.reqId, action.payload.reqId) ? action.payload : m;
        })
      });

    case MARK_AS_READ:
      if (((_state$currentGroupCh6 = state.currentGroupChannel) === null || _state$currentGroupCh6 === void 0 ? void 0 : _state$currentGroupCh6.url) !== ((_action$payload7 = action.payload) === null || _action$payload7 === void 0 ? void 0 : (_action$payload7$chan = _action$payload7.channel) === null || _action$payload7$chan === void 0 ? void 0 : _action$payload7$chan.url)) {
        return state;
      }

      return _objectSpread2(_objectSpread2({}, state), {}, {
        unreadSince: null
      });

    case ON_MESSAGE_DELETED:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        allMessages: state.allMessages.filter(function (m) {
          return !compareIds(m.messageId, action.payload);
        })
      });

    case ON_MESSAGE_DELETED_BY_REQ_ID:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        allMessages: state.allMessages.filter(function (m) {
          return !compareIds(m.reqId, action.payload);
        })
      });

    case SET_EMOJI_CONTAINER:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          emojiContainer: action.payload
        });
      }

    case ON_REACTION_UPDATED:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allMessages: state.allMessages.map(function (m) {
            if (compareIds(m.messageId, action.payload.messageId)) {
              if (m.applyReactionEvent && typeof m.applyReactionEvent === 'function') {
                m.applyReactionEvent(action.payload);
              }

              return m;
            }

            return m;
          })
        });
      }

    case MESSAGE_LIST_PARAMS_CHANGED:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          messageListParams: action.payload
        });
      }

    default:
      return state;
  }
}

/**
 * Handles ChannelEvents and send values to dispatcher using messagesDispatcher
 * messagesDispatcher: Dispatcher
 * sdk: sdkInstance
 * logger: loggerInstance
 * channelUrl: string
 * sdkInit: bool
 */

function useHandleChannelEvents(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      sdkInit = _ref.sdkInit,
      hasMoreNext = _ref.hasMoreNext;
  var messagesDispatcher = _ref2.messagesDispatcher,
      sdk = _ref2.sdk,
      logger = _ref2.logger,
      scrollRef = _ref2.scrollRef,
      setQuoteMessage = _ref2.setQuoteMessage;
  useEffect(function () {
    var channelUrl = currentGroupChannel && (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url);
    var messageReceiverId = uuidv4();

    if (channelUrl && sdk && sdk.ChannelHandler) {
      var ChannelHandler = new sdk.ChannelHandler();
      logger.info('Channel | useHandleChannelEvents: Setup event handler', messageReceiverId);

      ChannelHandler.onMessageReceived = function (channel, message) {
        // Do not update when hasMoreNext
        if (compareIds(channel.url, channelUrl) && !hasMoreNext) {
          var scrollToEnd = false;

          try {
            var current = scrollRef.current;
            scrollToEnd = current.offsetHeight + current.scrollTop >= current.scrollHeight;
          } catch (error) {//
          }

          logger.info('Channel | useHandleChannelEvents: onMessageReceived', message);
          messagesDispatcher({
            type: ON_MESSAGE_RECEIVED,
            payload: {
              channel: channel,
              message: message
            }
          });

          if (scrollToEnd) {
            try {
              setTimeout(function () {
                // currentGroupChannel.markAsRead();
                scrollIntoLast();
              });
            } catch (error) {
              logger.warning('Channel | onMessageReceived | scroll to end failed');
            }
          }
        }
      };
      /**
       * We need to update current channel with the channel,
       * when onReadReceiptUpdated or onDeliveryReceiptUpdated are called,
       * because cachedReadReceiptStatus and cachedDeliveryReceiptStatus properties were changed
       */


      ChannelHandler.onReadReceiptUpdated = function (channel) {
        if (compareIds(channel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onReadReceiptUpdated', channel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: channel
          });
        }
      };

      ChannelHandler.onDeliveryReceiptUpdated = function (channel) {
        if (compareIds(channel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onDeliveryReceiptUpdated', channel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: channel
          });
        }
      };

      ChannelHandler.onMessageUpdated = function (channel, message) {
        logger.info('Channel | useHandleChannelEvents: onMessageUpdated', message);
        messagesDispatcher({
          type: ON_MESSAGE_UPDATED,
          payload: {
            channel: channel,
            message: message
          }
        });
      };

      ChannelHandler.onThreadInfoUpdated = function (channel, event) {
        logger.info('Channel | useHandleChannelEvents: onThreadInfoUpdated', event);
        messagesDispatcher({
          type: ON_MESSAGE_THREAD_INFO_UPDATED,
          payload: {
            channel: channel,
            event: event
          }
        });
      };

      ChannelHandler.onMessageDeleted = function (_, messageId) {
        logger.info('Channel | useHandleChannelEvents: onMessageDeleted', messageId);
        setQuoteMessage(null);
        messagesDispatcher({
          type: ON_MESSAGE_DELETED,
          payload: messageId
        });
      };

      ChannelHandler.onReactionUpdated = function (_, reactionEvent) {
        logger.info('Channel | useHandleChannelEvents: onReactionUpdated', reactionEvent);
        messagesDispatcher({
          type: ON_REACTION_UPDATED,
          payload: reactionEvent
        });
      };

      ChannelHandler.onChannelChanged = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onChannelChanged', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onChannelFrozen = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onChannelFrozen', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onChannelUnfrozen = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onChannelUnFrozen', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onUserMuted = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onUserMuted', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onUserUnmuted = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onUserUnmuted', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onUserBanned = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onUserBanned', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      };

      ChannelHandler.onOperatorUpdated = function (groupChannel) {
        if (compareIds(groupChannel.url, channelUrl)) {
          logger.info('Channel | useHandleChannelEvents: onOperatorUpdated', groupChannel);
          messagesDispatcher({
            type: SET_CURRENT_CHANNEL,
            payload: groupChannel
          });
        }
      }; // Add this channel event handler to the SendBird object.


      sdk.addChannelHandler(messageReceiverId, ChannelHandler);
    }

    return function () {
      if (sdk && sdk.removeChannelHandler) {
        logger.info('Channel | useHandleChannelEvents: Removing message reciver handler', messageReceiverId);
        sdk.removeChannelHandler(messageReceiverId);
      }
    };
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url, sdkInit]);
}

function useSetChannel(_ref, _ref2) {
  var channelUrl = _ref.channelUrl,
      sdkInit = _ref.sdkInit;
  var messagesDispatcher = _ref2.messagesDispatcher,
      sdk = _ref2.sdk,
      logger = _ref2.logger;
  useEffect(function () {
    if (channelUrl && sdkInit && sdk && sdk.GroupChannel) {
      logger.info('Channel | useSetChannel fetching channel', channelUrl);
      sdk.GroupChannel.getChannel(channelUrl).then(function (groupChannel) {
        logger.info('Channel | useSetChannel fetched channel', groupChannel);
        messagesDispatcher({
          type: SET_CURRENT_CHANNEL,
          payload: groupChannel
        });
        logger.info('Channel: Mark as read', groupChannel); // this order is important - this mark as read should update the event handler up above
        // groupChannel.markAsRead();
      }).catch(function (e) {
        logger.warning('Channel | useSetChannel fetch channel failed', {
          channelUrl: channelUrl,
          e: e
        });
        messagesDispatcher({
          type: SET_CHANNEL_INVALID
        });
      });
      sdk.getAllEmoji(function (emojiContainer_, err) {
        if (err) {
          logger.error('Channel: Getting emojis failed', err);
          return;
        }

        logger.info('Channel: Getting emojis success', emojiContainer_);
        messagesDispatcher({
          type: SET_EMOJI_CONTAINER,
          payload: emojiContainer_
        });
      });
    }
  }, [channelUrl, sdkInit]);
}

function useInitialMessagesFetch(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      userFilledMessageListQuery = _ref.userFilledMessageListQuery,
      initialTimeStamp = _ref.initialTimeStamp,
      replyType = _ref.replyType;
  var sdk = _ref2.sdk,
      logger = _ref2.logger,
      messagesDispatcher = _ref2.messagesDispatcher;
  var channelUrl = currentGroupChannel && currentGroupChannel.url;
  useEffect(function () {
    logger.info('Channel useInitialMessagesFetch: Setup started', currentGroupChannel);
    messagesDispatcher({
      type: RESET_MESSAGES,
      payload: null
    });

    if (sdk && sdk.MessageListParams && currentGroupChannel && currentGroupChannel.getMessagesByTimestamp) {
      var messageListParams = new sdk.MessageListParams();
      messageListParams.prevResultSize = PREV_RESULT_SIZE;

      if (initialTimeStamp) {
        messageListParams.nextResultSize = NEXT_RESULT_SIZE;
      }

      messageListParams.isInclusive = true;
      messageListParams.includeReplies = false;
      messageListParams.includeReaction = true;

      if (replyType && replyType === 'QUOTE_REPLY') {
        messageListParams.includeThreadInfo = true;
        messageListParams.includeParentMessageInfo = true;
        messageListParams.replyType = 'only_reply_to_channel';
      }

      if (userFilledMessageListQuery) {
        Object.keys(userFilledMessageListQuery).forEach(function (key) {
          messageListParams[key] = userFilledMessageListQuery[key];
        });
      }

      if (replyType && replyType === 'QUOTE_REPLY' || userFilledMessageListQuery) {
        logger.info('Channel useInitialMessagesFetch: Setup messageListParams', messageListParams);
        messagesDispatcher({
          type: MESSAGE_LIST_PARAMS_CHANGED,
          payload: messageListParams
        });
      }

      logger.info('Channel: Fetching messages', {
        currentGroupChannel: currentGroupChannel,
        userFilledMessageListQuery: userFilledMessageListQuery
      });
      messagesDispatcher({
        type: FETCH_INITIAL_MESSAGES_START,
        payload: null
      });
      currentGroupChannel.getMessagesByTimestamp(initialTimeStamp || new Date().getTime(), messageListParams).then(function (messages) {
        messagesDispatcher({
          type: FETCH_INITIAL_MESSAGES_SUCCESS,
          payload: {
            currentGroupChannel: currentGroupChannel,
            messages: messages
          }
        });
      }).catch(function (error) {
        logger.error('Channel: Fetching messages failed', error);
        messagesDispatcher({
          type: FETCH_INITIAL_MESSAGES_FAILURE,
          payload: {
            currentGroupChannel: currentGroupChannel
          }
        });
      }).finally(function () {
        if (!initialTimeStamp) {
          setTimeout(function () {
            return scrollIntoLast();
          });
        }
      });
    }
  }, [channelUrl, userFilledMessageListQuery, initialTimeStamp]);
  /**
   * Note - useEffect(() => {}, [currentGroupChannel])
   * was buggy, that is why we did
   * const channelUrl = currentGroupChannel && currentGroupChannel.url;
   * useEffect(() => {}, [channelUrl])
   * Again, this hook is supposed to execute when currentGroupChannel changes
   * The 'channelUrl' here is not the same memory reference from Conversation.props
   */
}

function useHandleReconnect(_a, _b) {
  var isOnline = _a.isOnline,
      replyType = _a.replyType;
  var logger = _b.logger,
      sdk = _b.sdk,
      currentGroupChannel = _b.currentGroupChannel,
      messagesDispatcher = _b.messagesDispatcher,
      userFilledMessageListQuery = _b.userFilledMessageListQuery;
  useEffect(function () {
    var wasOffline = !isOnline;
    return function () {
      var _a; // state changed from offline to online


      if (wasOffline && (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url)) {
        logger.info('Refreshing conversation state');
        var useReaction = ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.isUsingReaction) || false;
        var messageListParams_1 = new sdk.MessageListParams();
        messageListParams_1.prevResultSize = PREV_RESULT_SIZE;
        messageListParams_1.isInclusive = true;
        messageListParams_1.includeReplies = false;
        messageListParams_1.includeReaction = useReaction;

        if (replyType && replyType === 'QUOTE_REPLY') {
          messageListParams_1.includeThreadInfo = true;
          messageListParams_1.includeParentMessageInfo = true;
          messageListParams_1.replyType = 'only_reply_to_channel';
        }

        if (userFilledMessageListQuery) {
          Object.keys(userFilledMessageListQuery).forEach(function (key) {
            messageListParams_1[key] = userFilledMessageListQuery[key];
          });
        }

        logger.info('Channel: Fetching messages', {
          currentGroupChannel: currentGroupChannel,
          userFilledMessageListQuery: userFilledMessageListQuery
        });
        messagesDispatcher({
          type: FETCH_INITIAL_MESSAGES_START,
          payload: null
        });
        sdk.GroupChannel.getChannel(currentGroupChannel.url).then(function (groupChannel) {
          var lastMessageTime = new Date().getTime();
          groupChannel.getMessagesByTimestamp(lastMessageTime, messageListParams_1).then(function (messages) {
            messagesDispatcher({
              type: FETCH_INITIAL_MESSAGES_SUCCESS,
              payload: {
                currentGroupChannel: currentGroupChannel,
                messages: messages
              }
            });
            setTimeout(function () {
              return scrollIntoLast();
            });
          }).catch(function (error) {
            logger.error('Channel: Fetching messages failed', error);
            messagesDispatcher({
              type: FETCH_INITIAL_MESSAGES_FAILURE,
              payload: {
                currentGroupChannel: currentGroupChannel
              }
            });
          }).finally(function () {// currentGroupChannel.markAsRead?.();
          });
        });
      }
    };
  }, [isOnline, replyType]);
}

function useScrollCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      oldestMessageTimeStamp = _ref.oldestMessageTimeStamp,
      userFilledMessageListQuery = _ref.userFilledMessageListQuery,
      replyType = _ref.replyType;
  var hasMorePrev = _ref2.hasMorePrev,
      logger = _ref2.logger,
      messagesDispatcher = _ref2.messagesDispatcher,
      sdk = _ref2.sdk;
  return useCallback(function (cb) {
    if (!hasMorePrev) {
      return;
    }

    var _sdk$appInfo = sdk.appInfo,
        appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
    var useReaction = appInfo.isUsingReaction || false;
    var messageListParams = new sdk.MessageListParams();
    messageListParams.prevResultSize = PREV_RESULT_SIZE;
    messageListParams.isInclusive = true;
    messageListParams.includeReplies = false;
    messageListParams.includeReaction = useReaction;

    if (replyType && replyType === 'QUOTE_REPLY') {
      messageListParams.includeThreadInfo = true;
      messageListParams.includeParentMessageInfo = true;
      messageListParams.replyType = 'only_reply_to_channel';
    }

    if (userFilledMessageListQuery) {
      Object.keys(userFilledMessageListQuery).forEach(function (key) {
        messageListParams[key] = userFilledMessageListQuery[key];
      });
    }

    logger.info('Channel: Fetching messages', {
      currentGroupChannel: currentGroupChannel,
      userFilledMessageListQuery: userFilledMessageListQuery
    });
    currentGroupChannel.getMessagesByTimestamp(oldestMessageTimeStamp || new Date().getTime(), messageListParams).then(function (messages) {
      messagesDispatcher({
        type: FETCH_PREV_MESSAGES_SUCCESS,
        payload: {
          currentGroupChannel: currentGroupChannel,
          messages: messages
        }
      });
      cb([messages, null]);
    }).catch(function (error) {
      logger.error('Channel: Fetching messages failed', error);
      messagesDispatcher({
        type: FETCH_PREV_MESSAGES_FAILURE,
        payload: {
          currentGroupChannel: currentGroupChannel
        }
      });
      cb([null, error]);
    });
  }, [currentGroupChannel, oldestMessageTimeStamp, replyType]);
}

function useScrollDownCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      latestMessageTimeStamp = _ref.latestMessageTimeStamp,
      userFilledMessageListQuery = _ref.userFilledMessageListQuery,
      hasMoreNext = _ref.hasMoreNext,
      replyType = _ref.replyType;
  var logger = _ref2.logger,
      messagesDispatcher = _ref2.messagesDispatcher,
      sdk = _ref2.sdk;
  return useCallback(function (cb) {
    if (!hasMoreNext) {
      return;
    }

    var _sdk$appInfo = sdk.appInfo,
        appInfo = _sdk$appInfo === void 0 ? {} : _sdk$appInfo;
    var useReaction = appInfo.isUsingReaction || false;
    var messageListParams = new sdk.MessageListParams();
    messageListParams.nextResultSize = NEXT_RESULT_SIZE;
    messageListParams.isInclusive = true;
    messageListParams.includeReplies = false;
    messageListParams.includeReaction = useReaction;

    if (replyType && replyType === 'QUOTE_REPLY') {
      messageListParams.includeThreadInfo = true;
      messageListParams.includeParentMessageInfo = true;
      messageListParams.replyType = 'only_reply_to_channel';
    }

    if (userFilledMessageListQuery) {
      Object.keys(userFilledMessageListQuery).forEach(function (key) {
        messageListParams[key] = userFilledMessageListQuery[key];
      });
    }

    logger.info('Channel: Fetching later messages', {
      currentGroupChannel: currentGroupChannel,
      userFilledMessageListQuery: userFilledMessageListQuery
    });
    currentGroupChannel.getMessagesByTimestamp(latestMessageTimeStamp || new Date().getTime(), messageListParams).then(function (messages) {
      messagesDispatcher({
        type: FETCH_NEXT_MESSAGES_SUCCESS,
        payload: {
          currentGroupChannel: currentGroupChannel,
          messages: messages
        }
      });
      cb([messages, null]);
    }).catch(function (error) {
      logger.error('Channel: Fetching later messages failed', error);
      messagesDispatcher({
        type: FETCH_NEXT_MESSAGES_FAILURE,
        payload: {
          currentGroupChannel: currentGroupChannel
        }
      });
      cb([null, error]);
    });
  }, [currentGroupChannel, latestMessageTimeStamp, hasMoreNext, replyType]);
}

function useDeleteMessageCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      messagesDispatcher = _ref.messagesDispatcher;
  var logger = _ref2.logger;
  return useCallback(function (message) {
    logger.info('Channel | useDeleteMessageCallback: Deleting message', message);
    var requestState = message.requestState;
    return new Promise(function (resolve, reject) {
      logger.info('Channel | useDeleteMessageCallback: Deleting message requestState:', requestState); // Message is only on local

      if (requestState === 'failed' || requestState === 'pending') {
        logger.info('Channel | useDeleteMessageCallback: Deleted message from local:', message);
        messagesDispatcher({
          type: ON_MESSAGE_DELETED_BY_REQ_ID,
          payload: message.reqId
        });
        resolve(message);
      } // Message is on server


      currentGroupChannel.deleteMessage(message, function (err) {
        logger.info('Channel | useDeleteMessageCallback: Deleting message from remote:', requestState);

        if (!err) {
          logger.info('Channel | useDeleteMessageCallback: Deleting message success!', message);
          messagesDispatcher({
            type: ON_MESSAGE_DELETED,
            payload: message.messageId
          });
          resolve(message);
        } else {
          logger.warning('Channel | useDeleteMessageCallback: Deleting message failed!', err);
          reject(err);
        }
      });
    });
  }, [currentGroupChannel, messagesDispatcher]);
}

function useUpdateMessageCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      messagesDispatcher = _ref.messagesDispatcher,
      onBeforeUpdateUserMessage = _ref.onBeforeUpdateUserMessage,
      isMentionEnabled = _ref.isMentionEnabled;
  var logger = _ref2.logger,
      pubSub = _ref2.pubSub,
      sdk = _ref2.sdk;
  return useCallback(function (props, callback) {
    var messageId = props.messageId,
        message = props.message,
        mentionedUsers = props.mentionedUsers,
        mentionTemplate = props.mentionTemplate;

    var createParamsDefault = function createParamsDefault() {
      var params = new sdk.UserMessageParams();
      params.message = message;

      if (isMentionEnabled && (mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) > 0) {
        params.mentionedUsers = mentionedUsers;
      }

      if (isMentionEnabled && mentionTemplate) {
        params.mentionedMessageTemplate = mentionTemplate;
      } else {
        params.mentionedMessageTemplate = message;
      }

      return params;
    };

    var createCustomPrams = onBeforeUpdateUserMessage && typeof onBeforeUpdateUserMessage === 'function';

    if (createCustomPrams) {
      logger.info('Channel: creating params using onBeforeUpdateUserMessage', onBeforeUpdateUserMessage);
    }

    var params = onBeforeUpdateUserMessage ? onBeforeUpdateUserMessage(message) : createParamsDefault();
    currentGroupChannel.updateUserMessage(messageId, params, function (r, e) {
      logger.info('Channel: Updating message!', params);
      var swapParams = sdk.getErrorFirstCallback();
      var msg = r;
      var err = e;

      if (swapParams) {
        msg = e;
        err = r;
      }

      if (callback) {
        callback(err, msg);
      }

      if (!err) {
        logger.info('Channel: Updating message success!', msg);
        messagesDispatcher({
          type: ON_MESSAGE_UPDATED,
          payload: {
            channel: currentGroupChannel,
            message: msg
          }
        });
        pubSub.publish(UPDATE_USER_MESSAGE, {
          message: msg,
          channel: currentGroupChannel
        });
      } else {
        logger.warning('Channel: Updating message failed!', err);
      }
    });
  }, [currentGroupChannel.url, messagesDispatcher, onBeforeUpdateUserMessage]);
}

function useResendMessageCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      messagesDispatcher = _ref.messagesDispatcher;
  var logger = _ref2.logger;
  return useCallback(function (failedMessage) {
    logger.info('Channel: Resending message has started', failedMessage);
    var messageType = failedMessage.messageType,
        file = failedMessage.file;

    if (failedMessage && typeof failedMessage.isResendable === 'function' && failedMessage.isResendable()) {
      // Move the logic setting sendingStatus to pending into the reducer
      // eslint-disable-next-line no-param-reassign
      failedMessage.requestState = 'pending'; // eslint-disable-next-line no-param-reassign

      failedMessage.sendingStatus = 'pending';
      messagesDispatcher({
        type: RESEND_MESSAGEGE_START,
        payload: failedMessage
      }); // userMessage

      if (messageType === 'user') {
        currentGroupChannel.resendUserMessage(failedMessage).then(function (message) {
          logger.info('Channel: Resending message success!', message);
          messagesDispatcher({
            type: SEND_MESSAGEGE_SUCESS,
            payload: message
          });
        }).catch(function (e) {
          logger.warning('Channel: Resending message failed!', e); // eslint-disable-next-line no-param-reassign

          failedMessage.requestState = 'failed'; // eslint-disable-next-line no-param-reassign

          failedMessage.sendingStatus = 'failed';
          messagesDispatcher({
            type: SEND_MESSAGEGE_FAILURE,
            payload: failedMessage
          });
        }); // eslint-disable-next-line no-param-reassign

        failedMessage.requestState = 'pending'; // eslint-disable-next-line no-param-reassign

        failedMessage.sendingStatus = 'pending';
        messagesDispatcher({
          type: RESEND_MESSAGEGE_START,
          payload: failedMessage
        });
        return;
      }

      if (messageType === 'file') {
        currentGroupChannel.resendFileMessage(failedMessage, file).then(function (message) {
          logger.info('Channel: Resending file message success!', message);
          messagesDispatcher({
            type: SEND_MESSAGEGE_SUCESS,
            payload: message
          });
        }).catch(function (e) {
          logger.warning('Channel: Resending file message failed!', e); // eslint-disable-next-line no-param-reassign

          failedMessage.requestState = 'failed'; // eslint-disable-next-line no-param-reassign

          failedMessage.sendingStatus = 'failed';
          messagesDispatcher({
            type: SEND_MESSAGEGE_FAILURE,
            payload: failedMessage
          });
        }); // eslint-disable-next-line no-param-reassign

        failedMessage.requestState = 'pending'; // eslint-disable-next-line no-param-reassign

        failedMessage.sendingStatus = 'pending';
        messagesDispatcher({
          type: RESEND_MESSAGEGE_START,
          payload: failedMessage
        });
      }
    } else {
      // to alert user on console
      // eslint-disable-next-line no-console
      console.error('Message is not resendable');
      logger.warning('Message is not resendable', failedMessage);
    }
  }, [currentGroupChannel, messagesDispatcher]);
}

function useSendMessageCallback(_ref, _ref2) {
  var isMentionEnabled = _ref.isMentionEnabled,
      currentGroupChannel = _ref.currentGroupChannel,
      onBeforeSendUserMessage = _ref.onBeforeSendUserMessage;
  var sdk = _ref2.sdk,
      logger = _ref2.logger,
      pubSub = _ref2.pubSub,
      messagesDispatcher = _ref2.messagesDispatcher;
  var messageInputRef = useRef(null);
  var sendMessage = useCallback(function (props) {
    var _props$quoteMessage = props.quoteMessage,
        quoteMessage = _props$quoteMessage === void 0 ? null : _props$quoteMessage,
        message = props.message,
        mentionTemplate = props.mentionTemplate,
        mentionedUsers = props.mentionedUsers;

    var createParamsDefault = function createParamsDefault() {
      var params = new sdk.UserMessageParams();
      params.message = (message === null || message === void 0 ? void 0 : message.trim()) || message; // if (isMentionEnabled && mentionedUserIds?.length > 0) {

      if (isMentionEnabled && (mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) > 0) {
        // params.mentionedUserIds = mentionedUserIds;
        params.mentionedUsers = mentionedUsers;
      } // if (isMentionEnabled && mentionTemplate && mentionedUserIds?.length > 0) {


      if (isMentionEnabled && mentionTemplate && (mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) > 0) {
        params.mentionedMessageTemplate = (mentionTemplate === null || mentionTemplate === void 0 ? void 0 : mentionTemplate.trim()) || mentionTemplate;
      }

      if (quoteMessage) {
        params.isReplyToChannel = true;
        params.parentMessageId = quoteMessage.messageId;
      }

      return params;
    };

    var createCustomPrams = onBeforeSendUserMessage && typeof onBeforeSendUserMessage === 'function';

    if (createCustomPrams) {
      logger.info('Channel: creating params using onBeforeSendUserMessage', onBeforeSendUserMessage);
    }

    var params = onBeforeSendUserMessage ? onBeforeSendUserMessage(message, quoteMessage) : createParamsDefault();
    logger.info('Channel: Sending message has started', params);
    var pendingMsg = currentGroupChannel.sendUserMessage(params, function (res, err) {
      var swapParams = sdk.getErrorFirstCallback();
      var msg = res;
      var error = err;

      if (swapParams) {
        msg = err;
        error = res;
      } // sending params instead of pending message
      // to make sure that we can resend the message once it fails


      if (error) {
        logger.warning('Channel: Sending message failed!', {
          msg: msg
        });
        messagesDispatcher({
          type: SEND_MESSAGEGE_FAILURE,
          payload: msg
        });
        return;
      }

      logger.info('Channel: Sending message success!', msg);
      messagesDispatcher({
        type: SEND_MESSAGEGE_SUCESS,
        payload: msg
      });
    });
    pubSub.publish(SEND_MESSAGE_START, {
      /* pubSub is used instead of messagesDispatcher
        to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
      message: pendingMsg,
      channel: currentGroupChannel
    });
    setTimeout(function () {
      return scrollIntoLast();
    });
  }, [currentGroupChannel, onBeforeSendUserMessage]);
  return [messageInputRef, sendMessage];
}

function useSendFileMessageCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel,
      onBeforeSendFileMessage = _ref.onBeforeSendFileMessage,
      _ref$imageCompression = _ref.imageCompression,
      imageCompression = _ref$imageCompression === void 0 ? {} : _ref$imageCompression;
  var sdk = _ref2.sdk,
      logger = _ref2.logger,
      pubSub = _ref2.pubSub,
      messagesDispatcher = _ref2.messagesDispatcher;
  var sendMessage = useCallback(function (file) {
    var quoteMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var compressionRate = imageCompression.compressionRate,
        resizingWidth = imageCompression.resizingWidth,
        resizingHeight = imageCompression.resizingHeight;
    var createCustomParams = onBeforeSendFileMessage && typeof onBeforeSendFileMessage === 'function';
    var compressibleFileType = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg';
    var compressibleRatio = compressionRate > 0 && compressionRate < 1; // pxToNumber returns null if values are invalid

    var compressibleDiamensions = pxToNumber(resizingWidth) || pxToNumber(resizingHeight);
    var canCompressImage = compressibleFileType && (compressibleRatio || compressibleDiamensions);

    var createParamsDefault = function createParamsDefault(file_) {
      var params = new sdk.FileMessageParams();
      params.file = file_;

      if (quoteMessage) {
        params.isReplyToChannel = true;
        params.parentMessageId = quoteMessage.messageId;
      }

      return params;
    };

    if (canCompressImage) {
      // Using image compression
      try {
        var image = document.createElement('img');
        image.src = URL.createObjectURL(file);

        image.onload = function () {
          URL.revokeObjectURL(image.src);
          var canvas = document.createElement('canvas');
          var imageWdith = image.naturalWidth || image.width;
          var imageHeight = image.naturalHeight || image.height;
          var targetWidth = pxToNumber(resizingWidth) || imageWdith;
          var targetHeight = pxToNumber(resizingHeight) || imageHeight; // In canvas.toBlob(callback, mimeType, qualityArgument)
          // qualityArgument doesnt work
          // so in case compressibleDiamensions are not present, we use ratio

          if (file.type === 'image/png' && !compressibleDiamensions) {
            targetWidth *= compressionRate;
            targetHeight *= compressionRate;
          }

          canvas.width = targetWidth;
          canvas.height = targetHeight;
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0, targetWidth, targetHeight);
          context.canvas.toBlob(function (newImageBlob) {
            var compressedFile = new File([newImageBlob], file.name, {
              type: file.type
            });

            if (createCustomParams) {
              logger.info('Channel: Creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
            }

            var params = createCustomParams ? onBeforeSendFileMessage(compressedFile, quoteMessage) : createParamsDefault(compressedFile);
            logger.info('Channel: Uploading file message start!', params);
            var pendingMessage = currentGroupChannel.sendFileMessage(params, function (response, err) {
              var swapParams = sdk.getErrorFirstCallback();

              var _ref3 = swapParams ? [err, response] : [response, err],
                  _ref4 = _slicedToArray(_ref3, 2),
                  message = _ref4[0],
                  error = _ref4[1];

              if (error) {
                // sending params instead of pending message
                // to make sure that we can resend the message once it fails
                logger.error('Channel: Sending file message failed!', {
                  message: message,
                  error: error
                });
                message.localUrl = URL.createObjectURL(compressedFile);
                message.file = compressedFile;
                messagesDispatcher({
                  type: SEND_MESSAGEGE_FAILURE,
                  payload: message
                });
                return;
              }

              logger.info('Channel: Sending file message success!', message);
              messagesDispatcher({
                type: SEND_MESSAGEGE_SUCESS,
                payload: message
              });
            });
            pubSub.publish(SEND_MESSAGE_START, {
              /* pubSub is used instead of messagesDispatcher
                to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
              message: _objectSpread2(_objectSpread2({}, pendingMessage), {}, {
                url: URL.createObjectURL(compressedFile),
                // pending thumbnail message seems to be failed
                requestState: 'pending'
              }),
              channel: currentGroupChannel
            });
            setTimeout(function () {
              return scrollIntoLast();
            }, 1000);
          }, file.type, compressionRate);
        };
      } catch (error) {
        logger.error('Channel: Sending file message failed!', error);
      }
    } else {
      // Not using image compression
      if (createCustomParams) {
        logger.info('Channel: creating params using onBeforeSendFileMessage', onBeforeSendFileMessage);
      }

      var params = onBeforeSendFileMessage ? onBeforeSendFileMessage(file, quoteMessage) : createParamsDefault(file);
      logger.info('Channel: Uploading file message start!', params);
      var pendingMsg = currentGroupChannel.sendFileMessage(params, function (response, err) {
        var swapParams = sdk.getErrorFirstCallback();

        var _ref5 = swapParams ? [err, response] : [response, err],
            _ref6 = _slicedToArray(_ref5, 2),
            message = _ref6[0],
            error = _ref6[1];

        if (error) {
          // sending params instead of pending message
          // to make sure that we can resend the message once it fails
          logger.error('Channel: Sending file message failed!', {
            message: message,
            error: error
          });
          message.localUrl = URL.createObjectURL(file);
          message.file = file;
          messagesDispatcher({
            type: SEND_MESSAGEGE_FAILURE,
            payload: message
          });
          return;
        }

        logger.info('Channel: Sending message success!', message);
        messagesDispatcher({
          type: SEND_MESSAGEGE_SUCESS,
          payload: message
        });
      });
      pubSub.publish(SEND_MESSAGE_START, {
        /* pubSub is used instead of messagesDispatcher
          to avoid redundantly calling `messageActionTypes.SEND_MESSAGEGE_START` */
        message: _objectSpread2(_objectSpread2({}, pendingMsg), {}, {
          url: URL.createObjectURL(file),
          // pending thumbnail message seems to be failed
          requestState: 'pending'
        }),
        channel: currentGroupChannel
      });
      setTimeout(function () {
        return scrollIntoLast();
      }, 1000);
    }
  }, [currentGroupChannel, onBeforeSendFileMessage, imageCompression]);
  return [sendMessage];
}

function useMemoizedEmojiListItems(_ref, _ref2) {
  var emojiContainer = _ref.emojiContainer,
      toggleReaction = _ref.toggleReaction;
  var useReaction = _ref2.useReaction,
      logger = _ref2.logger,
      userId = _ref2.userId,
      emojiAllList = _ref2.emojiAllList;

  /* eslint-disable react/prop-types */
  return useMemo(function () {
    return function (_ref3) {
      var parentRef = _ref3.parentRef,
          parentContainRef = _ref3.parentContainRef,
          message = _ref3.message,
          closeDropdown = _ref3.closeDropdown,
          _ref3$spaceFromTrigge = _ref3.spaceFromTrigger,
          spaceFromTrigger = _ref3$spaceFromTrigge === void 0 ? {} : _ref3$spaceFromTrigge;

      if (!useReaction || !(parentRef || parentContainRef || message || closeDropdown)) {
        logger.warning('Channel: Invalid Params in memoizedEmojiListItems');
        return null;
      }

      return /*#__PURE__*/React__default.createElement(EmojiListItems, {
        parentRef: parentRef,
        parentContainRef: parentContainRef,
        closeDropdown: closeDropdown,
        spaceFromTrigger: spaceFromTrigger
      }, emojiAllList.map(function (emoji) {
        var reactedReaction = message.reactions.filter(function (reaction) {
          return reaction.key === emoji.key;
        })[0];
        var isReacted = reactedReaction ? !(reactedReaction.userIds.indexOf(userId) < 0) : false;
        return /*#__PURE__*/React__default.createElement(ReactionButton, {
          key: emoji.key,
          width: "36px",
          height: "36px",
          selected: isReacted,
          onClick: function onClick() {
            closeDropdown();
            toggleReaction(message, emoji.key, isReacted);
          }
        }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
          url: emoji.url,
          width: "28px",
          height: "28px",
          defaultComponent: /*#__PURE__*/React__default.createElement(Icon, {
            width: "28px",
            height: "28px",
            type: IconTypes.QUESTION
          })
        }));
      }));
    };
  }, [emojiContainer, toggleReaction]);
}

function useToggleReactionCallback(_ref, _ref2) {
  var currentGroupChannel = _ref.currentGroupChannel;
  var logger = _ref2.logger;
  return useCallback(function (message, key, isReacted) {
    if (isReacted) {
      currentGroupChannel.deleteReaction(message, key).then(function (res) {
        logger.info('Delete reaction success', res);
      }).catch(function (err) {
        logger.warning('Delete reaction failed', err);
      });
      return;
    }

    currentGroupChannel.addReaction(message, key).then(function (res) {
      logger.info('Add reaction success', res);
    }).catch(function (err) {
      logger.warning('Add reaction failed', err);
    });
  }, [currentGroupChannel]);
}

function useScrollToMessage(_a, _b) {
  var setInitialTimeStamp = _a.setInitialTimeStamp,
      setAnimatedMessageId = _a.setAnimatedMessageId,
      allMessages = _a.allMessages;
  var logger = _b.logger;
  return useCallback(function (createdAt, messageId) {
    var isPresent = allMessages.find(function (m) {
      return m.messageId === messageId;
    });
    setAnimatedMessageId(null);
    setTimeout(function () {
      if (isPresent) {
        logger.info('Channel: scroll to message - message is present');
        setAnimatedMessageId(messageId);
      } else {
        logger.info('Channel: scroll to message - fetching older messages');
        setInitialTimeStamp(null);
        setInitialTimeStamp(createdAt);
        setAnimatedMessageId(messageId);
      }
    });
  }, [setInitialTimeStamp, setAnimatedMessageId, allMessages]);
}

var ChannelContext = /*#__PURE__*/React__default.createContext(undefined);

var ChannelProvider = function ChannelProvider(props) {
  var _a, _b, _c, _d;

  var channelUrl = props.channelUrl,
      children = props.children,
      useMessageGrouping = props.useMessageGrouping,
      useReaction = props.useReaction,
      showSearchIcon = props.showSearchIcon,
      highlightedMessage = props.highlightedMessage,
      startingPoint = props.startingPoint,
      onBeforeSendUserMessage = props.onBeforeSendUserMessage,
      onBeforeSendFileMessage = props.onBeforeSendFileMessage,
      onBeforeUpdateUserMessage = props.onBeforeUpdateUserMessage,
      onChatHeaderActionClick = props.onChatHeaderActionClick,
      onSearchClick = props.onSearchClick,
      replyType = props.replyType,
      queries = props.queries;
  var globalStore = useSendbirdStateContext();
  var config = globalStore.config;
  var pubSub = config.pubSub,
      logger = config.logger,
      userId = config.userId,
      isOnline = config.isOnline,
      imageCompression = config.imageCompression,
      isMentionEnabled = config.isMentionEnabled;
  var sdk = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var sdkInit = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.sdkStore) === null || _d === void 0 ? void 0 : _d.initialized;

  var _e = useState(startingPoint),
      initialTimeStamp = _e[0],
      setInitialTimeStamp = _e[1];

  useEffect(function () {
    setInitialTimeStamp(startingPoint);
  }, [startingPoint, channelUrl]);

  var _f = useState(null),
      animatedMessageId = _f[0],
      setAnimatedMessageId = _f[1];

  var _g = useState(highlightedMessage),
      highLightedMessageId = _g[0],
      setHighLightedMessageId = _g[1];

  useEffect(function () {
    setHighLightedMessageId(highlightedMessage);
  }, [highlightedMessage]);
  var userFilledMessageListQuery = queries === null || queries === void 0 ? void 0 : queries.messageListParams;

  var _h = useState(null),
      quoteMessage = _h[0],
      setQuoteMessage = _h[1];

  var _j = useReducer(reducer, messagesInitialState),
      messagesStore = _j[0],
      messagesDispatcher = _j[1];

  var scrollRef = useRef(null);
  var allMessages = messagesStore.allMessages,
      loading = messagesStore.loading,
      initialized = messagesStore.initialized,
      unreadSince = messagesStore.unreadSince,
      isInvalid = messagesStore.isInvalid,
      currentGroupChannel = messagesStore.currentGroupChannel,
      hasMorePrev = messagesStore.hasMorePrev,
      oldestMessageTimeStamp = messagesStore.oldestMessageTimeStamp,
      hasMoreNext = messagesStore.hasMoreNext,
      latestMessageTimeStamp = messagesStore.latestMessageTimeStamp,
      emojiContainer = messagesStore.emojiContainer,
      readStatus = messagesStore.readStatus;
  var isBroadcast = currentGroupChannel.isBroadcast,
      isSuper = currentGroupChannel.isSuper;
  var appInfo = sdk.appInfo;
  var usingReaction = (appInfo === null || appInfo === void 0 ? void 0 : appInfo.isUsingReaction) && !isBroadcast && !isSuper && useReaction // TODO: Make useReaction independent from appInfo.isUsingReaction
  ;
  var emojiAllMap = useMemo(function () {
    return usingReaction ? getAllEmojisMapFromEmojiContainer(emojiContainer) : new Map();
  }, [emojiContainer]);
  var emojiAllList = useMemo(function () {
    return usingReaction ? getAllEmojisFromEmojiContainer(emojiContainer) : [];
  }, [emojiContainer]);
  var nicknamesMap = useMemo(function () {
    return usingReaction ? getNicknamesMapFromMembers(currentGroupChannel.members) : new Map();
  }, [currentGroupChannel.members]); // Scrollup is default scroll for channel

  var onScrollCallback = useScrollCallback({
    currentGroupChannel: currentGroupChannel,
    oldestMessageTimeStamp: oldestMessageTimeStamp,
    userFilledMessageListQuery: userFilledMessageListQuery,
    replyType: replyType
  }, {
    hasMorePrev: hasMorePrev,
    logger: logger,
    messagesDispatcher: messagesDispatcher,
    sdk: sdk
  });
  var scrollToMessage = useScrollToMessage({
    setInitialTimeStamp: setInitialTimeStamp,
    setAnimatedMessageId: setAnimatedMessageId,
    allMessages: allMessages
  }, {
    logger: logger
  }); // onScrollDownCallback is added for navigation to different timestamps on messageSearch
  // hasMorePrev, onScrollCallback -> scroll up(default behavior)
  // hasMoreNext, onScrollDownCallback -> scroll down

  var onScrollDownCallback = useScrollDownCallback({
    currentGroupChannel: currentGroupChannel,
    latestMessageTimeStamp: latestMessageTimeStamp,
    userFilledMessageListQuery: userFilledMessageListQuery,
    hasMoreNext: hasMoreNext,
    replyType: replyType
  }, {
    logger: logger,
    messagesDispatcher: messagesDispatcher,
    sdk: sdk
  });
  var toggleReaction = useToggleReactionCallback({
    currentGroupChannel: currentGroupChannel
  }, {
    logger: logger
  });
  var memoizedEmojiListItems = useMemoizedEmojiListItems({
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction
  }, {
    useReaction: usingReaction,
    logger: logger,
    userId: userId,
    emojiAllList: emojiAllList
  }); // to create message-datasource
  // this hook sets currentGroupChannel asynchronously

  useSetChannel({
    channelUrl: channelUrl,
    sdkInit: sdkInit
  }, {
    messagesDispatcher: messagesDispatcher,
    sdk: sdk,
    logger: logger
  }); // to set quote message as null

  useEffect(function () {
    setQuoteMessage(null);
  }, [channelUrl]); // Hook to handle ChannelEvents and send values to useReducer using messagesDispatcher

  useHandleChannelEvents({
    currentGroupChannel: currentGroupChannel,
    sdkInit: sdkInit,
    hasMoreNext: hasMoreNext
  }, {
    messagesDispatcher: messagesDispatcher,
    sdk: sdk,
    logger: logger,
    scrollRef: scrollRef,
    setQuoteMessage: setQuoteMessage
  }); // hook that fetches messages when channel changes
  // to be clear here useGetChannel sets currentGroupChannel
  // and useInitialMessagesFetch executes when currentGroupChannel changes
  // p.s This one executes on initialTimeStamp change too

  useInitialMessagesFetch({
    currentGroupChannel: currentGroupChannel,
    userFilledMessageListQuery: userFilledMessageListQuery,
    initialTimeStamp: initialTimeStamp,
    latestMessageTimeStamp: latestMessageTimeStamp,
    replyType: replyType
  }, {
    sdk: sdk,
    logger: logger,
    messagesDispatcher: messagesDispatcher
  }); // handles API calls from withSendbird

  useEffect(function () {
    var subScriber = pubSubHandler(channelUrl, pubSub, messagesDispatcher);
    return function () {
      pubSubHandleRemover(subScriber);
    };
  }, [channelUrl, sdkInit]); // handling connection breaks

  useHandleReconnect({
    isOnline: isOnline,
    replyType: replyType
  }, {
    logger: logger,
    sdk: sdk,
    currentGroupChannel: currentGroupChannel,
    messagesDispatcher: messagesDispatcher,
    userFilledMessageListQuery: userFilledMessageListQuery
  }); // callbacks for Message CURD actions

  var deleteMessage = useDeleteMessageCallback({
    currentGroupChannel: currentGroupChannel,
    messagesDispatcher: messagesDispatcher
  }, {
    logger: logger
  });
  var updateMessage = useUpdateMessageCallback({
    currentGroupChannel: currentGroupChannel,
    messagesDispatcher: messagesDispatcher,
    onBeforeUpdateUserMessage: onBeforeUpdateUserMessage,
    isMentionEnabled: isMentionEnabled
  }, {
    logger: logger,
    sdk: sdk,
    pubSub: pubSub
  });
  var resendMessage = useResendMessageCallback({
    currentGroupChannel: currentGroupChannel,
    messagesDispatcher: messagesDispatcher
  }, {
    logger: logger
  });

  var _k = useSendMessageCallback({
    currentGroupChannel: currentGroupChannel,
    onBeforeSendUserMessage: onBeforeSendUserMessage,
    isMentionEnabled: isMentionEnabled
  }, {
    sdk: sdk,
    logger: logger,
    pubSub: pubSub,
    messagesDispatcher: messagesDispatcher
  }),
      messageInputRef = _k[0],
      sendMessage = _k[1];

  var sendFileMessage = useSendFileMessageCallback({
    currentGroupChannel: currentGroupChannel,
    onBeforeSendFileMessage: onBeforeSendFileMessage,
    imageCompression: imageCompression
  }, {
    sdk: sdk,
    logger: logger,
    pubSub: pubSub,
    messagesDispatcher: messagesDispatcher
  })[0];
  return /*#__PURE__*/React__default.createElement(ChannelContext.Provider, {
    value: {
      // props
      channelUrl: channelUrl,
      useMessageGrouping: useMessageGrouping,
      useReaction: usingReaction,
      showSearchIcon: showSearchIcon,
      highlightedMessage: highlightedMessage,
      startingPoint: startingPoint,
      onBeforeSendUserMessage: onBeforeSendUserMessage,
      onBeforeSendFileMessage: onBeforeSendFileMessage,
      onBeforeUpdateUserMessage: onBeforeUpdateUserMessage,
      onChatHeaderActionClick: onChatHeaderActionClick,
      onSearchClick: onSearchClick,
      replyType: replyType,
      queries: queries,
      // messagesStore
      allMessages: allMessages,
      loading: loading,
      initialized: initialized,
      unreadSince: unreadSince,
      isInvalid: isInvalid,
      currentGroupChannel: currentGroupChannel,
      hasMorePrev: hasMorePrev,
      hasMoreNext: hasMoreNext,
      oldestMessageTimeStamp: oldestMessageTimeStamp,
      latestMessageTimeStamp: latestMessageTimeStamp,
      emojiContainer: emojiContainer,
      readStatus: readStatus,
      // utils
      scrollToMessage: scrollToMessage,
      quoteMessage: quoteMessage,
      setQuoteMessage: setQuoteMessage,
      deleteMessage: deleteMessage,
      updateMessage: updateMessage,
      resendMessage: resendMessage,
      messageInputRef: messageInputRef,
      sendMessage: sendMessage,
      sendFileMessage: sendFileMessage,
      initialTimeStamp: initialTimeStamp,
      messageActionTypes: messageActionTypes,
      messagesDispatcher: messagesDispatcher,
      setInitialTimeStamp: setInitialTimeStamp,
      setAnimatedMessageId: setAnimatedMessageId,
      setHighLightedMessageId: setHighLightedMessageId,
      animatedMessageId: animatedMessageId,
      highLightedMessageId: highLightedMessageId,
      nicknamesMap: nicknamesMap,
      emojiAllMap: emojiAllMap,
      onScrollCallback: onScrollCallback,
      onScrollDownCallback: onScrollDownCallback,
      memoizedEmojiListItems: memoizedEmojiListItems,
      scrollRef: scrollRef,
      toggleReaction: toggleReaction
    }
  }, /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, children));
};

var useChannel = function useChannel() {
  return React__default.useContext(ChannelContext);
};

export { ChannelProvider as C, MARK_AS_READ as M, isDisabledBecauseFrozen as a, isDisabledBecauseMuted as b, compareMessagesForGrouping as c, isOperator as d, isAboutSame as i, useChannel as u };
//# sourceMappingURL=ChannelProvider-94aeef2f.js.map
