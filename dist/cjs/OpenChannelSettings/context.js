'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../UserProfileContext-46f306ca.js');
require('../withSendBird.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OpenChannelSettingsContext = /*#__PURE__*/React__default["default"].createContext(undefined);

var OpenChannelSettingsProvider = function OpenChannelSettingsProvider(props) {
  var _a, _b, _c;

  var children = props.children,
      channelUrl = props.channelUrl,
      onCloseClick = props.onCloseClick,
      onChannelModified = props.onChannelModified,
      onBeforeUpdateChannel = props.onBeforeUpdateChannel; // fetch store from <SendbirdProvider />

  var globalStore = useSendbirdStateContext();
  var sdk = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = React.useState(null),
      channel = _d[0],
      setChannel = _d[1];

  React.useEffect(function () {
    if (!channelUrl || !sdk || !sdk.getConnectionState) {
      setChannel(null);
      return;
    }

    sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
      if (!error) {
        logger.error('open channel setting: fetched', openChannel);
        setChannel(openChannel);
      } else {
        logger.error('open channel setting: error fetching', error);
        setChannel(null);
      }
    });
  }, [channelUrl, sdk]);
  return /*#__PURE__*/React__default["default"].createElement(OpenChannelSettingsContext.Provider, {
    value: {
      channelUrl: channelUrl,
      channel: channel,
      setChannel: setChannel,
      onCloseClick: onCloseClick,
      onChannelModified: onChannelModified,
      onBeforeUpdateChannel: onBeforeUpdateChannel
    }
  }, /*#__PURE__*/React__default["default"].createElement(UserProfileContext.UserProfileProvider, {
    isOpenChannel: true,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, children));
};

var useOpenChannelSettings = function useOpenChannelSettings() {
  return React__default["default"].useContext(OpenChannelSettingsContext);
};

exports.OpenChannelSettingsProvider = OpenChannelSettingsProvider;
exports.useOpenChannelSettings = useOpenChannelSettings;
//# sourceMappingURL=context.js.map
