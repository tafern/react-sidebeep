import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import onlyNumber from '../../../modules/formOnlyNumber';
import {
  CartWrapper,
  ImageProduct,
  CartBoxWrapper,
  ProductTitle,
  ProductPrice,
  ProductLocationTitle,
  ProductLocationVisit,
  ProductLocationDescription,
  CartActionWrapper,
  IconRemove,
  InputGroup,
  CustomButton,
  InputQty,
} from './styles';

class CartItem extends React.Component {
  setValue(value) {
    this.props.onInputChange(this.props.id, value);
  }
  handleInputIncrement(e) {
    this.setValue(this.props.qty + 1);
    e.stopPropagation();
  }
  handleInputDecrement(e) {
    if (this.props.qty <= 0) {
      this.setValue(0);
    } else {
      this.setValue(this.props.qty - 1);
    }
    e.stopPropagation();
  }
  handleInputChange(e) {
    if (this.props.qty < 0) {
      this.setValue(0);
    } else {
      this.setValue(onlyNumber(e.target.value));
    }
  }
  render() {
    const { id, title, price, files, qty } = this.props;
    return (
      <CartWrapper className="clearfix">
        {files.map((item) => {
          if (item.refType === 'ProductCover') {
            return (
              <div key={item._id}>
                <ImageProduct className="mr-3" src={item.images[0].imgUrl} alt="Service" />
              </div>
            );
          }
          return null;
        })}
        <CartBoxWrapper>
          <ProductTitle to={`/product/${id}`}>{title}</ProductTitle>
          <ProductPrice>
            <NumberFormat
              value={price}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="IDR "
            />
          </ProductPrice>
          <ProductLocationTitle>Service Location</ProductLocationTitle>
          <ProductLocationVisit>Visit Sider Location</ProductLocationVisit>
          <ProductLocationDescription>
            Meet at meeting point [cek detail info]
          </ProductLocationDescription>
        </CartBoxWrapper>
        <CartActionWrapper>
          <IconRemove className="fa fa-trash" />
          <InputGroup>
            <CustomButton type="button" onClick={(e) => this.handleInputDecrement(e)}>
              -
            </CustomButton>
            <InputQty
              readOnly
              type="text"
              value={qty}
              onChange={(e) => this.handleInputChange(e)}
              onClick={(e) => e.stopPropagation()}
            />
            <CustomButton type="button" onClick={(e) => this.handleInputIncrement(e)}>
              +
            </CustomButton>
          </InputGroup>
        </CartActionWrapper>
      </CartWrapper>
    );
  }
}
CartItem.defaultProps = {
  id: '',
  title: '',
  price: '',
  files: [],
  qty: 0,
};
CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  files: PropTypes.array,
  qty: PropTypes.number,
  onInputChange: PropTypes.func.isRequired,
};

export default CartItem;
