import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Styles from './styles';
import PartnerData from './Partner';

const partnerDataList = PartnerData;
const Partner = () => (
  <div>
    <Row>
      <Col md={12}>
        <Styles.Container>
          <Row>
            {partnerDataList.map((partner) => (
              <Col lg={2} key={partner.partner_id}>
                <Styles.PartnerWrapper>
                  <a href={partner.partner_link} target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ marginRight: 7, width: 160, height: 'auto' }}
                      src={partner.partner_image_url}
                      alt={partner.partner_name}
                    />
                  </a>
                </Styles.PartnerWrapper>
              </Col>
            ))}
          </Row>
        </Styles.Container>
      </Col>
    </Row>
  </div>
);

export default Partner;
