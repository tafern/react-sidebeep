import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StarWrapper, TextReview } from './styles';

class StarRating extends React.Component {
  renderStar(index, color) {
    const starPath =
      color === 'green' ? '/img/icons/sb-star-green.png' : '/img/icons/sb-star-grey.png';
    return (
      <Wrapper key={index}>
        <img role="presentation" src={starPath} height={13} alt="rating" />
      </Wrapper>
    );
  }
  render() {
    const { count } = this.props;
    const stars = [];
    const greenStars = Math.round(count);
    const greyStars = 5 - greenStars;
    let countDefault = 0;
    for (let i = 0; i < greenStars; i += 1) {
      stars.push(this.renderStar(count, 'green'));
      countDefault += 1;
    }
    for (let j = 0; j < greyStars; j += 1) {
      stars.push(this.renderStar(countDefault));
      countDefault += 1;
    }
    return (
      <div>
        <StarWrapper>{stars}</StarWrapper>
        <TextReview>23 Reviews</TextReview>
      </div>
    );
  }
}
StarRating.defaultProps = {
  count: 0,
};
StarRating.propTypes = {
  count: PropTypes.number,
};
export default StarRating;
