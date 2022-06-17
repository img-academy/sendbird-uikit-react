'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-444c423e.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-60feae29.js');
require('./stringSet-435b3346.js');
require('./index-6f7d86a8.js');
require('./index-94591769.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-77e2b7af.js');
require('./ui/Icon.js');
require('./index-8f00ec86.js');
require('./index-25825fe1.js');
require('./utils-81069a8c.js');
require('./useSendbirdStateContext.js');
require('./withSendBird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-cb3f88e3.js');
require('./ui/ImageRenderer.js');
require('./uuid-a43dad75.js');
require('./ui/TextButton.js');
require('./color-c2dc807b.js');
require('./actionTypes-047a4c0d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditProfile = function EditProfile(props) {
  var onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  return /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileProvider, {
    onEditProfile: onEditProfile,
    onCancel: onCancel,
    onThemeChange: onThemeChange
  }, /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfile, null));
};

module.exports = EditProfile;
//# sourceMappingURL=EditUserProfile.js.map
