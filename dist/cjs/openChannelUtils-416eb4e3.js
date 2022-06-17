'use strict';

var OpenChannelMessageStatusTypes = {
  NONE: 'none',
  PENDING: 'pending',
  FAILED: 'failed',
  CANCELED: 'canceled',
  SUCCEEDED: 'succeeded'
};
var getSenderFromMessage = function getSenderFromMessage(message) {
  return message.sender || message._sender;
};
var checkIsSent = function checkIsSent(status) {
  return status === OpenChannelMessageStatusTypes.SUCCEEDED;
};
var checkIsPending = function checkIsPending(status) {
  return status === OpenChannelMessageStatusTypes.PENDING;
};
var checkIsFailed = function checkIsFailed(status) {
  return status === OpenChannelMessageStatusTypes.FAILED;
};
var checkIsByMe = function checkIsByMe(message, userId) {
  return getSenderFromMessage(message).userId === userId;
};
var isFineCopy = function isFineCopy(_a) {
  var message = _a.message;
  return message.messageType === 'user' && message.message.length > 0;
};
var isFineResend = function isFineResend(_a) {
  var message = _a.message,
      status = _a.status,
      userId = _a.userId;
  return checkIsByMe(message, userId) && checkIsFailed(status) && message.isResendable && message.isResendable();
};
var isFineEdit = function isFineEdit(_a) {
  var message = _a.message,
      status = _a.status,
      userId = _a.userId;
  return checkIsByMe(message, userId) && checkIsSent(status);
};
var isFineDelete = function isFineDelete(_a) {
  var message = _a.message,
      userId = _a.userId;
  return checkIsByMe(message, userId);
};
var showMenuTrigger = function showMenuTrigger(props) {
  var message = props.message,
      status = props.status,
      userId = props.userId;

  if (message.messageType === 'user') {
    return isFineDelete({
      message: message,
      status: status,
      userId: userId
    }) || isFineEdit({
      message: message,
      status: status,
      userId: userId
    }) || isFineCopy({
      message: message,
      status: status,
      userId: userId
    }) || isFineResend({
      message: message,
      status: status,
      userId: userId
    });
  } else {
    return isFineDelete({
      message: message,
      status: status,
      userId: userId
    }) || isFineResend({
      message: message,
      status: status,
      userId: userId
    });
  }
};

exports.checkIsByMe = checkIsByMe;
exports.checkIsFailed = checkIsFailed;
exports.checkIsPending = checkIsPending;
exports.checkIsSent = checkIsSent;
exports.getSenderFromMessage = getSenderFromMessage;
exports.isFineCopy = isFineCopy;
exports.isFineDelete = isFineDelete;
exports.isFineEdit = isFineEdit;
exports.isFineResend = isFineResend;
exports.showMenuTrigger = showMenuTrigger;
//# sourceMappingURL=openChannelUtils-416eb4e3.js.map
