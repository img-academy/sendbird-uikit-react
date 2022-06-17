'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../utils-81069a8c.js');
var ui_Modal = require('../../ui/Modal.js');
require('../../withSendBird.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../UserProfileContext-46f306ca.js');
require('prop-types');
require('../../uuid-a43dad75.js');
require('react-dom');
require('../../LocalizationContext-60feae29.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../index-94591769.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-8f00ec86.js');
require('../../index-25825fe1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LeaveChannel = function LeaveChannel(props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      _onSubmit = _d === void 0 ? utils.noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? utils.noop : _e;

  var channel = (_a = ChannelSettings_context.useChannelSettings()) === null || _a === void 0 ? void 0 : _a.channel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
      disabled: !isOnline,
      onCancel: onCancel,
      onSubmit: function onSubmit() {
        logger.info('ChannelSettings: Leaving channel', channel);
        channel.leave().then(function () {
          logger.info('ChannelSettings: Leaving channel successful!', channel);

          _onSubmit();
        });
      },
      submitText: "Leave",
      titleText: "Leave this channel?"
    });
  }
};

module.exports = LeaveChannel;
//# sourceMappingURL=LeaveChannel.js.map
