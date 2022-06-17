'use strict';

var React = require('react');
var withSendBird = require('./withSendBird.js');
require('./_rollupPluginBabelHelpers-77e2b7af.js');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(withSendBird.SendbirdSdkContext);
  return context;
}

module.exports = useSendbirdStateContext;
//# sourceMappingURL=useSendbirdStateContext.js.map
