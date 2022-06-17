'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');
var UserProfileContext = require('../UserProfileContext-46f306ca.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var ui_Avatar = require('./Avatar.js');
var ui_MutedAvatarOverlay = require('./MutedAvatarOverlay.js');
var ui_Checkbox = require('./Checkbox.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-25825fe1.js');
require('../stringSet-435b3346.js');
require('../index-6f7d86a8.js');
require('../tslib.es6-cb3f88e3.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../uuid-a43dad75.js');
require('../withSendBird.js');
require('../sendBirdSelectors.js');
require('../topics-dc71c830.js');
require('../index-8f00ec86.js');
require('../index-e0c5dddd.js');
require('react-dom');
require('./SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function UserListItem(_ref) {
  var className = _ref.className,
      user = _ref.user,
      checkBox = _ref.checkBox,
      disableMessaging = _ref.disableMessaging,
      currentUser = _ref.currentUser,
      checked = _ref.checked,
      _onChange = _ref.onChange,
      action = _ref.action;
  var uniqueKey = user.userId;
  var actionRef = React__default["default"].useRef(null);
  var parentRef = React__default["default"].useRef(null);
  var avatarRef = React__default["default"].useRef(null);

  var _useContext = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _useContext.disableUserProfile,
      renderUserProfile = _useContext.renderUserProfile;

  var _useContext2 = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext2.stringSet;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-user-list-item']).join(' '),
    ref: parentRef
  }, user.isMuted && /*#__PURE__*/React__default["default"].createElement(ui_MutedAvatarOverlay, {
    height: 40,
    width: 40
  }), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        className: "sendbird-user-list-item__avatar",
        ref: avatarRef,
        src: user.profileUrl,
        width: "40px",
        height: "40px",
        onClick: function onClick() {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        }
      });
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        openLeft: true,
        parentRef: avatarRef // for catching location(x, y) of MenuItems
        ,
        parentContainRef: avatarRef // for toggling more options(menus & reactions)
        ,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: user,
        currentUserId: currentUser,
        close: closeDropdown
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        disableMessaging: disableMessaging,
        user: user,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__title",
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && ' (You)'), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__subtitle",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId), checkBox &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  React__default["default"].createElement("label", {
    className: "sendbird-user-list-item__checkbox",
    htmlFor: uniqueKey
  }, /*#__PURE__*/React__default["default"].createElement(ui_Checkbox, {
    id: uniqueKey,
    checked: checked,
    onChange: function onChange(event) {
      return _onChange(event);
    }
  })), user.role === 'operator' && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__operator",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-user-list-item__action",
    ref: actionRef
  }, action({
    actionRef: actionRef,
    parentRef: parentRef
  })));
}
UserListItem.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  user: PropTypes__default["default"].shape({
    userId: PropTypes__default["default"].string,
    role: PropTypes__default["default"].string,
    isMuted: PropTypes__default["default"].bool,
    nickname: PropTypes__default["default"].string,
    profileUrl: PropTypes__default["default"].string
  }).isRequired,
  disableMessaging: PropTypes__default["default"].bool,
  currentUser: PropTypes__default["default"].string,
  action: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  checkBox: PropTypes__default["default"].bool,
  checked: PropTypes__default["default"].bool,
  onChange: PropTypes__default["default"].func
};
UserListItem.defaultProps = {
  className: '',
  currentUser: '',
  checkBox: false,
  disableMessaging: false,
  checked: false,
  action: null,
  onChange: function onChange() {}
};

module.exports = UserListItem;
//# sourceMappingURL=UserListItem.js.map
