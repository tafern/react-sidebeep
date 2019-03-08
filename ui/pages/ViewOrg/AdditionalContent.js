import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, FilterTabWrapper, FilterTab } from './styles';
import AllProducts from './AllProducts';
import Review from './ProductReview';
import Feed from './Feed';

class AdditionalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: 1,
      openReview: 'All',
      bColorReviewAll: true,
      bColorReviewWithPhoto: false,
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
  render() {
    const { data } = this.props;
    return (
      <ContentWrapper>
        <FilterTabWrapper
          activeKey={this.state.eventKey}
          onSelect={this.onSetTab}
          id="noanim-tab-example"
        >
          <FilterTab eventKey={1} title="All Services (15)">
            <AllProducts data={data} />
          </FilterTab>
          <FilterTab eventKey={2} title="Reviews (5)">
            <Review
              onHandleReview={this.onSetTabReview}
              openReview={this.state.openReview}
              bColorReviewAll={this.state.bColorReviewAll}
              bColorReviewWithPhoto={this.state.bColorReviewWithPhoto}
            />
          </FilterTab>
          <FilterTab eventKey={3} title="Feed (8)">
            <Feed />
          </FilterTab>
        </FilterTabWrapper>
      </ContentWrapper>
    );
  }
}

AdditionalContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AdditionalContent;
