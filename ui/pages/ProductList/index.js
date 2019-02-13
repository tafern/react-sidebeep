import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Styles from './styles';
import ProductItem from '../../components/ProductItem';
import BlankState from '../../components/BlankState';

const settings = {
  dots: false,
  speed: 500,
  arrows: true,
  nextArrow: <Styles.ArrowIconNext src="/img/icons/sb-arrow-next.png" />,
  prevArrow: <Styles.ArrowIconPrev src="/img/icons/sb-arrow-prev.png" />,
  autoplay: false,
  infinite: true,
  pauseOnHover: true,
  autoplaySpeed: 4000,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 548,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 744,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1128,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};
const ProductList = ({ data }) => (
  <Styles.Wrapper>
    {data.products !== undefined ? (
      <Slider {...settings}>
        {data.products.map((item) => (
          <div key={item._id}>
            <ProductItem
              productName={item.name}
              updatedAt={item.updatedAt}
              productDescription={item.description}
              files={item.files}
              isPublic={item.isPublic}
              id={item._id}
            />
          </div>
        ))}
      </Slider>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="You're plum out of products, friend!"
        subtitle="Add your first product by clicking the button below."
      />
    )}
  </Styles.Wrapper>
);

ProductList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductList;
