import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FeedList from './Feed';
import { VideoContainer, VideoTitle, VideoDescription } from '../styles';

const feedDataList = FeedList;
const Feed = () => (
  <div>
    <Row>
      {feedDataList.map((item) => (
        <Col md={12} key={item.feed_id}>
          <Row>
            <Col md={5}>
              <VideoContainer className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title="sidebeep-promotion"
                  width="260"
                  height="15"
                  src={item.linkVideo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoContainer>
            </Col>
            <Col md={7}>
              <VideoTitle>{item.title}</VideoTitle>
              <VideoDescription>{item.description}</VideoDescription>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  </div>
);

export default Feed;
