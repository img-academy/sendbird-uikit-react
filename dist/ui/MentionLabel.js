import React__default, { useRef, useState, useCallback } from 'react';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import ConnectedUserProfile from './UserProfile.js';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../index-a1462526.js';
import '../tslib.es6-cee0628b.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-4614f875.js';
import '../LocalizationContext-79eb0635.js';
import '../index-7e8c8e8d.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../uuid-b12b05c7.js';
import '../index-775a609a.js';

function MentionLabel(props) {
  var _a, _b, _c;

  var mentionTemplate = props.mentionTemplate,
      mentionedUserId = props.mentionedUserId,
      isByMe = props.isByMe;
  var mentionRef = useRef();
  var sendbirdState = useSendbirdStateContext();
  var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var amIBeingMentioned = userId === mentionedUserId;

  var _d = useState(),
      user = _d[0],
      setUser = _d[1];

  var fetchUser = useCallback(function (toggleDropdown) {
    if (user) {
      toggleDropdown();
    }

    var query = sdk.createApplicationUserListQuery();
    query.userIdsFilter = [mentionedUserId];
    query.next(function (members) {
      if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
        setUser(members[0]);
      }

      toggleDropdown();
    });
  }, [sdk, mentionedUserId]);
  return /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement("a", {
        className: "\n            sendbird-word__mention\n            " + (amIBeingMentioned ? 'sendbird-word__mention--me' : '') + "\n          ",
        onClick: function onClick() {
          return fetchUser(toggleDropdown);
        },
        ref: mentionRef
      }, /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.CAPTION_1,
        color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
      }, "" + mentionTemplate + mentionedUserId));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems
      /**
      * parentRef: For catching location(x, y) of MenuItems
      * parentContainRef: For toggling more options(menus & reactions)
      */
      , {
        parentRef: mentionRef,
        parentContainRef: mentionRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        disableMessaging: true,
        user: user,
        onSuccess: closeDropdown
      }));
    }
  });
}

export { MentionLabel as default };
//# sourceMappingURL=MentionLabel.js.map
