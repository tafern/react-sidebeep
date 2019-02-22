/* eslint-disable consistent-return */

import Products from '../../Products/Products';

const getProduct = (productId) => {
  try {
    return Products.findOne({ _id: productId });
  } catch (exception) {
    throw new Error(`[queryProductOwner.getProduct] ${exception.message}`);
  }
};

const validateOptions = (options) => {
  try {
    if (!options) throw new Error('options object is required.');
    if (!options.productId) throw new Error('options.productId is required.');
    if (!options.seller) throw new Error('options.seller is required.');
  } catch (exception) {
    throw new Error(`[queryProductOwner.validateOptions] ${exception.message}`);
  }
};

const queryProductOwner = (options) => {
  try {
    validateOptions(options);
    const product = getProduct(options.productId);
    if (!product) throw new Error('options object is required.');
    return product.userId === options.seller;
  } catch (exception) {
    throw new Error(`[queryProductOwner] ${exception.message}`);
  }
};

export default (options) => queryProductOwner(options);
