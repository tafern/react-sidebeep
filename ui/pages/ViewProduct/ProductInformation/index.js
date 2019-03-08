/* eslint-disable */
import React from 'react';
import NumberFormat from 'react-number-format';
import {
  ContentWrapper,
  ContentContainer,
  TitleDescription,
  Description,
  PointDescripionWrapper,
  PointDescripion,
  AdditionalWrapper,
  AdditionalTitle,
  AdditionalPrice,
  AdditionalDescription,
} from '../styles';
import DetailInformation from '../Json/DetailInformation';

const information = DetailInformation.detailInfo;
const additional = DetailInformation.additionalServices;
const ProductInformation = () => (
  <ContentWrapper>
    {information.map((input) => (
      <ContentContainer key={input.id}>
        <TitleDescription>{input.title}</TitleDescription>
        <Description>
          {input.description
            ? input.description
            : input.pointDescription.map((item) => (
                <PointDescripionWrapper key={item.id}>
                  <PointDescripion>{item.description}</PointDescripion>
                </PointDescripionWrapper>
              ))}
        </Description>
      </ContentContainer>
    ))}
    <ContentContainer>
      <TitleDescription>Additional Services</TitleDescription>
      {additional.map((add) => (
        <AdditionalWrapper key={add.id}>
          <div className="clearfix">
            <AdditionalTitle>{add.title} :</AdditionalTitle>
            <AdditionalPrice>
              <NumberFormat
                value={add.price}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="IDR "
              />
            </AdditionalPrice>
          </div>
          <AdditionalDescription>{add.description}</AdditionalDescription>
        </AdditionalWrapper>
      ))}
    </ContentContainer>
  </ContentWrapper>
);
export default ProductInformation;
