import React__default from 'react';
import PropTypes from 'prop-types';

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */

var UserProfileContext = /*#__PURE__*/React__default.createContext({
  disableUserProfile: true,
  isOpenChannel: false,
  renderUserProfile: null
});

var UserProfileProvider = function UserProfileProvider(props) {
  var children = props.children;
  return /*#__PURE__*/React__default.createElement(UserProfileContext.Provider, {
    value: props
  }, children);
};

UserProfileProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  isOpenChannel: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  disableUserProfile: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  renderUserProfile: PropTypes.func
};
UserProfileProvider.defaultProps = {
  isOpenChannel: false,
  disableUserProfile: false,
  renderUserProfile: null
};

export { UserProfileProvider as U, UserProfileContext as a };
//# sourceMappingURL=UserProfileContext-9b9928cf.js.map
