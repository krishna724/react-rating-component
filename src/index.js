import React from "react";
import "./index.css";
import RatingItem from "./RatingItem";
import PropTypes from "prop-types";
export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      rating: props.rating,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rating !== this.props.rating) {
      this.setState({ rating: this.props.rating });
    }
  }
  setHover = (value) => {
    this.setState({
      hover: value,
    });
  };
  render() {
    const { rating, hover } = this.state;
    const {
      setRating,
      iconType,
      emptyIconType,
      numberOfIcons,
      isReadonly,
      isDisabled,
      rootDivClassName = "",
      rootDivStlye = {},
    } = this.props;
    return (
      <>
        <div className={`b-rating ${rootDivClassName}`} style={rootDivStlye}>
          {[...Array(numberOfIcons)].map((eachIcon, index) => {
            const value = index + 1;
            return (
              <RatingItem
                {...this.props}
                key={`b-rating-${index}`}
                value={value}
                rating={rating}
                hover={hover}
                setRating={setRating}
                setHover={this.setHover}
                iconType={iconType}
                emptyIconType={emptyIconType}
                isReadonly={isReadonly}
                isDisabled={isDisabled}
              />
            );
          })}
        </div>
      </>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  iconType: PropTypes.string,
  emptyIconType: PropTypes.string,
  numberOfIcons: PropTypes.number,
  isReadonly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  setRating: PropTypes.func,
  iconSize: PropTypes.string,
  filledIconStyle: PropTypes.object,
  emptyIconStyle: PropTypes.object,
  rootDivClassName: PropTypes.string,
  rootDivStlye: PropTypes.object,
  ratingElementStyle: PropTypes.object,
};

Rating.defaultProps = {
  rating: 0,
  iconType: "IoIosStar",
  emptyIconType: "IoIosStarOutline",
  numberOfIcons: 5,
  isReadonly: false,
  isDisabled: false,
  iconSize: "medium",
};
