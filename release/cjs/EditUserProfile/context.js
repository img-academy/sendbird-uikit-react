'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditUserProfileProviderContext = /*#__PURE__*/React__default["default"].createContext(undefined);

var EditUserProfileProvider = function EditUserProfileProvider(props) {
  var children = props.children,
      onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  var value = React.useMemo(function () {
    return {
      onEditProfile: onEditProfile,
      onCancel: onCancel,
      onThemeChange: onThemeChange
    };
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(EditUserProfileProviderContext.Provider, {
    value: value
  }, children);
};

var useEditUserProfileProvider = function useEditUserProfileProvider() {
  return React__default["default"].useContext(EditUserProfileProviderContext);
};

exports.EditUserProfileProvider = EditUserProfileProvider;
exports.useEditUserProfileProvider = useEditUserProfileProvider;
//# sourceMappingURL=context.js.map
