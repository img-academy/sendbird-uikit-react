import { _ as _objectSpread2 } from './_rollupPluginBabelHelpers-0ec97672.js';
import React__default from 'react';

var SendbirdSdkContext = /*#__PURE__*/React__default.createContext();

var withSendbirdContext = function withSendbirdContext(OriginalComponent, mapStoreToProps) {
  var ContextAwareComponent = function ContextAwareComponent(props) {
    return /*#__PURE__*/React__default.createElement(SendbirdSdkContext.Consumer, null, function (context) {
      if (mapStoreToProps && typeof mapStoreToProps !== 'function') {
        // eslint-disable-next-line no-console
        console.warn('Second parameter to withSendbirdContext must be a pure function');
      }

      var mergedProps = mapStoreToProps && typeof mapStoreToProps === 'function' ? _objectSpread2(_objectSpread2({}, mapStoreToProps(context)), props) : _objectSpread2(_objectSpread2({}, context), props); // eslint-disable-next-line react/jsx-props-no-spreading

      return /*#__PURE__*/React__default.createElement(OriginalComponent, mergedProps);
    });
  };

  var componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = "SendbirdAware".concat(componentName);
  return ContextAwareComponent;
};

export { SendbirdSdkContext, withSendbirdContext as default };
//# sourceMappingURL=withSendBird.js.map
