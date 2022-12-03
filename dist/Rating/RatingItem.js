function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import * as IcoMoon from "react-icons/io";
const Icon = props => {
  const {
    iconName,
    customIconStyle = {},
    className = ""
  } = props;
  const icon = /*#__PURE__*/React.createElement(IcoMoon[iconName]);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      ...customIconStyle
    }
  }, icon);
};
export default function RatingItem(props) {
  const {
    key,
    value,
    rating,
    hover,
    setRating,
    setHover,
    iconType,
    emptyIconType,
    isReadonly,
    isDisabled,
    filledIconStyle = {},
    emptyIconStyle = {},
    ratingElementStyle = {}
  } = props;
  const notDisAndReadOnly = !isDisabled && !isReadonly; //not diabled and not readonly
  return /*#__PURE__*/React.createElement("label", {
    key: key,
    className: "b-raitng-label",
    style: ratingElementStyle
  }, /*#__PURE__*/React.createElement("input", {
    id: "star-rating-component-input",
    style: {
      display: "none"
    },
    type: "radio",
    name: "rating",
    value: value,
    onClick: () => notDisAndReadOnly && setRating(value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "star-div",
    onMouseEnter: () => notDisAndReadOnly && setHover(value),
    onMouseLeave: () => notDisAndReadOnly && setHover(null)
  }, /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
    customIconStyle: value <= (hover || rating) ? filledIconStyle : emptyIconStyle,
    className: hover && !isDisabled && !isReadonly ? "b-rating-icon" : isDisabled ? "b-rating-diabled" : isReadonly ? "b-rating-readOnly" : "",
    iconName: value <= (hover || rating) ? iconType : emptyIconType
  }))));
}