import React__default, { useContext } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-3db1006f.js';
import { k as getClassName } from '../index-a1462526.js';
import { a as LocalizationContext } from '../LocalizationContext-79eb0635.js';
import '../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../stringSet-4614f875.js';
import '../tslib.es6-cee0628b.js';
import '../index-7e8c8e8d.js';

function UnknownMessageItemBody(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      _c = _a.isByMe,
      isByMe = _c === void 0 ? false : _c,
      _d = _a.mouseHover,
      mouseHover = _d === void 0 ? false : _d;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-unknown-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-unknown-message-item-body__header",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-unknown-message-item-body__description",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2
  }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE));
}

export { UnknownMessageItemBody as default };
//# sourceMappingURL=UnknownMessageItemBody.js.map
