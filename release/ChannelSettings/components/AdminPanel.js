import React__default, { useState, useEffect, useContext, useCallback } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import Accordion, { AccordionGroup } from '../../ui/Accordion.js';
import { L as Label, b as LabelColors, a as LabelTypography } from '../../index-3db1006f.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { T as Type, B as Button, a as ButtonTypes, b as ButtonSizes } from '../../index-775a609a.js';
import IconButton from '../../ui/IconButton.js';
import ContextMenu, { MenuItems, MenuItem } from '../../ui/ContextMenu.js';
import UserListItem$1 from './UserListItem.js';
import { a as __spreadArray, _ as __assign } from '../../tslib.es6-cee0628b.js';
import Modal from '../../ui/Modal.js';
import UserListItem from '../../ui/UserListItem.js';
import { useChannelSettings } from '../context.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { M as MemberList } from '../../MemberList-05fb4b87.js';
import { n as noop } from '../../utils-a66b9c45.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../ui/AccordionGroup.js';
import '../../context-b0bb3e69.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../index-a1462526.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-b12b05c7.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../withSendBird.js';
import '../../sendBirdSelectors.js';
import '../../topics-af18f6dc.js';
import '../../index-2db42eac.js';
import '../../ui/Checkbox.js';

function OperatorsModal(_a) {
  var _b;

  var onCancel = _a.onCancel;

  var _c = useState([]),
      operators = _c[0],
      setOperators = _c[1];

  var _d = useState(null),
      operatorQuery = _d[0],
      setOperatorQuery = _d[1];

  var channel = useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    hideFooter: true,
    titleText: "All operators",
    onCancel: onCancel
  }, /*#__PURE__*/React__default.createElement("div", {
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

          setOperators(__spreadArray(__spreadArray([], operators, true), o, true));
        });
      }
    }
  }, operators.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      currentUser: currentUser,
      user: member,
      key: member.userId,
      action: function action(_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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

  var _b = useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = useState({}),
      selectedMembers = _c[0],
      setSelectedMembers = _c[1];

  var _d = useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var channel = useChannelSettings().channel;
  useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    type: Type.PRIMARY,
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
  }, /*#__PURE__*/React__default.createElement(Label, {
    color: selectedCount > 0 ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3,
    type: LabelTypography.CAPTION_1
  }, selectedCount + " " + stringSet.MODAL__INVITE_MEMBER__SELECTEC), /*#__PURE__*/React__default.createElement("div", {
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

          setMembers(__spreadArray(__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      checkBox: true,
      checked: selectedMembers[member.userId],
      onChange: function onChange(event) {
        var _a;

        var modifiedSelectedMembers = __assign(__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

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

  var _b = useState([]),
      operators = _b[0],
      setOperators = _b[1];

  var _c = useState(false),
      showMore = _c[0],
      setShowMore = _c[1];

  var _d = useState(false),
      showAdd = _d[0],
      setShowAdd = _d[1];

  var _e = useState(false),
      hasNext = _e[0],
      setHasNext = _e[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var state = useSendbirdStateContext();
  var channel = useChannelSettings().channel;
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  useEffect(function () {
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
  var refershList = useCallback(function () {
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, operators.map(function (operator) {
    return /*#__PURE__*/React__default.createElement(UserListItem$1, {
      key: operator.userId,
      user: operator,
      currentUser: userId,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowAdd(true);
    }
  }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD), hasNext && /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowMore(true);
    }
  }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL)), showMore && /*#__PURE__*/React__default.createElement(OperatorsModal, {
    onCancel: function onCancel() {
      setShowMore(false);
      refershList();
    }
  }), showAdd && /*#__PURE__*/React__default.createElement(AddOperatorsModal, {
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

  var _b = useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = useState(null),
      memberQuery = _c[0],
      setMemberQuery = _c[1];

  var channel = useChannelSettings().channel;
  useEffect(function () {
    var bannedUserListQuery = channel.createBannedUserListQuery();
    bannedUserListQuery.next(function (users, error) {
      if (error) {
        return;
      }

      setMembers(users);
    });
    setMemberQuery(bannedUserListQuery);
  }, []);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    hideFooter: true,
    onCancel: function onCancel() {
      return _onCancel();
    },
    onSubmit: noop,
    titleText: "Muted members"
  }, /*#__PURE__*/React__default.createElement("div", {
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

          setMembers(__spreadArray(__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      user: member,
      key: member.userId,
      action: function action(_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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
  var _a = useState([]),
      members = _a[0],
      setMembers = _a[1];

  var _b = useState(false),
      hasNext = _b[0],
      setHasNext = _b[1];

  var _c = useState(false),
      showModal = _c[0],
      setShowModal = _c[1];

  var channel = useChannelSettings().channel;
  useEffect(function () {
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
  var refreshList = useCallback(function () {
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem$1, {
      key: member.userId,
      user: member,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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
  }), members && members.length === 0 && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-settings__empty-list",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_3
  }, "No banned members yet"), hasNext && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowModal(true);
    }
  }, "All banned members")), showModal && /*#__PURE__*/React__default.createElement(BannedMembersModal, {
    onCancel: function onCancel() {
      setShowModal(false);
      refreshList();
    }
  }));
};

function MutedMembersModal(_a) {
  var _b;

  var _onCancel = _a.onCancel;

  var _c = useState([]),
      members = _c[0],
      setMembers = _c[1];

  var _d = useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var channel = useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    hideFooter: true,
    onCancel: function onCancel() {
      return _onCancel();
    },
    onSubmit: noop,
    titleText: "Muted members"
  }, /*#__PURE__*/React__default.createElement("div", {
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

          setMembers(__spreadArray(__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      currentUser: currentUser,
      user: member,
      key: member.userId,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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

  var _b = useState([]),
      members = _b[0],
      setMembers = _b[1];

  var _c = useState(false),
      hasNext = _c[0],
      setHasNext = _c[1];

  var _d = useState(false),
      showModal = _d[0],
      setShowModal = _d[1];

  var channel = useChannelSettings().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  useEffect(function () {
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
  var refreshList = useCallback(function () {
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem$1, {
      key: member.userId,
      user: member,
      currentUser: currentUser,
      action: function action(_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function menuTrigger(toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function menuItems(closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              closeDropdown: closeDropdown,
              openLeft: true,
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems

            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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
  }), members && members.length === 0 && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-settings__empty-list",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_3
  }, "No muted members yet"), hasNext && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: function onClick() {
      setShowModal(true);
    }
  }, "All muted members")), showModal && /*#__PURE__*/React__default.createElement(MutedMembersModal, {
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
  var _a = useState(false),
      frozen = _a[0],
      setFrozen = _a[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var channel = useChannelSettings().channel; // work around for
  // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
  // SDK bug - after frozen/unfrozen myRole becomes "none"

  useEffect(function () {
    setFrozen(channel.isFrozen);
  }, [channel]);
  return /*#__PURE__*/React__default.createElement(AccordionGroup, {
    className: "sendbird-channel-settings__operator"
  }, /*#__PURE__*/React__default.createElement(Accordion, {
    className: "sendbird-channel-settings__operators-list",
    id: "operators",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.OPERATOR,
        fillColor: IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.SUBTITLE_1,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(OperatorList, null));
    }
  }), /*#__PURE__*/React__default.createElement(Accordion, {
    className: "sendbird-channel-settings__members-list",
    id: "members",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MEMBERS,
        fillColor: IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.SUBTITLE_1,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE), /*#__PURE__*/React__default.createElement(Badge, {
        count: kFormatter(channel.memberCount)
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MemberList, null));
    }
  }), // No muted members in broadcast channel
  !channel.isBroadcast && /*#__PURE__*/React__default.createElement(Accordion, {
    id: "mutedMembers",
    className: "sendbird-channel-settings__muted-members-list",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MUTE,
        fillColor: IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.SUBTITLE_1,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MutedMemberList, null));
    }
  }), /*#__PURE__*/React__default.createElement(Accordion, {
    className: "sendbird-channel-settings__banned-members-list",
    id: "bannedMembers",
    renderTitle: function renderTitle() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.BAN,
        fillColor: IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-channel-settings__accordion-icon"
      }), /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.SUBTITLE_1,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(BannedMemberList, null));
    }
  }), // cannot freeze broadcast channel
  !channel.isBroadcast && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings__freeze"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.FREEZE,
    fillColor: IconColors.PRIMARY,
    width: 24,
    height: 24,
    className: "sendbird-channel-settings__accordion-icon"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__FREEZE_CHANNEL), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings__frozen-icon"
  }, frozen ? /*#__PURE__*/React__default.createElement(Icon, {
    onClick: function onClick() {
      channel.unfreeze(function () {
        setFrozen(false);
      });
    },
    type: IconTypes.TOGGLE_ON,
    fillColor: IconColors.PRIMARY,
    width: 44,
    height: 24
  }) : /*#__PURE__*/React__default.createElement(Icon, {
    onClick: function onClick() {
      channel.freeze(function () {
        setFrozen(true);
      });
    },
    type: IconTypes.TOGGLE_OFF,
    fillColor: IconColors.PRIMARY,
    width: 44,
    height: 24
  }))));
}

export { AdminPannel as default };
//# sourceMappingURL=AdminPanel.js.map
