'use strict';

var React = require('react');
var ui_Tooltip = require('./Tooltip.js');
var ui_TooltipWrapper = require('./TooltipWrapper.js');
var ui_ReactionBadge = require('./ReactionBadge.js');
var ui_ReactionButton = require('./ReactionButton.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_Icon = require('./Icon.js');
var ui_ContextMenu = require('./ContextMenu.js');
var index = require('../index-e0c5dddd.js');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');
require('prop-types');
require('../index-25825fe1.js');
require('../stringSet-435b3346.js');
require('react-dom');
require('./SortByRow.js');
require('../tslib.es6-cb3f88e3.js');
require('../index-6f7d86a8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function EmojiReactions2(_a) {
  var _b, _c;

  var className = _a.className,
      userId = _a.userId,
      message = _a.message,
      emojiContainer = _a.emojiContainer,
      memberNicknamesMap = _a.memberNicknamesMap,
      _d = _a.spaceFromTrigger,
      spaceFromTrigger = _d === void 0 ? {} : _d,
      _e = _a.isByMe,
      isByMe = _e === void 0 ? false : _e,
      toggleReaction = _a.toggleReaction;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var emojisMap = index.getEmojiMapAll(emojiContainer);
  var addReactionRef = React.useRef(null);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-emoji-reactions', isByMe ? 'outgoing' : 'incoming'])
  }, ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 && message.reactions.map(function (reaction) {
    var _a, _b;

    var reactedByMe = index.isReactedBy(userId, reaction);
    return /*#__PURE__*/React__default["default"].createElement(ui_TooltipWrapper, {
      className: "sendbird-emoji-reactions__reaction-badge",
      key: reaction === null || reaction === void 0 ? void 0 : reaction.key,
      hoverTooltip: ((_a = reaction === null || reaction === void 0 ? void 0 : reaction.userIds) === null || _a === void 0 ? void 0 : _a.length) > 0 && /*#__PURE__*/React__default["default"].createElement(ui_Tooltip, null, index.getEmojiTooltipString(reaction, userId, memberNicknamesMap, stringSet))
    }, /*#__PURE__*/React__default["default"].createElement(ui_ReactionBadge, {
      count: reaction.userIds.length,
      selected: reactedByMe,
      onClick: function onClick() {
        return toggleReaction(message, reaction.key, reactedByMe);
      }
    }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
      circle: true,
      url: ((_b = emojisMap.get(reaction === null || reaction === void 0 ? void 0 : reaction.key)) === null || _b === void 0 ? void 0 : _b.url) || '',
      width: "20px",
      height: "20px",
      defaultComponent: /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        width: "20px",
        height: "20px",
        type: ui_Icon.IconTypes.QUESTION
      })
    })));
  }), ((_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length) < emojisMap.size && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ReactionBadge, {
        className: "sendbird-emoji-reactions__add-reaction-badge",
        ref: addReactionRef,
        isAdd: true,
        onClick: toggleDropdown
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.EMOJI_MORE,
        fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
        width: "20px",
        height: "20px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.EmojiListItems, {
        parentRef: addReactionRef,
        parentContainRef: addReactionRef,
        closeDropdown: closeDropdown,
        spacefromTrigger: spaceFromTrigger
      }, index.getEmojiListAll(emojiContainer).map(function (emoji) {
        var _a, _b, _c;

        var isReacted = (_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.filter(function (reaction) {
          return reaction.key === emoji.key;
        })[0]) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) {
          return reactorId === userId;
        });
        return /*#__PURE__*/React__default["default"].createElement(ui_ReactionButton, {
          key: emoji.key,
          width: "36px",
          height: "36px",
          selected: isReacted,
          onClick: function onClick() {
            closeDropdown();
            toggleReaction(message, emoji.key, isReacted);
          }
        }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
          url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '',
          width: "28px",
          height: "28px",
          placeHolder: function placeHolder(style) {
            return /*#__PURE__*/React__default["default"].createElement("div", {
              style: style
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              type: ui_Icon.IconTypes.QUESTION,
              fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
              width: "28px",
              height: "28px"
            }));
          }
        }));
      }));
    }
  }));
}

module.exports = EmojiReactions2;
//# sourceMappingURL=EmojiReactions.js.map
