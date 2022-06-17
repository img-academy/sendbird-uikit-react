'use strict';

var DEFAULT_URL_PREFIX = 'https://static.sendbird.com/sample/cover/cover_';
var getOpenChannelAvatar = function getOpenChannelAvatar(channel) {
  if (channel && channel.coverUrl) {
    return channel.coverUrl;
  }
};
var getChannelAvatarSource = function getChannelAvatarSource(channel, currentUserId) {
  if (channel && channel.coverUrl) {
    if (!new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
      return channel.coverUrl;
    }
  }

  return channel && channel.members ? channel.members.filter(function (member) {
    return member.userId !== currentUserId;
  }).map(function (_a) {
    var profileUrl = _a.profileUrl;
    return profileUrl;
  }) : [];
};
var generateDefaultAvatar = function generateDefaultAvatar(channel) {
  if (channel && channel.coverUrl) {
    if (new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
      return true;
    }

    return false;
  }

  return true;
};

exports.generateDefaultAvatar = generateDefaultAvatar;
exports.getChannelAvatarSource = getChannelAvatarSource;
exports.getOpenChannelAvatar = getOpenChannelAvatar;
//# sourceMappingURL=utils-f418bdf3.js.map