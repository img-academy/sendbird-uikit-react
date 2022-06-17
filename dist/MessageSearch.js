import React__default, { useState, useContext, useEffect } from 'react';
import { MessageSearchUI } from './MessageSearch/components/MessageSearchUI.js';
import { a as LocalizationContext } from './LocalizationContext-79eb0635.js';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import IconButton from './ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './index-3db1006f.js';
import Loader from './ui/Loader.js';
import { MessageSearchProvider } from './MessageSearch/context.js';
import './ui/MessageSearchItem.js';
import './tslib.es6-cee0628b.js';
import './index-54fd64c3.js';
import './index-7e8c8e8d.js';
import './index-d4c08fec.js';
import './index-6d919a6a.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import './uuid-b12b05c7.js';
import './index-9d8b78a7.js';
import './ui/MessageSearchFileItem.js';
import './stringSet-4614f875.js';
import './useSendbirdStateContext.js';
import './withSendBird.js';

var COMPONENT_CLASS_NAME = 'sendbird-message-search-pannel';

function MessageSearchPannel(props) {
  var channelUrl = props.channelUrl,
      onResultClick = props.onResultClick,
      onCloseClick = props.onCloseClick,
      messageSearchQuery = props.messageSearchQuery,
      renderPlaceHolderError = props.renderPlaceHolderError,
      renderPlaceHolderLoading = props.renderPlaceHolderLoading,
      renderPlaceHolderNoString = props.renderPlaceHolderNoString,
      renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList,
      renderSearchItem = props.renderSearchItem;

  var _a = useState(''),
      searchString = _a[0],
      setSearchString = _a[1];

  var _b = useState(''),
      inputString = _b[0],
      setInputString = _b[1];

  var _c = useState(false),
      loading = _c[0],
      setLoading = _c[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var timeout = null;
  useEffect(function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      setSearchString(inputString);
      setLoading(true);
      timeout = null;
    }, 500);
  }, [inputString]);

  var handleOnChangeInputString = function handleOnChangeInputString(e) {
    setInputString(e.target.value);
  };

  var handleOnResultLoaded = function handleOnResultLoaded() {
    setLoading(false);
  };

  var handleOnClickResetStringButton = function handleOnClickResetStringButton(e) {
    e.stopPropagation();
    setInputString('');
    setSearchString('');
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME + "__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: COMPONENT_CLASS_NAME + "__header__title",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.SEARCH_IN_CHANNEL), /*#__PURE__*/React__default.createElement(IconButton, {
    className: COMPONENT_CLASS_NAME + "__header__close-button",
    width: "32px",
    height: "32px",
    onClick: onCloseClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.ON_BACKGROUND_1,
    width: "22px",
    height: "22px"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME + "__input"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME + "__input__container"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: COMPONENT_CLASS_NAME + "__input__container__search-icon",
    type: IconTypes.SEARCH,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "24px",
    height: "24px"
  }), /*#__PURE__*/React__default.createElement("input", {
    className: COMPONENT_CLASS_NAME + "__input__container__input-area",
    placeholder: stringSet.SEARCH,
    value: inputString,
    onChange: handleOnChangeInputString
  }), inputString && loading && /*#__PURE__*/React__default.createElement(Loader, {
    className: COMPONENT_CLASS_NAME + "__input__container__spinner",
    width: "20px",
    height: "20px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  })), !loading && inputString && /*#__PURE__*/React__default.createElement(Icon, {
    className: COMPONENT_CLASS_NAME + "__input__container__reset-input-button",
    type: IconTypes.REMOVE,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "20px",
    height: "20px",
    onClick: handleOnClickResetStringButton
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME + "__message-search"
  }, /*#__PURE__*/React__default.createElement(MessageSearchProvider, {
    channelUrl: channelUrl,
    searchString: searchString,
    onResultClick: onResultClick,
    onResultLoaded: handleOnResultLoaded,
    messageSearchQuery: messageSearchQuery
  }, /*#__PURE__*/React__default.createElement(MessageSearchUI, {
    renderPlaceHolderError: renderPlaceHolderError,
    renderPlaceHolderLoading: renderPlaceHolderLoading,
    renderPlaceHolderNoString: renderPlaceHolderNoString,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList,
    renderSearchItem: renderSearchItem
  }))));
}

export { MessageSearchPannel as default };
//# sourceMappingURL=MessageSearch.js.map
