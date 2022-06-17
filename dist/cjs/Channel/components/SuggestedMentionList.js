'use strict';

var React = require('react');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Avatar = require('../../ui/Avatar.js');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var Channel_context = require('../../ChannelProvider-2848c6e0.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var _const$1 = require('../../const-61eaa01a.js');
var _const = require('../../const-56d42d10.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../stringSet-435b3346.js');
require('../../tslib.es6-cb3f88e3.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../index-6f7d86a8.js');
require('../../UserProfileContext-46f306ca.js');
require('../../index-e7940a94.js');
require('../../topics-dc71c830.js');
require('../../index-e0c5dddd.js');
require('../../compareIds-669db256.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../withSendBird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SuggestedUserMentionItem(props) {
  var member = props.member,
      _a = props.isFocused,
      isFocused = _a === void 0 ? false : _a,
      parentScrollRef = props.parentScrollRef,
      _onClick = props.onClick,
      _onMouseOver = props.onMouseOver,
      _onMouseMove = props.onMouseMove,
      renderUserMentionItem = props.renderUserMentionItem;
  var scrollRef = React.useRef(null);
  var _b = React.useContext(LocalizationContext.LocalizationContext).stringSet,
      stringSet = _b === void 0 ? {} : _b;
  React.useEffect(function () {
    var _a, _b, _c, _d, _e, _f, _g;

    if (isFocused) {
      if (((_a = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) >= ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.offsetTop)) {
        (_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.scrollIntoView({
          block: "start",
          inline: "nearest"
        });
      } else if (((_d = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _d === void 0 ? void 0 : _d.scrollTop) + ((_e = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _e === void 0 ? void 0 : _e.clientHeight) <= ((_f = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _f === void 0 ? void 0 : _f.offsetTop)) {
        (_g = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _g === void 0 ? void 0 : _g.scrollIntoView({
          block: "end",
          inline: "nearest"
        });
      }
    }
  }, [isFocused]);
  var customMentionItem = React.useMemo(function () {
    if (renderUserMentionItem) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-mention-suggest-list__user-item",
        onClick: function onClick(event) {
          return _onClick === null || _onClick === void 0 ? void 0 : _onClick({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        onMouseOver: function onMouseOver(event) {
          return _onMouseOver === null || _onMouseOver === void 0 ? void 0 : _onMouseOver({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        onMouseMove: function onMouseMove(event) {
          return _onMouseMove === null || _onMouseMove === void 0 ? void 0 : _onMouseMove({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        key: member.nickname,
        ref: scrollRef
      }, renderUserMentionItem({
        user: member
      }));
    }
  }, [renderUserMentionItem]);

  if (customMentionItem) {
    return customMentionItem;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-mention-suggest-list__user-item " + (isFocused ? 'focused' : ''),
    onClick: function onClick(event) {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    onMouseOver: function onMouseOver(event) {
      return _onMouseOver === null || _onMouseOver === void 0 ? void 0 : _onMouseOver({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    onMouseMove: function onMouseMove(event) {
      return _onMouseMove === null || _onMouseMove === void 0 ? void 0 : _onMouseMove({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    key: member.nickname,
    ref: scrollRef
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    className: "sendbird-mention-suggest-list__user-item__avatar",
    src: member === null || member === void 0 ? void 0 : member.profileUrl,
    alt: "user-profile",
    width: "24px",
    height: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-mention-suggest-list__user-item__nickname",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: (member === null || member === void 0 ? void 0 : member.nickname) ? ui_Label.LabelColors.ONBACKGROUND_1 : ui_Label.LabelColors.ONBACKGROUND_3
  }, (member === null || member === void 0 ? void 0 : member.nickname) || (stringSet === null || stringSet === void 0 ? void 0 : stringSet.MENTION_NAME__NO_NAME)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-mention-suggest-list__user-item__user-id",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, member === null || member === void 0 ? void 0 : member.userId));
}

var DEBOUNCING_TIME = 300;

function SuggestedMentionList(props) {
  var _a, _b, _c;

  var _d = props.targetNickname,
      targetNickname = _d === void 0 ? '' : _d,
      // memberListQuery,
  onUserItemClick = props.onUserItemClick,
      onFocusItemChange = props.onFocusItemChange,
      onFetchUsers = props.onFetchUsers,
      renderUserMentionItem = props.renderUserMentionItem,
      inputEvent = props.inputEvent,
      _e = props.ableAddMention,
      ableAddMention = _e === void 0 ? true : _e,
      _f = props.maxMentionCount,
      maxMentionCount = _f === void 0 ? _const$1.MAX_USER_MENTION_COUNT : _f,
      _g = props.maxSuggestionCount,
      maxSuggestionCount = _g === void 0 ? _const$1.MAX_USER_SUGGESTION_COUNT : _g;

  var _h = useSendbirdStateContext(),
      config = _h.config,
      stores = _h.stores;

  var logger = config.logger;
  var currentUserId = ((_c = (_b = (_a = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _a === void 0 ? void 0 : _a.sdk) === null || _b === void 0 ? void 0 : _b.currentUser) === null || _c === void 0 ? void 0 : _c.userId) || '';
  var currentGroupChannel = Channel_context.useChannel().currentGroupChannel;
  var scrollRef = React.useRef(null);
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _j = React.useState(null),
      timer = _j[0],
      setTimer = _j[1];

  var _k = React.useState(''),
      searchString = _k[0],
      setSearchString = _k[1];

  var _l = React.useState(''),
      lastSearchString = _l[0],
      setLastSearchString = _l[1];

  var _m = React.useState(null),
      currentUser = _m[0],
      setCurrentUser = _m[1];

  var _o = React.useState([]),
      currentMemberList = _o[0],
      setCurrentMemberList = _o[1];

  React.useEffect(function () {
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      setSearchString(targetNickname);
    }, DEBOUNCING_TIME));
  }, [targetNickname]);
  React.useEffect(function () {
    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === _const.MessageInputKeys.Enter) {
      if (currentMemberList.length > 0) {
        onUserItemClick(currentUser);
      }
    }

    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === _const.MessageInputKeys.ArrowUp) {
      var currentUserIndex = currentMemberList.findIndex(function (member) {
        return (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId);
      });

      if (0 < currentUserIndex) {
        setCurrentUser(currentMemberList[currentUserIndex - 1]);
        onFocusItemChange(currentMemberList[currentUserIndex - 1]);
      }
    }

    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === _const.MessageInputKeys.ArrowDown) {
      var currentUserIndex = currentMemberList.findIndex(function (member) {
        return (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId);
      });

      if (currentUserIndex < currentMemberList.length - 1) {
        setCurrentUser(currentMemberList[currentUserIndex + 1]);
        onFocusItemChange(currentMemberList[currentUserIndex + 1]);
      }
    }
  }, [inputEvent]);
  /* Fetch member list */

  React.useEffect(function () {
    if (!currentGroupChannel || !currentGroupChannel.createMemberListQuery) {
      logger.warning('SuggestedMentionList: Creating member list query failed');
      return;
    }

    if (lastSearchString && searchString.indexOf(lastSearchString) === 0 && currentMemberList.length === 0) {
      // Don't need to request query again
      return;
    }

    var query = currentGroupChannel.createMemberListQuery();
    query.limit = maxSuggestionCount;
    query.nicknameStartsWithFilter = searchString.slice(_const$1.USER_MENTION_TEMP_CHAR.length); // Add member list query for customization

    query.next(function (memberList, error) {
      if (error) {
        logger.error('SuggestedMentionList: Fetching member list failed', error);
      }

      if (memberList.length < 1) {
        logger.info('SuggestedMentionList: Fetched member list is empty');
      } else {
        logger.info('SuggestedMentionList: Fetching member list succeeded', {
          memberListQuery: query,
          memberList: memberList
        });
        setCurrentUser(memberList[0]);
      }

      setLastSearchString(searchString);
      onFetchUsers(memberList);
      setCurrentMemberList(memberList.filter(function (member) {
        return currentUserId !== (member === null || member === void 0 ? void 0 : member.userId);
      }));
    });
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url, searchString]);

  if (!ableAddMention && currentMemberList.length === 0) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-mention-suggest-list",
    key: "sendbird-mention-suggest-list",
    ref: scrollRef
  }, ableAddMention && (currentMemberList === null || currentMemberList === void 0 ? void 0 : currentMemberList.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(SuggestedUserMentionItem, {
      key: member === null || member === void 0 ? void 0 : member.nickname,
      member: member,
      isFocused: (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId),
      parentScrollRef: scrollRef,
      onClick: function onClick(_a) {
        var member = _a.member;
        onUserItemClick(member);
      },
      onMouseOver: function onMouseOver(_a) {
        var member = _a.member;
        setCurrentUser(member);
      },
      renderUserMentionItem: renderUserMentionItem
    });
  })), !ableAddMention && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-mention-suggest-list__notice-item"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-mention-suggest-list__notice-item__icon",
    type: ui_Icon.IconTypes.INFO,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
    width: "20px",
    height: "20px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-mention-suggest-list__notice-item__text",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.MENTION_COUNT__OVER_LIMIT.replace('%d', maxMentionCount))));
}

module.exports = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
