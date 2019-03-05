import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { PortfolioWrapper, PortfolioImage } from './styles';

class Portfolio extends React.Component {
  componentWillMount() {}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      // autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    const { files } = this.props;
    console.log('files', files);
    return (
      <PortfolioWrapper>
        <Slider {...settings}>
          {files.map((item) => {
            if (item.type === 'Image_Cover_Detail') {
              return (
                <div key={item._id}>
                  <PortfolioImage src={item.url} alt="sidebeep service" />
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </PortfolioWrapper>
    );
  }
}
Portfolio.defaultProps = {
  files: [],
};
Portfolio.propTypes = {
  files: PropTypes.array,
};
export default Portfolio;
