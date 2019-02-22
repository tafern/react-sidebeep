import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { CartList } from './styles';

class CartForm extends React.Component {
  handleMenuChange = (menuId, value) => {
    const { data } = this.props;

    const existingSelectedMenu = data.filter((menu) => menu._id === menuId)[0];

    if (existingSelectedMenu) {
      let updatedSelectedServiceMenu = data;
      if (value > 0) {
        updatedSelectedServiceMenu = data.map((menu) => {
          if (menu._id === menuId) {
            return {
              ...menu,
              qty: value,
            };
          }
          return menu;
        });
      } else {
        updatedSelectedServiceMenu = data.filter((menu) => menu._id !== menuId);
      }
      console.log('updatedSelected', updatedSelectedServiceMenu);
      // handleMenu(updatedSelectedServiceMenu);
    } else if (value > 0) {
      const newSelectedServiceMenu = data.filter((menu) => menu._id === menuId)[0];
      newSelectedServiceMenu.qty = value;
      console.log('new', newSelectedServiceMenu);
      // handleMenu([...data, newSelectedServiceMenu]);
    }
  };

  render() {
    const { data } = this.props;
    return (
      <form>
        <CartList>
          {data.trxs[0].trxItems.map((item) => (
            <CartItem
              key={item._id}
              id={item.product._id}
              files={item.product.files}
              title={item.product.name}
              price={item.product.price}
              qty={item.qty}
              onInputChange={this.handleMenuChange}
            />
          ))}
        </CartList>
      </form>
    );
  }
}
CartForm.defaultProps = {
  data: {},
};
CartForm.propTypes = {
  data: PropTypes.object,
};
export default CartForm;
