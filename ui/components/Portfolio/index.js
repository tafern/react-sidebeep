import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Styles from './styles';

class Portfolio extends React.Component {
  componentWillMount() {}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    const { images } = this.props;
    return (
      <Styles.PortfolioWrapper>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image._id}>
              <Styles.PortfolioImage src={image.imgUrl} alt="sidebeep service" />
            </div>
          ))}
        </Slider>
      </Styles.PortfolioWrapper>
    );
  }
}
Portfolio.defaultProps = {
  images: [],
};
Portfolio.propTypes = {
  images: PropTypes.array,
};
export default Portfolio;
