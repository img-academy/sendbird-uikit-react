'use strict';

var tslib_es6 = require('../../tslib.es6-cb3f88e3.js');
var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var UserProfileContext = require('../../UserProfileContext-46f306ca.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_MutedAvatarOverlay = require('../../ui/MutedAvatarOverlay.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_UserProfile = require('../../ui/UserProfile.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('prop-types');
require('../../ui/ImageRenderer.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('../../ui/Icon.js');
require('../../uuid-a43dad75.js');
require('../../withSendBird.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../index-8f00ec86.js');
require('../../index-e0c5dddd.js');
require('react-dom');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_NAME = 'sendbird-user-list-item--small';

var UserListItem = function UserListItem(_a) {
  var user = _a.user,
      className = _a.className,
      currentUser = _a.currentUser,
      action = _a.action;
  var actionRef = React.useRef(null);
  var parentRef = React.useRef(null);
  var avatarRef = React.useRef(null);
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _b = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var injectingClassNames = Array.isArray(className) ? className : [className];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: parentRef,
    className: tslib_es6.__spreadArray([COMPONENT_NAME], injectingClassNames, true).join(' ')
  }, user.isMuted && /*#__PURE__*/React__default["default"].createElement(ui_MutedAvatarOverlay, null), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        onClick: function onClick() {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        },
        ref: avatarRef,
        className: COMPONENT_NAME + "__avatar",
        src: user.profileUrl,
        width: 24,
        height: 24
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
        user: user,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: COMPONENT_NAME + "__title",
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && " (You)"), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: COMPONENT_NAME + "__subtitle",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId), user.role === 'operator' && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: COMPONENT_NAME + "__operator",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default["default"].createElement("div", {
    ref: actionRef,
    className: COMPONENT_NAME + "__action"
  }, action({
    actionRef: actionRef,
    parentRef: parentRef
  })));
};

module.exports = UserListItem;
//# sourceMappingURL=UserListItem.js.map
