import React__default, { useContext, useMemo } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { k as getClassName, e as isEditedMessage } from '../index-a1462526.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import { u as uuidv4 } from '../uuid-b12b05c7.js';
import { W as Word } from '../index-ce798211.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../stringSet-4614f875.js';
import '../tslib.es6-cee0628b.js';
import '../index-7e8c8e8d.js';
import './LinkLabel.js';
import './MentionLabel.js';
import './ContextMenu.js';
import 'react-dom';
import './SortByRow.js';
import './UserProfile.js';
import '../withSendBird.js';
import '../sendBirdSelectors.js';
import '../topics-af18f6dc.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../index-775a609a.js';
import '../useSendbirdStateContext.js';

function TextMessageItemBody(_a) {
  var _b, _c, _d;

  var className = _a.className,
      message = _a.message,
      _e = _a.isByMe,
      isByMe = _e === void 0 ? false : _e,
      _f = _a.mouseHover,
      mouseHover = _f === void 0 ? false : _f,
      _g = _a.isMentionEnabled,
      isMentionEnabled = _g === void 0 ? false : _g;
  var stringSet = useContext(LocalizationContext).stringSet;
  var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
  var sentences = useMemo(function () {
    var _a;

    return (_a = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _a === void 0 ? void 0 : _a.split(/\n/).map(function (sentence) {
      return sentence.split(/\s/);
    });
  }, [message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate]);
  return /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default.createElement("p", {
    className: getClassName([className, 'sendbird-text-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : ''])
  }, isMessageMentioned ? sentences.map(function (sentence, index) {
    return [sentence.map(function (word) {
      return /*#__PURE__*/React__default.createElement(Word, {
        key: uuidv4(),
        word: word,
        message: message,
        isByMe: isByMe
      });
    }), (sentences === null || sentences === void 0 ? void 0 : sentences[index + 1]) ? /*#__PURE__*/React__default.createElement("br", null) : null];
  }) : message === null || message === void 0 ? void 0 : message.message, isEditedMessage(message) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-text-message-item-body__message edited",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2
  }, " " + stringSet.MESSAGE_EDITED + " ")));
}

export { TextMessageItemBody as default };
//# sourceMappingURL=TextMessageItemBody.js.map
