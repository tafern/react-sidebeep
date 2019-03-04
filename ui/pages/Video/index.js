import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { VideoContainer, VideoTitle, VideoDescription } from './styles';

const Video = () => (
  <Row>
    <Col md={6}>
      <VideoContainer className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="sidebeep-promotion"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2Zx-lFdS4ws"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Col>
    <Col md={6}>
      <VideoTitle>The Video Mau Kemana Sih Trip Pulau</VideoTitle>
      <VideoDescription>
        Seperti apa cerita inspiratif di balik bisnis yang sedang berkembang pesat sekarang,
        langsung saja cek video kita di samping.
      </VideoDescription>
    </Col>
  </Row>
);

export default Video;
