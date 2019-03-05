import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  ContentWrapper,
  TitleWorkingHours,
  DayInactiveName,
  DayName,
  Time,
  NotedWorkingHours,
  TitleLocation,
} from './styles';

const ProductSchedule = () => (
  <ContentWrapper>
    <Row>
      <Col xs={6} md={6}>
        <TitleWorkingHours>Working Hours :</TitleWorkingHours>
        <div className="clearfix">
          <DayName>Senin</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Selasa</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Rabu</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Kamis</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Jumat</DayName>
          <Time>04.00 - 12.00 , 14.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayInactiveName>Sabtu</DayInactiveName>
        </div>
        <div className="clearfix">
          <DayInactiveName>Minggu</DayInactiveName>
        </div>
      </Col>
      <Col xs={6} md={6}>
        <TitleWorkingHours>Chat Time :</TitleWorkingHours>
        <div className="clearfix">
          <DayName>Senin</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Selasa</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Rabu</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Kamis</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayName>Jumat</DayName>
          <Time>04.00 - 23.59</Time>
        </div>
        <div className="clearfix">
          <DayInactiveName>Sabtu</DayInactiveName>
        </div>
        <div className="clearfix">
          <DayInactiveName>Minggu</DayInactiveName>
        </div>
      </Col>
      <Col md={12}>
        <NotedWorkingHours>
          <div>Notes:</div>
          <div>Setiap hari libur / tanggal merah tutup</div>
        </NotedWorkingHours>
      </Col>
      <Col md={12}>
        <TitleLocation>Service Location</TitleLocation>
      </Col>
    </Row>
  </ContentWrapper>
);

export default ProductSchedule;
