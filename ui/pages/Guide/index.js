import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Styles from './styles';

const Guide = () => (
  <Styles.Guide>
    <Styles.ContentWrapper>
      <Row>
        <Col md={5}>
          <Styles.ImageGuide src="/img/beeper-guide.png" className="img img-responsive" />
          <Styles.CustomButton to="https://help.sidebeep.com/beeper_guides.php" target="_BLANK">
            PENCARI JASA (BEEPER)
          </Styles.CustomButton>
        </Col>
        <Col md={2}>
          <Styles.ImageLogo src="/img/sidebeep_logo.png" className="img img-responsive" />
        </Col>
        <Col md={5}>
          <Styles.ImageGuide src="/img/sider-guide.png" className="img img-responsive" />
          <Styles.CustomButton to="https://help.sidebeep.com/sider_guides.php" target="_BLANK">
            PENYEDIA JASA (SIDER)
          </Styles.CustomButton>
        </Col>
      </Row>
    </Styles.ContentWrapper>
    <Styles.ContentWrapper>
      <Row>
        <Col md={12}>
          <Link to="/guide/fix-and-flex">
            <Styles.ImageProductType src="/img/fix_and_flex.svg" className="img img-responsive" />
          </Link>
        </Col>
      </Row>
    </Styles.ContentWrapper>
  </Styles.Guide>
);

export default Guide;
