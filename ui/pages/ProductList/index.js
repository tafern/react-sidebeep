import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Styles from './styles';
import ProductItem from '../../components/ProductItem';
import BlankState from '../../components/BlankState';

function ProductList(data) {
  const settings = {
    dots: false,
    speed: 500,
    arrows: true,
    nextArrow: <Styles.ArrowIconNext src="/img/icons/next-button-banner.png" />,
    prevArrow: <Styles.ArrowIconPrev src="/img/icons/back-button-banner.png" />,
    autoplay: false,
    infinite: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    slidesToShow: data.isSmall ? 6 : 4,
    slidesToScroll: data.isSmall ? 6 : 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 548,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <Styles.Wrapper>
      {data.data.products !== undefined ? (
        <Slider {...settings}>
          {data.data.products.map((item) => (
            <div key={item._id}>
              <ProductItem
                productName={item.name}
                price={item.price}
                orderCount={item.orderCount}
                viewCount={item.viewCount}
                org={item.user}
                files={item.files}
                id={item._id}
                isSmall={data.isSmall}
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
}

ProductList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductList;
