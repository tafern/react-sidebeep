import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import BlankState from '../../components/BlankState';
import { CartList } from './styles';

class CartForm extends React.Component {
  handleMenuChange = (menuId, value) => {
    const { trxs } = this.props;

    const existingSelectedMenu = trxs.filter((menu) => menu._id === menuId)[0];

    if (existingSelectedMenu) {
      let updatedSelectedServiceMenu = trxs;
      if (value > 0) {
        updatedSelectedServiceMenu = trxs.map((menu) => {
          if (menu._id === menuId) {
            return {
              ...menu,
              qty: value,
            };
          }
          return menu;
        });
      } else {
        updatedSelectedServiceMenu = trxs.filter((menu) => menu._id !== menuId);
      }
      console.log('updatedSelected', updatedSelectedServiceMenu);
      // handleMenu(updatedSelectedServiceMenu);
    } else if (value > 0) {
      const newSelectedServiceMenu = trxs.filter((menu) => menu._id === menuId)[0];
      newSelectedServiceMenu.qty = value;
      console.log('new', newSelectedServiceMenu);
      // handleMenu([...trxs, newSelectedServiceMenu]);
    }
  };

  render() {
    const { data, trxs } = this.props;
    console.log('data', data);
    console.log('trxs', trxs);
    return (
      <form>
        {data.trxs !== undefined && data.trxs.length > 0 ? (
          <CartList>
            {trxs.map((item) => (
              <CartItem
                key={item._id}
                id={item._id}
                image={item.image}
                title={item.title}
                price={item.price}
                qty={item.qty}
                onInputChange={this.handleMenuChange}
              />
            ))}
          </CartList>
        ) : (
          <BlankState
            icon={{ style: 'solid', symbol: 'file-alt' }}
            title="Empty Services, Please Add to Cart of Service"
            subtitle="Add your first product by clicking the button below."
          />
        )}
      </form>
    );
  }
}
CartForm.defaultProps = {
  data: {},
  trxs: [],
};
CartForm.propTypes = {
  data: PropTypes.object,
  trxs: PropTypes.array,
};
export default CartForm;
