import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Styles from './styles';

class Campaign extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      direction: null,
    };
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  };

  render() {
    const { index, direction } = this.state;
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <Link to={`/campaign/${1}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner1.jpg" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/campaign/${2}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner2.jpg" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/campaign/${3}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner3.jpg" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/campaign/${4}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner4.jpg" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/campaign/${5}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner5.jpg" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/campaign/${6}`}>
            <Styles.CampaignImage className="d-block w-100" src="/banner6.png" alt="First slide" />
          </Link>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Campaign;
