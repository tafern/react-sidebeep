import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, PortfolioImage, BlockGrid } from '../styles';
import PortfolioModal from './PortfolioModal';

class ProductPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolioModal: false,
      portfolioList: [],
      slideIndex: 0,
    };
  }

  handleShowModal = (e, data, index) => {
    this.setState({
      portfolioList: data,
      slideIndex: index,
      showPortfolioModal: true,
    });
  };
  handleHideModal = () => {
    if (this.state.showPortfolioModal) {
      this.setState({
        portfolioList: [],
        slideIndex: 0,
        showPortfolioModal: false,
      });
    }
  };

  render() {
    const { portfolio } = this.props;
    const { showPortfolioModal, portfolioList, slideIndex } = this.state;
    return (
      <ContentWrapper>
        <PortfolioModal
          showModal={showPortfolioModal}
          close={this.handleHideModal}
          portfolioList={portfolioList}
          slideIndex={slideIndex}
        />
        {portfolio.map((item, index) => {
          if (item.refType === 'Portfolio') {
            return (
              <BlockGrid key={item._id} onClick={(e) => this.handleShowModal(e, portfolio, index)}>
                <PortfolioImage src={item.images[index].imgUrl} alt="sidebeep service" />
              </BlockGrid>
            );
          }
          return null;
        })}
      </ContentWrapper>
    );
  }
}
ProductPortfolio.propTypes = {
  portfolio: PropTypes.string.isRequired,
};
export default ProductPortfolio;
