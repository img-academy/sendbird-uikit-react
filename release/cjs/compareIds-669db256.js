'use strict';

var isEmpty = function isEmpty(val) {
  return val === null || val === undefined;
}; // Some Ids return string and number inconsistently
// only use to comapre IDs


function compareIds (a, b) {
  if (isEmpty(a) || isEmpty(b)) {
    return false;
  }

  var aString = a.toString();
  var bString = b.toString();
  return aString === bString;
}

exports.compareIds = compareIds;
//# sourceMappingURL=compareIds-669db256.js.map
