import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

class HoverWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }

  handleFavoriteClick = (e) => {
    e.preventDefault();
    const { favorited } = this.state;

    if (!this.props.authenticated) {
      this.props.history.push(`/login`);
    }
    if (!favorited) {
      this.setState({
        favorited: true,
      });
    } else if (favorited) {
      this.setState({
        favorited: false,
      });
    }
  };

  render() {
    const { viewCount, isGrid, isSmall } = this.props;
    const { favorited } = this.state;
    const favoriteIcon = favorited ? 'wishlish-red.svg' : 'wishlist.svg';
    return (
      <Styles.HoverDataWrapper>
        <Styles.ButtonWrapper className="iconHoverWrapper">
          <Styles.BoxWrapper className="clearfix">
            <Styles.ViewCount>
              <Styles.IconCountImage
                isGrid={isGrid}
                isSmall={isSmall}
                src="/img/icons/service-seen.svg"
                alt="count"
              />
              {viewCount}
            </Styles.ViewCount>
            <Styles.IconWrapper>
              <Styles.IconHover isGrid={isGrid} isSmall={isSmall} src="/img/icons/share.svg" />
              <Styles.IconHover
                isGrid={isGrid}
                isSmall={isSmall}
                onClick={this.handleFavoriteClick}
                src={`/img/icons/${favoriteIcon}`}
              />
            </Styles.IconWrapper>
          </Styles.BoxWrapper>
        </Styles.ButtonWrapper>
      </Styles.HoverDataWrapper>
    );
  }
}
HoverWrapper.defaultProps = {
  isGrid: false,
  isSmall: false,
};
HoverWrapper.propTypes = {
  viewCount: PropTypes.string.isRequired,
  isGrid: PropTypes.bool,
  isSmall: PropTypes.bool,
  history: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
};
export default HoverWrapper;
