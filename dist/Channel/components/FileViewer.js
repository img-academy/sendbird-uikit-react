import React__default from 'react';
import { createPortal } from 'react-dom';
import Avatar from '../../ui/Avatar.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-3db1006f.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { M as MODAL_ROOT } from '../../index-2db42eac.js';
import { A as isSupportedFileView, B as isVideo, C as isImage } from '../../index-a1462526.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useChannel } from '../../ChannelProvider-94aeef2f.js';
import '../../tslib.es6-cee0628b.js';
import '../../ui/ImageRenderer.js';
import '../../_rollupPluginBabelHelpers-0ec97672.js';
import 'prop-types';
import '../../uuid-b12b05c7.js';
import '../../stringSet-4614f875.js';
import '../../withSendBird.js';
import '../../UserProfileContext-9b9928cf.js';
import '../../index-54fd64c3.js';
import '../../index-7e8c8e8d.js';
import '../../topics-af18f6dc.js';
import '../../compareIds-91189cc3.js';
import '../../const-7d66ce8b.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';

var FileViewerComponent = function FileViewerComponent(_a) {
  var // sender
  profileUrl = _a.profileUrl,
      nickname = _a.nickname,
      // file
  name = _a.name,
      type = _a.type,
      url = _a.url,
      // others
  isByMe = _a.isByMe,
      onCancel = _a.onCancel,
      onDelete = _a.onDelete,
      disableDelete = _a.disableDelete;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__left"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__left__avatar"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    height: "32px",
    width: "32px",
    src: profileUrl
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-fileviewer__header__left__filename",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, name), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-fileviewer__header__left__sender-name",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, nickname)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right"
  }, isSupportedFileView(type) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "sendbird-fileviewer__header__right__actions__download",
    rel: "noopener noreferrer",
    href: url,
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DOWNLOAD,
    fillColor: IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px"
  })), onDelete && isByMe && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__delete"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: disableDelete ? 'disabled' : '',
    type: IconTypes.DELETE,
    fillColor: disableDelete ? IconColors.GRAY : IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: function onClick() {
      if (!disableDelete) {
        onDelete();
      }
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__close"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: onCancel
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__content"
  }, isVideo(type) && /*#__PURE__*/React__default.createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url,
    type: type
  })), isImage(type) && /*#__PURE__*/React__default.createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), !isSupportedFileView(type) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_1,
    color: LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};

var FileViewer = function FileViewer(_a) {
  var _b, _c, _d;

  var onCancel = _a.onCancel,
      message = _a.message;
  var deleteMessage = useChannel().deleteMessage;
  var sender = message.sender,
      type = message.type,
      url = message.url,
      _e = message.name,
      name = _e === void 0 ? '' : _e,
      threadInfo = message.threadInfo;
  var user = (_c = (_b = useSendbirdStateContext()) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.userId;
  var isByMe = user === ((_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.userId);
  var disableDelete = (threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.replyCount) > 0;
  var profileUrl = sender.profileUrl,
      _f = sender.nickname,
      nickname = _f === void 0 ? '' : _f;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onCancel: onCancel,
    onDelete: function onDelete() {
      deleteMessage(message).then(function () {
        onCancel();
      });
    },
    isByMe: isByMe,
    disableDelete: disableDelete
  }), document.getElementById(MODAL_ROOT));
};

export { FileViewerComponent, FileViewer as default };
//# sourceMappingURL=FileViewer.js.map
