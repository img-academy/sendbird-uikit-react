import { a as __spreadArray, _ as __assign } from '../../tslib.es6-cee0628b.js';
import React__default, { useState, useContext, useEffect } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-33c5276e.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import Modal from '../../ui/Modal.js';
import { L as Label, b as LabelColors, a as LabelTypography } from '../../index-3db1006f.js';
import { a as ButtonTypes } from '../../index-775a609a.js';
import UserListItem from '../../ui/UserListItem.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../sendBirdSelectors.js';
import '../../topics-af18f6dc.js';
import '../../withSendBird.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import 'react-dom';
import '../../index-2db42eac.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../utils-a66b9c45.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-a1462526.js';
import '../../ui/SortByRow.js';

var filterUser = function filterUser(idsToFilter) {
  return function (currentId) {
    return idsToFilter === null || idsToFilter === void 0 ? void 0 : idsToFilter.includes(currentId);
  };
};
var setChannelType = function setChannelType(params, type) {
  if (type === 'broadcast') {
    // eslint-disable-next-line no-param-reassign
    params.isBroadcast = true;
  }

  if (type === 'supergroup') {
    // eslint-disable-next-line no-param-reassign
    params.isSuper = true;
  }

  return params;
};
var createDefaultUserListQuery = function createDefaultUserListQuery(_a) {
  var sdk = _a.sdk,
      userFilledApplicationUserListQuery = _a.userFilledApplicationUserListQuery;
  var params = sdk.createApplicationUserListQuery();

  if (userFilledApplicationUserListQuery) {
    Object.keys(userFilledApplicationUserListQuery).forEach(function (key) {
      params[key] = userFilledApplicationUserListQuery[key];
    });
  }

  return params;
};

var InviteMembers = function InviteMembers(_a) {
  var _b, _c, _d;

  var onCancel = _a.onCancel;

  var _e = useCreateChannelContext(),
      onBeforeCreateChannel = _e.onBeforeCreateChannel,
      onCreateChannel = _e.onCreateChannel,
      createChannel = _e.createChannel,
      type = _e.type;

  var globalStore = useSendbirdStateContext();
  var userId = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.userId;
  var sdk = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.sdkStore) === null || _d === void 0 ? void 0 : _d.sdk;
  var idsToFilter = [userId];

  var _f = useState([]),
      users = _f[0],
      setUsers = _f[1];

  var _g = useState({}),
      selectedUsers = _g[0],
      setSelectedUsers = _g[1];

  var stringSet = useContext(LocalizationContext).stringSet;

  var _h = useState(null),
      usersDataSource = _h[0],
      setUsersDataSource = _h[1];

  var selectedCount = Object.keys(selectedUsers).length;
  var titleText = stringSet.MODAL__CREATE_CHANNEL__TITLE;
  var submitText = stringSet.BUTTON__CREATE;
  var userQueryCreator = createDefaultUserListQuery({
    sdk: sdk
  });
  useEffect(function () {
    var applicationUserListQuery = userQueryCreator;
    setUsersDataSource(applicationUserListQuery);
    applicationUserListQuery.next(function (users_) {
      setUsers(users_);
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(Modal, {
    titleText: titleText,
    submitText: submitText,
    type: ButtonTypes.PRIMARY,
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      var selectedUserList = Object.keys(selectedUsers);

      if (selectedUserList.length > 0) {
        if (onBeforeCreateChannel) {
          var params = onBeforeCreateChannel(selectedUserList);
          setChannelType(params, type);
          createChannel(params).then(function (channel) {
            onCreateChannel(channel);
          });
        } else {
          var params = new sdk.GroupChannelParams();
          params.addUserIds(selectedUserList);
          params.isDistinct = false;

          if (userId) {
            params.operatorUserIds = [userId];
          }

          setChannelType(params, type); // do not have custom params

          createChannel(params).then(function (channel) {
            onCreateChannel(channel);
          });
        }

        onCancel();
      }
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Label, {
    color: selectedCount > 0 ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3,
    type: LabelTypography.CAPTION_1
  }, selectedCount + " " + stringSet.MODAL__INVITE_MEMBER__SELECTEC), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-create-channel--scroll",
    onScroll: function onScroll(e) {
      var eventTarget = e.target;
      var hasNext = usersDataSource.hasNext;
      var fetchMore = eventTarget.clientHeight + eventTarget.scrollTop === eventTarget.scrollHeight;

      if (hasNext && fetchMore) {
        usersDataSource.next(function (usersBatch, error) {
          if (error) {
            return;
          }

          setUsers(__spreadArray(__spreadArray([], users, true), usersBatch, true));
        });
      }
    }
  }, users.map(function (user) {
    return !filterUser(idsToFilter)(user.userId) && /*#__PURE__*/React__default.createElement(UserListItem, {
      key: user.userId,
      user: user,
      checkBox: true,
      checked: selectedUsers[user.userId],
      onChange: function onChange(event) {
        var _a;

        var modifiedSelectedUsers = __assign(__assign({}, selectedUsers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

        if (!event.target.checked) {
          delete modifiedSelectedUsers[event.target.id];
        }

        setSelectedUsers(modifiedSelectedUsers);
      }
    });
  }))));
};

export { InviteMembers as default };
//# sourceMappingURL=InviteMembers.js.map
