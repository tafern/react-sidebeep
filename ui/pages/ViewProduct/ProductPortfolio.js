import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, PortfolioImage, BlockGrid } from './styles';
// import PortfolioModal from './PortfolioModal';

class ProductPortfolio extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showPortfolioModal: false,
  //     portfolioList: [],
  //     selectedPortfolio: {},
  //     portfolioMetaState: {},
  //     slideIndex: 0,
  //   };
  // }

  handleShowModal = (e, portfolio, data, index, portfolioMeta) => {
    console.log('portFolioMeta', portfolioMeta);
    // this.setState({
    //   selectedPortfolio: portfolio,
    //   portfolioList: data,
    //   slideIndex: index,
    //   portfolioMetaState: portfolioMeta,
    //   showPortfolioModal: true,
    // });
  };
  // handleHideModal = () => {
  //   if (this.state.showPortfolioModal) {
  //     this.setState({
  //       portfolioList: [],
  //       selectedPortfolio: {},
  //       slideIndex: 0,
  //       portfolioMetaState: {},
  //       showPortfolioModal: false,
  //     });
  //   }
  // };

  render() {
    const { portfolio } = this.props;
    return (
      <ContentWrapper>
        {portfolio.map((item, index) => {
          if (item.refType === 'Portfolio') {
            return (
              <BlockGrid
                key={item._id}
                onClick={(e) => this.handleShowModal(e, item, portfolio, index, 3)}
              >
                <PortfolioImage src={item.images[0].imgUrl} alt="sidebeep service" />
              </BlockGrid>
            );
          }
          return null;
        })}
        {/* <PortfolioModal
          showModal={showPortfolioModal}
          close={this.handleHideModal}
          data={selectedPortfolio}
          portfolioList={portfolioList}
          portfolioMeta={portfolioMetaState}
          slideIndex={slideIndex}
        /> */}
      </ContentWrapper>
    );
  }
}
ProductPortfolio.propTypes = {
  portfolio: PropTypes.string.isRequired,
};
export default ProductPortfolio;
