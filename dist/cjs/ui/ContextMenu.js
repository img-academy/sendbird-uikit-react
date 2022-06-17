'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-25825fe1.js');
var index = require('../index-e0c5dddd.js');
var reactDom = require('react-dom');
var ui_SortByRow = require('./SortByRow.js');
require('../stringSet-435b3346.js');
require('../tslib.es6-cb3f88e3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var MenuItems$1 = /*#__PURE__*/function (_Component) {
  _rollupPluginBabelHelpers._inherits(MenuItems, _Component);

  var _super = _rollupPluginBabelHelpers._createSuper(MenuItems);

  function MenuItems(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, MenuItems);

    _this = _super.call(this, props);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "showParent", function () {
      var _this$props$parentCon = _this.props.parentContainRef,
          parentContainRef = _this$props$parentCon === void 0 ? {} : _this$props$parentCon;
      var current = parentContainRef.current;

      if (parentContainRef && current) {
        current.classList.add('sendbird-icon--pressed');
      }
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "hideParent", function () {
      var _this$props$parentCon2 = _this.props.parentContainRef,
          parentContainRef = _this$props$parentCon2 === void 0 ? {} : _this$props$parentCon2;
      var current = parentContainRef.current;

      if (parentContainRef && current) {
        current.classList.remove('sendbird-icon--pressed');
      }
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "setupEvents", function () {
      var closeDropdown = _this.props.closeDropdown;

      var _assertThisInitialize = _rollupPluginBabelHelpers._assertThisInitialized(_this),
          menuRef = _assertThisInitialize.menuRef;

      var handleClickOutside = function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      _this.setState({
        handleClickOutside: handleClickOutside
      });

      document.addEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "cleanUpEvents", function () {
      var handleClickOutside = _this.state.handleClickOutside;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "getMenuPosition", function () {
      var _this$props = _this.props,
          parentRef = _this$props.parentRef,
          openLeft = _this$props.openLeft;
      var parentRect = parentRef.current.getBoundingClientRect();
      var x = parentRect.x || parentRect.left;
      var y = parentRect.y || parentRect.top;
      var menuStyle = {
        top: y,
        left: x
      };
      if (!_this.menuRef.current) return menuStyle;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      var rect = _this.menuRef.current.getBoundingClientRect();

      if (y + rect.height > innerHeight) {
        menuStyle.top -= rect.height;
      }

      if (x + rect.width > innerWidth && !openLeft) {
        menuStyle.left -= rect.width;
      }

      if (menuStyle.top < 0) {
        menuStyle.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
      }

      if (menuStyle.left < 0) {
        menuStyle.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
      }

      menuStyle.top += 32;

      if (openLeft) {
        var padding = Number.isNaN(rect.width - 30) ? 108 // default
        : rect.width - 30;
        menuStyle.left -= padding;
      }

      return _this.setState({
        menuStyle: menuStyle
      });
    });

    _this.menuRef = /*#__PURE__*/React__default["default"].createRef();
    _this.state = {
      menuStyle: {},
      handleClickOutside: function handleClickOutside() {}
    };
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(MenuItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupEvents();
      this.getMenuPosition();
      this.showParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpEvents();
      this.hideParent();
    }
  }, {
    key: "render",
    value: function render() {
      var menuStyle = this.state.menuStyle;
      var _this$props2 = this.props,
          children = _this$props2.children,
          style = _this$props2.style;
      return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-dropdown__menu-backdrop"
      }), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "sendbird-dropdown__menu",
        ref: this.menuRef,
        style: _rollupPluginBabelHelpers._objectSpread2({
          display: 'inline-block',
          position: 'fixed',
          left: "".concat(Math.round(menuStyle.left), "px"),
          top: "".concat(Math.round(menuStyle.top), "px")
        }, style)
      }, children)), document.getElementById('sendbird-dropdown-portal'));
    }
  }]);

  return MenuItems;
}(React.Component);
MenuItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  style: PropTypes__default["default"].shape({}),
  // https://stackoverflow.com/a/51127130
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  parentContainRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  openLeft: PropTypes__default["default"].bool
};
MenuItems$1.defaultProps = {
  style: {},
  openLeft: false
};

var EmojiListItems$1 = /*#__PURE__*/function (_Component) {
  _rollupPluginBabelHelpers._inherits(EmojiListItems, _Component);

  var _super = _rollupPluginBabelHelpers._createSuper(EmojiListItems);

  function EmojiListItems(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, EmojiListItems);

    _this = _super.call(this, props);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "showParent", function () {
      var _this$props$parentCon = _this.props.parentContainRef,
          parentContainRef = _this$props$parentCon === void 0 ? {} : _this$props$parentCon;
      var current = parentContainRef.current;

      if (parentContainRef && current) {
        current.classList.add('sendbird-reactions--pressed');
      }
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "hideParent", function () {
      var _this$props$parentCon2 = _this.props.parentContainRef,
          parentContainRef = _this$props$parentCon2 === void 0 ? {} : _this$props$parentCon2;
      var current = parentContainRef.current;

      if (parentContainRef && current) {
        current.classList.remove('sendbird-reactions--pressed');
      }
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "setupEvents", function () {
      var closeDropdown = _this.props.closeDropdown;

      var _assertThisInitialize = _rollupPluginBabelHelpers._assertThisInitialized(_this),
          reactionRef = _assertThisInitialize.reactionRef;

      var handleClickOutside = function handleClickOutside(event) {
        if (reactionRef.current && !reactionRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      _this.setState({
        handleClickOutside: handleClickOutside
      });

      document.addEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "cleanUpEvents", function () {
      var handleClickOutside = _this.state.handleClickOutside;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "getBarPosition", function () {
      // calculate the location that the context menu should be
      var _this$props = _this.props,
          parentRef = _this$props.parentRef,
          spaceFromTrigger = _this$props.spaceFromTrigger;
      var spaceFromTriggerX = spaceFromTrigger.x || 0;
      var spaceFromTriggerY = spaceFromTrigger.y || 0;
      var parentRect = parentRef.current.getBoundingClientRect();
      var x = parentRect.x || parentRect.left;
      var y = parentRect.y || parentRect.top;
      var reactionStyle = {
        top: y,
        left: x
      };
      if (!_this.reactionRef.current) return reactionStyle;

      var rect = _this.reactionRef.current.getBoundingClientRect();

      if (reactionStyle.top < rect.height) {
        reactionStyle.top += parentRect.height;
        reactionStyle.top += spaceFromTriggerY;
      } else {
        reactionStyle.top -= rect.height;
        reactionStyle.top -= spaceFromTriggerY;
      }

      reactionStyle.left -= rect.width / 2;
      reactionStyle.left += parentRect.height / 2 - 2;
      reactionStyle.left += spaceFromTriggerX;
      var maximumLeft = window.innerWidth - rect.width;

      if (maximumLeft < reactionStyle.left) {
        reactionStyle.left = maximumLeft;
      }

      if (reactionStyle.left < 0) {
        reactionStyle.left = 0;
      }

      return _this.setState({
        reactionStyle: reactionStyle
      });
    });

    _this.reactionRef = /*#__PURE__*/React__default["default"].createRef();
    _this.state = {
      reactionStyle: {},
      handleClickOutside: function handleClickOutside() {}
    };
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(EmojiListItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupEvents();
      this.getBarPosition();
      this.showParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpEvents();
      this.hideParent();
    }
  }, {
    key: "render",
    value: function render() {
      var reactionStyle = this.state.reactionStyle;
      var children = this.props.children;
      return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-dropdown__menu-backdrop"
      }), /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "sendbird-dropdown__reaction-bar",
        ref: this.reactionRef,
        style: {
          display: 'inline-block',
          position: 'fixed',
          left: "".concat(Math.round(reactionStyle.left), "px"),
          top: "".concat(Math.round(reactionStyle.top), "px")
        }
      }, /*#__PURE__*/React__default["default"].createElement(ui_SortByRow, {
        className: "sendbird-dropdown__reaction-bar__row",
        maxItemCount: 8,
        itemWidth: 44,
        itemHeight: 40
      }, children))), document.getElementById('sendbird-emoji-list-portal'));
    }
  }]);

  return EmojiListItems;
}(React.Component);
EmojiListItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  parentContainRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  spaceFromTrigger: PropTypes__default["default"].shape({
    x: PropTypes__default["default"].number,
    y: PropTypes__default["default"].number
  })
};
EmojiListItems$1.defaultProps = {
  spaceFromTrigger: {}
};

var ENTER = 13;
var MenuItems = MenuItems$1;
var EmojiListItems = EmojiListItems$1;
var MenuItem = function MenuItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      disable = _ref.disable;

  var handleClickEvent = function handleClickEvent(e) {
    if (!disable) onClick(e);
  };

  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: index.getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']),
    role: "menuitem",
    onClick: handleClickEvent,
    onKeyPress: function onKeyPress(e) {
      if (e.keyCode === ENTER) handleClickEvent(e);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: disable ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  disable: PropTypes__default["default"].bool
};
MenuItem.defaultProps = {
  className: '',
  disable: false
}; // Root components should be appended before ContextMenu is rendered

var MenuRoot = function MenuRoot() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    id: "sendbird-dropdown-portal"
  });
};
var EmojiReactionListRoot = function EmojiReactionListRoot() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    id: "sendbird-emoji-list-portal"
  });
};
function ContextMenu(_ref2) {
  var menuTrigger = _ref2.menuTrigger,
      menuItems = _ref2.menuItems;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-context-menu",
    style: {
      display: 'inline'
    }
  }, menuTrigger(function () {
    return setShowMenu(!showMenu);
  }), showMenu && menuItems(function () {
    return setShowMenu(false);
  }));
}
ContextMenu.propTypes = {
  menuTrigger: PropTypes__default["default"].func.isRequired,
  menuItems: PropTypes__default["default"].func.isRequired
};

exports.EmojiListItems = EmojiListItems;
exports.EmojiReactionListRoot = EmojiReactionListRoot;
exports.MenuItem = MenuItem;
exports.MenuItems = MenuItems;
exports.MenuRoot = MenuRoot;
exports["default"] = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
