import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ContentWrapper, FilterTabWrapper, FilterTab } from './styles';
import ProductInformation from './ProductInformation';
import ProductReview from './ProductReview';
import ProductDiscussion from './ProductDiscussion';
import ProductSchedule from './ProductSchedule';
import ProductPortfolio from './ProductPortfolio';

class AdditionalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: 1,
    };
  }
  onSetTab = (key) => {
    this.setState({ eventKey: key });
  };
  render() {
    return (
      <ContentWrapper>
        <FilterTabWrapper
          activeKey={this.state.eventKey}
          onSelect={this.onSetTab}
          id="noanim-tab-example"
        >
          <FilterTab eventKey={1} title="Detail Information">
            <Row>
              <Col sm={12}>
                <ProductInformation />
              </Col>
            </Row>
          </FilterTab>
          <FilterTab eventKey={2} title="Gallery">
            <Row>
              <Col xs={12}>
                <ProductPortfolio />
              </Col>
            </Row>
          </FilterTab>
          <FilterTab eventKey={3} title="Working Hours">
            <Row>
              <Col xs={12}>
                <ProductSchedule />
              </Col>
            </Row>
          </FilterTab>
          <FilterTab eventKey={4} title="Review (23)">
            <Row>
              <Col xs={12}>
                <ProductReview />
              </Col>
            </Row>
          </FilterTab>
          <FilterTab eventKey={5} title="Discussion (40)">
            <Row>
              <Col xs={12}>
                <ProductDiscussion />
              </Col>
            </Row>
          </FilterTab>
        </FilterTabWrapper>
      </ContentWrapper>
    );
  }
}

export default AdditionalContent;
