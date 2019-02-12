import React from 'react';
import SEO from '../../components/SEO';
import parseMarkdown from '../../../modules/parseMarkdown';
import ProductData from './Product';
import Styles from './styles';

const product = ProductData;
const ViewProduct = () => (
  <React.Fragment>
    <Styles.StyledViewProduct>
      <SEO
        title={product && product.title}
        description={product && product.description}
        url={`product/view/${product && product.id}`}
        contentType="article"
        published={product && product.published_at}
        created={product && product.created_at}
        twitter="clvrbgl"
      />
      <React.Fragment>
        <h1>{product && product.title}</h1>
        <Styles.ProductBody
          dangerouslySetInnerHTML={{
            __html: parseMarkdown(product && product.description),
          }}
        />
      </React.Fragment>
    </Styles.StyledViewProduct>
  </React.Fragment>
);

export default ViewProduct;
