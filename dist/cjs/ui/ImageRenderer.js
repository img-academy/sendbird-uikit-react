'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-77e2b7af.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

/*
  ImageRenderer displays image with url or source
  it checks if the source exist with img tag first
  if it exists onLoad is called, if not onError is called
  and those properties switch img tag to real purposing element
*/
// TODO: Set up the official constant of width and height with DesignTeam

function ImageRenderer(_ref) {
  var className = _ref.className,
      url = _ref.url,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height,
      fixedSize = _ref.fixedSize,
      defaultComponent = _ref.defaultComponent,
      circle = _ref.circle,
      placeHolder = _ref.placeHolder,
      _onLoad = _ref.onLoad,
      _onError = _ref.onError;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      showDefaultComponent = _useState2[0],
      setShowDefaultComponent = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _rollupPluginBabelHelpers._slicedToArray(_useState3, 2),
      showPlaceHolder = _useState4[0],
      setShowPlaceHolder = _useState4[1];

  var DefaultComponent = React.useMemo(function () {
    if (typeof defaultComponent === 'function') {
      return defaultComponent();
    }

    return defaultComponent;
  }, [defaultComponent]);
  var PlaceHolder = React.useMemo(function () {
    if (placeHolder && typeof placeHolder === 'function') {
      return placeHolder({
        style: {
          width: '100%',
          minWidth: width,
          maxWidth: fixedSize ? width : '400px',
          height: height,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    }

    return null;
  }, [placeHolder]);
  var HiddenImageLoader = React.useMemo(function () {
    setShowDefaultComponent(false); // reset the state when url is changed

    return /*#__PURE__*/React__default["default"].createElement("img", {
      className: "sendbird-image-renderer__hidden-image-loader",
      src: url,
      alt: alt,
      onLoad: function onLoad() {
        setShowPlaceHolder(false);

        _onLoad();
      },
      onError: function onError() {
        setShowDefaultComponent(true);

        _onError();
      }
    });
  }, [url]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [].concat(_rollupPluginBabelHelpers._toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-image-renderer']).join(' '),
    style: {
      width: '100%',
      minWidth: width,
      maxWidth: fixedSize ? width : '400px',
      height: height
    }
  }, showPlaceHolder && PlaceHolder, showDefaultComponent ? DefaultComponent : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-image-renderer__image",
    style: {
      width: '100%',
      minWidth: width,
      maxWidth: fixedSize ? width : '400px',
      height: height,
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: "url(".concat(url, ")"),
      borderRadius: circle ? '50%' : null
    }
  }), HiddenImageLoader);
}
ImageRenderer.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].string]),
  url: PropTypes__default["default"].string.isRequired,
  alt: PropTypes__default["default"].string,
  width: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  height: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  fixedSize: PropTypes__default["default"].bool,
  defaultComponent: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  placeHolder: PropTypes__default["default"].func,
  circle: PropTypes__default["default"].bool,
  onLoad: PropTypes__default["default"].func,
  onError: PropTypes__default["default"].func
};
ImageRenderer.defaultProps = {
  className: '',
  defaultComponent: null,
  placeHolder: null,
  alt: '',
  width: null,
  height: null,
  fixedSize: false,
  circle: false,
  onLoad: function onLoad() {},
  onError: function onError() {}
};

module.exports = ImageRenderer;
//# sourceMappingURL=ImageRenderer.js.map
