import React__default, { useMemo } from 'react';

var EditUserProfileProviderContext = /*#__PURE__*/React__default.createContext(undefined);

var EditUserProfileProvider = function EditUserProfileProvider(props) {
  var children = props.children,
      onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  var value = useMemo(function () {
    return {
      onEditProfile: onEditProfile,
      onCancel: onCancel,
      onThemeChange: onThemeChange
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(EditUserProfileProviderContext.Provider, {
    value: value
  }, children);
};

var useEditUserProfileProvider = function useEditUserProfileProvider() {
  return React__default.useContext(EditUserProfileProviderContext);
};

export { EditUserProfileProvider, useEditUserProfileProvider };
//# sourceMappingURL=context.js.map
