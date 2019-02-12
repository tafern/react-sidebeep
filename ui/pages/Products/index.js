import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Styles from './styles';
import { timeago } from '../../../modules/dates';
import ProductDetail from './ProductDetail';
import BlankState from '../../components/BlankState';

const settings = {
  dots: true,
  infinite: true,
  nextArrow: <Styles.ArrowIconNext src="/img/icons/sb-arrow-next.png" />,
  prevArrow: <Styles.ArrowIconPrev src="/img/icons/sb-arrow-prev.png" />,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};
const Products = ({ data }) => (
  <Styles.Wrapper>
    {data.products.length > 0 ? (
      <Slider {...settings}>
        {data.products.map((item) => (
          <div key={item._id}>
            <ProductDetail
              productName={item.name}
              updateAt={timeago(item.updatedAt)}
              productDescription={item.description}
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

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Products;
