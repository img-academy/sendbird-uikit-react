'use strict';

var Colors = {
  ONBACKGROUND_1: 'ONBACKGROUND_1',
  ONBACKGROUND_2: 'ONBACKGROUND_2',
  ONBACKGROUND_3: 'ONBACKGROUND_3',
  ONBACKGROUND_4: 'ONBACKGROUND_4',
  ONCONTENT_1: 'ONCONTENT_1',
  PRIMARY: 'PRIMARY',
  ERROR: 'ERROR'
};
function changeColorToClassName(color) {
  switch (color) {
    case Colors.ONBACKGROUND_1:
      return 'sendbird-color--onbackground-1';

    case Colors.ONBACKGROUND_2:
      return 'sendbird-color--onbackground-2';

    case Colors.ONBACKGROUND_3:
      return 'sendbird-color--onbackground-3';

    case Colors.ONBACKGROUND_4:
      return 'sendbird-color--onbackground-4';

    case Colors.ONCONTENT_1:
      return 'sendbird-color--oncontent-1';

    case Colors.PRIMARY:
      return 'sendbird-color--primary';

    case Colors.ERROR:
      return 'sendbird-color--error';

    default:
      return null;
  }
}

exports.Colors = Colors;
exports.changeColorToClassName = changeColorToClassName;
//# sourceMappingURL=color-c2dc807b.js.map