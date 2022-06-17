import React__default, { useContext, useRef } from 'react';
import Tooltip from './Tooltip.js';
import TooltipWrapper from './TooltipWrapper.js';
import ReactionBadge from './ReactionBadge.js';
import ReactionButton from './ReactionButton.js';
import ImageRenderer from './ImageRenderer.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import ContextMenu, { EmojiListItems } from './ContextMenu.js';
import { I as getEmojiMapAll, k as getClassName, J as isReactedBy, K as getEmojiTooltipString, H as getEmojiListAll } from '../index-a1462526.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../index-3db1006f.js';
import '../stringSet-4614f875.js';
import 'react-dom';
import './SortByRow.js';
import '../tslib.es6-cee0628b.js';
import '../index-7e8c8e8d.js';

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
  var stringSet = useContext(LocalizationContext).stringSet;
  var emojisMap = getEmojiMapAll(emojiContainer);
  var addReactionRef = useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-emoji-reactions', isByMe ? 'outgoing' : 'incoming'])
  }, ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 && message.reactions.map(function (reaction) {
    var _a, _b;

    var reactedByMe = isReactedBy(userId, reaction);
    return /*#__PURE__*/React__default.createElement(TooltipWrapper, {
      className: "sendbird-emoji-reactions__reaction-badge",
      key: reaction === null || reaction === void 0 ? void 0 : reaction.key,
      hoverTooltip: ((_a = reaction === null || reaction === void 0 ? void 0 : reaction.userIds) === null || _a === void 0 ? void 0 : _a.length) > 0 && /*#__PURE__*/React__default.createElement(Tooltip, null, getEmojiTooltipString(reaction, userId, memberNicknamesMap, stringSet))
    }, /*#__PURE__*/React__default.createElement(ReactionBadge, {
      count: reaction.userIds.length,
      selected: reactedByMe,
      onClick: function onClick() {
        return toggleReaction(message, reaction.key, reactedByMe);
      }
    }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
      circle: true,
      url: ((_b = emojisMap.get(reaction === null || reaction === void 0 ? void 0 : reaction.key)) === null || _b === void 0 ? void 0 : _b.url) || '',
      width: "20px",
      height: "20px",
      defaultComponent: /*#__PURE__*/React__default.createElement(Icon, {
        width: "20px",
        height: "20px",
        type: IconTypes.QUESTION
      })
    })));
  }), ((_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length) < emojisMap.size && /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function menuTrigger(toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(ReactionBadge, {
        className: "sendbird-emoji-reactions__add-reaction-badge",
        ref: addReactionRef,
        isAdd: true,
        onClick: toggleDropdown
      }, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.EMOJI_MORE,
        fillColor: IconColors.ON_BACKGROUND_3,
        width: "20px",
        height: "20px"
      }));
    },
    menuItems: function menuItems(closeDropdown) {
      return /*#__PURE__*/React__default.createElement(EmojiListItems, {
        parentRef: addReactionRef,
        parentContainRef: addReactionRef,
        closeDropdown: closeDropdown,
        spacefromTrigger: spaceFromTrigger
      }, getEmojiListAll(emojiContainer).map(function (emoji) {
        var _a, _b, _c;

        var isReacted = (_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.filter(function (reaction) {
          return reaction.key === emoji.key;
        })[0]) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) {
          return reactorId === userId;
        });
        return /*#__PURE__*/React__default.createElement(ReactionButton, {
          key: emoji.key,
          width: "36px",
          height: "36px",
          selected: isReacted,
          onClick: function onClick() {
            closeDropdown();
            toggleReaction(message, emoji.key, isReacted);
          }
        }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
          url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '',
          width: "28px",
          height: "28px",
          placeHolder: function placeHolder(style) {
            return /*#__PURE__*/React__default.createElement("div", {
              style: style
            }, /*#__PURE__*/React__default.createElement(Icon, {
              type: IconTypes.QUESTION,
              fillColor: IconColors.ON_BACKGROUND_3,
              width: "28px",
              height: "28px"
            }));
          }
        }));
      }));
    }
  }));
}

export { EmojiReactions2 as default };
//# sourceMappingURL=EmojiReactions.js.map
