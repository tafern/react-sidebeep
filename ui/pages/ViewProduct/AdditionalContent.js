import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, FilterTabWrapper, FilterTab } from './styles';
import ProductInformation from './ProductInformation/index';
import ProductReview from './ProductReview/index';
import ProductDiscussion from './ProductDiscussion';
import ProductSchedule from './ProductSchedule/index';
import ProductPortfolio from './ProductPortfolio/index';

class AdditionalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: 1,
      openReview: 'All',
      bColorReviewAll: true,
      bColorReviewWithPhoto: false,
      openDiscussion: 'Discussion',
      boxDiscuss: true,
      boxFaq: false,
    };
  }
  onSetTab = (key) => {
    this.setState({ eventKey: key });
  };
  onSetTabReview = (e, tab, active) => {
    if (tab === 'All') {
      this.setState({
        openReview: tab,
        bColorReviewAll: active,
        bColorReviewWithPhoto: false,
      });
    } else {
      this.setState({
        openReview: tab,
        bColorReviewAll: false,
        bColorReviewWithPhoto: active,
      });
    }
  };
  onSetTabDiscussion = (e, tab, active) => {
    if (tab === 'Discussion') {
      this.setState({
        openDiscussion: tab,
        boxDiscuss: active,
        boxFaq: false,
      });
    } else {
      this.setState({
        openDiscussion: tab,
        boxDiscuss: false,
        boxFaq: active,
      });
    }
  };
  render() {
    const { description, portfolio } = this.props;
    return (
      <ContentWrapper>
        <FilterTabWrapper
          activeKey={this.state.eventKey}
          onSelect={this.onSetTab}
          id="noanim-tab-example"
        >
          <FilterTab eventKey={1} title="Detail Information">
            <ProductInformation desc={description} />
          </FilterTab>
          <FilterTab eventKey={2} title="Gallery">
            <ProductPortfolio portfolio={portfolio} />
          </FilterTab>
          <FilterTab eventKey={3} title="Working Hours">
            <ProductSchedule />
          </FilterTab>
          <FilterTab eventKey={4} title="Review (7)">
            <ProductReview
              onHandleReview={this.onSetTabReview}
              openReview={this.state.openReview}
              bColorReviewAll={this.state.bColorReviewAll}
              bColorReviewWithPhoto={this.state.bColorReviewWithPhoto}
            />
          </FilterTab>
          <FilterTab eventKey={5} title="Discussion (5)">
            <ProductDiscussion
              onHandleDiscussion={this.onSetTabDiscussion}
              openDiscussion={this.state.openDiscussion}
              boxDiscuss={this.state.boxDiscuss}
              boxFaq={this.state.boxFaq}
            />
          </FilterTab>
        </FilterTabWrapper>
      </ContentWrapper>
    );
  }
}

AdditionalContent.propTypes = {
  description: PropTypes.string.isRequired,
  portfolio: PropTypes.array.isRequired,
};

export default AdditionalContent;
