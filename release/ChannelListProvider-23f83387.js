import { a as __spreadArray, _ as __assign } from './tslib.es6-cee0628b.js';
import React__default, { useReducer, useState, useEffect, useMemo, useContext } from 'react';
import { C as CREATE_CHANNEL$1, U as UPDATE_USER_MESSAGE, L as LEAVE_CHANNEL, b as SEND_MESSAGE_START } from './topics-af18f6dc.js';
import { u as uuidv4 } from './uuid-b12b05c7.js';
import { n as noop } from './utils-a66b9c45.js';
import { U as UserProfileProvider } from './UserProfileContext-9b9928cf.js';
import useSendbirdStateContext from './useSendbirdStateContext.js';
import { _ as _objectSpread2, b as _toConsumableArray } from './_rollupPluginBabelHelpers-0ec97672.js';
import { f as filterChannelListParams, g as getChannelsWithUpsertedChannel } from './index-a1462526.js';

var RESET_CHANNEL_LIST = 'RESET_CHANNEL_LIST';
var CREATE_CHANNEL = 'CREATE_CHANNEL';
var LEAVE_CHANNEL_SUCCESS = 'LEAVE_CHANNEL_SUCCESS';
var SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
var SHOW_CHANNEL_SETTINGS = 'SHOW_CHANNEL_SETTINGS';
var HIDE_CHANNEL_SETTINGS = 'HIDE_CHANNEL_SETTINGS';
var FETCH_CHANNELS_START = 'FETCH_CHANNELS_START';
var FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS';
var FETCH_CHANNELS_FAILURE = 'FETCH_CHANNELS_FAILURE';
var INIT_CHANNELS_START = 'INIT_CHANNELS_START';
var INIT_CHANNELS_SUCCESS = 'INIT_CHANNELS_SUCCESS';
var INIT_CHANNELS_FAILURE = 'INIT_CHANNELS_FAILURE';
var ON_USER_JOINED = 'ON_USER_JOINED';
var ON_CHANNEL_DELETED = 'ON_CHANNEL_DELETED';
var ON_LAST_MESSAGE_UPDATED = 'ON_LAST_MESSAGE_UPDATED';
var ON_USER_LEFT = 'ON_USER_LEFT';
var ON_CHANNEL_CHANGED = 'ON_CHANNEL_CHANGED';
var ON_CHANNEL_ARCHIVED = 'ON_CHANNEL_ARCHIVED';
var ON_CHANNEL_FROZEN = 'ON_CHANNEL_FROZEN';
var ON_CHANNEL_UNFROZEN = 'ON_CHANNEL_UNFROZEN';
var ON_READ_RECEIPT_UPDATED = 'ON_READ_RECEIPT_UPDATED';
var ON_DELIVERY_RECEIPT_UPDATED = 'ON_DELIVERY_RECEIPT_UPDATED';
var CHANNEL_REPLACED_TO_TOP = 'CHANNEL_REPLACED_TO_TOP';
var CHANNEL_LIST_PARAMS_UPDATED = 'CHANNEL_LIST_PARAMS_UPDATED';

var DELIVERY_RECIPT = 'delivery_receipt';

var createEventHandler = function createEventHandler(_ref) {
  var sdk = _ref.sdk,
      sdkChannelHandlerId = _ref.sdkChannelHandlerId,
      channelListDispatcher = _ref.channelListDispatcher,
      logger = _ref.logger;
  var ChannelHandler = new sdk.ChannelHandler();

  ChannelHandler.onChannelChanged = function (channel) {
    logger.info('ChannelList: onChannelChanged', channel);
    channelListDispatcher({
      type: ON_CHANNEL_CHANGED,
      payload: channel
    });
  };

  ChannelHandler.onChannelDeleted = function (channelUrl) {
    logger.info('ChannelList: onChannelDeleted', channelUrl);
    channelListDispatcher({
      type: ON_CHANNEL_DELETED,
      payload: channelUrl
    });
  };

  ChannelHandler.onUserJoined = function (channel) {
    logger.info('ChannelList: onUserJoined', channel);

    if (channel.lastMessage) {
      channelListDispatcher({
        type: ON_USER_JOINED,
        payload: channel
      });
    }
  };

  ChannelHandler.onUserBanned = function (channel, user) {
    var currentUser = sdk.currentUser;
    logger.info('Channel | useHandleChannelEvents: onUserBanned', channel);

    if (user.userId === currentUser.userId) {
      channelListDispatcher({
        type: ON_USER_LEFT,
        payload: {
          channel: channel,
          isMe: true
        }
      });
    } else {
      channelListDispatcher({
        type: ON_USER_LEFT,
        payload: {
          channel: channel,
          isMe: false
        }
      });
    }
  };

  ChannelHandler.onUserLeft = function (channel, leftUser) {
    var currentUser = sdk.currentUser;
    var isMe = currentUser.userId === leftUser.userId;
    logger.info('ChannelList: onUserLeft', channel);
    channelListDispatcher({
      type: ON_USER_LEFT,
      payload: {
        channel: channel,
        isMe: isMe
      }
    });
  };

  ChannelHandler.onReadStatus = function (channel) {
    logger.info('ChannelList: onReadStatus', channel);
    channelListDispatcher({
      type: ON_READ_RECEIPT_UPDATED,
      payload: channel
    });
  };

  ChannelHandler.onDeliveryReceiptUpdated = function (channel) {
    logger.info('ChannelList: onDeliveryReceiptUpdated', channel);

    if (channel.lastMessage) {
      channelListDispatcher({
        type: ON_DELIVERY_RECEIPT_UPDATED,
        payload: channel
      });
    }
  };

  ChannelHandler.onMessageUpdated = function (channel, message) {
    if (channel.lastMessage.isEqual(message)) {
      logger.info('ChannelList: onMessageUpdated', channel);
      channelListDispatcher({
        type: ON_LAST_MESSAGE_UPDATED,
        payload: channel
      });
    }
  };

  ChannelHandler.onChannelHidden = function (channel) {
    logger.info('ChannelList: onChannelHidden', channel);
    channelListDispatcher({
      type: ON_CHANNEL_ARCHIVED,
      payload: channel
    });
  };

  ChannelHandler.onChannelFrozen = function (channel) {
    logger.info('ChannelList: onChannelFrozen', channel);
    channelListDispatcher({
      type: ON_CHANNEL_FROZEN,
      payload: channel
    });
  };

  ChannelHandler.onChannelUnfrozen = function (channel) {
    logger.info('ChannelList: onChannelUnfrozen', channel);
    channelListDispatcher({
      type: ON_CHANNEL_UNFROZEN,
      payload: channel
    });
  };

  logger.info('ChannelList: Added channelHandler');
  sdk.addChannelHandler(sdkChannelHandlerId, ChannelHandler);
};

var createChannelListQuery = function createChannelListQuery(_ref2) {
  var sdk = _ref2.sdk,
      _ref2$userFilledChann = _ref2.userFilledChannelListQuery,
      userFilledChannelListQuery = _ref2$userFilledChann === void 0 ? {} : _ref2$userFilledChann;
  var channelListQuery = sdk.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = false;
  channelListQuery.order = 'latest_last_message'; // 'chronological', 'latest_last_message', 'channel_name_alphabetical', and 'metadata_value_alphabetical'

  channelListQuery.limit = 20; // The value of pagination limit could be set up to 100.

  if (userFilledChannelListQuery) {
    Object.keys(userFilledChannelListQuery).forEach(function (key) {
      channelListQuery[key] = userFilledChannelListQuery[key];
    });
  }

  return channelListQuery;
};
/**
 * Setup event listener
 * create channel source query
 * addloading screen
 */


function setupChannelList(_ref3) {
  var sdk = _ref3.sdk,
      sdkChannelHandlerId = _ref3.sdkChannelHandlerId,
      channelListDispatcher = _ref3.channelListDispatcher,
      setChannelSource = _ref3.setChannelSource,
      onChannelSelect = _ref3.onChannelSelect,
      userFilledChannelListQuery = _ref3.userFilledChannelListQuery,
      logger = _ref3.logger,
      sortChannelList = _ref3.sortChannelList,
      disableAutoSelect = _ref3.disableAutoSelect;

  if (sdk && sdk.ChannelHandler) {
    createEventHandler({
      sdk: sdk,
      channelListDispatcher: channelListDispatcher,
      sdkChannelHandlerId: sdkChannelHandlerId,
      logger: logger
    });
  } else {
    logger.console.warning('ChannelList - createEventHandler: sdk or sdk.ChannelHandler does not exist', sdk);
  }

  logger.info('ChannelList - creating query', {
    userFilledChannelListQuery: userFilledChannelListQuery
  });
  var channelListQuery = createChannelListQuery({
    sdk: sdk,
    userFilledChannelListQuery: userFilledChannelListQuery
  });
  logger.info('ChannelList - created query', channelListQuery);
  setChannelSource(channelListQuery);
  channelListDispatcher({
    type: INIT_CHANNELS_START
  });

  if (userFilledChannelListQuery) {
    logger.info('ChannelList - setting up channelListQuery', channelListQuery);
    channelListDispatcher({
      type: CHANNEL_LIST_PARAMS_UPDATED,
      payload: {
        channelListQuery: channelListQuery,
        currentUserId: sdk && sdk.currentUser && sdk.currentUser.userId
      }
    });
  }

  logger.info('ChannelList - fetching channels');

  if (channelListQuery.hasNext) {
    channelListQuery.next(function (response, error) {
      var _sdk$appInfo, _sdk$appInfo$premiumF;

      var swapParams = sdk.getErrorFirstCallback();
      var channelList = response;
      var err = error;

      if (swapParams) {
        channelList = error;
        err = response;
      }

      logger.info('ChannelList - fetched channels', channelList);

      if (err) {
        logger.error('ChannelList - couldnt fetch channels', err);
        channelListDispatcher({
          type: INIT_CHANNELS_FAILURE
        });
        return;
      } // select first channel


      logger.info('ChannelList - highlight channel', channelList[0]);
      var sortedChannelList = channelList;

      if (sortChannelList && typeof sortChannelList === 'function') {
        sortedChannelList = sortChannelList(channelList);
        logger.info('ChannelList - channel list sorted', sortedChannelList);
      }

      if (!disableAutoSelect) {
        onChannelSelect(sortedChannelList[0]);
      }

      channelListDispatcher({
        type: INIT_CHANNELS_SUCCESS,
        payload: {
          channelList: sortedChannelList,
          disableAutoSelect: disableAutoSelect
        }
      });
      var canSetMarkAsDelivered = sdk === null || sdk === void 0 ? void 0 : (_sdk$appInfo = sdk.appInfo) === null || _sdk$appInfo === void 0 ? void 0 : (_sdk$appInfo$premiumF = _sdk$appInfo.premiumFeatureList) === null || _sdk$appInfo$premiumF === void 0 ? void 0 : _sdk$appInfo$premiumF.find(function (feature) {
        return feature === DELIVERY_RECIPT;
      });

      if (canSetMarkAsDelivered) {
        var _channelList;

        logger.info('ChannelList: Marking all channels as read'); // eslint-disable-next-line no-unused-expressions

        (_channelList = channelList) === null || _channelList === void 0 ? void 0 : _channelList.forEach(function (c, idx) {
          // Plan-based rate limits - minimum limit is 5 requests per second
          setTimeout(function () {
            // eslint-disable-next-line no-unused-expressions
            sdk === null || sdk === void 0 ? void 0 : sdk.markAsDelivered(c === null || c === void 0 ? void 0 : c.url);
          }, 300 * idx);
        });
      }
    });
  } else {
    logger.warning('ChannelList - there are no more channels');
  }
}

var pubSubHandleRemover = function pubSubHandleRemover(subscriber) {
  subscriber.forEach(function (s) {
    try {
      s.remove();
    } catch (_unused) {//
    }
  });
};
var pubSubHandler = function pubSubHandler(pubSub, channelListDispatcher) {
  var subScriber = new Map();
  if (!pubSub) return subScriber;
  subScriber.set(CREATE_CHANNEL$1, pubSub.subscribe(CREATE_CHANNEL$1, function (msg) {
    var channel = msg.channel;
    channelListDispatcher({
      type: 'CREATE_CHANNEL',
      payload: channel
    });
  }));
  subScriber.set(UPDATE_USER_MESSAGE, pubSub.subscribe(UPDATE_USER_MESSAGE, function (msg) {
    var _updatedChannel$lastM;

    var channel = msg.channel,
        message = msg.message;
    var updatedChannel = channel;

    if ((updatedChannel === null || updatedChannel === void 0 ? void 0 : (_updatedChannel$lastM = updatedChannel.lastMessage) === null || _updatedChannel$lastM === void 0 ? void 0 : _updatedChannel$lastM.messageId) === message.messageId) {
      updatedChannel.lastMessage = message;
    }

    if (channel) {
      channelListDispatcher({
        type: ON_LAST_MESSAGE_UPDATED,
        payload: updatedChannel
      });
    }
  }));
  subScriber.set(LEAVE_CHANNEL, pubSub.subscribe(LEAVE_CHANNEL, function (msg) {
    var channel = msg.channel;
    channelListDispatcher({
      type: LEAVE_CHANNEL_SUCCESS,
      payload: channel.url
    });
  }));
  subScriber.set(SEND_MESSAGE_START, pubSub.subscribe(SEND_MESSAGE_START, function (msg) {
    var channel = msg.channel;
    channelListDispatcher({
      type: CHANNEL_REPLACED_TO_TOP,
      payload: channel
    });
  }));
  return subScriber;
};

var channelListInitialState = {
  // we might not need this initialized state -> should remove
  initialized: false,
  loading: false,
  allChannels: [],
  currentChannel: null,
  showSettings: false,
  channelListQuery: null,
  currentUserId: '',
  disableAutoSelect: false
};

function reducer(state, action) {
  switch (action.type) {
    case INIT_CHANNELS_START:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        loading: true
      });

    case RESET_CHANNEL_LIST:
      return channelListInitialState;

    case INIT_CHANNELS_SUCCESS:
      {
        var _action$payload = action.payload,
            channelList = _action$payload.channelList,
            disableAutoSelect = _action$payload.disableAutoSelect;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          initialized: true,
          loading: false,
          allChannels: channelList,
          disableAutoSelect: disableAutoSelect,
          currentChannel: !disableAutoSelect && channelList && channelList.length && channelList.length > 0 ? channelList[0] : null
        });
      }

    case FETCH_CHANNELS_SUCCESS:
      {
        var currentChannels = state.allChannels.map(function (c) {
          return c.url;
        });
        var filteredChannels = action.payload.filter(function (_ref) {
          var url = _ref.url;
          return !currentChannels.find(function (c) {
            return c === url;
          });
        });
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: [].concat(_toConsumableArray(state.allChannels), _toConsumableArray(filteredChannels))
        });
      }

    case CREATE_CHANNEL:
      {
        var channel = action.payload;

        if (state.channelListQuery) {
          if (filterChannelListParams(state.channelListQuery, channel, state.currentUserId)) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: getChannelsWithUpsertedChannel(state.allChannels, channel)
            });
          }

          return _objectSpread2(_objectSpread2({}, state), {}, {
            currentChannel: channel
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: [channel].concat(_toConsumableArray(state.allChannels.filter(function (ch) {
            return ch.url !== channel.url;
          }))),
          currentChannel: channel
        });
      }

    case ON_CHANNEL_ARCHIVED:
      {
        var _state$currentChannel;

        var _channel = action.payload;

        if (state.channelListQuery) {
          if (filterChannelListParams(state.channelListQuery, _channel, state.currentUserId)) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: getChannelsWithUpsertedChannel(state.allChannels, _channel)
            }); // TODO: Check if we have to set current channel
          }
        }

        var nextChannel = _channel.url === ((_state$currentChannel = state.currentChannel) === null || _state$currentChannel === void 0 ? void 0 : _state$currentChannel.url) ? state.allChannels[state.allChannels[0].url === _channel.url ? 1 : 0] : state.currentChannel;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: state.allChannels.filter(function (_ref2) {
            var url = _ref2.url;
            return url !== _channel.url;
          }),
          currentChannel: state.disableAutoSelect ? null : nextChannel
        });
      }

    case LEAVE_CHANNEL_SUCCESS:
    case ON_CHANNEL_DELETED:
      {
        var _state$currentChannel2;

        var channelUrl = action.payload;
        return _objectSpread2(_objectSpread2({}, state), {}, {
          currentChannel: channelUrl === ((_state$currentChannel2 = state.currentChannel) === null || _state$currentChannel2 === void 0 ? void 0 : _state$currentChannel2.url) ? state.allChannels[0] : state.currentChannel,
          allChannels: state.allChannels.filter(function (_ref3) {
            var url = _ref3.url;
            return url !== channelUrl;
          })
        });
      }

    case ON_USER_LEFT:
      {
        var _state$currentChannel5;

        var _action$payload2 = action.payload,
            _channel2 = _action$payload2.channel,
            isMe = _action$payload2.isMe;

        if (state.channelListQuery) {
          var _state$currentChannel4;

          if (filterChannelListParams(state.channelListQuery, _channel2, state.currentUserId)) {
            var _state$currentChannel3;

            var _filteredChannels2 = getChannelsWithUpsertedChannel(state.allChannels, _channel2);

            var _nextChannel3 = isMe && _channel2.url === ((_state$currentChannel3 = state.currentChannel) === null || _state$currentChannel3 === void 0 ? void 0 : _state$currentChannel3.url) ? _filteredChannels2[0] : state.currentChannel;

            return _objectSpread2(_objectSpread2({}, state), {}, {
              currentChannel: state.disableAutoSelect ? null : _nextChannel3,
              allChannels: _filteredChannels2
            });
          }

          var _nextChannel2 = _channel2.url === ((_state$currentChannel4 = state.currentChannel) === null || _state$currentChannel4 === void 0 ? void 0 : _state$currentChannel4.url) ? state.allChannels[0] : state.currentChannel;

          return _objectSpread2(_objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : _nextChannel2,
            allChannels: state.allChannels.filter(function (_ref4) {
              var url = _ref4.url;
              return url !== _channel2.url;
            })
          });
        }

        var _filteredChannels = state.allChannels.filter(function (c) {
          return !(c.url === _channel2.url && isMe);
        });

        var _nextChannel = isMe && _channel2.url === ((_state$currentChannel5 = state.currentChannel) === null || _state$currentChannel5 === void 0 ? void 0 : _state$currentChannel5.url) ? _filteredChannels[0] : state.currentChannel;

        return _objectSpread2(_objectSpread2({}, state), {}, {
          currentChannel: state.disableAutoSelect ? null : _nextChannel,
          allChannels: _filteredChannels
        });
      }

    case ON_USER_JOINED:
    case ON_CHANNEL_CHANGED:
    case ON_READ_RECEIPT_UPDATED:
    case ON_DELIVERY_RECEIPT_UPDATED:
      {
        var _state$allChannels = state.allChannels,
            allChannels = _state$allChannels === void 0 ? [] : _state$allChannels;
        var _channel3 = action.payload;
        var unreadMessageCount = _channel3.unreadMessageCount;
        if (!_channel3.lastMessage) return state;

        if (state.channelListQuery) {
          var _state$currentChannel6;

          if (filterChannelListParams(state.channelListQuery, _channel3, state.currentUserId)) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: getChannelsWithUpsertedChannel(allChannels, _channel3)
            });
          }

          var _nextChannel4 = _channel3.url === ((_state$currentChannel6 = state.currentChannel) === null || _state$currentChannel6 === void 0 ? void 0 : _state$currentChannel6.url) ? state.allChannels[state.allChannels[0].url === _channel3.url ? 1 : 0] // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;

          return _objectSpread2(_objectSpread2({}, state), {}, {
            currentChannel: state.disableAutoSelect ? null : _nextChannel4,
            allChannels: state.allChannels.filter(function (_ref5) {
              var url = _ref5.url;
              return url !== _channel3.url;
            })
          });
        } // if its only an unread message count change, dont push to top


        if (unreadMessageCount === 0) {
          var currentChannel = allChannels.find(function (_ref6) {
            var url = _ref6.url;
            return url === _channel3.url;
          });
          var currentUnreadCount = currentChannel && currentChannel.unreadMessageCount;

          if (currentUnreadCount === 0) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: state.allChannels.map(function (ch) {
                return ch.url === _channel3.url ? _channel3 : ch;
              })
            });
          }
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: [_channel3].concat(_toConsumableArray(state.allChannels.filter(function (_ref7) {
            var url = _ref7.url;
            return url !== action.payload.url;
          })))
        });
      }

    case SET_CURRENT_CHANNEL:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        currentChannel: action.payload
      });

    case SHOW_CHANNEL_SETTINGS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        showSettings: true
      });

    case HIDE_CHANNEL_SETTINGS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        showSettings: false
      });

    case ON_LAST_MESSAGE_UPDATED:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        allChannels: state.allChannels.map(function (channel) {
          return channel.url === action.payload.url ? action.payload : channel;
        })
      });

    case ON_CHANNEL_FROZEN:
      {
        var _channel4 = action.payload;

        if (state.channelListQuery) {
          var _state$currentChannel7;

          if (filterChannelListParams(state.channelListQuery, _channel4, state.currentUserId)) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: getChannelsWithUpsertedChannel(state.allChannels, _channel4)
            });
          }

          var _nextChannel5 = _channel4.url === ((_state$currentChannel7 = state.currentChannel) === null || _state$currentChannel7 === void 0 ? void 0 : _state$currentChannel7.url) ? state.allChannels[state.allChannels[0].url === _channel4.url ? 1 : 0] // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;

          return _objectSpread2(_objectSpread2({}, state), {}, {
            allChannels: state.allChannels.filter(function (_ref8) {
              var url = _ref8.url;
              return url !== _channel4.url;
            }),
            currentChannel: state.disableAutoSelect ? null : _nextChannel5
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: state.allChannels.map(function (ch) {
            if (ch.url === _channel4.url) {
              // eslint-disable-next-line no-param-reassign
              ch.isFrozen = true;
              return ch;
            }

            return ch;
          })
        });
      }

    case ON_CHANNEL_UNFROZEN:
      {
        var _channel5 = action.payload;

        if (state.channelListQuery) {
          var _state$currentChannel8;

          if (filterChannelListParams(state.channelListQuery, _channel5, state.currentUserId)) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              allChannels: getChannelsWithUpsertedChannel(state.allChannels, _channel5)
            });
          }

          var _nextChannel6 = _channel5.url === ((_state$currentChannel8 = state.currentChannel) === null || _state$currentChannel8 === void 0 ? void 0 : _state$currentChannel8.url) ? state.allChannels[state.allChannels[0].url === _channel5.url ? 1 : 0] // if coming channel is first of channel list, current channel will be the next one
          : state.currentChannel;

          return _objectSpread2(_objectSpread2({}, state), {}, {
            allChannels: state.allChannels.filter(function (_ref9) {
              var url = _ref9.url;
              return url !== _channel5.url;
            }),
            currentChannel: state.disableAutoSelect ? null : _nextChannel6
          });
        }

        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: state.allChannels.map(function (ch) {
            if (ch.url === _channel5.url) {
              // eslint-disable-next-line no-param-reassign
              ch.isFrozen = false;
              return ch;
            }

            return ch;
          })
        });
      }

    case CHANNEL_REPLACED_TO_TOP:
      {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          allChannels: [action.payload].concat(_toConsumableArray(state.allChannels.filter(function (channel) {
            return channel.url !== action.payload.url;
          })))
        });
      }

    case CHANNEL_LIST_PARAMS_UPDATED:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        currentUserId: action.payload.currentUserId,
        channelListQuery: action.payload.channelListQuery
      });

    default:
      return state;
  }
}

var ChannelListContext = /*#__PURE__*/React__default.createContext({
  disableUserProfile: true,
  allowProfileEdit: true,
  onBeforeCreateChannel: null,
  onThemeChange: null,
  onProfileEditSuccess: null,
  onChannelSelect: null,
  queries: {},
  className: null,
  initialized: false,
  loading: false,
  allChannels: [],
  currentChannel: null,
  showSettings: false,
  channelListQuery: {},
  currentUserId: null,
  channelListDispatcher: null,
  channelSource: null,
  typingChannels: []
});

var ChannelListProvider = function ChannelListProvider(props) {
  var _a; // destruct props


  var children = props.children,
      className = props.className,
      disableUserProfile = props.disableUserProfile,
      allowProfileEdit = props.allowProfileEdit,
      queries = props.queries,
      onProfileEditSuccess = props.onProfileEditSuccess,
      onThemeChange = props.onThemeChange,
      onBeforeCreateChannel = props.onBeforeCreateChannel,
      sortChannelList = props.sortChannelList,
      disableAutoSelect = props.disableAutoSelect,
      _b = props.isTypingIndicatorEnabled,
      isTypingIndicatorEnabled = _b === void 0 ? null : _b,
      _c = props.isMessageReceiptStatusEnabled,
      isMessageReceiptStatusEnabled = _c === void 0 ? null : _c;
  var onChannelSelect = (props === null || props === void 0 ? void 0 : props.onChannelSelect) || noop; // fetch store from <SendbirdProvider />

  var globalStore = useSendbirdStateContext();
  var config = globalStore.config,
      stores = globalStore.stores;
  var sdkStore = stores.sdkStore;
  var pubSub = config.pubSub,
      logger = config.logger;
  var isTypingIndicatorEnabledOnChannelList = config.isTypingIndicatorEnabledOnChannelList,
      isMessageReceiptStatusEnabledOnChannelList = config.isMessageReceiptStatusEnabledOnChannelList;
  var sdk = sdkStore.sdk; // derive some variables
  // enable if it is true atleast once(both are flase by default)

  var userDefinedDisableUserProfile = disableUserProfile || (config === null || config === void 0 ? void 0 : config.disableUserProfile);
  var userDefinedRenderProfile = config === null || config === void 0 ? void 0 : config.renderUserProfile;
  var enableEditProfile = allowProfileEdit || (config === null || config === void 0 ? void 0 : config.allowProfileEdit);
  var userFilledChannelListQuery = queries === null || queries === void 0 ? void 0 : queries.channelListQuery;
  var userFilledApplicationUserListQuery = queries === null || queries === void 0 ? void 0 : queries.applicationUserListQuery;
  var sdkIntialized = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.initialized;

  var _d = useReducer(reducer, channelListInitialState),
      channelListStore = _d[0],
      channelListDispatcher = _d[1];

  var loading = channelListStore.loading,
      currentChannel = channelListStore.currentChannel;

  var _e = useState(),
      channelSource = _e[0],
      setChannelSource = _e[1];

  var _f = useState(null),
      sdkChannelHandlerId = _f[0],
      setSdkChannelHandlerId = _f[1];

  var _g = useState(null),
      typingHandlerId = _g[0],
      setTypingHandlerId = _g[1];

  var _h = useState([]),
      typingChannels = _h[0],
      setTypingChannels = _h[1];

  useEffect(function () {
    var subscriber = pubSubHandler(pubSub, channelListDispatcher);
    return function () {
      pubSubHandleRemover(subscriber);
    };
  }, [sdkIntialized]);
  useEffect(function () {
    setSdkChannelHandlerId(uuidv4);

    if (sdkIntialized) {
      logger.info('ChannelList: Setup channelHandlers');
      setupChannelList({
        sdk: sdk,
        sdkChannelHandlerId: sdkChannelHandlerId,
        channelListDispatcher: channelListDispatcher,
        setChannelSource: setChannelSource,
        onChannelSelect: onChannelSelect,
        userFilledChannelListQuery: userFilledChannelListQuery,
        logger: logger,
        sortChannelList: sortChannelList,
        disableAutoSelect: disableAutoSelect
      });
    } else {
      logger.info('ChannelList: Removing channelHandlers'); // remove previous channelHandlers

      if (sdk && (sdk === null || sdk === void 0 ? void 0 : sdk.removeChannelHandler)) {
        sdk.removeChannelHandler(sdkChannelHandlerId);
      } // remove channelSource


      setChannelSource(null); // cleanup

      channelListDispatcher({
        type: RESET_CHANNEL_LIST,
        payload: null
      });
    }

    return function () {
      logger.info('ChannelList: Removing channelHandlers');

      if (sdk && sdk.removeChannelHandler) {
        sdk.removeChannelHandler(sdkChannelHandlerId);
      }
    };
  }, [sdkIntialized, userFilledChannelListQuery, sortChannelList]);
  useEffect(function () {
    if (sdk && (sdk === null || sdk === void 0 ? void 0 : sdk.ChannelHandler)) {
      var handlerId = uuidv4();
      var handler = new sdk.ChannelHandler();

      handler.onTypingStatusUpdated = function (channel) {
        var _a;

        var typingMemberCount = (_a = channel === null || channel === void 0 ? void 0 : channel.getTypingMembers()) === null || _a === void 0 ? void 0 : _a.length;
        var channelList = typingChannels.filter(function (ch) {
          return ch.url !== channel.url;
        });

        if (typingMemberCount > 0) {
          setTypingChannels(__spreadArray(__spreadArray([], channelList, true), [channel], false));
        } else {
          setTypingChannels(channelList);
        }
      };

      sdk.addChannelHandler(handlerId, handler);
      setTypingHandlerId(handlerId);
    }

    return function () {
      if (sdk && sdk.removeChannelHandler) {
        sdk.removeChannelHandler(typingHandlerId);
      }
    };
  }, [(_a = sdk === null || sdk === void 0 ? void 0 : sdk.currentUser) === null || _a === void 0 ? void 0 : _a.userId]);
  var queries_ = useMemo(function () {
    return {
      applicationUserListQuery: userFilledApplicationUserListQuery,
      channelListQuery: userFilledChannelListQuery
    };
  }, [userFilledApplicationUserListQuery, userFilledChannelListQuery]);
  var allChannels = channelListStore.allChannels;
  var sortedChannels = sortChannelList && typeof sortChannelList === 'function' ? sortChannelList(allChannels) : allChannels;

  if (sortedChannels.length !== allChannels.length) {
    var warning = "ChannelList: You have removed/added extra channels on sortChannelList\n      this could cause unexpected problems"; // eslint-disable-next-line no-console

    console.warn(warning, {
      before: allChannels,
      after: sortedChannels
    });
    logger.warning(warning, {
      before: allChannels,
      after: sortedChannels
    });
  }

  useEffect(function () {
    if (!sdk || !sdk.GroupChannel || !currentChannel || !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url)) {
      return;
    }

    sdk.GroupChannel.getChannel(currentChannel.url, function (groupChannel) {
      if (groupChannel) {
        onChannelSelect(groupChannel);
      } else {
        onChannelSelect(null);
      }
    });
  }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
  return /*#__PURE__*/React__default.createElement(ChannelListContext.Provider, {
    value: __assign(__assign({
      className: className,
      disableUserProfile: disableUserProfile,
      queries: queries_,
      onProfileEditSuccess: onProfileEditSuccess,
      onThemeChange: onThemeChange,
      onBeforeCreateChannel: onBeforeCreateChannel,
      onChannelSelect: onChannelSelect,
      sortChannelList: sortChannelList,
      loading: loading,
      allowProfileEdit: enableEditProfile,
      channelListDispatcher: channelListDispatcher,
      channelSource: channelSource
    }, channelListStore), {
      allChannels: sortedChannels,
      typingChannels: typingChannels,
      isTypingIndicatorEnabled: isTypingIndicatorEnabled !== null ? isTypingIndicatorEnabled : isTypingIndicatorEnabledOnChannelList,
      isMessageReceiptStatusEnabled: isMessageReceiptStatusEnabled !== null ? isMessageReceiptStatusEnabled : isMessageReceiptStatusEnabledOnChannelList
    })
  }, /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    disableUserProfile: userDefinedDisableUserProfile,
    renderUserProfile: userDefinedRenderProfile
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-list " + className
  }, children)));
};

function useChannelListContext() {
  var context = useContext(ChannelListContext);
  return context;
}

var useChannelList = useChannelListContext;

export { ChannelListProvider as C, FETCH_CHANNELS_START as F, LEAVE_CHANNEL_SUCCESS as L, SET_CURRENT_CHANNEL as S, FETCH_CHANNELS_FAILURE as a, FETCH_CHANNELS_SUCCESS as b, useChannelList as c, useChannelListContext as u };
//# sourceMappingURL=ChannelListProvider-23f83387.js.map
