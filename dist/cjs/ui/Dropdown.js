'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-25825fe1.js');
require('../stringSet-435b3346.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function useOutsideAlerter(_ref) {
  var ref = _ref.ref,
      callback = _ref.callback;

  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  React.useEffect(function () {
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
  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: "sendbird-dropdown__menu-item",
    role: "menuitem",
    onClick: onClick,
    onKeyPress: function onKeyPress(e) {
      if (e.keyCode === 13) {
        onClick(e);
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired,
  onClick: PropTypes__default["default"].func.isRequired
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

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var wrapperRef = React.useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    callback: function callback() {
      return setIsOpen(false);
    }
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-dropdown",
    ref: wrapperRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-dropdown__button"
  }, renderButton(function () {
    return setIsOpen(!isOpen);
  }
  /** toggle-menu */
  )), isOpen && /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "sendbird-dropdown__menu"
  }, renderItems(function () {
    return setIsOpen(false);
  }
  /** close-menu */
  )));
};

DropdownMenu.propTypes = {
  renderButton: PropTypes__default["default"].func.isRequired,
  renderItems: PropTypes__default["default"].func.isRequired
};

exports.MenuItem = MenuItem;
exports["default"] = DropdownMenu;
//# sourceMappingURL=Dropdown.js.map
