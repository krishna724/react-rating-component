import React from "react";
import * as IcoMoon from "react-icons/io";

const Icon = (props) => {
  const { iconName, customIconStyle = {}, className = "" } = props;
  const icon = React.createElement(IcoMoon[iconName]);
  return (
    <div className={className} style={{ ...customIconStyle }}>
      {icon}
    </div>
  );
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
    ratingElementStyle = {},
  } = props;
  const notDisAndReadOnly = !isDisabled && !isReadonly; //not diabled and not readonly
  return (
    <label key={key} className="b-raitng-label" style={ratingElementStyle}>
      <input
        id="star-rating-component-input"
        style={{ display: "none" }}
        type="radio"
        name="rating"
        value={value}
        onClick={() => notDisAndReadOnly && setRating(value)}
      />
      <div
        className="star-div"
        onMouseEnter={() => notDisAndReadOnly && setHover(value)}
        onMouseLeave={() => notDisAndReadOnly && setHover(null)}
      >
        <Icon
          {...props}
          customIconStyle={
            value <= (hover || rating) ? filledIconStyle : emptyIconStyle
          }
          className={
            hover && !isDisabled && !isReadonly
              ? "b-rating-icon"
              : isDisabled
              ? "b-rating-diabled"
              : isReadonly
              ? "b-rating-readOnly"
              : ""
          }
          iconName={value <= (hover || rating) ? iconType : emptyIconType}
        />
      </div>
    </label>
  );
}
