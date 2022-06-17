'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../UserProfileContext-46f306ca.js');
var uuid = require('../uuid-a43dad75.js');
require('../withSendBird.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelSettingsContext = /*#__PURE__*/React__default["default"].createContext(undefined);

var ChannelSettingsProvider = function ChannelSettingsProvider(props) {
  var children = props.children,
      className = props.className,
      channelUrl = props.channelUrl,
      onCloseClick = props.onCloseClick,
      onChannelModified = props.onChannelModified,
      onBeforeUpdateChannel = props.onBeforeUpdateChannel,
      queries = props.queries; // fetch store from <SendbirdProvider />

  var globalStore = useSendbirdStateContext();
  var config = globalStore.config,
      stores = globalStore.stores;
  var sdkStore = stores.sdkStore;
  var logger = config.logger;
  var sdk = sdkStore.sdk,
      initialized = sdkStore.initialized; // hack to keep track of channel updates by triggering useEffect

  var _a = React.useState(uuid.uuidv4()),
      channelUpdateId = _a[0],
      setChannelUpdateId = _a[1];

  var _b = React.useState(null),
      channel = _b[0],
      setChannel = _b[1];

  var _c = React.useState(false),
      invalidChannel = _c[0],
      setInvalidChannel = _c[1];

  var forceUpdateUI = function forceUpdateUI() {
    setChannelUpdateId(uuid.uuidv4());
  };

  React.useEffect(function () {
    logger.info('ChannelSettings: Setting up');

    if (!channelUrl || !initialized || !sdk) {
      logger.warning('ChannelSettings: Setting up failed', 'No channelUrl or sdk uninitialized');
      setInvalidChannel(false);
    } else {
      if (!sdk || !sdk.GroupChannel) {
        logger.warning('ChannelSettings: No GroupChannel');
        return;
      }

      sdk.GroupChannel.getChannel(channelUrl, function (groupChannel) {
        if (!groupChannel) {
          logger.warning('ChannelSettings: Channel not found');
          setInvalidChannel(true);
        } else {
          logger.info('ChannelSettings: Fetched group channel', groupChannel);
          setInvalidChannel(false);
          setChannel(groupChannel);
        }
      });
    }
  }, [channelUrl, initialized, channelUpdateId]);
  return /*#__PURE__*/React__default["default"].createElement(ChannelSettingsContext.Provider, {
    value: {
      channelUrl: channelUrl,
      onCloseClick: onCloseClick,
      onChannelModified: onChannelModified,
      onBeforeUpdateChannel: onBeforeUpdateChannel,
      queries: queries,
      setChannelUpdateId: setChannelUpdateId,
      forceUpdateUI: forceUpdateUI,
      channel: channel,
      invalidChannel: invalidChannel
    }
  }, /*#__PURE__*/React__default["default"].createElement(UserProfileContext.UserProfileProvider, {
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings " + className
  }, children)));
};

var useChannelSettings = function useChannelSettings() {
  return React__default["default"].useContext(ChannelSettingsContext);
};

exports.ChannelSettingsProvider = ChannelSettingsProvider;
exports.useChannelSettings = useChannelSettings;
//# sourceMappingURL=context.js.map
