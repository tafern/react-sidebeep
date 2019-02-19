import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ContentWrapper, DayName } from './styles';

const ProductSchedule = () => (
  <ContentWrapper>
    <Row>
      <Col md={1}>
        <DayName>Senin:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Selasa:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Rabu:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Kamis:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Jumat:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Sabtu:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
      <Col md={1}>
        <DayName>Minggu:</DayName>
      </Col>
      <Col md={11}>04.00 - 23.59</Col>
    </Row>
  </ContentWrapper>
);

export default ProductSchedule;
