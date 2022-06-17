'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var ui_Icon = require('./ui/Icon.js');
var ui_Loader = require('./ui/Loader.js');
var LocalizationContext = require('./LocalizationContext-60feae29.js');
var ui_Label = require('./index-25825fe1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Types() {
  return {
    LOADING: 'LOADING',
    NO_CHANNELS: 'NO_CHANNELS',
    NO_MESSAGES: 'NO_MESSAGES',
    WRONG: 'WRONG',
    SEARCH_IN: 'SEARCH_IN',
    SEARCHING: 'SEARCHING',
    NO_RESULTS: 'NO_RESULTS'
  };
}
var PlaceHolderTypes$1 = Types();

var PlaceHolderTypes = PlaceHolderTypes$1;
function PlaceHolder(_ref) {
  var className = _ref.className,
      type = _ref.type,
      retryToConnect = _ref.retryToConnect,
      searchInString = _ref.searchInString;

  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-place-holder']).join(' ')
  }, type === PlaceHolderTypes.LOADING && /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    width: "48px",
    height: "48px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "48px",
    height: "48px"
  })), (type === PlaceHolderTypes.NO_CHANNELS || type === PlaceHolderTypes.NO_MESSAGES || type === PlaceHolderTypes.WRONG) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-place-holder__body"
  }, type === PlaceHolderTypes.NO_CHANNELS && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-place-holder__body__icon",
    type: ui_Icon.IconTypes.CHAT,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), type === PlaceHolderTypes.WRONG && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-place-holder__body__icon",
    type: ui_Icon.IconTypes.ERROR,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), type === PlaceHolderTypes.NO_MESSAGES && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-place-holder__body__icon",
    type: ui_Icon.IconTypes.MESSAGE,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-holder__body__text",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, type === PlaceHolderTypes.NO_CHANNELS && stringSet.PLACE_HOLDER__NO_CHANNEL, type === PlaceHolderTypes.WRONG && stringSet.PLACE_HOLDER__WRONG, type === PlaceHolderTypes.NO_MESSAGES && stringSet.PLACE_HOLDER__NO_MESSAGES), retryToConnect && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-place-holder__body__reconnect",
    role: "button",
    onClick: retryToConnect,
    onKeyPress: retryToConnect,
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-place-holder__body__reconnect__icon",
    type: ui_Icon.IconTypes.REFRESH,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-holder__body__reconnect__text",
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.PRIMARY
  }, stringSet.PLACE_HOLDER__RETRY_TO_CONNECT))), (type === PlaceHolderTypes.NO_RESULTS || type === PlaceHolderTypes.SEARCH_IN || type === PlaceHolderTypes.SEARCHING) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-place-holder__body--align-top"
  }, type === PlaceHolderTypes.SEARCH_IN && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-place-holder__body--align-top__text"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-holder__body--align-top__text__search-in",
    type: ui_Label.LabelTypography.BUTTON_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.SEARCH_IN), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-holder__body--align-top__text__channel-name",
    type: ui_Label.LabelTypography.BUTTON_2,
    color: ui_Label.LabelColors.PRIMARY
  }, "'".concat(searchInString)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-holder__body--align-top__text__quote",
    type: ui_Label.LabelTypography.BUTTON_2,
    color: ui_Label.LabelColors.PRIMARY
  }, '\'')), type === PlaceHolderTypes.SEARCHING && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-hlder__body--align-top__searching",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.SEARCHING), type === PlaceHolderTypes.NO_RESULTS && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-place-hlder__body--align-top__no-result",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.NO_SEARCHED_MESSAGE)));
}
PlaceHolder.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  type: PropTypes__default["default"].oneOfType([PropTypes__default["default"].oneOf(Object.keys(PlaceHolderTypes)), PropTypes__default["default"].string]).isRequired,
  retryToConnect: PropTypes__default["default"].func,
  searchInString: PropTypes__default["default"].string
};
PlaceHolder.defaultProps = {
  className: '',
  retryToConnect: null,
  searchInString: ''
};

exports.PlaceHolder = PlaceHolder;
exports.PlaceHolderTypes = PlaceHolderTypes;
exports.PlaceHolderTypes$1 = PlaceHolderTypes$1;
//# sourceMappingURL=index-bbdcdf62.js.map
