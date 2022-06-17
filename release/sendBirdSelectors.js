import { U as UPDATE_USER_MESSAGE, D as DELETE_MESSAGE, S as SEND_USER_MESSAGE, a as SEND_FILE_MESSAGE, C as CREATE_CHANNEL, L as LEAVE_CHANNEL, b as SEND_MESSAGE_START } from './topics-af18f6dc.js';

var getSdk = function getSdk(store) {
  var _store$stores = store.stores,
      stores = _store$stores === void 0 ? {} : _store$stores;
  var _stores$sdkStore = stores.sdkStore,
      sdkStore = _stores$sdkStore === void 0 ? {} : _stores$sdkStore;
  var sdk = sdkStore.sdk;
  return sdk;
};
var getPubSub = function getPubSub(store) {
  var _store$config = store.config,
      config = _store$config === void 0 ? {} : _store$config;
  var pubSub = config.pubSub;
  return pubSub;
}; // SendBird disconnect. Invalidates currentUser
// eslint-disable-next-line max-len

var getConnect = function getConnect(store) {
  return function (userId, accessToken) {
    return new Promise(function (resolve, reject) {
      var sdk = getSdk(store);

      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      if (!accessToken) {
        sdk.connect(userId).then(function (res) {
          return resolve(res);
        }).catch(function (err) {
          return reject(err);
        });
      } else {
        sdk.connect(userId, accessToken).then(function (res) {
          return resolve(res);
        }).catch(function (err) {
          return reject(err);
        });
      }
    });
  };
}; // SendBird disconnect. Invalidates currentUser

var getDisconnect = function getDisconnect(store) {
  return function () {
    return new Promise(function (resolve, reject) {
      var sdk = getSdk(store);

      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.disconnect().then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    });
  };
}; // Using the updateCurrentUserInfo() method
// you can update a user's nickname and profile image with a URL
// eslint-disable-next-line max-len

var getUpdateUserInfo = function getUpdateUserInfo(store) {
  return function (nickName, profileUrl) {
    return new Promise(function (resolve, reject) {
      var sdk = getSdk(store);

      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.updateCurrentUserInfo(nickName, profileUrl).then(function (res) {
        return resolve(res);
      }).catch(function (err) {
        return reject(err);
      });
    });
  };
};
var getSendUserMessage = function getSendUserMessage(store) {
  return function (channelUrl, userMessageParams) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        var promisify = function promisify() {
          var pendingMsg = null;
          var pendingPromise = new Promise(function (resolve_, reject_) {
            pendingMsg = channel.sendUserMessage(userMessageParams, function (res, err) {
              var swapParams = sdk.getErrorFirstCallback();
              var message = res;
              var error = err;

              if (swapParams) {
                message = err;
                error = res;
              }

              if (error) {
                reject_(error);
                return;
              }

              resolve_(message);
              pubsub.publish(SEND_USER_MESSAGE, {
                message: message,
                channel: channel
              });
            });
            pubsub.publish(SEND_MESSAGE_START, {
              message: pendingMsg,
              channel: channel
            });
          });

          pendingPromise.get = function () {
            return pendingMsg;
          };

          return pendingPromise;
        };

        resolve(promisify());
      }).catch(reject);
    });
  };
};
var getSendFileMessage = function getSendFileMessage(store) {
  return function (channelUrl, fileMessageParams) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        var promisify = function promisify() {
          var pendingMsg = null;
          var pendingPromise = new Promise(function (resolve_, reject_) {
            pendingMsg = channel.sendFileMessage(fileMessageParams, function (res, err) {
              var swapParams = sdk.getErrorFirstCallback();
              var message = res;
              var error = err;

              if (swapParams) {
                message = err;
                error = res;
              }

              if (error) {
                reject_(error);
                return;
              }

              resolve_(message);
              pubsub.publish(SEND_FILE_MESSAGE, {
                message: message,
                channel: channel
              });
            });
          });

          if (fileMessageParams.file) {
            // keep the file's local version in pendingMsg.localUrl
            // because promise doesnt allow overriding of pendingMsg.url
            // eslint-disable-next-line no-param-reassign
            pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
          }

          if (fileMessageParams.fileUrl) {
            // eslint-disable-next-line no-param-reassign
            pendingMsg.localUrl = fileMessageParams.fileUrl;
          } // eslint-disable-next-line no-param-reassign


          pendingMsg.requestState = 'pending';
          pubsub.publish(SEND_MESSAGE_START, {
            message: pendingMsg,
            channel: channel
          });

          pendingPromise.get = function () {
            return pendingMsg;
          };

          return pendingPromise;
        };

        resolve(promisify());
      }).catch(reject);
    });
  };
};
var getUpdateUserMessage = function getUpdateUserMessage(store) {
  return function (channelUrl, messageId, params) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.updateUserMessage(messageId, params, function (res, err) {
          var swapParams = sdk.getErrorFirstCallback();
          var message = res;
          var error = err;

          if (swapParams) {
            message = err;
            error = res;
          }

          if (error) {
            reject(error);
            return;
          }

          resolve(message);
          pubsub.publish(UPDATE_USER_MESSAGE, {
            message: message,
            channel: channel,
            // workaround for updating channelPreview on message-edit
            // https://sendbird.atlassian.net/browse/UIKIT-268
            fromSelector: true
          });
        });
      }).catch(reject);
    });
  };
};
var getDeleteMessage = function getDeleteMessage(store) {
  return function (channelUrl, message) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        var messageId = message.messageId;
        channel.deleteMessage(message, function (res, err) {
          var swapParams = sdk.getErrorFirstCallback();
          var error = err;

          if (swapParams) {
            error = res;
          }

          if (error) {
            reject(error);
            return;
          }

          resolve(message);
          pubsub.publish(DELETE_MESSAGE, {
            messageId: messageId,
            channel: channel
          });
        });
      }).catch(reject);
    });
  };
};
var getResendUserMessage = function getResendUserMessage(store) {
  return function (channelUrl, failedMessage) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.resendUserMessage(failedMessage).then(function (message) {
          resolve(message);
          pubsub.publish(SEND_USER_MESSAGE, {
            message: message,
            channel: channel
          });
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getResendFileMessage = function getResendFileMessage(store) {
  return function (channelUrl, failedMessage) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.resendFileMessage(failedMessage).then(function (message) {
          resolve(message);
          pubsub.publish(SEND_FILE_MESSAGE, {
            message: message,
            channel: channel
          });
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getCreateChannel = function getCreateChannel(store) {
  return function (params) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.createChannel(params).then(function (channel) {
        resolve(channel);
        pubsub.publish(CREATE_CHANNEL, {
          channel: channel
        });
      }).catch(reject);
    });
  };
};
var getLeaveChannel = function getLeaveChannel(store) {
  return function (channelUrl) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.leave().then(function () {
          resolve(channel);
          pubsub.publish(LEAVE_CHANNEL, {
            channel: channel
          });
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getFreezeChannel = function getFreezeChannel(store) {
  return function (channelUrl) {
    var sdk = getSdk(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.freeze().then(function () {
          // do not need pubsub here - event listener works
          resolve(channel);
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getUnFreezeChannel = function getUnFreezeChannel(store) {
  return function (channelUrl) {
    var sdk = getSdk(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.GroupChannel.getChannel(channelUrl).then(function (channel) {
        channel.unfreeze().then(function () {
          // do not need pubsub here - event listener works
          resolve(channel);
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getCreateOpenChannel = function getCreateOpenChannel(store) {
  return function (params) {
    var sdk = getSdk(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.createChannel(params).then(function (channel) {
        resolve(channel);
      }).catch(reject);
    });
  };
};
var enterOpenChannel = function enterOpenChannel(store) {
  return function (channelUrl) {
    var sdk = getSdk(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
        if (error) {
          reject(new Error(error));
          return;
        }

        openChannel.enter(function (response, enterError) {
          if (error) {
            reject(new Error(enterError));
            return;
          }

          resolve(response);
        });
      });
    });
  };
};
var exitOpenChannel = function exitOpenChannel(store) {
  return function (channelUrl) {
    var sdk = getSdk(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
        if (error) {
          reject(new Error(error));
          return;
        }

        openChannel.exit(function (response, exitError) {
          if (error) {
            reject(new Error(exitError));
            return;
          }

          resolve(response);
        });
      });
    });
  };
};
var getOpenChannelSendUserMessage = function getOpenChannelSendUserMessage(store) {
  return function (channelUrl, userMessageParams) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        var promisify = function promisify() {
          var pendingMsg = null;
          var pendingPromise = new Promise(function (resolve_, reject_) {
            pendingMsg = channel.sendUserMessage(userMessageParams, function (res, err) {
              var swapParams = sdk.getErrorFirstCallback();
              var message = res;
              var error = err;

              if (swapParams) {
                message = err;
                error = res;
              }

              if (error) {
                reject_(error);
                return;
              }

              resolve_(message);
              pubsub.publish(SEND_USER_MESSAGE, {
                message: message,
                channel: channel
              });
            });
            pubsub.publish(SEND_MESSAGE_START, {
              message: pendingMsg,
              channel: channel
            });
          });

          pendingPromise.get = function () {
            return pendingMsg;
          };

          return pendingPromise;
        };

        resolve(promisify());
      }).catch(reject);
    });
  };
};
var getOpenChannelSendFileMessage = function getOpenChannelSendFileMessage(store) {
  return function (channelUrl, fileMessageParams) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        var promisify = function promisify() {
          var pendingMsg = null;
          var pendingPromise = new Promise(function (resolve_, reject_) {
            pendingMsg = channel.sendFileMessage(fileMessageParams, function (res, err) {
              var swapParams = sdk.getErrorFirstCallback();
              var message = res;
              var error = err;

              if (swapParams) {
                message = err;
                error = res;
              }

              if (error) {
                reject_(error);
                return;
              }

              resolve_(message);
              pubsub.publish(SEND_FILE_MESSAGE, {
                message: message,
                channel: channel
              });
            });
          });

          if (fileMessageParams.file) {
            // keep the file's local version in pendingMsg.localUrl
            // because promise doesnt allow overriding of pendingMsg.url
            // eslint-disable-next-line no-param-reassign
            pendingMsg.localUrl = URL.createObjectURL(fileMessageParams.file);
          }

          if (fileMessageParams.fileUrl) {
            // eslint-disable-next-line no-param-reassign
            pendingMsg.localUrl = fileMessageParams.fileUrl;
          } // eslint-disable-next-line no-param-reassign


          pendingMsg.requestState = 'pending';
          pubsub.publish(SEND_MESSAGE_START, {
            message: pendingMsg,
            channel: channel
          });

          pendingPromise.get = function () {
            return pendingMsg;
          };

          return pendingPromise;
        };

        resolve(promisify());
      }).catch(reject);
    });
  };
};
var getOpenChannelUpdateUserMessage = function getOpenChannelUpdateUserMessage(store) {
  return function (channelUrl, messageId, params) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        channel.updateUserMessage(messageId, params, function (res, err) {
          var swapParams = sdk.getErrorFirstCallback();
          var message = res;
          var error = err;

          if (swapParams) {
            message = err;
            error = res;
          }

          if (error) {
            reject(error);
            return;
          }

          resolve(message);
          pubsub.publish(UPDATE_USER_MESSAGE, {
            message: message,
            channel: channel,
            // workaround for updating channelPreview on message-edit
            // https://sendbird.atlassian.net/browse/UIKIT-268
            fromSelector: true
          });
        });
      }).catch(reject);
    });
  };
};
var getOpenChannelDeleteMessage = function getOpenChannelDeleteMessage(store) {
  return function (channelUrl, message) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        var messageId = message.messageId;
        channel.deleteMessage(message, function (res, err) {
          var swapParams = sdk.getErrorFirstCallback();
          var error = err;

          if (swapParams) {
            error = res;
          }

          if (error) {
            reject(error);
            return;
          }

          resolve(message);
          pubsub.publish(DELETE_MESSAGE, {
            messageId: messageId,
            channel: channel
          });
        });
      }).catch(reject);
    });
  };
};
var getOpenChannelResendUserMessage = function getOpenChannelResendUserMessage(store) {
  return function (channelUrl, failedMessage) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        channel.resendUserMessage(failedMessage).then(function (message) {
          resolve(message);
          pubsub.publish(SEND_USER_MESSAGE, {
            message: message,
            channel: channel
          });
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var getOpenChannelResendFileMessage = function getOpenChannelResendFileMessage(store) {
  return function (channelUrl, failedMessage) {
    var sdk = getSdk(store);
    var pubsub = getPubSub(store);
    return new Promise(function (resolve, reject) {
      if (!sdk) {
        reject(new Error('Sdk not found'));
      }

      sdk.OpenChannel.getChannel(channelUrl).then(function (channel) {
        channel.resendFileMessage(failedMessage).then(function (message) {
          resolve(message);
          pubsub.publish(SEND_FILE_MESSAGE, {
            message: message,
            channel: channel
          });
        }).catch(reject);
      }).catch(reject);
    });
  };
};
var sendBirdSelectors = {
  getSdk: getSdk,
  getConnect: getConnect,
  getDisconnect: getDisconnect,
  getUpdateUserInfo: getUpdateUserInfo,
  getSendUserMessage: getSendUserMessage,
  getSendFileMessage: getSendFileMessage,
  getUpdateUserMessage: getUpdateUserMessage,
  getDeleteMessage: getDeleteMessage,
  getResendUserMessage: getResendUserMessage,
  getResendFileMessage: getResendFileMessage,
  getFreezeChannel: getFreezeChannel,
  getUnFreezeChannel: getUnFreezeChannel,
  getCreateChannel: getCreateChannel,
  getLeaveChannel: getLeaveChannel,
  getCreateOpenChannel: getCreateOpenChannel,
  getEnterOpenChannel: enterOpenChannel,
  getExitOpenChannel: exitOpenChannel,
  getOpenChannelSendUserMessage: getOpenChannelSendUserMessage,
  getOpenChannelSendFileMessage: getOpenChannelSendFileMessage,
  getOpenChannelUpdateUserMessage: getOpenChannelUpdateUserMessage,
  getOpenChannelDeleteMessage: getOpenChannelDeleteMessage,
  getOpenChannelResendUserMessage: getOpenChannelResendUserMessage,
  getOpenChannelResendFileMessage: getOpenChannelResendFileMessage
}; // TODO: Check naming

export { sendBirdSelectors as default, enterOpenChannel, exitOpenChannel, getConnect, getCreateChannel, getCreateOpenChannel, getDeleteMessage, getDisconnect, getFreezeChannel, getLeaveChannel, getOpenChannelDeleteMessage, getOpenChannelResendFileMessage, getOpenChannelResendUserMessage, getOpenChannelSendFileMessage, getOpenChannelSendUserMessage, getOpenChannelUpdateUserMessage, getPubSub, getResendFileMessage, getResendUserMessage, getSdk, getSendFileMessage, getSendUserMessage, getUnFreezeChannel, getUpdateUserInfo, getUpdateUserMessage };
//# sourceMappingURL=sendBirdSelectors.js.map
