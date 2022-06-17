'use strict';

var React = require('react');
var ChannelList_components_ChannelListHeader = require('./ChannelListHeader.js');
var ChannelList_components_AddChannel = require('./AddChannel.js');
var ChannelList_components_ChannelPreview = require('./ChannelPreview.js');
var ChannelList_components_ChannelPreviewAction = require('./ChannelPreviewAction.js');
var ChannelList_context = require('../../ChannelListProvider-b0da6dab.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var EditUserProfile = require('../../EditUserProfile.js');
var ui_PlaceHolder = require('../../index-bbdcdf62.js');
require('../../LocalizationContext-60feae29.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../index-25825fe1.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../ui/IconButton.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../uuid-a43dad75.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../CreateChannelProvider-85461864.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../CreateChannel/components/InviteMembers.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-94591769.js');
require('../../index-8f00ec86.js');
require('../../utils-81069a8c.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-46f306ca.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../withSendBird.js');
require('../../ui/ContextMenu.js');
require('../../index-e0c5dddd.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');
require('../../ui/ChannelAvatar.js');
require('../../utils-f418bdf3.js');
require('../../ui/Badge.js');
require('../../index-7e134478.js');
require('../../index-f13da671.js');
require('../../index-e7940a94.js');
require('../../ui/MentionUserLabel.js');
require('../../Channel/components/TypingIndicator.js');
require('../../ChannelProvider-2848c6e0.js');
require('../../compareIds-669db256.js');
require('../../const-61eaa01a.js');
require('../../ui/ReactionButton.js');
require('../../ui/MessageStatus.js');
require('../../ui/Loader.js');
require('../../index-444c423e.js');
require('../../ui/Input.js');
require('../../ui/TextButton.js');
require('../../color-c2dc807b.js');
require('../../actionTypes-047a4c0d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DELIVERY_RECIPT = 'delivery_receipt';

var ChannelListUI = function ChannelListUI(props) {
  var _a, _b;

  var renderHeader = props.renderHeader,
      renderChannelPreview = props.renderChannelPreview,
      renderPlaceHolderError = props.renderPlaceHolderError,
      renderPlaceHolderLoading = props.renderPlaceHolderLoading,
      renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;

  var _c = React.useState(false),
      showProfileEdit = _c[0],
      setShowProfileEdit = _c[1];

  var _d = ChannelList_context.useChannelListContext(),
      onThemeChange = _d.onThemeChange,
      allowProfileEdit = _d.allowProfileEdit,
      allChannels = _d.allChannels,
      loading = _d.loading,
      currentChannel = _d.currentChannel,
      channelListDispatcher = _d.channelListDispatcher,
      channelSource = _d.channelSource,
      typingChannels = _d.typingChannels;

  var state = useSendbirdStateContext();
  var sdkStore = (_a = state === null || state === void 0 ? void 0 : state.stores) === null || _a === void 0 ? void 0 : _a.sdkStore;
  var config = state === null || state === void 0 ? void 0 : state.config;
  var isOnline = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.isOnline;
  var logger = config === null || config === void 0 ? void 0 : config.logger;
  var sdk = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.sdk;
  var sdkError = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.error;
  var sdkIntialized = (sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.initialized) || false;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-list__header"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList_components_ChannelListHeader, {
    renderHeader: renderHeader,
    onEdit: function onEdit() {
      if (allowProfileEdit) {
        setShowProfileEdit(true);
      }
    },
    allowProfileEdit: allowProfileEdit,
    renderIconButton: function renderIconButton() {
      return /*#__PURE__*/React__default["default"].createElement(ChannelList_components_AddChannel.AddChannel, null);
    }
  })), showProfileEdit && /*#__PURE__*/React__default["default"].createElement(EditUserProfile, {
    onThemeChange: onThemeChange,
    onCancel: function onCancel() {
      setShowProfileEdit(false);
    },
    onEditProfile: function onEditProfile() {
      setShowProfileEdit(false);
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-list__body",
    onScroll: function onScroll(e) {
      var target = e === null || e === void 0 ? void 0 : e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (fetchMore && (channelSource === null || channelSource === void 0 ? void 0 : channelSource.hasNext)) {
        logger.info('ChannelList: Fetching more channels');
        channelListDispatcher({
          type: ChannelList_context.FETCH_CHANNELS_START,
          payload: null
        });
        channelSource === null || channelSource === void 0 ? void 0 : channelSource.next(function (channelList, err) {
          var _a, _b;

          if (err) {
            logger.info('ChannelList: Fetching channels failed', err);
            channelListDispatcher({
              type: ChannelList_context.FETCH_CHANNELS_FAILURE,
              payload: channelList
            });
            return;
          }

          logger.info('ChannelList: Fetching channels successful', channelList);
          channelListDispatcher({
            type: ChannelList_context.FETCH_CHANNELS_SUCCESS,
            payload: channelList
          });
          var canSetMarkAsDelivered = (_b = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.premiumFeatureList) === null || _b === void 0 ? void 0 : _b.find(function (feature) {
            return feature === DELIVERY_RECIPT;
          });

          if (canSetMarkAsDelivered) {
            logger.info('ChannelList: Marking all channels as read'); // eslint-disable-next-line no-unused-expressions

            channelList === null || channelList === void 0 ? void 0 : channelList.forEach(function (c, idx) {
              // Plan-based rate limits - minimum limit is 5 requests per second
              setTimeout(function () {
                sdk === null || sdk === void 0 ? void 0 : sdk.markAsDelivered(c === null || c === void 0 ? void 0 : c.url);
              }, 300 * idx);
            });
          }
        });
      }
    }
  }, sdkError && (renderPlaceHolderError && typeof renderPlaceHolderError === 'function' ? renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError() : /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.WRONG
  })), /*#__PURE__*/React__default["default"].createElement("div", null, allChannels && allChannels.map(function (channel, idx) {
    var _onLeaveChannel = function onLeaveChannel(c, cb) {
      logger.info('ChannelList: Leaving channel', c);
      c.leave().then(function (res) {
        logger.info('ChannelList: Leaving channel success', res);

        if (cb && typeof cb === 'function') {
          cb(res, null);
        }

        channelListDispatcher({
          type: ChannelList_context.LEAVE_CHANNEL_SUCCESS,
          payload: channel.url
        });
      }).catch(function (err) {
        logger.error('ChannelList: Leaving channel failed', err);

        if (cb && typeof cb === 'function') {
          cb(null, err);
        }
      });
    };

    var onClick = function onClick() {
      if (!isOnline) {
        return;
      }

      logger.info('ChannelList: Clicked on channel:', channel);
      channelListDispatcher({
        type: ChannelList_context.SET_CURRENT_CHANNEL,
        payload: channel
      });
    };

    return renderChannelPreview ?
    /*#__PURE__*/
    // eslint-disable-next-line
    React__default["default"].createElement("div", {
      key: channel.url,
      onClick: onClick
    }, renderChannelPreview({
      channel: channel,
      onLeaveChannel: _onLeaveChannel
    })) : /*#__PURE__*/React__default["default"].createElement(ChannelList_components_ChannelPreview, {
      key: channel.url,
      tabIndex: idx,
      onClick: onClick,
      channel: channel,
      isActive: channel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url),
      isTyping: typingChannels === null || typingChannels === void 0 ? void 0 : typingChannels.some(function (_a) {
        var url = _a.url;
        return url === channel.url;
      }),
      renderChannelAction: function renderChannelAction() {
        return /*#__PURE__*/React__default["default"].createElement(ChannelList_components_ChannelPreviewAction, {
          disabled: !isOnline,
          onLeaveChannel: function onLeaveChannel() {
            return _onLeaveChannel(channel, null);
          }
        });
      }
    });
  })), (!sdkIntialized || loading) && (renderPlaceHolderLoading && typeof renderPlaceHolderLoading === 'function' ? renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading() : /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.LOADING
  })), (!allChannels || allChannels.length === 0) && (renderPlaceHolderEmptyList && typeof renderPlaceHolderEmptyList === 'function' ? renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList() : /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
  }))));
};

module.exports = ChannelListUI;
//# sourceMappingURL=ChannelListUI.js.map
