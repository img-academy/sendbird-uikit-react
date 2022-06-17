'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-60feae29.js');
var ui_Accordion = require('../../ui/Accordion.js');
var ui_Label = require('../../index-25825fe1.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var ui_Button = require('../../index-8f00ec86.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var ChannelSettings_components_UserListItem = require('./UserListItem.js');
var tslib_es6 = require('../../tslib.es6-cb3f88e3.js');
var ui_Modal = require('../../ui/Modal.js');
var ui_UserListItem = require('../../ui/UserListItem.js');
var ChannelSettings_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var MemberList = require('../../MemberList-475ddc8c.js');
var utils = require('../../utils-81069a8c.js');
require('../../stringSet-435b3346.js');
require('../../index-6f7d86a8.js');
require('../../ui/AccordionGroup.js');
require('../../context-aef520dd.js');
require('../../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../../index-e0c5dddd.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../UserProfileContext-46f306ca.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-a43dad75.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../withSendBird.js');
require('../../sendBirdSelectors.js');
require('../../topics-dc71c830.js');
require('../../index-94591769.js');
require('../../ui/Checkbox.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OperatorsModal(_a) {
  var _b;

  var onCancel = _a.onCancel;

  var _c = React.useState([]),
      operators = _c[0],
      setOperators = _c[1];

  var _d = React.useState(null),
      operatorQuery = _d[0],
      setOperatorQuery = _d[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  React.useEffect(function () {
    var operatorListQuery = channel.createOperatorListQuery();
    operatorListQuery.limit = 20;
    operatorListQuery.next(function (operators, error) {
      if (error) {
        return;
      }

      setOperators(operators);
    });
    setOperatorQuery(operatorListQuery);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    hideFooter: true,
    titleText: "All operators",
    onCancel: onCancel
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function onScroll(e) {
      var hasNext = operatorQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        operatorQuery.next(function (o, error) {
          if (error) {
            return;
          }

          setOperators(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], operators, true), o, true));
        });
      }
    }
  }, operators.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      currentUser: currentUser,
      user: member,
      key: member.userId,
      action: function action(_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.removeOperators([member.userId], function (response, error) {
                  if (error) {
                    return;
                  }

                  setOperators(operators.filter(function (_a) {
                    var userId = _a.userId;
                    return userId !== member.userId;
                  }));
                });
                closeDropdown();
              }
            }, "Dismiss operator"));
          }
        });
      }
    });
  }))));
}

function AddOperatorsModal(_a) {
  var onCancel = _a.onCancel,
      _onSubmit = _a.onSubmit;

  var _b = React.useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = React.useState({}),
      selectedMembers = _c[0],
      setSelectedMembers = _c[1];

  var _d = React.useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var channel = ChannelSettings_context.useChannelSettings().channel;
  React.useEffect(function () {
    var memberListQuery = channel.createMemberListQuery();
    memberListQuery.limit = 20;
    memberListQuery.next(function (members, error) {
      if (error) {
        return;
      }

      setMembers(members);
    });
    setMemberQuery(memberListQuery);
  }, []);
  var selectedCount = Object.keys(selectedMembers).filter(function (m) {
    return selectedMembers[m];
  }).length;
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    type: ui_Button.Type.PRIMARY,
    submitText: "Add",
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      var members = Object.keys(selectedMembers).filter(function (m) {
        return selectedMembers[m];
      });
      channel === null || channel === void 0 ? void 0 : channel.addOperators(members).then(function () {
        _onSubmit(members);
      });
    },
    titleText: "Select members"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    color: selectedCount > 0 ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_3,
    type: ui_Label.LabelTypography.CAPTION_1
  }, selectedCount + " " + stringSet.MODAL__INVITE_MEMBER__SELECTEC), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function onScroll(e) {
      var hasNext = memberQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        memberQuery.next(function (o, error) {
          if (error) {
            return;
          }

          setMembers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      checkBox: true,
      checked: selectedMembers[member.userId],
      onChange: function onChange(event) {
        var _a;

        var modifiedSelectedMembers = tslib_es6.__assign(tslib_es6.__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

        if (!event.target.checked) {
          delete modifiedSelectedMembers[event.target.id];
        }

        setSelectedMembers(modifiedSelectedMembers);
      },
      user: member,
      key: member.userId
    });
  }))));
}

var OperatorList = function OperatorList() {
  var _a;

  var _b = React.useState([]),
      operators = _b[0],
      setOperators = _b[1];

  var _c = React.useState(false),
      showMore = _c[0],
      setShowMore = _c[1];

  var _d = React.useState(false),
      showAdd = _d[0],
      setShowAdd = _d[1];

  var _e = React.useState(false),
      hasNext = _e[0],
      setHasNext = _e[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var state = useSendbirdStateContext();
  var channel = ChannelSettings_context.useChannelSettings().channel;
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  React.useEffect(function () {
    if (!channel) {
      setOperators([]);
      return;
    }

    var operatorListQuery = channel.createOperatorListQuery();
    operatorListQuery.limit = 10;
    operatorListQuery.next(function (operators, error) {
      if (error) {
        return;
      }

      setOperators(operators);
      setHasNext(operatorListQuery.hasNext);
    });
  }, [channel]);
  var refershList = React.useCallback(function () {
    if (!channel) {
      setOperators([]);
      return;
    }

    var operatorListQuery = channel.createOperatorListQuery();
    operatorListQuery.limit = 10;
    operatorListQuery.next(function (operators, error) {
      if (error) {
        return;
      }

      setOperators(operators);
      setHasNext(operatorListQuery.hasNext);
    });
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, operators.map(function (operator) {
    return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_UserListItem, {
      key: operator.userId,
      user: operator,
      currentUser: userId,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.removeOperators([operator.userId], function (response, error) {
                  if (error) {
                    return;
                  }

                  setOperators(operators.filter(function (_a) {
                    var userId = _a.userId;
                    return userId !== operator.userId;
                  }));
                });
                closeDropdown();
              }
            }, "Dismiss operator"));
          }
        });
      }
    });
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    size: ui_Button.ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowAdd(true);
    }
  }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD), hasNext && /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    size: ui_Button.ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowMore(true);
    }
  }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL)), showMore && /*#__PURE__*/React__default["default"].createElement(OperatorsModal, {
    onCancel: function onCancel() {
      setShowMore(false);
      refershList();
    }
  }), showAdd && /*#__PURE__*/React__default["default"].createElement(AddOperatorsModal, {
    onCancel: function onCancel() {
      return setShowAdd(false);
    },
    onSubmit: function onSubmit() {
      refershList();
      setShowAdd(false);
    }
  }));
};

function BannedMembersModal(_a) {
  var _onCancel = _a.onCancel;

  var _b = React.useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = React.useState(null),
      memberQuery = _c[0],
      setMemberQuery = _c[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  React.useEffect(function () {
    var bannedUserListQuery = channel.createBannedUserListQuery();
    bannedUserListQuery.next(function (users, error) {
      if (error) {
        return;
      }

      setMembers(users);
    });
    setMemberQuery(bannedUserListQuery);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    hideFooter: true,
    onCancel: function onCancel() {
      return _onCancel();
    },
    onSubmit: utils.noop,
    titleText: "Muted members"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function onScroll(e) {
      var hasNext = memberQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        memberQuery.next(function (o, error) {
          if (error) {
            return;
          }

          setMembers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      user: member,
      key: member.userId,
      action: function action(_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.unbanUser(member, function () {
                  closeDropdown();
                  setMembers(members.filter(function (m) {
                    return m.userId !== member.userId;
                  }));
                });
              }
            }, "Unban"));
          }
        });
      }
    });
  }))));
}

var BannedMemberList = function BannedMemberList() {
  var _a = React.useState([]),
      members = _a[0],
      setMembers = _a[1];

  var _b = React.useState(false),
      hasNext = _b[0],
      setHasNext = _b[1];

  var _c = React.useState(false),
      showModal = _c[0],
      setShowModal = _c[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  React.useEffect(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var bannedUserListQuery = channel.createBannedUserListQuery();
    bannedUserListQuery.next(function (users, error) {
      if (error) {
        return;
      }

      setMembers(users);
      setHasNext(bannedUserListQuery.hasNext);
    });
  }, [channel]);
  var refreshList = React.useCallback(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var bannedUserListQuery = channel.createBannedUserListQuery();
    bannedUserListQuery.next(function (users, error) {
      if (error) {
        return;
      }

      setMembers(users);
      setHasNext(bannedUserListQuery.hasNext);
    });
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_UserListItem, {
      key: member.userId,
      user: member,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.unbanUser(member, function () {
                  closeDropdown();
                  refreshList();
                });
              }
            }, "Unban"));
          }
        });
      }
    });
  }), members && members.length === 0 && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-settings__empty-list",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, "No banned members yet"), hasNext && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    size: ui_Button.ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowModal(true);
    }
  }, "All banned members")), showModal && /*#__PURE__*/React__default["default"].createElement(BannedMembersModal, {
    onCancel: function onCancel() {
      setShowModal(false);
      refreshList();
    }
  }));
};

function MutedMembersModal(_a) {
  var _b;

  var _onCancel = _a.onCancel;

  var _c = React.useState([]),
      members = _c[0],
      setMembers = _c[1];

  var _d = React.useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  React.useEffect(function () {
    var memberUserListQuery = channel.createMemberListQuery();
    memberUserListQuery.limit = 10;
    memberUserListQuery.mutedMemberFilter = 'muted';
    memberUserListQuery.next(function (members, error) {
      if (error) {
        return;
      }

      setMembers(members);
    });
    setMemberQuery(memberUserListQuery);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    hideFooter: true,
    onCancel: function onCancel() {
      return _onCancel();
    },
    onSubmit: utils.noop,
    titleText: "Muted members"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function onScroll(e) {
      var hasNext = memberQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        memberQuery.next(function (o, error) {
          if (error) {
            return;
          }

          setMembers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      currentUser: currentUser,
      user: member,
      key: member.userId,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.unmuteUser(member, function () {
                  closeDropdown();
                  setMembers(members.filter(function (m) {
                    return m.userId !== member.userId;
                  }));
                });
              }
            }, "Unmute"));
          }
        });
      }
    });
  }))));
}

var MutedMemberList = function MutedMemberList() {
  var _a;

  var _b = React.useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = React.useState(false),
      hasNext = _c[0],
      setHasNext = _c[1];

  var _d = React.useState(false),
      showModal = _d[0],
      setShowModal = _d[1];

  var channel = ChannelSettings_context.useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  React.useEffect(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var memberUserListQuery = channel.createMemberListQuery();
    memberUserListQuery.limit = 10;
    memberUserListQuery.mutedMemberFilter = 'muted';
    memberUserListQuery.next(function (members, error) {
      if (error) {
        return;
      }

      setMembers(members);
      setHasNext(memberUserListQuery.hasNext);
    });
  }, [channel]);
  var refreshList = React.useCallback(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var memberUserListQuery = channel.createMemberListQuery();
    memberUserListQuery.limit = 10;
    memberUserListQuery.mutedMemberFilter = 'muted';
    memberUserListQuery.next(function (members, error) {
      if (error) {
        return;
      }

      setMembers(members);
      setHasNext(memberUserListQuery.hasNext);
    });
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_UserListItem, {
      key: member.userId,
      user: member,
      currentUser: currentUser,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              closeDropdown: closeDropdown,
              openLeft: true,
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems

            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function onClick() {
                channel.unmuteUser(member, function () {
                  refreshList();
                  closeDropdown();
                });
              }
            }, "Unmute"));
          }
        });
      }
    });
  }), members && members.length === 0 && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-settings__empty-list",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, "No muted members yet"), hasNext && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    size: ui_Button.ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowModal(true);
    }
  }, "All muted members")), showModal && /*#__PURE__*/React__default["default"].createElement(MutedMembersModal, {
    onCancel: function onCancel() {
      setShowModal(false);
      refreshList();
    }
  }));
};

var kFormatter = function kFormatter(num) {
  return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "K" : num;
};

function AdminPannel() {
  var _a = React.useState(false),
      frozen = _a[0],
      setFrozen = _a[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var channel = ChannelSettings_context.useChannelSettings().channel; // work around for
  // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
  // SDK bug - after frozen/unfrozen myRole becomes "none"

  React.useEffect(function () {
    setFrozen(channel.isFrozen);
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement(ui_Accordion.AccordionGroup, {
    className: "sendbird-channel-settings__operator"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Accordion["default"], {
    className: "sendbird-channel-settings__operators-list",
    id: "operators",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.OPERATOR,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.SUBTITLE_1,
        color: ui_Label.LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(OperatorList, null));
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Accordion["default"], {
    className: "sendbird-channel-settings__members-list",
    id: "members",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MEMBERS,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.SUBTITLE_1,
        color: ui_Label.LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Badge, {
        count: kFormatter(channel.memberCount)
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(MemberList.MemberList, null));
    }
  }), // No muted members in broadcast channel
  !channel.isBroadcast && /*#__PURE__*/React__default["default"].createElement(ui_Accordion["default"], {
    id: "mutedMembers",
    className: "sendbird-channel-settings__muted-members-list",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MUTE,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.SUBTITLE_1,
        color: ui_Label.LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(MutedMemberList, null));
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Accordion["default"], {
    className: "sendbird-channel-settings__banned-members-list",
    id: "bannedMembers",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.BAN,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.SUBTITLE_1,
        color: ui_Label.LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(BannedMemberList, null));
    }
  }), // cannot freeze broadcast channel
  !channel.isBroadcast && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings__freeze"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.FREEZE,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: 24,
    height: 24,
    className: "sendbird-channel-settings__accordion-icon"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__FREEZE_CHANNEL), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings__frozen-icon"
  }, frozen ? /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    onClick: function onClick() {
      channel.unfreeze(function () {
        setFrozen(false);
      });
    },
    type: ui_Icon.IconTypes.TOGGLE_ON,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: 44,
    height: 24
  }) : /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    onClick: function onClick() {
      channel.freeze(function () {
        setFrozen(true);
      });
    },
    type: ui_Icon.IconTypes.TOGGLE_OFF,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: 44,
    height: 24
  }))));
}

module.exports = AdminPannel;
//# sourceMappingURL=AdminPanel.js.map
