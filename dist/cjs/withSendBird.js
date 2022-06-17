'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SendbirdSdkContext = /*#__PURE__*/React__default["default"].createContext();

var withSendbirdContext = function withSendbirdContext(OriginalComponent, mapStoreToProps) {
  var ContextAwareComponent = function ContextAwareComponent(props) {
    return /*#__PURE__*/React__default["default"].createElement(SendbirdSdkContext.Consumer, null, function (context) {
      if (mapStoreToProps && typeof mapStoreToProps !== 'function') {
        // eslint-disable-next-line no-console
        console.warn('Second parameter to withSendbirdContext must be a pure function');
      }

      var mergedProps = mapStoreToProps && typeof mapStoreToProps === 'function' ? _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, mapStoreToProps(context)), props) : _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, context), props); // eslint-disable-next-line react/jsx-props-no-spreading

      return /*#__PURE__*/React__default["default"].createElement(OriginalComponent, mergedProps);
    });
  };

  var componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = "SendbirdAware".concat(componentName);
  return ContextAwareComponent;
};

exports.SendbirdSdkContext = SendbirdSdkContext;
exports["default"] = withSendbirdContext;
//# sourceMappingURL=withSendBird.js.map
