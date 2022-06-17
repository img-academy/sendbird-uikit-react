import { a as _slicedToArray, b as _toConsumableArray } from '../_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDefaultComponent = _useState2[0],
      setShowDefaultComponent = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showPlaceHolder = _useState4[0],
      setShowPlaceHolder = _useState4[1];

  var DefaultComponent = useMemo(function () {
    if (typeof defaultComponent === 'function') {
      return defaultComponent();
    }

    return defaultComponent;
  }, [defaultComponent]);
  var PlaceHolder = useMemo(function () {
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
  var HiddenImageLoader = useMemo(function () {
    setShowDefaultComponent(false); // reset the state when url is changed

    return /*#__PURE__*/React__default.createElement("img", {
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-image-renderer']).join(' '),
    style: {
      width: '100%',
      minWidth: width,
      maxWidth: fixedSize ? width : '400px',
      height: height
    }
  }, showPlaceHolder && PlaceHolder, showDefaultComponent ? DefaultComponent : /*#__PURE__*/React__default.createElement("div", {
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
  className: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fixedSize: PropTypes.bool,
  defaultComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  placeHolder: PropTypes.func,
  circle: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func
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

export { ImageRenderer as default };
//# sourceMappingURL=ImageRenderer.js.map
