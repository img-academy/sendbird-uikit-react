import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import '../stringSet-4614f875.js';

function useOutsideAlerter(_ref) {
  var ref = _ref.ref,
      callback = _ref.callback;

  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(function () {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default.createElement("li", {
    className: "sendbird-dropdown__menu-item",
    role: "menuitem",
    onClick: onClick,
    onKeyPress: function onKeyPress(e) {
      if (e.keyCode === 13) {
        onClick(e);
      }
    }
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired
};
/**
 * For now, this is not a dropdown component that should be used inside forms
 * This should be used in a list or in a nav-bar where you can click
 * and a list of options opens up
 * Also closing the dropdown is a manual operation for now
 * More options, Aria labels etc should be implemented
 */

var DropdownMenu = function DropdownMenu(_ref2) {
  var renderButton = _ref2.renderButton,
      renderItems = _ref2.renderItems;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var wrapperRef = useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    callback: function callback() {
      return setIsOpen(false);
    }
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-dropdown",
    ref: wrapperRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-dropdown__button"
  }, renderButton(function () {
    return setIsOpen(!isOpen);
  }
  /** toggle-menu */
  )), isOpen && /*#__PURE__*/React__default.createElement("ul", {
    className: "sendbird-dropdown__menu"
  }, renderItems(function () {
    return setIsOpen(false);
  }
  /** close-menu */
  )));
};

DropdownMenu.propTypes = {
  renderButton: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired
};

export { MenuItem, DropdownMenu as default };
//# sourceMappingURL=Dropdown.js.map
