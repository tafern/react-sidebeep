import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import Styles from './styles';

const Welcome = () => (
  <div>
    <Row>
      <Col md={6}>
        <Styles.Welcome>
          <img
            src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
            alt="Clever Beagle"
          />
          <h1>Capaign Promo</h1>
          <p>The Ultimate Boilerplate for Products.</p>
          <Styles.LinkCampaign to="/populer">Campaign</Styles.LinkCampaign>
          <div>
            <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
            <Button href="https://github.com/cleverbeagle/pup">
              <i className="fa fa-star" /> Star on GitHub
            </Button>
          </div>
          <footer>
            <p>
              Want to build your product with an experienced buddy?{' '}
              <a href="https://cleverbeagle.com/together?utm_source=pup&utm_medium=app&utm_campaign=oss">
                Check out Together by Clever Beagle
              </a>
              .
            </p>
          </footer>
        </Styles.Welcome>
      </Col>
      <Col md={6}>
        <Styles.Category>
          <img
            src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
            alt="Clever Beagle"
          />
          <h1>Category</h1>
          <p>Services Category</p>
        </Styles.Category>
      </Col>
    </Row>
    <Styles.ServicePopuler>
      <Link to="/populer">
        <h1>Service Populer</h1>
      </Link>
    </Styles.ServicePopuler>
    <Styles.News>
      <Link to="/news">
        <h1>News</h1>
      </Link>
    </Styles.News>
    <Styles.AllServices>
      <Link to="/services">
        <h1>All Services</h1>
      </Link>
    </Styles.AllServices>
  </div>
);

export default Welcome;
