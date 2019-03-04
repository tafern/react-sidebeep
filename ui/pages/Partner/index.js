import React from 'react';
import Styles from './styles';
import PartnerData from './Partner';

const partnerDataList = PartnerData;
const Partner = () => (
  <Styles.Wrapper>
    <Styles.Container>
      {partnerDataList.map((partner) => (
        <Styles.PartnerContainer key={partner.partner_id}>
          <Styles.PartnerWrapper>
            <a href={partner.partner_link} target="_blank" rel="noopener noreferrer">
              <Styles.PartnerImage src={partner.partner_image_url} alt={partner.partner_name} />
            </a>
          </Styles.PartnerWrapper>
        </Styles.PartnerContainer>
      ))}
    </Styles.Container>
  </Styles.Wrapper>
);

export default Partner;
