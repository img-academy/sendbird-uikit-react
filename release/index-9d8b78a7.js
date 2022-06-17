import { b as _toConsumableArray } from './_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import Loader from './ui/Loader.js';
import { a as LocalizationContext } from './LocalizationContext-79eb0635.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './index-3db1006f.js';

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

  var _useContext = useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-place-holder']).join(' ')
  }, type === PlaceHolderTypes.LOADING && /*#__PURE__*/React__default.createElement(Loader, {
    width: "48px",
    height: "48px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "48px",
    height: "48px"
  })), (type === PlaceHolderTypes.NO_CHANNELS || type === PlaceHolderTypes.NO_MESSAGES || type === PlaceHolderTypes.WRONG) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-place-holder__body"
  }, type === PlaceHolderTypes.NO_CHANNELS && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-place-holder__body__icon",
    type: IconTypes.CHAT,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), type === PlaceHolderTypes.WRONG && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-place-holder__body__icon",
    type: IconTypes.ERROR,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), type === PlaceHolderTypes.NO_MESSAGES && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-place-holder__body__icon",
    type: IconTypes.MESSAGE,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "64px",
    height: "64px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-holder__body__text",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, type === PlaceHolderTypes.NO_CHANNELS && stringSet.PLACE_HOLDER__NO_CHANNEL, type === PlaceHolderTypes.WRONG && stringSet.PLACE_HOLDER__WRONG, type === PlaceHolderTypes.NO_MESSAGES && stringSet.PLACE_HOLDER__NO_MESSAGES), retryToConnect && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-place-holder__body__reconnect",
    role: "button",
    onClick: retryToConnect,
    onKeyPress: retryToConnect,
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-place-holder__body__reconnect__icon",
    type: IconTypes.REFRESH,
    fillColor: IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-holder__body__reconnect__text",
    type: LabelTypography.BUTTON_1,
    color: LabelColors.PRIMARY
  }, stringSet.PLACE_HOLDER__RETRY_TO_CONNECT))), (type === PlaceHolderTypes.NO_RESULTS || type === PlaceHolderTypes.SEARCH_IN || type === PlaceHolderTypes.SEARCHING) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-place-holder__body--align-top"
  }, type === PlaceHolderTypes.SEARCH_IN && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-place-holder__body--align-top__text"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-holder__body--align-top__text__search-in",
    type: LabelTypography.BUTTON_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.SEARCH_IN), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-holder__body--align-top__text__channel-name",
    type: LabelTypography.BUTTON_2,
    color: LabelColors.PRIMARY
  }, "'".concat(searchInString)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-holder__body--align-top__text__quote",
    type: LabelTypography.BUTTON_2,
    color: LabelColors.PRIMARY
  }, '\'')), type === PlaceHolderTypes.SEARCHING && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-hlder__body--align-top__searching",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.SEARCHING), type === PlaceHolderTypes.NO_RESULTS && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-place-hlder__body--align-top__no-result",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.NO_SEARCHED_MESSAGE)));
}
PlaceHolder.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  type: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(PlaceHolderTypes)), PropTypes.string]).isRequired,
  retryToConnect: PropTypes.func,
  searchInString: PropTypes.string
};
PlaceHolder.defaultProps = {
  className: '',
  retryToConnect: null,
  searchInString: ''
};

export { PlaceHolder as P, PlaceHolderTypes as a, PlaceHolderTypes$1 as b };
//# sourceMappingURL=index-9d8b78a7.js.map
