'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var reactDom = require('react-dom');
var LocalizationContext = require('../LocalizationContext-60feae29.js');
var index = require('../index-94591769.js');
var ui_IconButton = require('./IconButton.js');
var ui_Icon = require('./Icon.js');
var ui_Button = require('../index-8f00ec86.js');
var ui_Label = require('../index-25825fe1.js');
var utils = require('../utils-81069a8c.js');
require('../stringSet-435b3346.js');
require('../index-6f7d86a8.js');
require('../_rollupPluginBabelHelpers-77e2b7af.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var ModalHeader = function ModalHeader(_ref) {
  var titleText = _ref.titleText;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, titleText));
};
ModalHeader.propTypes = {
  titleText: PropTypes__default["default"].string.isRequired
};
var ModalBody = function ModalBody(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__body"
  }, children);
};
ModalBody.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element.isRequired, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element.isRequired)])
};
ModalBody.defaultProps = {
  children: null
};
var ModalFooter = function ModalFooter(_ref3) {
  var onSubmit = _ref3.onSubmit,
      onCancel = _ref3.onCancel,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
      submitText = _ref3.submitText,
      type = _ref3.type;

  var _useContext = React.useContext(LocalizationContext.LocalizationContext),
      stringSet = _useContext.stringSet;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: type,
    disabled: disabled,
    onClick: onSubmit
  }, submitText));
};
ModalFooter.propTypes = {
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func.isRequired,
  submitText: PropTypes__default["default"].string.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
ModalFooter.defaultProps = {
  disabled: false,
  type: ui_Button.ButtonTypes.DANGER
};
function Modal(props) {
  var children = props.children,
      onCancel = props.onCancel,
      _props$onSubmit = props.onSubmit,
      onSubmit = _props$onSubmit === void 0 ? utils.noop : _props$onSubmit,
      disabled = props.disabled,
      submitText = props.submitText,
      titleText = props.titleText,
      hideFooter = props.hideFooter,
      type = props.type;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__content"
  }, /*#__PURE__*/React__default["default"].createElement(ModalHeader, {
    titleText: titleText
  }), /*#__PURE__*/React__default["default"].createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default["default"].createElement(ModalFooter, {
    disabled: disabled,
    onCancel: onCancel,
    onSubmit: onSubmit,
    submitText: submitText,
    type: type
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__close"
  }, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    width: "32px",
    height: "32px",
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    fillColor: ui_Icon.IconColors.DEFAULT,
    width: "24px",
    height: "24px"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__backdrop"
  })), document.getElementById(index.MODAL_ROOT));
}
Modal.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]),
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func,
  hideFooter: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
Modal.defaultProps = {
  children: null,
  hideFooter: false,
  disabled: false,
  type: ui_Button.ButtonTypes.DANGER
};

exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports["default"] = Modal;
//# sourceMappingURL=Modal.js.map
