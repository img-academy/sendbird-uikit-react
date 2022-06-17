import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-79eb0635.js';
import { L as Label, b as LabelColors, a as LabelTypography } from '../../index-3db1006f.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import '../../stringSet-4614f875.js';
import '../../index-7e8c8e8d.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';

var UnreadCount = function UnreadCount(props) {
  var _a, _b;

  var count = props.count,
      _c = props.time,
      time = _c === void 0 ? '' : _c,
      onClick = props.onClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  var timeArray = ((_b = (_a = time === null || time === void 0 ? void 0 : time.toString) === null || _a === void 0 ? void 0 : _a.call(time)) === null || _b === void 0 ? void 0 : _b.split(' ')) || [];
  timeArray === null || timeArray === void 0 ? void 0 : timeArray.splice(-2, 0, stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__ON);

  if (count < 1) {
    return;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-notification",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-notification__text",
    color: LabelColors.ONCONTENT_1,
    type: LabelTypography.CAPTION_2
  }, count + " ", stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE, " " + timeArray.join(' ')), /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.CONTENT
  }));
};

export { UnreadCount as default };
//# sourceMappingURL=UnreadCount.js.map
