'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */

var UserProfileContext = /*#__PURE__*/React__default["default"].createContext({
  disableUserProfile: true,
  isOpenChannel: false,
  renderUserProfile: null
});

var UserProfileProvider = function UserProfileProvider(props) {
  var children = props.children;
  return /*#__PURE__*/React__default["default"].createElement(UserProfileContext.Provider, {
    value: props
  }, children);
};

UserProfileProvider.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  isOpenChannel: PropTypes__default["default"].bool,
  // eslint-disable-next-line react/no-unused-prop-types
  disableUserProfile: PropTypes__default["default"].bool,
  // eslint-disable-next-line react/no-unused-prop-types
  renderUserProfile: PropTypes__default["default"].func
};
UserProfileProvider.defaultProps = {
  isOpenChannel: false,
  disableUserProfile: false,
  renderUserProfile: null
};

exports.UserProfileContext = UserProfileContext;
exports.UserProfileProvider = UserProfileProvider;
//# sourceMappingURL=UserProfileContext-46f306ca.js.map
